import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'
import { Ubuntu } from '@next/font/google'

import ProfilePic from '../public/leland.jpg'
import {Twitter, GitHub, Linkedin } from 'react-feather'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['700']
})

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 400.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x51020,
          zoom: 1
          
        })
      )
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
      }
    }
  }, [vantaEffect])


  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Leland Riordan - Front End Engineer & User Experience Expert</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Leland Riordan - Front End Engineer & User Experience Expert" />
        <meta name="description" content="I am a New York based front end development expert with 12+ years of experience crafting delightful user experiences and 8+ years of experience managing teams and products." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lelandriordan.com/" />
        <meta property="og:title" content="Leland Riordan - Front End Engineer & User Experience Expert" />
        <meta property="og:description" content="I am a New York based front end development expert with 12+ years of experience crafting delightful user experiences and 8+ years of experience managing teams and products." />
        <meta property="og:image" content="/public/leland.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.lelandriordan.com/" />
        <meta property="twitter:title" content="Leland Riordan - Front End Engineer & User Experience Expert" />
        <meta property="twitter:description" content="I am a New York based front end development expert with 12+ years of experience crafting delightful user experiences and 8+ years of experience managing teams and products." />
        <meta property="twitter:image" content="/public/leland.jpg" />
      </Head>
      <main className="bg-slate-900 text-slate-100 h-full sm:h-screen w-screen flex flex-col items-center justify-center" ref={vantaRef}>
        <h1 className="hidden text-xl text-slate-100 p-0">Leland Riordan</h1>
        <section
          className="
          bg-slate-800/80
          p-8
          flex
          flex-col
          m-4
          items-center
          lg:items-start
          lg:flex-row
          gap-8
          border-box
          max-w-[800px]
          rounded-3xl
          shadow-xl
          border
          border-slate-800"
        >
          <Image
            src={ProfilePic}
            alt="Leland Riordan Profile Picture"
            className="w-[200px] h-[200px] rounded-full shadow-xl flex"
          />
          <div className="flex flex-col gap-4 items-center justify-center lg:items-start lg:justify-start">
            <h2 className={`${ubuntu.variable} font-serif text-4xl sm:text-5xl font-bold`}>Hi, I&apos;m Leland.</h2>
            <p className="text-slate-400 text-lg">I am a New York based front end development expert with 12+ years of experience crafting delightful user experiences and 8+ years of experience managing teams and products.</p>
            {/* <p className="text-slate-400 text-lg">I am a co-founder of Upside Software, a full service software consultancy that delivers elite crypto, web3 and trading products.</p> */}
            <p className="text-slate-400 text-lg">Previously, I led UI/UX design and development at Jump Trading&apos;s Crypto Growth Lab. Before that, I served as the Head of Product Design for Citi Velocity and Digital Solutions. In this role, I led a ground up redesign of one of Wall Street&apos;s biggest analytics and content platforms and helped launch a new custom React design system across all products at Citi.</p>
            
            <ul className="flex gap-4 text-indigo-300 pt-2 items-center justify-center lg:items-start lg:justify-start">
              <li>
                <a
                  href="mailto:leland@lelandriordan.com"
                  title="Email Me"
                  className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-slate-700 rounded-full text-indigo-300 hover:bg-slate-600 hover:text-indigo-200"
                >
                  Get In Touch
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lelandriordan"
                  rel="noreferrer"
                  target="_blank"
                  title="Github"
                  className="inline-flex items-center p-2 sm:p-3 bg-slate-700 rounded-full text-indigo-300 hover:bg-slate-600 hover:text-indigo-200"
                >
                  <GitHub  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lelandriordan/"
                  rel="noreferrer"
                  target="_blank"
                  title="LinkedIn"
                  className="inline-flex items-center p-2 sm:p-3 bg-slate-700 rounded-full text-indigo-300 hover:bg-slate-600 hover:text-indigo-200"
                >
                  <Linkedin  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/lelandriordan"
                  rel="noreferrer"
                  target="_blank"
                  title="Twitter"
                  className="inline-flex items-center p-2 sm:p-3 bg-slate-700 rounded-full text-indigo-300 hover:bg-slate-600 hover:text-indigo-200"
                >
                  <Twitter  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
