import React from 'react'
import Link from 'next/link';
import ThemeHandler from '../../../app/_components/themeHandler';
import HeaderLoginStatus from './headerLoginStatus';

function Header() {

  return (
    <header className="fixed w-screen h-20 bg-transparent z-10 flex items-center justify-start gap-24 transition-all delay-100">
        <div className="logo h-full w-1/6 bg-white"></div>
        <nav className="grow flex justify-start items-center gap-3">
            <Link href='/'>Link1</Link>
            <Link href='/'>Link2</Link>
            <Link href='/'>Link3</Link>
        </nav>
        <nav className="grow flex justify-start items-center gap-3">
          <HeaderLoginStatus />
          <ThemeHandler />
        </nav>
      </header>
  )
}

export default Header