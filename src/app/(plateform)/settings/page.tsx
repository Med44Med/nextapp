"use client"

import React from 'react'
import axios from 'axios'
import { useAppSelector,useAppDispatch } from "../../../lib/reduxStore/hooks.ts";
import {useRouter} from 'next/navigation'

function Dashboard() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const data = useAppSelector (state => state.user.data)
  console.log(data);
  


  return (
    <>
      <div>Settings page</div>
    </>
  )
}

export default Dashboard