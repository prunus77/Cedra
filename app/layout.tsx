import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CEDRA - Center for Educational Research/Recreational Activities',
  description: 'Empowering underprivileged women through education and economic opportunities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Chatbot />
        <Footer />
      </body>
    </html>
  )
} 