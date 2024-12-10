"use client"

import React from 'react'
import {useEffect,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';




function HeaderLoginStatus() {

    const [session, setSession] = useState()

    useEffect(() => {
        setSession(window.localStorage.getItem("session"))
    }, [])
    
    if(!session) {  return (
            <>
                <Link href='/login' className="font-bold text-lg font-main">تسجيل الدخول</Link>
                <Link href='/register' className="font-bold text-lg font-main">إنشاء حساب</Link>
            </>
    )} else {
        return (
            <>
                <div className="flex bg-white flex-col">
                    <div>
                        <Image src={session.avatar} alt="profil picture" height={50} width={50}/>
                        <h1>{session.username}</h1>
                    </div>
                    <div>
                        <Link href='/dashboard'>Dashboard</Link>
                        <Link href='/profil'>Profil</Link>
                        <Link href='/'>Log out</Link>
                    </div>
                </div>
            </>
        )}

}

export default HeaderLoginStatus