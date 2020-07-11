import { createSelector,createSlice, PayloadAction } from '@reduxjs/toolkit'

import { STORAGE_KEY,storageUtil } from '@/utils/storage'

import { RootState } from '.'

interface SettingInfoState {
  token: string
}

// TODO: init할때 띄워야되네..
const tokenFromStorage =
  storageUtil.getData<string>(
    STORAGE_KEY.GITHUB_TOKEN,
  )

const initialState: SettingInfoState = {
  token: tokenFromStorage || '',
}

const reducers = {
  // TODO: Refactor, payload를 state로 관리하지 않아도 될듯.
  saveData: (state: SettingInfoState, { payload }: PayloadAction<string>) => {
    state.token = payload
  },
}

const sliceName = 'userInfo'
const slice = createSlice({
  name: sliceName,
  initialState,
  reducers,
})
const settingState = (state: RootState) => state[USER_INFO]
const getToken = (state: SettingInfoState) => state.token

export const tokenSelector = {
  token: createSelector([settingState], getToken),
}

export const USER_INFO = sliceName
export const userInfoReducer = slice.reducer
export const userInfoActions = slice.actions
