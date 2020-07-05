import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FetchStatusCode } from '@/api'

interface PullRequestFilesData {
  filename: string;
  status: string;
  changes: string; // diff line
}

interface PullRequestFilesState {
  data: PullRequestFilesData[];
  fetchState: FetchStatusCode
}

const initialState: PullRequestFilesState = {
  data: [],
  fetchState: FetchStatusCode.DEFAULT,
}

const reducers = {
  fetch: (state: PullRequestFilesState, { payload }: PayloadAction<string>) => {
    state.fetchState = FetchStatusCode.LOADING
  },
  success: (state: PullRequestFilesState, { payload }: PayloadAction<PullRequestFilesData[]>) => {
    state.data = payload
    state.fetchState = FetchStatusCode.OK
  },
  fail: (state: PullRequestFilesState, { payload }: PayloadAction<FetchStatusCode>) => {
    state.data = initialState.data
    state.fetchState = payload
  },
}

const sliceName = 'pullRequestFiles'
const slice = createSlice({
  name: sliceName,
  initialState,
  reducers,
})

export const PR_SLICE = sliceName
export const prReducer = slice.reducer
export const prActions = slice.actions
