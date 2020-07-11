import { PayloadAction } from '@reduxjs/toolkit'
import { call,takeLatest } from 'redux-saga/effects'

import { redirect } from '@/utils/history'
import { localStorageUtil, STORAGE_KEY } from '@/utils/storage'

import { userInfoActions } from './settingSlice'
function* saveUserToken({payload}: PayloadAction<string>) {
  yield localStorageUtil.saveData(
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
