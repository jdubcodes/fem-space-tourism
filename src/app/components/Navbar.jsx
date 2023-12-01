'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useLayoutEffect } from 'react'
import { barlowCondensed } from '../../../config/fonts'

import { gsap } from 'gsap'

import MobileButton from './MobileButton'
import menuItems from '../../../config/menuItems'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navRef = useRef()
  const tl = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const nav = self.selector(navRef.current)
      tl.current = gsap.timeline().to(nav, { x: 0 }).reverse()
    }, navRef)
    return () => ctx.revert()
  }, [])

  const handleClick = () => {
    tl.current.reversed(!tl.current.reversed())
    setIsOpen(!isOpen)
  }

  return (
    <header className={`${barlowCondensed.className}`}>
      <Link
        href='/'
        className='w-10 h-10 absolute left-8 top-8 z-10 md:w-12 md:h-12 md:left-[6vw] md:translate-y-[1.28rem]'
      >
        <Image src='/shared/logo.svg' alt='Logo' width={48} height={48} />
      </Link>
      {/* mobile menu */}
      <div className='md:hidden'>
        {/* hamburger menu button */}
        <MobileButton handleClick={handleClick} isOpen={isOpen} />
        {/* mobile background */}
        <div
          className='h-screen p-12 nav-bg translate-x-60 fixed right-0 z-10'
          ref={navRef}
        >
          <nav className='pt-28'>
            <ul className='flex flex-col gap-8 nav-text'>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    onClick={handleClick}
                    className='hover:text-light'
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
      {/* desktop menu */}
      <div className='pt-nav-tablet w-full hidden z-20 absolute md:inline xl:p-nav-lg pc:p-nav-desktop'>
        <div className='flex items-center justify-end max-w-container ml-auto xl:justify-between xl:gap-8'>
          {/* accent line */}
          <span className='w-full h-nav-line max-w-line-tablet xl:max-w-line-desktop justify-self-start opacity-line bg-white hidden xl:inline'></span>
          <nav className='px-24 py-9 nav-bg xl:p-0 xl:bg-transparent'>
            <ul className='flex gap-7 text-nav lg:gap-10'>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={
                      pathname == item.path
                        ? 'pb-[2.125rem] border-b-[3px] border-white uppercase'
                        : 'pb-[2.125rem] border-b-[3px] border-hidden border-[#979797] ease-out uppercase hover:border-solid'
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
          </nav>
        </div>
        {/* Nav desktop background */}
        <div className='hidden w-[55vw] p-10 absolute right-0 top-7 nav-bg z-[-1] xl:inline'></div>
      </div>
    </header>
  )
}
