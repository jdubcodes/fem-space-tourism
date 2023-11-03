'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import technology from '../../../config/technology'

import { barlowCondensed, barlow, bellefair } from '../fonts'

export default function page() {
  const [number, setNumber] = useState('1')

  useEffect(() => {
    selected()
  }, [number])

  const selected = () => {
    if (number === '1') {
      return 0
    } else if (number === '2') {
      return 1
    }
    return 2
  }

  return (
    <main className='pt-[25vh] pb-[6.25rem] pl-[10.45rem] h-screen w-screen absolute top-0 bg-tech-desktop bg-cover overflow-hidden'>
      <div className='bottom-0 h-full w-full'>
        <h3 className={`${barlowCondensed.className} h5`}>
          <span className='opacity-25 mr-4'>03</span>Space launch 101
        </h3>
        {/* left side */}
        <div className='flex gap-20 h-full w-[51%]'>
          <div className='flex flex-col gap-8 justify-center'>
            {technology.map((item) => (
              <button
                key={item.num}
                onClick={() => setNumber(item.num)}
                className={
                  item.num === number
                    ? `${bellefair.className} w-20 h-20 rounded-full h4 bg-white text-dark`
                    : `${bellefair.className} w-20 h-20 rounded-full h4 border-2 border-light border-opacity-30 hover:border-opacity-1 hover:border-white duration-200 ease-out`
                }
              >
                {item.num}
              </button>
            ))}
          </div>
          <div className='flex flex-col gap-1 justify-center'>
            <span
              className={`${barlowCondensed.className} nav-text text-light`}
            >
              The terminology...
            </span>
            <h4 className={`${bellefair.className} h3 mb-4`}>
              {technology[selected()].tech}
            </h4>
            <p className={`${barlow.className} body-text`}>
              {technology[selected()].desc}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={technology[selected()].pathPortrait}
        alt={technology[selected()].tech}
        width={515}
        height={527}
        className='absolute bottom-28 right-0'
      />
    </main>
  )
}
