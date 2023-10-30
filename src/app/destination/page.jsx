'use client'

import { useState } from 'react'
import Image from 'next/image'

import destinations from '../../../config/destinations'
import { barlowCondensed, barlow, bellefair } from '../fonts'

export default function page() {
  const [dest, setDest] = useState('Moon')

  return (
    <main className='pt-[25vh] px-[10.45rem] pb-[7rem] h-screen w-screen absolute top-0 bg-[url("/destination/background-destination-desktop.jpg")] bg-cover bg-center overflow-hidden'>
      <div className='bottom-0 h-full w-full max-w-[69.125rem] mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-start gap-10 lg:gap-0 text-center lg:text-left'>
        {/* Left side */}
        <div className='grid w-full h-full'>
          <h3 className={`${barlowCondensed.className} h5`}>
            <span className='opacity-25 mr-4'>01</span>Pick your destination
          </h3>
          <Image
            className='self-end justify-self-center'
            src='/destination/image-moon.webp'
            alt='Moon'
            width={445}
            height={445}
          />
        </div>
        {/* Right side */}
        <div className='grid h-full w-full pl-24 grid-cols-1 grid-rows-4'>
          <nav className='self-center'>
            <ul
              className={`${barlowCondensed.className} flex gap-9 nav-text color-light uppercase`}
            >
              {destinations.map((destination, index) => (
                <li
                  key={index}
                  onClick={() => setDest(destination.destination)}
                  className={
                    dest === destination.destination
                      ? 'cursor-pointer pb-2 border-b-[3px] border-white'
                      : 'cursor-pointer pb-2 border-b-[3px] border-hidden border-[#979797] hover:border-solid ease-out'
                  }
                >
                  {destination.destination}
                </li>
              ))}
            </ul>
          </nav>
          <h4 className={`${bellefair.className} h2`}>Moon</h4>
          <p className={`${barlow.className} self-center body-text text-light`}>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className='grid grid-cols-2 pt-6 self-end border-t border-[#383B4B]'>
            <div>
              <p className={`${barlowCondensed.className} sub-h2 text-light`}>
                Avg. Distance
              </p>
              <p className={`${bellefair.className} sub-h1`}>384,400 km</p>
            </div>
            <div>
              <p className={`${barlowCondensed.className} sub-h2 text-light`}>
                Est. Travel Time
              </p>
              <p className={`${bellefair.className} sub-h1`}>3 Days</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
