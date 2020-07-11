import { PayloadAction } from '@reduxjs/toolkit'
import { call,put,select, takeLatest } from 'redux-saga/effects'

import { pullRequestAPI } from '@/api'
import { PullRequestInfo } from '@/domain/pullRequest'
import { tokenSelector } from '@/features/settingSlice'
import { filterIgnoredFiles } from '@/utils/ignoredFileFilter'

import { prActions } from './prSlice'

function* fetchPullRequestFiles({payload}: PayloadAction<string>) {
  // ['', 'SoYoung210', 'real-diff', 'pull', '1']
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
  const { token } = yield select(tokenSelector.token)

  const data: PullRequestInfo[] = yield call(
    pullRequestAPI,
    token,
    `/repos/${orgName}/${repository}/pulls/${prNumber}/files`,
  )

  const totalChangedLines = data.reduce((acc, curr) => {
    return acc + curr.changes
  }, 0)
  console.log('@@ Data', data)

  const filterFiles = filterIgnoredFiles([
    'package-lock.json',
    'yarn.lock',
  ])

  const ignoredList = data
    .filter(fileInfo => filterFiles(fileInfo.filename))
    .reduce((acc, curr) => {
      return acc + curr.changes
    }, 0)
  const result = totalChangedLines - ignoredList
  console.log('@@ totalChangedLines', totalChangedLines)
  console.log('@@ ignoredList', ignoredList)
  console.log('@@ result', result)

  yield put(prActions.setRealDiff(result))
}

export function* watchFetchPullRequest() {
  yield takeLatest(
    prActions.fetch,
    fetchPullRequestFiles,
  )
}
