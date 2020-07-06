import { PayloadAction } from '@reduxjs/toolkit'
import { select } from 'redux-saga/effects'

import { tokenSelector } from '@/features/settingSlice'

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

}
