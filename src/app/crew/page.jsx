'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import crew from '../../../config/crew.js'
import { crewIndex } from '../../../config/findIndex.js'
import { barlowCondensed, barlow, bellefair } from '../../../config/fonts.js'

export default function page() {
  const [member, setMember] = useState('Douglas Hurley')

  useEffect(() => {
    crewIndex()
  }, [member])

  return (
    <main
      className={`${barlowCondensed.className} w-screen h-screen p-crew-mobile bg-crew-mobile bg-cover bg-center overflow-hidden sm:bg-crew-tablet md:h-screen md:p-crew-tablet lg:bg-crew-desktop xl:p-crew-desktop`}
    >
      <h5 className='pb-2 sm:pb-0 text-center text-desc-mobile md:text-left md:text-desc-tablet lg:text-desc-desktop'>
        <span className='opacity-25 mr-4'>02</span>Meet Your Crew
      </h5>
      <div className='h-full flex flex-col lg:flex-row'>
        {/* crew image */}
        <section className='w-full grid items-end grow md:h-crew-tablet border-b-[1px] border-[#383B4B] md:border-0 md:order-last overflow-hidden'>
          <div className='w-[65%] max-w-[245px] md:w-crew-tablet md:h-crew-img-tablet mx-auto lg:mx-0 flex items-end overflow-hidden relative aspect-[3/4]'>
            <Image
              src={crew[crewIndex(member)].path}
              alt={crew[crewIndex(member)].name}
              width={800}
              height={800}
              responsive
              className='absolute top-0 xs:bottom-0 xs:top-auto aspect-square xs:aspect-[3/4]'
            />
          </div>
        </section>
        {/* crew info */}
        <section className='flex flex-col items-center grow text-center lg:mb-auto lg:pt-36 lg:h-[486px] lg:max-w-[600px] lg:items-start'>
          <h4
            className={`${bellefair.className} text-1rem uppercase opacity-50 md:text-1.5rem lg:text-2rem`}
          >
            {crew[crewIndex(member)].title}
          </h4>
          <h4
            className={`${bellefair.className} pb-3 text-1.5rem uppercase whitespace-nowrap md:text-2.5rem lg:pb-8 lg:text-3.5rem`}
          >
            {crew[crewIndex(member)].name}
          </h4>
          <p
            className={`${barlow.className} h-40 text-para-mobile text-light md:h-20 md:text-para-tablet lg:text-para-desktop`}
          >
            {crew[crewIndex(member)].desc}
          </p>
          {/* menu buttons */}
          <div className='py-8 flex gap-6 -order-1 md:order-last lg:p-0 lg:gap-6 lg:mt-auto lg:-bottom-6'>
            {crew.map((crew, index) => (
              <button
                key={index}
                onClick={() => setMember(crew.name)}
                className={
                  member === crew.name
                    ? 'w-[10px] h-[10px] lg:w-4 lg:h-4 rounded-full bg-white'
                    : 'w-[10px] h-[10px] lg:w-4 lg:h-4 rounded-full bg-white opacity-[0.175]'
                }
              ></button>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
