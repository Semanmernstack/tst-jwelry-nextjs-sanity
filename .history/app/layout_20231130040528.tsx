import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tst-jewelry.com, Latest jewelry set for your party | OWANBE | CLASSIC | WATCHES',
  description: 'your best plug when it comes to luxrious jewelries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='sticky top-0  z-40'>
        <Navbar/>

        </div>
       
        {children}
        <Footer/>
      </body>
    </html>
  )
}
