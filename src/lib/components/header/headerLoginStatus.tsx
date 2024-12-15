"use client"

import React from 'react'
import {useEffect,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';




function HeaderLoginStatus() {

    const [session, setSession] = useState()

    useEffect(() => {
        setSession(JSON.parse(window.localStorage.getItem("session")))
    }, [])
    
    if(!session) {  return (
            <div className="flex flex-row h-2/3 items-center justify-center gap-3">
                <Link href='/login' className="font-bold text-lg font-main border border-foreground rounded-3xl px-3 py-3 transition-all hover:bg-main">تسجيل الدخول</Link>
                <Link href='/register' className="font-bold text-lg font-main border border-foreground rounded-3xl bg-main px-3 py-3 transition-all text-foreground hover:border-main hover:bg-foreground hover:text-main">إنشاء حساب</Link>
            </div>
    )} else {
        return (
          
                <div className="group relative px-4 py-1 flex flex-row h-2/3 items-center justify-center gap-3 cursor-pointer rounded-3xl bg-main border border-foreground">
                    <Image src={session.avatar} alt="profil picture" height={30} width={30} style={{borderRadius:'50%',height:'30px',width:'30px'}}/>
                    <h1>{session.username}</h1>
                    <div className="absolute bg-foreground text-background top-[120%] left-0 w-[250px] overflow-hidden rounded-3xl shadow-md  transition-all flex flex-col items-center gap-3 border-2 border-main max-h-0 p-0 opacity-0 group-hover:max-h-fit group-hover:p-3 group-hover:opacity-100">
                        <Link href='/dashboard' className="px-3 py-3 rounded-2xl transition-colors w-full text-center hover:bg-main hover:text-foreground">Dashboard</Link>
                        <Link href='/profil' className="px-3 py-3 rounded-2xl transition-colors w-full text-center hover:bg-main hover:text-foreground">Profil</Link>
                        <Link href='/' className="px-3 py-3 rounded-2xl transition-colors w-full text-center hover:bg-main hover:text-foreground">Log out</Link>
                    </div>

                </div>
           
        )}

}

export default HeaderLoginStatus