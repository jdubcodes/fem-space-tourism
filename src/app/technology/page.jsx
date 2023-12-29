'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import technology from '../../../config/technology'
import { techIndex } from '../../../config/findIndex'
import { barlowCondensed, barlow, bellefair } from '../../../config/fonts'
import { techImg } from '../../../config/techImages'

export default function page() {
  const [i, setI] = useState('1')

  const width = () => {
    const [width, setWidth] = useState(0) // default width, detect on server.
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])
    return width
  }

  useEffect(() => {
    techIndex()
  }, [i])

  return (
    <main
      className={`${barlowCondensed.className} min-h-screen w-screen p-tech-mobile absolute top-0 bg-tech-desktop bg-cover overflow-hidden md:p-tech-tablet`}
    >
      <h1 className='max-w-container mb-12 uppercase text-center text-sub-mobile sm:pb-0 md:text-sub-tablet xl:mx-auto xl:mb-[1.625rem] xl:text-left xl:text-sub-desktop'>
        <span className='opacity-25 mr-4'>03</span>Space launch 101
      </h1>
      <section
        id='main section'
        className='flex items-center flex-col xl:flex-row xl:max-w-container xl:mx-auto'
      >
        <div
          id='photo'
          className='w-[100vw] h-[230px] relative overflow-hidden flex items-center justify-center md:h-[310px] xl:order-3 xl:absolute xl:right-0 xl:w-[515px] xl:h-[526px]'
        >
          <Image
            src={techImg(i, width)}
            alt={technology[techIndex(i)].tech}
            width={1024}
            height={527}
            // responsive={true}
            className='h-[100%] xl:absolute xl:right-0'
          />
        </div>
        <div
          id='buttons'
          className='mt-[2.125rem] mb-[2rem] flex gap-4 xl:mr-20 xl:order-1 xl:flex-col'
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
        <div id='text' className='text-center xl:pr-20 xl:order-2'>
          <span className='text-sub2-mobile text-light uppercase md:text-sub2-tablet'>
            The terminology...
          </span>
          <h2
            className={`${bellefair.className} mt-3 mb-2 text-[2rem] uppercase md:text-[2.5rem]`}
          >
            {technology[techIndex(i)].tech}
          </h2>
          <p
            className={`${barlow.className} mx-6 text-para-mobile text-light text-balance md:text-para-tablet md:max-w-[458px]`}
          >
            {technology[techIndex(i)].desc}
          </p>
        </div>
      </section>
    </main>
  )
}
