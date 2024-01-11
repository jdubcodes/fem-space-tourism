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

  const imgStyle = (member) => {
    if (member === 'Douglas Hurley') {
      return 'w-[200px] md:w-[426px] md:h-[534px] xl:w-[519px] xl:h-[712px]'
    } else if (member === 'Mark Shuttleworth') {
      return 'w-[184px] md:w-[369px] md:h-[532px] xl:w-[440px] xl:h-[644px]'
    } else if (member === 'Victor Glover') {
      return 'w-[220px] md:w-[433px] md:h-[532px] xl:w-[547px] xl:h-[643px]'
    } else {
      return 'w-[220px] md:w-[540px] md:h-[532px] xl:w-[583px] xl:h-[603px]'
    }
  }

  return (
    <main
      className={`${barlowCondensed.className} min-h-screen p-crew-small bg-crew-mobile bg-cover bg-center overflow-hidden xs:h-screen xs:p-crew-mobile sm:bg-crew-tablet md:h-screen md:p-crew-tablet lg:bg-crew-desktop pc:p-crew-desktop`}
    >
      <h1 className='mb-2 max-w-container uppercase sm:pb-0 text-center text-sub-mobile md:text-sub-tablet xl:m-auto xl:text-sub-desktop xl:text-left'>
        <span className='opacity-25 mr-4'>02</span>Meet Your Crew
      </h1>
      <div className='h-full max-w-container flex flex-col md:items-center xl:m-auto xl:flex-row pc:h-auto pc:border-b-[1px] pc:border-[#383B4B]'>
        {/* crew image */}
        <section className='w-full grid grow items-end border-b-[1px] border-[#383B4B] overflow-hidden md:h-crew-tablet md:border-0 md:order-last xl:h-[112%] xl:justify-items-end xl:flex-1 pc:h-auto'>
          <div className='w-[13.875rem] h-[273px] mx-auto flex justify-center items-end overflow-hidden relative md:w-crew-tablet md:h-crew-img-tablet xl:h-full xl:w-full xl:mx-0 xl:justify-end pc:h-[32.5rem] pc:relative'>
            <Image
              src={crew[crewIndex(member)].path}
              alt={crew[crewIndex(member)].name}
              width={620}
              height={715}
              sizes='(max-width: 768px) 226px, (max-width: 1440px) 540px, 615px'
              className={`${imgStyle(
                member
              )} pc:h-auto pc:scale-75 pc:absolute pc:top-0`}
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
