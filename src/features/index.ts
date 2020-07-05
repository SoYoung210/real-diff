import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { PR_SLICE,prReducer } from './prSlice'
import { watchSaveUserToken } from './tokenSaga'
import { USER_INFO,userInfoReducer } from './tokenSlice'

const rootReducer = combineReducers({
  [PR_SLICE]: prReducer,
  [USER_INFO]: userInfoReducer,
})

export const sagaMiddleware = createSagaMiddleware()
export function* rootSaga() {
  yield all([
    watchSaveUserToken(),
  ])
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

export type RootState = ReturnType<typeof rootReducer>
export default store
