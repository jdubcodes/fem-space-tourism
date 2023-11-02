'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import crew from '../../../config/crew.js'

import { barlowCondensed, barlow, bellefair } from '../fonts'

export default function page() {
  const [member, setMember] = useState('Douglas Hurley')

  const crewIndex = () => {
    if (member === 'Douglas Hurley') {
      return 0
    } else if (member === 'Mark Shuttleworth') {
      return 1
    } else if (member === 'Victor Glover') {
      return 2
    }
    return 3
  }

  useEffect(() => {
    crewIndex()
  }, [member])

  console.log(crew.name)

  return (
    <main className='pt-[25vh] px-[10.45rem] h-screen w-screen absolute top-0 bg-[url("/crew/background-crew-desktop.jpg")] bg-cover bg-center overflow-hidden'>
      <div className='bottom-0 h-full w-full max-w-[69.125rem] mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-start gap-10 lg:gap-0 text-center lg:text-left'>
        {/* Left side */}
        <div className='flex flex-col w-full h-full pr-10'>
          <h3 className={`${barlowCondensed.className} h5`}>
            <span className='opacity-25 mr-4'>02</span>Meet Your Crew
          </h3>
          <div className='flex flex-col mb-auto pt-36'>
            <h4 className={`${bellefair.className} h4 opacity-50`}>
              {crew[crewIndex()].title}
            </h4>
            <h4 className={`${bellefair.className} h3 whitespace-nowrap pb-8`}>
              {crew[crewIndex()].name}
            </h4>
            <p className={`${barlow.className} body-text`}>
              {crew[crewIndex()].desc}
            </p>
            {/* Add menu buttons */}
            <div className='flex gap-6 fixed bottom-28'>
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
          src={crew[crewIndex()].path}
          alt={crew[crewIndex()].name}
          width={568}
          height={735}
          className='pl-10 self-end'
        />
      </div>
    </main>
  )
}
