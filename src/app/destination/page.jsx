'use client'

import Image from 'next/image'

export default function page() {
  return (
    <main className='pt-[25vh] px-[10.45rem] pb-[7rem] h-screen w-screen absolute top-0 bg-[url("/destination/background-destination-desktop.jpg")] bg-cover bg-center overflow-hidden'>
      <div className='bottom-0 h-full w-full max-w-[69.125rem] mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-start gap-10 lg:gap-0 text-center lg:text-left'>
        {/* Left side */}
        <div className='grid w-full h-full'>
          <h2 className='h5 '>
            <span className='opacity-25 mr-4'>01</span>Pick your destination
          </h2>
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
          <nav className=''>
            <ul className='flex gap-9 nav-text color-light uppercase'>
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  )
}
