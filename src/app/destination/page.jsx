'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import destinations from '../../lib/config/destinations'
import { destIndex } from '../../lib/config/findIndex'
import { barlowCondensed, barlow, bellefair } from '../../lib/config/fonts'

export default function page() {
  const [dest, setDest] = useState('Moon')

  useEffect(() => {
    destIndex()
  }, [dest])

  return (
    <main
      className={`${barlowCondensed.className} min-h-screen p-dest-mobile bg-dest-tablet bg-cover bg-center md:p-dest-tablet lg:p-dest-lg lg:bg-dest-desktop pc:p-dest-desktop`}
    >
      <h1 className='max-w-container text-sub-mobile text-center uppercase md:text-sub-tablet md:justify-self-start lg:text-sub-desktop xl:mx-auto xl:mb-16 xl:text-start'>
        <span className='opacity-25 mr-4'>01</span>Pick your destination
      </h1>
      <div className='m-auto w-full max-w-container grid grid-cols-1 auto-rows-auto text-center lg:gap-0 xl:grid-cols-2 xl:text-left'>
        {/* Left side */}
        <div className='grid w-full h-full'>
          <div className='dest-img-mobile md:dest-img-tablet xl:dest-img-desktop mt-8 self-center justify-self-center'>
            <Image
              src={destinations[destIndex(dest)].path}
              alt={`${destinations[destIndex(dest)].destination}`}
              layout='responsive'
              width={400}
              height={400}
              className='motion-safe:animate-spin-slow'
            />
          </div>
        </div>
        {/* Right side */}
        <div className='grid h-full w-full xl:pl-24 grid-cols-1 grid-flow-row'>
          <nav className='self-center justify-self-center mt-6 xl:justify-self-start'>
            <ul className='flex gap-9 text-nav2-mobile md:text-nav2-tablet uppercase text-light'>
              {destinations.map((destination, index) => (
                <li
                  key={index}
                  onClick={() => setDest(destination.destination)}
                  className={
                    dest === destination.destination
                      ? 'cursor-pointer pb-2 border-b-[3px] border-white text-white'
                      : 'cursor-pointer pb-2 border-b-[3px] border-hidden border-[#979797] hover:border-solid ease-out'
                  }
                >
                  {destination.destination}
                </li>
              ))}
            </ul>
          </nav>
          <h2
            className={`${bellefair.className} text-accent2-mobile mt-7 uppercase md:text-accent2-tablet lg:text-accent2-desktop`}
          >
            {destinations[destIndex(dest)].destination}
          </h2>
          <p
            className={`${barlow.className} max-w-[34rem] min-h-[8rem] self-center justify-self-center text-para-mobile text-light text-balance md:text-para-tablet lg:max-w-[40rem] lg:text-para-desktop`}
          >
            {destinations[destIndex(dest)].description}
          </p>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 pt-6 mt-6 self-end border-t border-[#383B4B]'>
            <div>
              <p className='text-sub2-mobile text-light uppercase'>
                Avg. Distance
              </p>
              <p
                className={`${bellefair.className} text-nums-mobile uppercase`}
              >
                {destinations[destIndex(dest)].distance}
              </p>
            </div>
            <div>
              <p className='text-sub2-mobile text-light uppercase'>
                Est. Travel Time
              </p>
              <p
                className={`${bellefair.className} text-nums-mobile uppercase`}
              >
                {destinations[destIndex(dest)].time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
