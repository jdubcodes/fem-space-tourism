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
      className={`${barlowCondensed.className} min-h-screen w-screen p-crew-mobile grid items-center justify-items-center bg-crew-mobile bg-cover bg-center sm:bg-crew-tablet md:p-crew-tablet md:h-screen md:overflow-hidden lg:bg-crew-desktop xl:p-crew-desktop lg:justify-start`}
    >
      <h3 className='text-desc-mobile self-start md:justify-self-start md:text-desc-tablet lg:text-desc-desktop'>
        <span className='opacity-25 mr-4'>02</span>Meet Your Crew
      </h3>
      {/* main grid // 2 rows mobile + tablet // 2 columns desktop */}
      <div className='max-w-container mx-auto flex flex-col gap-20 text-center md:self-end lg:self-start lg:text-left'>
        {/* 2nd row or column flex */}
        <div className='flex flex-col lg:flex-row'>
          {/* crew image */}
          <div className='w-full md:h-crew-tablet self-center justify-self-end border-b-[1px] border-[#383B4B] md:border-0 md:order-last'>
            <div className='w-crew-mobile md:w-crew-tablet h-crew-mobile md:h-crew-tablet mx-auto lg:mx-0 flex items-end relative overflow-hidden'>
              <Image
                src={crew[crewIndex(member)].path}
                alt={crew[crewIndex(member)].name}
                width={800}
                height={800}
                layout='responsive'
                className={
                  member === 'Douglas Hurley'
                    ? 'absolute top-0 lg:bottom-0'
                    : member === 'Mark Shuttleworth'
                    ? 'absolute top-0'
                    : 'absolute bottom-0'
                }
              />
            </div>
          </div>
          {/* crew info */}
          <div className='flex flex-col items-center lg:mb-auto lg:pt-36 lg:h-[486px] lg:max-w-[600px] lg:items-start'>
            <h4
              className={`${bellefair.className} text-1rem uppercase opacity-50 md:text-1.5rem lg:text-2rem`}
            >
              {crew[crewIndex(member)].title}
            </h4>
            <h4
              className={`${bellefair.className} pb-3 lg:pb-8 text-1.5rem md:text-2.5rem lg:text-3.5rem uppercase whitespace-nowrap `}
            >
              {crew[crewIndex(member)].name}
            </h4>
            <p
              className={`${barlow.className} h-40 text-para-mobile md:h-20 md:text-para-tablet lg:text-para-desktop text-light `}
            >
              {crew[crewIndex(member)].desc}
            </p>
            {/* menu buttons */}
            <div className='flex gap-4 -order-1 py-8 md:order-last lg:p-0 lg:gap-6 lg:mt-auto lg:-bottom-6'>
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
          </div>
        </div>
      </div>
    </main>
  )
}
