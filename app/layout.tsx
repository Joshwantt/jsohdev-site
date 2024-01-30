import React from "react"
import './globals.css'
import Navbar from './_layout_navbar'
import Footer from "./_layout_footer"


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <Navbar/>
          <main>
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    )
  }