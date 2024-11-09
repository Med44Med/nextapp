import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUser {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: IUser = {
  value: 0,
  status: 'idle'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    logOut: state => {
      state.value = initialState
    },
    login: (state, action: PayloadAction<IUser>) => {
      state.value = action.payload
    }
  }
})

export const { login, logOut } = userSlice.actions

export default userSlice.reducer