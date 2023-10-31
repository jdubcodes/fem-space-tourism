'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import destinations from '../../../config/destinations'
import { barlowCondensed, barlow, bellefair } from '../fonts'

export default function page() {
  const [dest, setDest] = useState('Moon')

  const destIndex = () => {
    if (dest === 'Moon') {
      return 0
    } else if (dest === 'Mars') {
      return 1
    } else if (dest === 'Europa') {
      return 2
    }
    return 3
  }

  useEffect(() => {
    destIndex()
  }, [dest])

  console.log(destIndex())
  console.log(dest)

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
            src={destinations[destIndex()].path}
            alt={`${destinations[destIndex()].destination}`}
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
          <h4 className={`${bellefair.className} h2`}>
            {destinations[destIndex()].destination}
          </h4>
          <p className={`${barlow.className} self-center body-text text-light`}>
            {destinations[destIndex()].description}
          </p>
          <div className='grid grid-cols-2 pt-6 self-end border-t border-[#383B4B]'>
            <div>
              <p className={`${barlowCondensed.className} sub-h2 text-light`}>
                Avg. Distance
              </p>
              <p className={`${bellefair.className} sub-h1`}>
                {destinations[destIndex()].distance}
              </p>
            </div>
            <div>
              <p className={`${barlowCondensed.className} sub-h2 text-light`}>
                Est. Travel Time
              </p>
              <p className={`${bellefair.className} sub-h1`}>
                {destinations[destIndex()].time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
