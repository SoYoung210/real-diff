import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import { PR_SLICE,prReducer } from './prSlice'
import { USER_INFO,userInfoReducer } from './tokenSlice'

const rootReducer = combineReducers({
  [PR_SLICE]: prReducer,
  [USER_INFO]: userInfoReducer,
})

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export default store
