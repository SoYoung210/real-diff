import { createSelector,createSlice, PayloadAction } from '@reduxjs/toolkit'

import { localStorageUtil, STORAGE_KEY } from '@/utils/localStorage'

import { RootState } from '.'

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
const settingState = (state: RootState) => state[USER_INFO]
const getToken = (state: SettingInfoState) => {
  // if (state.userInfo.token === '') {
  //   return {
  //     isEmpty: false,
  //     token: '',
  //   }
  // }

  return {
    // isEmpty: false,
    token: state.userInfo.token,
  }
}
export const tokenSelector = {
  token: createSelector([settingState], getToken),
}

export const USER_INFO = sliceName
export const userInfoReducer = slice.reducer
export const userInfoActions = slice.actions
