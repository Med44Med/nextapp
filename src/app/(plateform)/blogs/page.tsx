"use client"

import React from 'react'
import axios from 'axios'
import { useAppSelector,useAppDispatch } from "../../../lib/reduxStore/hooks.ts";
import {useRouter} from 'next/navigation'

function Blogs() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const data = useAppSelector (state => state.user.data)
  

  return (
    <>
      <div>Blogs page</div>
    </>
  )
}

export default Blogs