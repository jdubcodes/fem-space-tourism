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
    para(member)
  }, [member])

  const para = (member) => {
    if (member === 'Douglas Hurley') {
      return '7rem'
    } else if (member === 'Mark Shuttleworth') {
      return '5rem'
    } else if (member === 'Victor Glover') {
      return '3rem'
    } else {
      return '6rem'
    }
  }

  return (
    <main
      className={`${barlowCondensed.className} w-screen h-screen p-crew-small bg-crew-mobile bg-cover bg-center overflow-hidden xs:p-crew-mobile sm:bg-crew-tablet md:h-screen md:p-crew-tablet lg:bg-crew-desktop xl:p-crew-desktop`}
    >
      <h1 className='mb-2 uppercase sm:pb-0 text-center text-sub-mobile md:text-sub-tablet xl:text-sub-desktop xl:text-left'>
        <span className='opacity-25 mr-4'>02</span>Meet Your Crew
      </h1>
      <div className='h-full flex flex-col md:items-center xl:flex-row'>
        {/* crew image */}
        <section className='w-full grid grow border-b-[1px] border-[#383B4B] overflow-hidden md:h-crew-tablet md:border-0 md:order-last xl:justify-items-end xl:flex-1'>
          <div className='w-[13.875rem] h-[273px] mx-auto flex items-end overflow-hidden relative md:w-crew-tablet md:h-crew-img-tablet xl:mx-0'>
            <Image
              src={crew[crewIndex(member)].path}
              alt={crew[crewIndex(member)].name}
              width={500}
              height={500}
              sizes='(max-width: 768px) 428px, 568px'
              className={
                member === 'Douglas Hurley'
                  ? 'absolute top-0'
                  : member === 'Mark Shuttleworth'
                  ? 'absolute top-0 sm:bottom-0'
                  : 'absolute bottom-0 xs:top-auto'
              }
            />
          </div>
        </section>
        {/* crew info */}
        <section className='flex flex-col items-center grow text-center md:pt-[3.75rem] md:max-w-crew-tablet xl:mb-auto xl:pt-36 xl:h-[486px] xl:max-w-[600px] xl:items-start xl:flex-1'>
          <h2
            className={`${bellefair.className} text-1rem uppercase opacity-50 md:text-1.5rem xl:text-[2rem]`}
          >
            {crew[crewIndex(member)].title}
          </h2>
          <h2
            className={`${bellefair.className} pb-2 xs:pb-3 text-[1.5rem] uppercase whitespace-nowrap md:text-[2.5rem] xl:pb-8 xl:text-[3.5rem]`}
          >
            {crew[crewIndex(member)].name}
          </h2>
          <p
            className={`${
              barlow.className
            } h-40 text-para-mobile text-light text-balance md:h-20 md:text-para-tablet sm:max-w-[37rem] xl:text-para-desktop xl:text-start md:px-[${para(
              member
            )}]`}
          >
            {crew[crewIndex(member)].desc}
          </p>
          {/* menu buttons */}
          <div className='py-5 flex gap-6 -order-1 xs:py-8 md:py-10 md:order-last xl:p-0 xl:gap-6 xl:mt-auto xl:-bottom-6'>
            {crew.map((crew, index) => (
              <button
                key={index}
                onClick={() => setMember(crew.name)}
                className={
                  member === crew.name
                    ? 'w-[10px] h-[10px] xl:w-4 xl:h-4 rounded-full bg-white'
                    : 'w-[10px] h-[10px] xl:w-4 xl:h-4 rounded-full bg-white opacity-[0.175]'
                }
              ></button>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
