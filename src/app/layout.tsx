import type { Metadata } from "next";
import { cookies } from 'next/headers';
import "./globals.css";
import StoreProvider from './StoreProvider'
import CookieProvider from './CookieProvider';
import axios from 'axios';


export const metadata: Metadata = {
  title: "Dorossi",
  description: "an online store for sharing lessons ",
};

export default async function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const cookie = await cookies();
  const session = cookie.get('session');
  const token = session ? session.value : false;
  let hydratedCookie = false
  if (typeof token === 'string') {
    try {
      
      
      const response = await axios.post('http://localhost:3000/api/users/hydrate',{token})
      hydratedCookie = response?.data?.data;
      
      
      
    } catch (error) {
      console.log(error);
    }
  }
  
  
 

    
  
  return (
    <html lang="en" data-theme="dark" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <StoreProvider>
          <CookieProvider hydratedCookie={hydratedCookie}>
            {children}
          </CookieProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
