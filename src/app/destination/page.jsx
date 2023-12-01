'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import destinations from '../../../config/destinations'
import { destIndex } from '../../../config/findIndex'
import { barlowCondensed, barlow, bellefair } from '../../../config/fonts'

export default function page() {
  const [dest, setDest] = useState('Moon')

  useEffect(() => {
    destIndex()
  }, [dest])

  return (
    <main
      className={`${barlowCondensed.className} min-h-screen p-dest-mobile md:p-dest-tablet lg:p-dest-lg xl:p-dest-desktop bg-dest-mobile sm:bg-dest-tablet lg:bg-dest-desktop bg-cover bg-center flex itmes-center`}
    >
      <div className='m-auto w-full max-w-container grid grid-cols-1 auto-rows-auto text-center lg:gap-0 xl:grid-cols-2 xl:text-left'>
        {/* Left side */}
        <div className='grid w-full h-full'>
          <h3 className='text-sub-mobile uppercase md:text-sub-tablet md:justify-self-start lg:text-sub-desktop'>
            <span className='opacity-25 mr-4'>01</span>Pick your destination
          </h3>
          <div className='dest-img-mobile md:dest-img-tablet xl:dest-img-desktop pt-8 self-center justify-self-center'>
            <Image
              src={destinations[destIndex(dest)].path}
              alt={`${destinations[destIndex(dest)].destination}`}
              layout='responsive'
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* Right side */}
        <div className='grid h-full w-full xl:pl-24 grid-cols-1 grid-flow-row'>
          <nav className='self-center justify-self-center pt-14 xl:justify-self-start'>
            <ul className='flex gap-9 text-nav2-mobile md:text-nav2-tablet uppercase'>
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
          <h4
            className={`${bellefair.className} text-accent2-mobile pt-7 uppercase md:text-accent2-tablet lg:text-accent2-desktop`}
          >
            {destinations[destIndex(dest)].destination}
          </h4>
          <p
            className={`${barlow.className} min-h-[7.85rem] self-center text-para-mobile text-light md:text-para-tablet lg:text-para-desktop`}
          >
            {destinations[destIndex(dest)].description}
          </p>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 pt-6 mt-7 self-end border-t border-[#383B4B]'>
            <div>
              <p className='sub-h2 text-light'>Avg. Distance</p>
              <p className={`${bellefair.className} sub-h1`}>
                {destinations[destIndex(dest)].distance}
              </p>
            </div>
            <div>
              <p className='sub-h2 text-light'>Est. Travel Time</p>
              <p className={`${bellefair.className} sub-h1`}>
                {destinations[destIndex(dest)].time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
