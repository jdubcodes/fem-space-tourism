'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import technology from '../../../config/technology'
import { techIndex } from '../../../config/findIndex'
import { barlowCondensed, barlow, bellefair } from '../../../config/fonts'

export default function page() {
  const [number, setNumber] = useState('1')

  useEffect(() => {
    techIndex()
  }, [number])

  return (
    <main
      className={`${barlowCondensed.className} pt-[25vh] pb-[6.25rem] h-screen w-screen absolute top-0 bg-tech-desktop bg-cover overflow-hidden`}
    >
      <h5 className='pb-2 uppercase sm:pb-0 text-center text-sub-mobile md:text-left md:text-sub-tablet lg:text-sub-desktop'>
        <span className='opacity-25 mr-4'>03</span>Space launch 101
      </h5>
      <section id='main section'>
        <div id='photo' className='w-[100vw]'>
          <Image
            src={technology[techIndex(number)].pathMobile}
            alt={technology[techIndex(number)].tech}
            width={515}
            height={527}
            className=''
          />
        </div>
        <div id='buttons'></div>
        <div id='text'></div>
      </section>
    </main>
  )
}
