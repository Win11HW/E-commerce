import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopEasy - Your Online Store',
  description: 'Discover amazing products at great prices',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          {/* Main content wrapper */}
          <main className="flex-grow mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
