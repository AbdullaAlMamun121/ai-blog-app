import './globals.css'
import type { Metadata } from 'next'
import {Open_Sans} from 'next/font/google';
import Navbar from 'app/(shared)/Navbar'
const openSans = Open_Sans({
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: 'AI Blog App',
  description: 'Blog by create next js that uses ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  )
}
