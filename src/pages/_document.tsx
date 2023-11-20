import NavBar from '@/components/NavBar'
import Whatsapp from '@/components/Whatsapp'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>

        <Main />
        <Whatsapp />
        <NavBar />
        <NextScript />
      </body>
    </Html>
  )
}
