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
    <main className='pt-[25vh] px-[10.45rem] h-screen w-screen absolute top-0 bg-crew-desktop bg-cover bg-center overflow-hidden'>
      <div className='bottom-0 h-full max-h-[700px] w-full max-w-[69.125rem] mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0 text-center lg:text-left'>
        {/* Left side */}
        <div className='flex flex-col w-full h-full pr-10'>
          <h3 className={`${barlowCondensed.className} h5`}>
            <span className='opacity-25 mr-4'>02</span>Meet Your Crew
          </h3>
          <div className='flex flex-col mb-auto pt-36 h-[486px]'>
            <h4 className={`${bellefair.className} h4 opacity-50`}>
              {crew[crewIndex(member)].title}
            </h4>
            <h4 className={`${bellefair.className} h3 whitespace-nowrap pb-8`}>
              {crew[crewIndex(member)].name}
            </h4>
            <p className={`${barlow.className} body-text`}>
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
        {/* Right side */}
        <Image
          src={crew[crewIndex(member)].path}
          alt={crew[crewIndex(member)].name}
          width={800}
          height={800}
          className='pl-10 self-end relative bottom-0 right-0 overflow-hidden'
        />
      </div>
    </main>
  )
}
