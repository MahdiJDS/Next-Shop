import { configureStore } from '@reduxjs/toolkit'
import products from './productManagment'

export const store = configureStore({
  reducer: {
    productM : products
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch