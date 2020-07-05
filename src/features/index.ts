import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import { PR_SLICE,prReducer } from './prSlice'

const rootReducer = combineReducers({
  [PR_SLICE]: prReducer,
})

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export default store
