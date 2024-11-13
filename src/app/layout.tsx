import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from './StoreProvider'



export const metadata: Metadata = {
  title: "Dorossi",
  description: "an online store for sharing lessons ",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" theme="dark">
      <body >
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
