import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { reducer as dogReducer } from './dog'
import { useDispatch as useReactReduxDispatch } from 'react-redux'

const reducer = combineReducers({
  dog: dogReducer,
});

const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useReactReduxDispatch<AppDispatch>();

export default store;