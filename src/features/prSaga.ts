import { PayloadAction } from '@reduxjs/toolkit'
import { select, takeLatest } from 'redux-saga/effects'

import { tokenSelector } from '@/features/settingSlice'

import { prActions } from './prSlice'

function* fetchPullRequestFiles({payload}: PayloadAction<string>) {
  // ['', 'SoYoung210', 'real-diff', 'pull', '1']
  const pathName = payload.split('/')
  // TODO: Refactor
  const parsedPathName = {
    orgName: pathName[1],
    repository: pathName[2],
    prNumber: pathName[4],
  }
  const { token } = yield select(tokenSelector.token)
  console.log('parsedPathName')

}

export function* watchFetchPullRequest() {
  yield takeLatest(
    prActions.fetch,
    fetchPullRequestFiles,
  )
}
