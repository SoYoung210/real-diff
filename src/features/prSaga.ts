import { PayloadAction } from '@reduxjs/toolkit'
import { call,put,select, takeLatest } from 'redux-saga/effects'

import { pullRequestAPI } from '@/api'
import { PullRequestData } from '@/domain/pullRequest'
import { tokenSelector } from '@/features/settingSlice'
import { redirect } from '@/utils/history'
import { filterIgnoredFiles } from '@/utils/ignoredFileFilter'

import { prActions } from './prSlice'

function* fetchPullRequestFiles({payload}: PayloadAction<string>) {
  // ['', 'SoYoung210', 'real-diff', 'pull', '1']
  try {
    const pathName = payload.split('/')
    // TODO: Refactor
    // const parsedPathName = {
    //   orgName: pathName[1],
    //   repository: pathName[2],
    //   prNumber: pathName[4],
    // }
    // FIXME: Test 환경 값에 따라 목데이터 분리하기
    const parsedPathName = {
      orgName: 'SoYoung210',
      repository: 'real-diff',
      prNumber: 1,
    }
    const { orgName, repository, prNumber } = parsedPathName
    const token = yield select(tokenSelector.token)

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
    console.log('@@ Data', result)

    const filterFiles = filterIgnoredFiles([
      'package-lock.json',
      'yarn.lock',
    ])

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
    console.log('@@ totalChangedLines', totalAdditions)
    console.log('@@ ignoredList', ignoredAdditions)
    console.log('@@ result', realDiff)

    yield put(prActions.setRealDiff(realDiff))
  } catch(error) {
    yield call(redirect, '/settings')
  }
}

export function* watchFetchPullRequest() {
  yield takeLatest(
    prActions.fetch,
    fetchPullRequestFiles,
  )
}
