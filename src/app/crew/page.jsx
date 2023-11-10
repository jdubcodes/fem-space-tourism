'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import crew from '../../../config/crew.js'
import { crewIndex } from '../../../config/findIndex.js'
import { barlowCondensed, barlow, bellefair } from '../fonts'

export default function page() {
  const [member, setMember] = useState('Douglas Hurley')

  useEffect(() => {
    crewIndex()
  }, [member])

  return (
    <main
      className={`${barlowCondensed.className} min-h-screen p-crew-mobile md:p-crew-tablet xl:p-crew-desktop bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop bg-cover bg-center`}
    >
      <div className='h-full max-h-[700px] w-full max-w-container mx-auto grid grid-cols-1 grid-rows-3 gap-10 lg:grid-rows-1 lg:grid-cols-2 lg:gap-0 text-center lg:text-left'>
        {/* Left side */}
        <div className='flex flex-col w-full h-full lg:pr-10'>
          <h3 className='text-desc-mobile md:text-desc-tablet lg:text-desc-desktop'>
            <span className='opacity-25 mr-4'>02</span>Meet Your Crew
          </h3>
          <div className='flex flex-col mb-auto pt-36 h-[486px] row-start-3'>
            <h4
              className={`${bellefair.className} text-1rem md:text-1.5rem lg:text-2rem uppercase opacity-50`}
            >
              {crew[crewIndex(member)].title}
            </h4>
            <h4
              className={`${bellefair.className} pb-8 text-1.5rem md:text-2.5rem lg:text-3.5rem uppercase whitespace-nowrap`}
            >
              {crew[crewIndex(member)].name}
            </h4>
            <p
              className={`${barlow.className} text-para-mobile md:text-para-tablet lg:text-para-desktop text-light `}
            >
              {crew[crewIndex(member)].desc}
            </p>
            {/* Add menu buttons */}
            <div className='flex gap-6 mt-auto relative -bottom-6'>
              {crew.map((crew, index) => (
                <button
                  key={index}
                  onClick={() => setMember(crew.name)}
                  className={
                    member === crew.name
                      ? 'w-4 h-4 rounded-full bg-white'
                      : 'w-4 h-4 rounded-full bg-white opacity-[0.175]'
                  }
                ></button>
              ))}
            </div>
          </div>
        </div>
        {/* Crew image */}
        <Image
          src={crew[crewIndex(member)].path}
          alt={crew[crewIndex(member)].name}
          width={800}
          height={800}
          className='pl-10 self-end overflow-hidden row-start-2 border-b-[1px] border-light'
        />
      </div>
    </main>
  )
}
