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
      className={`${barlowCondensed.className} pt-[25vh] pb-[6.25rem] pl-[10.45rem] h-screen w-screen absolute top-0 bg-tech-desktop bg-cover overflow-hidden`}
    >
      <h3 className='text-sub-mobile md:text-sub-tablet lg:text-sub-desktop uppercase'>
        <span className='opacity-25 mr-4'>03</span>Space launch 101
      </h3>
      <section id='main section'>
        <div id='photo'></div>
        <div id='buttons'></div>
        <div id='text'></div>
      </section>
      <div className='bottom-0 h-full w-full'>
        <div className='flex gap-20 h-full w-[51%]'>
          <div className='flex flex-col gap-8 justify-center'>
            {technology.map((item) => (
              <button
                key={item.num}
                onClick={() => setNumber(item.num)}
                className={
                  item.num === number
                    ? `${bellefair.className} w-20 h-20 rounded-full h4 bg-white`
                    : `${bellefair.className} w-20 h-20 rounded-full h4 border-2 border-light border-opacity-30 hover:border-opacity-1 hover:border-white duration-200 ease-out`
                }
              >
                {item.num}
              </button>
            ))}
          </div>
          <div className='flex flex-col gap-1 justify-center'>
            <span className='nav-text text-light'>The terminology...</span>
            <h4 className={`${bellefair.className} h3 mb-4`}>
              {technology[techIndex(number)].tech}
            </h4>
            <p className={`${barlow.className} body-text`}>
              {technology[techIndex(number)].desc}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={technology[techIndex(number)].pathPortrait}
        alt={technology[techIndex(number)].tech}
        width={515}
        height={527}
        className='absolute bottom-28 right-0'
      />
    </main>
  )
}
