import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Dashboard",
    description: "Generated by create next app",
  };

function Layout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <main className="min-h-screen flex flex-col w-full justify-start items-center gap-3">
        {children}
    </main>
  )
}

export default Layout