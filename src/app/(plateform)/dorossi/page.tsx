"use client"

import React from 'react'
import axios from 'axios'
import { useAppSelector,useAppDispatch } from "../../../lib/reduxStore/hooks.ts";
import { logOut } from "../../../lib/reduxStore/slice/userSlice.ts";
import {useRouter} from 'next/navigation'

function Dashboard() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const data = useAppSelector (state => state.user.data)
  

 

  return (
    <>
      <div>Dorossi page</div>
      </>
  )
}

export default Dashboard