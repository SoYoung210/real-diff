import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { localStorageUtil, STORAGE_KEY } from '@/utils/localStorage'

export interface UserInfoInterface {
  name?: string
  token?: string
}

interface SettingInfoState {
  userInfo: UserInfoInterface
}

const userInfoFromStorage =
  localStorageUtil.getData<UserInfoInterface>(
    STORAGE_KEY.USER_INFO,
  )

const initialState: SettingInfoState = {
  userInfo: userInfoFromStorage || { name: '', token: '' },
}

const reducers = {
  // TODO: Refactor, payload를 state로 관리하지 않아도 될듯.
  saveData: (state: SettingInfoState, { payload }: PayloadAction<UserInfoInterface>) => {
    state.userInfo = payload
  },
}

const sliceName = 'userInfo'
const slice = createSlice({
  name: sliceName,
  initialState,
  reducers,
})

export const USER_INFO = sliceName
export const userInfoReducer = slice.reducer
export const userInfoActions = slice.actions
