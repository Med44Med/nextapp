import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from './StoreProvider'



export const metadata: Metadata = {
  title: "Dorossi",
  description: "an online store for sharing lessons ",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" theme="dark" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
