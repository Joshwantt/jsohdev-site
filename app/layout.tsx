import React from "react"
import './globals.css'
import Navbar from './_layout/navbar'
import Footer from "./_layout/footer"
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'



export const metadata: Metadata = {
  title: 'Jsoh Dev',
  description: 'Jsoh Dev / Portfolio and personal projects',
  icons: {
    icon: '/icon.svg'
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-P6VBQTSQZD" />
    </html>
  )
}