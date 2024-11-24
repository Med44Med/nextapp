import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUser {
  id?: string
  role?: string
  username?: string
  email?: string
  avatar?: string
  firstname?:string
  lastname?:string
  birthdate?:date
  gender?:string
  phone?:string
  wilaya?:string
  commune?:string
  address?:string
  created_at?:date
  updated_at?:date
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
    login: (state, action: PayloadAction<IUser | undefined>) => {
      state.data = action.payload      
    },
    updateProfilPic: (state, action: PayloadAction<string>) => {
      state.data.avatar = action.payload      
    }
  }
})

export const { login, logOut,updateProfilPic } = userSlice.actions

export default userSlice.reducer