'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { barlowCondensed } from '../../lib/config/fonts'

import { gsap } from 'gsap'

import MobileButton from './MobileButton'
import menuItems from '../../lib/config/menuItems'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navRef = useRef()
  const lineRef = useRef()
  const bgRef = useRef()
  const menuRef = useRef()
  const tl = useRef()

  useGSAP(() => {
    gsap.to(lineRef.current, {
      x: '-33.75rem',
      opacity: '0.2515',
      duration: 0.75,
      ease: 'power4.easeInOut',
    })
    gsap.to(bgRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: 'power4.easeinOut',
    })
    gsap.to(menuRef.current, {
      opacity: 1,
      duration: 1.55,
      delay: 0.75,
      ease: 'power4.easeinOut',
    })

    const ctx = gsap.context((self) => {
      const nav = self.selector(navRef.current)
      tl.current = gsap.timeline().to(nav, { x: 0 }).reverse()
    }, navRef)
    return () => ctx.revert()
  })

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
          ref={navRef}
          className='h-screen p-12 nav-bg translate-x-60 fixed right-0 z-10'
        >
          <nav className='pt-28'>
            <ul className='flex flex-col gap-8 text-nav uppercase'>
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
        <div className='ml-auto flex items-center justify-end max-w-container xl:mx-auto'>
          <nav
            ref={menuRef}
            className='px-12 py-[2.063rem] max-xl:nav-bg tab:px-14 lg:px-[3.75rem] xl:p-0 opacity-0'
          >
            <ul className='flex gap-7 text-nav lg:gap-10'>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={
                      pathname == item.path
                        ? 'pb-8 border-b-[3px] border-white uppercase'
                        : 'pb-8 border-b-[3px] border-hidden border-[#979797] ease-out uppercase hover:border-solid'
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
        <div
          ref={bgRef}
          className='hidden w-[55vw] p-[2.813rem] absolute right-0 top-[1.875rem] nav-bg z-[-1] xl:inline opacity-0'
        >
          {/* accent line */}
          <span
            ref={lineRef}
            className='w-[32.5rem] h-nav-line bg-white hidden xl:inline z-20 absolute -translate-x-[39.75rem] opacity-0'
          ></span>
        </div>
      </div>
    </header>
  )
}
