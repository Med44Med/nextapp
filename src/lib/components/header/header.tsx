import React from 'react'
import Link from 'next/link';
import ThemeHandler from '../../../app/_components/themeHandler';
import HeaderLoginStatus from './headerLoginStatus';

function Header() {

  return (
    <header className="fixed w-full h-20 bg-transparent z-10 flex items-center justify-start transition-all delay-100">
        <div className="h-full w-1/5 bg-red-500">a</div>
        <nav className="flex flex-row grow w-full justify-around items-center">
            <Link href='/'>Link1</Link>
            <Link href='/'>Link2</Link>
            <Link href='/'>Link3</Link>
        </nav>
        <div className="h-full w-1/5 flex justify-around items-center bg-red-500">
          <ThemeHandler />
          <HeaderLoginStatus />
        </div>
    </header>
  )
}

export default Header