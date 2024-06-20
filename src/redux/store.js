import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { LOGOUT } from '../constants/index.constant'
import { equal } from '../utils/javascript'
import authSlice from './slices/auth.slice'

const appReducer = combineReducers({
  auth: authSlice,
})

const reducerProxy = (state, action) => {
  if (equal(action.type, LOGOUT)) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export const store = configureStore({
  reducer: reducerProxy,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
