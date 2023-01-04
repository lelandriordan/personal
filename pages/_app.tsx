import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Karla } from '@next/font/google'
import { GoogleAnalytics } from 'nextjs-google-analytics'

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const threeScript = document.createElement('script')
    threeScript.setAttribute('id', 'threeScript')
    threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r124/three.min.js')

    document.getElementsByTagName('head')[0].appendChild(threeScript)

    return () => {
      if (threeScript) { threeScript.remove() }
    }
  }, [])

  return (
    <div className={`${karla.variable} font-sans`}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </div>
  )
}
