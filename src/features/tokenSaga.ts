import { PayloadAction } from '@reduxjs/toolkit'
import { takeLatest } from 'redux-saga/effects'

import { localStorageUtil, STORAGE_KEY } from '@/utils/localStorage'

import { userInfoActions,UserInfoInterface } from './tokenSlice'
function* saveUserToken({payload}: PayloadAction<UserInfoInterface>) {
  yield localStorageUtil.saveData(
    STORAGE_KEY.USER_INFO,
    payload,
  )
}

export function* watchSaveUserToken() {
  yield takeLatest(
    userInfoActions.saveData,
    saveUserToken,
  )
}
