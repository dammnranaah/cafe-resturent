import type { Metadata } from 'next'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Rana Café',
  description: 'Modern café & restaurant – crafted coffee, artisanal dishes, warm ambiance.',
}

const robotoDisplay = Roboto({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-display' })
const robotoSans = Roboto({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-sans' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoDisplay.variable} ${robotoSans.variable} font-sans antialiased`}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
