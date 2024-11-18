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
  console.log(data);
  

  const handleLogOUt =()=>{
    axios.get('/api/logout')
    dispatch(logOut())
    router.push('/')
  }

  return (
    <>
      <div>Dashboard page</div>
      <h1>welcome {data?.username}</h1>
      <button className="bg-white rounded text-black px-16 py-2 hover:bg-gray-300" onClick={()=>handleLogOUt()}>Log Out</button>
    </>
  )
}

export default Dashboard