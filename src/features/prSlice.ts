import { createSelector,createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FetchStatusCode } from '@/api'
import { RealDiffData } from '@/domain/pullRequest'

import { RootState } from '.'

interface PullRequestFilesData {
  filename: string;
  status: string;
  changes: string; // diff line
}

interface PullRequestFilesState {
  data: PullRequestFilesData[];
  realDiff: RealDiffData;
  fetchState: FetchStatusCode
}

const initialState: PullRequestFilesState = {
  data: [],
  realDiff: {
    additions: 0,
    deletions: 0,
  },
  fetchState: FetchStatusCode.DEFAULT,
}

const reducers = {
  fetch: (state: PullRequestFilesState) => {
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
  setRealDiff: (state: PullRequestFilesState, { payload }: PayloadAction<RealDiffData>) => {
    state.realDiff = payload
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

const prState = (state: RootState) => state[PR_SLICE]

const getRealDiff = (state: PullRequestFilesState) => state.realDiff
const getFetchState = (state: PullRequestFilesState) => state.fetchState

export const prSelector = {
  realDiff: createSelector([prState], getRealDiff),
  fetchState: createSelector([prState], getFetchState),
}
