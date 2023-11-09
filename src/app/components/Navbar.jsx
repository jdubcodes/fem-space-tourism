'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { barlowCondensed } from '../fonts'

import menuItems from '../../../config/menuItems'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <Link
        href='/'
        className='z-10 absolute w-10 h-10 left-6 top-6 md:w-12 md:h-12 md:left-[6vw] md:translate-y-[28px]'
      >
        <Image src='/shared/logo.svg' alt='Logo' width={48} height={48} />
      </Link>
      {/* mobile menu */}
      <div>
        {/* hamburger button */}
        <div className='md:hidden'>
          <button
            onClick={handleClick}
            className='flex flex-col justify-center items-center absolute right-10 top-10 z-50'
          >
            <span
              className={`bg-light block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
                    }`}
            ></span>
            <span
              className={`bg-light block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-1 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
            ></span>
            <span
              className={`bg-light block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
                    }`}
            ></span>
          </button>
          {/* background */}
          <div
            className={
              isOpen
                ? 'w-[52vw] h-screen absolute top-0 right-0 nav-bg origin-right duration-300 tristion-all'
                : 'hidden'
            }
          >
            {/* desktop menu */}
            <nav className='pt-28'>
              <ul
                className={`${barlowCondensed.className} flex flex-col gap-8 nav-text z-20`}
              >
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      onClick={handleClick}
                      className='pb-9 uppercase'
                    >
                      <span className='font-bold mr-2'>{item.number}</span>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <nav
        className={`${barlowCondensed.className} pt-16 px-[3rem] md:px-[6rem] lg:px-[10.45rem] absolute`}
      >
        <div className='flex items-center justify-end xl:justify-between max-w-container mx-auto'>
          <span className='left-0 w-[478px] h-[0.0625rem] bg-white opacity-[0.2515] z-20 hidden xl:hidden'></span>
          <ul className='hidden md:flex gap-14 text-lg z-20'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={
                    pathname == item.path
                      ? 'pb-9 border-b-[3px] border-white uppercase'
                      : 'pb-9 border-b-[3px] border-hidden border-[#979797] hover:border-solid ease-out uppercase'
                  }
                >
                  <span className='font-bold mr-2 hidden xl:inline'>
                    {item.number}
                  </span>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className='hidden absolute right-0 w-[65vw] lg:w-[60vw] xl:w-[57vw] nav-bg z-10 md:inline-block'></div>
        </div>
      </nav>
    </header>
  )
}
