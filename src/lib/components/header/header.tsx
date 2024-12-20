import React from 'react'
import Link from 'next/link';
import HeaderLoginStatus from './headerLoginStatus';
import ThemeHandler from './themeHandler';
import ResponsiveHeader from './responsiveHeader';

import { LuSettings2 } from "react-icons/lu";



function Header() {

  const mainLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Contact', link: '/' },
  ]
  return (
    <header className="fixed w-full md:h-20 md:px-4 bg-white md:bg-transparent z-50 flex items-center md:justify-start transition-all delay-100 justify-between h-16 shadow-md md:shadow-none md:[&.hide]:-translate-y-full">
        <div className="h-full w-1/3 md:w-1/5 bg-white text-black flex justify-center items-center">Dorossi</div>
        <nav className="hidden md:flex flex-row w-[55%] justify-evenly items-center">
            {mainLinks.map(link => {
              return <Link key={link.name} href={link.link}>{link.name}</Link>
            })}
        </nav> 
        <div className="h-full w-1/4 hidden md:flex justify-end items-center gap-5 ">
          <div className="group relative p-6 flex h-2/3 items-center justify-center cursor-pointer rounded-full transition-all border border-foreground hover:bg-main">
            <LuSettings2 className="scale-125"/>
            <div className="absolute bg-foreground text-background top-[105%] left-0 w-[250px] overflow-hidden rounded-3xl shadow-md transition-all flex flex-col items-center gap-3 border-2 border-main max-h-0 p-0 opacity-0 group-hover:max-h-fit group-hover:p-3 group-hover:opacity-100">
              <ThemeHandler />
              <div className="relative w-full  border border-main flex flex-row-reverse justify-center items-center rounded-2xl overflow-hidden">
                <div className="px-2 py-1 grow flex items-center justify-center h-full rounded-xl transition-all font-bold hover:bg-main active [&.active]:bg-main ">ع</div>
                <div className="px-2 py-1 grow flex items-center justify-center h-full rounded-xl transition-all font-bold hover:bg-main">Fr</div>
                <div className="px-2 py-1 grow flex items-center justify-center h-full rounded-xl transition-all font-bold hover:bg-main">En</div>
              </div>
            </div>
          </div>
          <HeaderLoginStatus />
        </div>
        <ResponsiveHeader mainLinks={mainLinks} />
    </header>
  )
}

export default Header