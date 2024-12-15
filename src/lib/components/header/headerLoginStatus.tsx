"use client"

import React from 'react'
import {useEffect,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdArrowDropdown } from "react-icons/io";




function HeaderLoginStatus() {

    const [session, setSession] = useState()
    const [activeMenu, setActiveMenu] = useState(false)

    useEffect(() => {
        setSession(JSON.parse(window.localStorage.getItem("session")))
    }, [])
    
    
    
    if(!session) {  return (
            <div className="flex justify-center items-center gap-3">
                <Link href='/login' className="font-bold text-lg font-main">تسجيل الدخول</Link>
                <Link href='/register' className="font-bold text-lg font-main bg-main rounded p-3 text-foreground">إنشاء حساب</Link>
            </div>
    )} else {
        return (
          
                <div className="group grow relative flex flex-row h-full items-center justify-center cursor-pointer">
                    <Image src={session.avatar} alt="profil picture" height={30} width={30} style={{borderRadius:'50%',height:'30px',width:'30px'}}/>
                    <h1>{session.username}</h1>
                    <IoMdArrowDropdown className="transition-all group-hover:rotate-180" />
                    <div className="absolute bg-foreground text-background top-[105%] left-0 w-full overflow-hidden rounded transition-all flex flex-col items-center gap-3 max-h-0 p-0 opacity-0 group-hover:max-h-fit group-hover:p-3 group-hover:opacity-100">
                        <Link href='/dashboard' className="px-3 py-1 rounded transition-colors w-full text-center hover:bg-main hover:text-foreground">Dashboard</Link>
                        <Link href='/profil' className="px-3 py-1 rounded transition-colors w-full text-center hover:bg-main hover:text-foreground">Profil</Link>
                        <Link href='/' className="px-3 py-1 rounded transition-colors w-full text-center hover:bg-main hover:text-foreground">Log out</Link>
                    </div>

                </div>
           
        )}

}

export default HeaderLoginStatus