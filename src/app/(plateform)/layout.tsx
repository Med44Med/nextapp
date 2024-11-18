"use client"

import Link from 'next/link' 
import {usePathname,useRouter} from 'next/navigation'
import axios from 'axios'
import { useAppSelector,useAppDispatch} from '../../lib/reduxStore/hooks.ts'
import { logOut} from '../../lib/reduxStore/slice/userSlice.ts'
import { RiLogoutCircleRLine } from "react-icons/ri";



export default function PlateformLayout({children}: { children: React.ReactNode }) {

  const path = usePathname()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const data = useAppSelector (state => state.user.data)

  
  const NavLinks = [
    {href: '/dashboard', label: 'Dashboard'},
    {href: '/dorossi', label: 'Dorossi'},
    {href: '/blogs', label: 'Blogs'},
    {href: '/messages', label: 'Messages'}
  ]
  const SecLinks = [
    {href: '/profil', label: 'Profil'},
    {href: '/settings', label: 'Settings'},
    {href: '/help', label: 'Help'},
  ]

  const handleLogOUt =()=>{
    axios.get('/api/logout')
    dispatch(logOut())
    router.push('/')
  }

  return (
    <main className="min-h-screen flex flex-row w-full justify-start items-center relative">
        <aside className="w-1/5 h-screen bg-main flex flex-col justify-start items-center gap-6 py-6 relative animate-appearAside rounded-l-md">
          <h1 className="text-center text-base select-none" >welcome back<br/><Link href="/profil" className="text-xl font-bold">{data?.username}</Link></h1>
          <nav className="flex flex-col gap-1 w-full h-full pr-4">
            {NavLinks.map(link=>(
              <Link key={link.href} href={link.href} className={`font-bold w-full text-foreground rounded-r-lg text-xl py-3 px-8  text-center bg-transparent transition-colors hover:bg-hard [&.active]:bg-background ${path === link.href ? 'active' : ''}`}>
                {link.label}
              </Link>
            ))}
            {SecLinks.map(link=>(
              <Link key={link.href} href={link.href} className={`font-bold w-full text-foreground rounded-r-md text-base py-2 text-center bg-transparent transition-colors hover:bg-hard [&.active]:bg-background ${path === link.href ? 'active' : ''}`}>
                {link.label}
              </Link>
            ))}
            <button onClick={handleLogOUt} className="mt-auto flex flex-row-reverse justify-center items-center gap-2 font-bold w-full text-foreground rounded-r-lg text-xl py-3 px-8  text-center bg-transparent transition-colors hover:text-danger">
              Log out <RiLogoutCircleRLine/>
              </button>
          </nav>
        </aside>
        <div className="w-full h-screen flex flex-col justify-start items-center">
          {children}
        </div>
    </main>
  )
}




