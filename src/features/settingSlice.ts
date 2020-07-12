import { createSelector,createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FetchStatusCode } from '@/api'
import { STORAGE_KEY,storageUtil } from '@/utils/storage'

import { RootState } from '.'

interface PathData {
  value: string
  fetchState: FetchStatusCode
}
interface SettingInfoState {
  token: string
  path: PathData
}

// TODO: init할때 띄워야되네..
const tokenFromStorage =
  storageUtil.getData<string>(
    STORAGE_KEY.GITHUB_TOKEN,
  )

const initialState: SettingInfoState = {
  token: tokenFromStorage || '',
  path: {
    value: '',
    fetchState: FetchStatusCode.LOADING,
  },
}

const reducers = {
  // TODO: Refactor, payload를 state로 관리하지 않아도 될듯.
  saveData: (state: SettingInfoState, { payload }: PayloadAction<string>) => {
    state.token = payload
  },
  requestPath: (state: SettingInfoState) => {
    state.path.fetchState = FetchStatusCode.LOADING
  },
  setPath: (state: SettingInfoState, { payload }: PayloadAction<PathData>) => {
    state.path = payload
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
const getPath = (state: SettingInfoState) => state.path

export const settingSelector = {
  token: createSelector([settingState], getToken),
  path: createSelector([settingState], getPath),
}

export const USER_INFO = sliceName
export const settingReducer = slice.reducer
export const settingActions = slice.actions
