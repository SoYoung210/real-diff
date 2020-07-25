import { call,put,select, takeLatest } from 'redux-saga/effects'

import { pullRequestAPI } from '@/api'
import { IgnoredFile } from '@/domain/ignoreFile'
import { PullRequestData } from '@/domain/pullRequest'
import { settingSelector } from '@/features/settingSlice'
import { redirect } from '@/utils/history'
import { filterIgnoredFiles } from '@/utils/ignoredFileFilter'
import { STORAGE_KEY,storageUtil } from '@/utils/storage'

import { prActions } from './prSlice'

function* fetchPullRequestFiles() {
  try {
    const { orgName, repository, prNumber } = yield select(
      settingSelector.path,
    )
    const token = yield call(
      storageUtil.getData,
      STORAGE_KEY.GITHUB_TOKEN,
    )

    let page = 1
    let result: PullRequestData[] = []

    while (true) {
      const data: PullRequestData[] = yield call(
        pullRequestAPI,
        token,
        `/repos/${orgName}/${repository}/pulls/${prNumber}/files?page=${page}`,
      )
      if (data.length === 0) {
        break
      }
      result.push(...data)
      page = page + 1
    }

    const {
      totalAdditions,
      totalDeletions,
    } = result.reduce((acc, curr) => {
      return {
        totalAdditions: acc.totalAdditions + curr.additions,
        totalDeletions: acc.totalDeletions + curr.deletions,
      }
    }, {
      totalAdditions: 0,
      totalDeletions:0,
    })
    const ignoreFileList: IgnoredFile[] = yield select(
      settingSelector.ignoreFileList,
    )

    const filterFiles = filterIgnoredFiles(ignoreFileList.map(file => file.fileName))
    const {
      ignoredAdditions,
      ignoredDeletions,
    } = result
      .filter(fileInfo => filterFiles(fileInfo.filename))
      .reduce((acc, curr) => {
        return {
          ignoredAdditions: acc.ignoredAdditions + curr.additions,
          ignoredDeletions: acc.ignoredDeletions + curr.deletions,
        }
      }, {
        ignoredAdditions: 0,
        ignoredDeletions:0,
      })
    const realDiff = {
      additions: totalAdditions - ignoredAdditions,
      deletions: totalDeletions - ignoredDeletions,
    }

    yield put(prActions.setRealDiff(realDiff))
  } catch(error) {
    console.log('@@@ error !!!!',error)
    yield call(redirect, '/settings')
  }
}

export function* watchFetchPullRequest() {
  yield takeLatest(
    prActions.fetch,
    fetchPullRequestFiles,
  )
}
