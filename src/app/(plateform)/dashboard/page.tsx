"use client"
import React from 'react'
import { useAppSelector } from '../../../lib/reduxStore/hooks';
import UserDashboard from './_user/userDashboard';


function Dashboard() {
  const role = useAppSelector (state => state.user.data.role)

  switch (role) {
    case 'user':return (<UserDashboard />)
  
    default: return (<h1>somthing wrong</h1>)
  }
  
}

export default Dashboard