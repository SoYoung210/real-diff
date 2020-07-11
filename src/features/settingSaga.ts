import { PayloadAction } from '@reduxjs/toolkit'
import { call,takeLatest } from 'redux-saga/effects'

import { redirect } from '@/utils/history'
import { STORAGE_KEY,storageUtil } from '@/utils/storage'

import { userInfoActions } from './settingSlice'

function* saveUserToken({payload}: PayloadAction<string>) {
  yield call(
    storageUtil.saveData,
    STORAGE_KEY.GITHUB_TOKEN,
    payload,
  )

  yield call(redirect, '/')
}

export function* watchSaveUserToken() {
  yield takeLatest(
    userInfoActions.saveData,
    saveUserToken,
  )
}
