import { createSelector,createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FetchStatusCode } from '@/api'
import { IgnoredFile } from '@/domain/ignoreFile'
import { PathData } from '@/domain/pullRequest'

import { RootState } from '.'

interface ResponseData<T> {
  value: T
  fetchState: FetchStatusCode
}
interface SettingInfoState {
  tokenState: FetchStatusCode
  path: ResponseData<PathData>
  ignoreFileList: ResponseData<IgnoredFile[]>
}

const initialState: SettingInfoState = {
  tokenState: FetchStatusCode.DEFAULT,
  path: {
    value: {
      orgName: '',
      repository: '',
      prNumber: '',
    },
    fetchState: FetchStatusCode.LOADING,
  },
  ignoreFileList: {
    value: [
      {ignore: true, fileName: 'package-lock.json'},
      {ignore: true, fileName: 'yarn.lock'},
    ],
    fetchState: FetchStatusCode.LOADING,
  },
}

const reducers = {
  checkTokenExist: (state: SettingInfoState) => {
    // empty action
  },
  checkTokenExistSuccess: (
    state: SettingInfoState,
    { payload }: PayloadAction<FetchStatusCode>,
  ) => {
    state.tokenState = payload
  },
  saveToken: (state: SettingInfoState, { payload }: PayloadAction<string>) => {
    // empty action
  },
  requestPath: (state: SettingInfoState) => {
    state.path.fetchState = FetchStatusCode.LOADING
  },
  setPathSuccess: (
    state: SettingInfoState,
    { payload }: PayloadAction<ResponseData<PathData>>,
  ) => {
    state.path.value = payload.value
    state.path.fetchState = payload.fetchState
  },
  setPathFail: (state: SettingInfoState, { payload }: PayloadAction<FetchStatusCode>) => {
    state.path.value = initialState.path.value
    state.path.fetchState = payload
  },
  syncIgnoreFileList: (state: SettingInfoState) => {
    state.ignoreFileList.fetchState = FetchStatusCode.LOADING
  },
  setIgnoreFileListSuccess: (state: SettingInfoState, { payload }: PayloadAction<IgnoredFile[]>) => {
    state.ignoreFileList.value = payload
  },
  setIgnoreFileListFail: (state: SettingInfoState, { payload }: PayloadAction<FetchStatusCode>) => {
    state.ignoreFileList.value = initialState.ignoreFileList.value
    state.ignoreFileList.fetchState = payload
  },
  addIgnoreFile: (state: SettingInfoState, { payload }: PayloadAction<IgnoredFile>) => {
    state.ignoreFileList.value.push(payload)
  },
  removeIgnoreFile: (state: SettingInfoState, { payload }: PayloadAction<string>) => {
    // empty action
  },
}

const sliceName = 'userInfo'
const slice = createSlice({
  name: sliceName,
  initialState,
  reducers,
})
const settingState = (state: RootState) => state[USER_INFO]
const getIsPullRequestPath = (state: SettingInfoState) => (
  state.path.fetchState === FetchStatusCode.OK
)
const getPathValue = (state: SettingInfoState) => state.path.value
const getIgnoreFileList = (state: SettingInfoState) => {
  return state.ignoreFileList.value
}
const getIsTokenExist = (state: SettingInfoState) => {
  return state.tokenState === FetchStatusCode.OK
}

export const settingSelector = {
  isTokenExist: createSelector([settingState], getIsTokenExist),
  path: createSelector([settingState], getPathValue),
  ignoreFileList: createSelector([settingState], getIgnoreFileList),
  isPullRequestPath: createSelector([settingState], getIsPullRequestPath),
}

export const USER_INFO = sliceName
export const settingReducer = slice.reducer
export const settingActions = slice.actions
