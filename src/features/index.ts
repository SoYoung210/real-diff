import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { watchFetchPullRequest } from './prSaga'
import { PR_SLICE,prReducer } from './prSlice'
import { watchSaveUserToken } from './settingSaga'
import { USER_INFO,settingReducer } from './settingSlice'

const rootReducer = combineReducers({
  [PR_SLICE]: prReducer,
  [USER_INFO]: settingReducer,
})

export const sagaMiddleware = createSagaMiddleware()
export function* rootSaga() {
  yield all([
    watchSaveUserToken(),
    watchFetchPullRequest(),
  ])
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

export type RootState = ReturnType<typeof rootReducer>
export default store
