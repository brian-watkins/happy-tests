import '@src/styles/globals.css'
import type { AppProps } from 'next/app.js'
import React from "react"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
