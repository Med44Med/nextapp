import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUser {
  id?: string
  role?: string
  username?: string
  email?: string
}

const initialState  = {
  data:{}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.data = initialState.data;
    },
    login: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload      
    }
  }
})

export const { login, logOut } = userSlice.actions

export default userSlice.reducer