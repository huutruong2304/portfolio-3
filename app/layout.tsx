import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import AppHeader from '@/components/custom/app-header'
import AppFooter from '@/components/custom/app-footer'
import ScrollToTopButton from '@/components/custom/scroll-top-button'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hi I am Truong - Full Stack Developer',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
        <AppHeader />
        {children}
        <ScrollToTopButton />
        <AppFooter />
      </body>
    </html>
  )
}
