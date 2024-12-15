import React from 'react'
import Link from 'next/link';
import ThemeHandler from '../../../app/_components/themeHandler';
import HeaderLoginStatus from './headerLoginStatus';

function Header() {

  return (
    <header className="fixed w-full h-20 px-4 bg-transparent z-10 flex items-center justify-start transition-all delay-100">
        <div className="h-full w-1/5 bg-white text-black flex justify-center items-center">Dorossi</div>
        <nav className="flex flex-row grow w-full justify-evenly items-center">
            <Link href='/'>Link1</Link>
            <Link href='/'>Link2</Link>
            <Link href='/'>Link3</Link>
        </nav>
        <div className="h-full grow w-1/4 flex justify-evenly items-center gap-3">
          <ThemeHandler />
          <HeaderLoginStatus />
        </div>
    </header>
  )
}

export default Header