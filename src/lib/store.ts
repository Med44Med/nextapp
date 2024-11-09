import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        user:counterSlice
    }
  })
}


export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']