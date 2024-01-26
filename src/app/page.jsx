'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap/gsapConfig.jsx'
import { barlowCondensed, barlow, bellefair } from '../lib/config/fonts'

export default function Home() {
  const router = useRouter()
  const tl = useRef()
  const mainRef = useRef()
  const loadRef = useRef()
  const textRef1 = useRef()

  const delayRoute = (e) => {
    e.preventDefault()
    setTimeout(() => {
      router.push('/destination')
    }, 3000)
  }

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(textRef1.current, {
          opacity: 0.2,
          duration: 4,
          ease: 'power4.inOut',
        })
        // .to(
        //   loadTextRef.current,
        //   {
        //     scale: 1.2,
        //     duration: 6,
        //     ease: 'power1.inOut',
        //   },
        //   '-=2'
        // )
        .to(
          loadRef.current,
          {
            xPercent: 100,
            duration: 2,
            ease: 'power1.inOut',
          },
          '-=1'
        )
      // gsap.to(mainRef.current, {
      //   opacity: 1,
      //   duration: 1.5,
      //   ease: 'power1.inOut',
      // })
    },
    { scope: tl }
  )

  return (
    <main
      className={`${barlowCondensed.className} p-home-short xs:p-home-mobile sm:p-home-tablet lg:p-home-desktop h-screen w-screen bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover bg-center overflow-hidden`}
    >
      <section
        ref={loadRef}
        id='transistion'
        className={`${bellefair.className} w-screen h-screen fixed bottom-0 left-0 bg-dark flex items-center justify-center overflow-hidden origin-center z-50`}
      >
        <p ref={textRef1} className='text-[20vw] uppercase opacity-0 scale-90'>
          Explore
        </p>
      </section>
      <section
        ref={mainRef}
        className='mx-auto h-full w-full max-w-container grid grid-cols-1 text-center lg:gap-12 xl:gap-0 xl:grid-cols-2 xl:place-items-end xl:text-left'
      >
        <div className='flex flex-col gap-2 self-end sm:gap-4 md:self-center xl:self-end xl:pr-20'>
          <p className='text-sub-mobile sm:text-sub-tablet lg:text-sub-desktop text-light uppercase'>
            So, you want to travel to
          </p>
          <span
            className={`${bellefair.className} text-accent1-mobile sm:text-[6.75rem] md:text-accent1-tablet text-white uppercase`}
          >
            Space
          </span>
          <p
            className={`${barlow.className} max-w-md self-center text-para-mobile text-light text-balance sm:text-para-tablet md:max-w-xl lg:text-para-desktop`}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          href='/destination'
          onClick={delayRoute}
          className='justify-self-center self-end md:self-center xl:justify-self-end xl:self-end'
        >
          {/* explore button */}
          <div
            className={`${bellefair.className} btn-mobile-sm xs:btn-mobile md:btn-tablet xl:btn-desktop bg-white rounded-full`}
          >
            Explore
            {/* hover effect */}
            <span className='absolute btn-mobile md:btn-tablet xl:btn-desktop opacity-0 bg-white rounded-full hover:btn-hover-mobile md:hover:btn-hover-tablet xl:hover:btn-hover-desktop hover:opacity-btn duration-700 origin-center ease-in-out'></span>
          </div>
        </Link>
      </section>
    </main>
  )
}
