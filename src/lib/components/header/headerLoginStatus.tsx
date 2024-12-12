"use client"

import React from 'react'
import {useEffect,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';




function HeaderLoginStatus() {

    const [session, setSession] = useState()

    useEffect(() => {
        setSession(JSON.parse(window.localStorage.getItem("session")))
    }, [session])

    console.log(session);
    
    
    if(!session) {  return (
            <div>
                <Link href='/login' className="font-bold text-lg font-main">تسجيل الدخول</Link>
                <Link href='/register' className="font-bold text-lg font-main">إنشاء حساب</Link>
            </div>
    )} else {
        return (
          
                <div className="relative flex w-1/5 items-center jsustify-center">
                    <div>
                        <Image src={session.avatar} alt="profil picture" height={30} width={30} style={{borderRadius:'50%',height:'30px',width:'30px'}}/>
                        <h1>{session.username}</h1>
                    </div>
                    <div className="absolute top-[105%] left-0 w-full ">
                        <Link href='/dashboard'>Dashboard</Link>
                        <Link href='/profil'>Profil</Link>
                        <Link href='/'>Log out</Link>
                    </div>

                </div>
           
        )}

}

export default HeaderLoginStatus