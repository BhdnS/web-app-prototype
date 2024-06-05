import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './orderSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
  },
})
