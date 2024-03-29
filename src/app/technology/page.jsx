'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import technology from '../../lib/config/technology'
import { techIndex } from '../../lib/config/findIndex'
import { barlowCondensed, barlow, bellefair } from '../../lib/config/fonts'
import { techImg } from '../../lib/config/techImages'

export default function page() {
  const [i, setI] = useState('1')

  useEffect(() => {
    techIndex()
  }, [i])

  return (
    <main
      className={`${barlowCondensed.className} min-h-screen w-screen p-tech-mobile absolute top-0 bg-tech-desktop bg-cover overflow-hidden md:p-tech-tablet pc:p-tech-desktop`}
    >
      <h1 className='max-w-container mb-12 uppercase text-center text-sub-mobile sm:pb-0 md:text-sub-tablet xl:mx-auto xl:mb-[8.56rem] xl:text-left xl:text-sub-desktop pc:mb-16'>
        <span className='opacity-25 mr-4'>03</span>Space launch 101
      </h1>
      <section
        id='main section'
        className='flex items-center flex-col xl:flex-row xl:max-w-container xl:mx-auto'
      >
        <div
          id='photo'
          className='w-[100vw] h-[230px] relative overflow-hidden flex items-center justify-center md:h-[310px] xl:order-3 xl:absolute xl:right-0 xl:w-[515px] xl:h-[526px] pc:ml-auto pc:w-[420px] pc:h-[510px] pc:static'
        >
          <Image
            src={techImg(i, window.innerWidth)}
            alt={technology[techIndex(i)].tech}
            width={1024}
            height={527}
            // responsive={true}
            className='h-[100%] xl:absolute xl:right-0 pc:static'
          />
        </div>
        <div
          id='buttons'
          className='mt-[2.125rem] mb-[2rem] flex gap-4 xl:mr-20 xl:order-1 xl:flex-col pc:mr-12'
        >
          {technology.map((item) => (
            <button
              key={item.num}
              onClick={() => setI(item.num)}
              className={
                item.num === i
                  ? `${bellefair.className} w-10 h-10 rounded-full bg-white text-dark md:w-[3.75rem] md:h-[3.75rem] md:text-[1.5rem] xl:w-20 xl:h-20 xl:text-nums-desktop`
                  : `${bellefair.className} w-10 h-10 rounded-full border-2 border-light border-opacity-30 hover:border-opacity-1 hover:border-white duration-200 ease-out md:w-[3.75rem] md:h-[3.75rem] md:text-[1.5rem] xl:w-20 xl:h-20 xl:text-nums-desktop`
              }
            >
              {item.num}
            </button>
          ))}
        </div>
        <div
          id='text'
          className='text-center xl:pr-20 xl:order-2 xl:text-left pc:pr-0'
        >
          <span className='text-sub2-mobile text-light uppercase md:text-sub2-tablet'>
            The terminology...
          </span>
          <h2
            className={`${bellefair.className} mt-3 mb-2 text-[2rem] uppercase md:text-[2.5rem] xl:text-[3.5rem]`}
          >
            {technology[techIndex(i)].tech}
          </h2>
          <p
            className={`${barlow.className} mx-6 text-para-mobile text-light text-balance md:text-para-tablet md:max-w-[458px] xl:m-0 xl:min-h-[12rem] xl:text-para-desktop xl:text-pretty`}
          >
            {technology[techIndex(i)].desc}
          </p>
        </div>
      </section>
    </main>
  )
}
