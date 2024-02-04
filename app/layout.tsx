import React from "react"
import './globals.css'
import Navbar from './_layout/navbar'
import Footer from "./_layout/footer"
import type { Metadata } from 'next'
import Head from "next/head"



export const metadata: Metadata = {
  title: 'Jsoh Dev',
  description: 'Jsoh Dev / Portfolio and personal projects',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
      </Head>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}