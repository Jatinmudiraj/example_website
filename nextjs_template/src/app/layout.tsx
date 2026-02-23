import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Nexus | Universal React Template',
  description: 'A highly adaptable, premium Next.js website template.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <div className="scroll-progress shadow-[0_0_10px_rgba(0,242,254,0.8)]"></div>
        {children}
      </body>
    </html>
  )
}
