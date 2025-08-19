import type { Metadata } from 'next'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aurum Café',
  description: 'Modern café & restaurant – crafted coffee, artisanal dishes, warm ambiance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
