import { PayloadAction } from '@reduxjs/toolkit'
import { call,select, takeLatest } from 'redux-saga/effects'

import { pullRequestAPI } from '@/api'
import { tokenSelector } from '@/features/settingSlice'

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

  const data = yield call(
    pullRequestAPI,
    token,
    `/repos/${orgName}/${repository}/pulls/${prNumber}/files`,
  )
  console.log('@@ Data', data)
}

export function* watchFetchPullRequest() {
  yield takeLatest(
    prActions.fetch,
    fetchPullRequestFiles,
  )
}
