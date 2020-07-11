import { PayloadAction } from '@reduxjs/toolkit'
import { call,takeLatest } from 'redux-saga/effects'

import { redirect } from '@/utils/history'
import { localStorageUtil, STORAGE_KEY } from '@/utils/localStorage'

import { userInfoActions,UserInfoInterface } from './settingSlice'
function* saveUserToken({payload}: PayloadAction<UserInfoInterface>) {
  yield localStorageUtil.saveData(
    STORAGE_KEY.USER_INFO,
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
