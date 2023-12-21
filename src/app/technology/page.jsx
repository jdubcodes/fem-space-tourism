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
      className={`${barlowCondensed.className} h-screen w-screen p-tech-mobile absolute top-0 bg-tech-desktop bg-cover overflow-hidden md:p-tech-tablet`}
    >
      <h1 className='mb-12 uppercase sm:pb-0 text-center text-sub-mobile md:text-left md:text-sub-tablet lg:text-sub-desktop'>
        <span className='opacity-25 mr-4'>03</span>Space launch 101
      </h1>
      <section id='main section' className='flex items-center flex-col'>
        <div
          id='photo'
          className='w-[100vw] h-[230px] relative overflow-hidden flex items-center justify-center md:h-[310px]'
        >
          <Image
            src={technology[techIndex(number)].pathMobile}
            alt={technology[techIndex(number)].tech}
            width={1024}
            height={527}
            responsive={true}
            className='h-[100%]'
          />
        </div>
        <div id='buttons' className='mt-[2.125rem] mb-[2rem] flex gap-4'>
          {technology.map((item) => (
            <button
              key={item.num}
              onClick={() => setNumber(item.num)}
              className={
                item.num === number
                  ? `${bellefair.className} w-10 h-10 rounded-full bg-white text-dark md:w-[3.75rem] md:h-[3.75rem] md:text-[1.5rem]`
                  : `${bellefair.className} w-10 h-10 rounded-full border-2 border-light border-opacity-30 hover:border-opacity-1 hover:border-white duration-200 ease-out md:w-[3.75rem] md:h-[3.75rem] md:text-[1.5rem]`
              }
            >
              {item.num}
            </button>
          ))}
        </div>
        <div id='text' className='text-center'>
          <span className='text-sub2-mobile text-light uppercase md:text-sub2-tablet'>
            The terminology...
          </span>
          <h2
            className={`${bellefair.className} mt-3 mb-2 text-[2rem] uppercase md:text-[2.5rem]`}
          >
            {technology[techIndex(number)].tech}
          </h2>
          <p
            className={`${barlow.className} mx-6 text-para-mobile text-light text-balance md:text-para-tablet md:max-w-[458px]`}
          >
            {technology[techIndex(number)].desc}
          </p>
        </div>
      </section>
    </main>
  )
}
