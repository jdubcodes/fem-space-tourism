import Image from 'next/image'
import Link from 'next/link'
import { barlowCondensed } from '../fonts'

export default function Navbar() {
  return (
    <nav className={`${barlowCondensed.className} pt-16 px-[10.45rem]`}>
      <div className='flex items-center justify-end max-w-[69.125rem] mx-auto'>
        <Link href='/' className='z-10 absolute left-11'>
          <Image src='/shared/logo.svg' alt='Logo' width={48} height={48} />
        </Link>
        <ul className='flex gap-14 text-lg z-20'>
          <li>
            <Link href='/'>
              <span className='font-bold mr-2'>00</span>HOME
            </Link>
          </li>
          <li>
            <Link href='/destination'>
              <span className='font-bold mr-2'>01</span>DESTINATION
            </Link>
          </li>
          <li>
            <Link href='/crew'>
              <span className='font-bold mr-2'>02</span>CREW
            </Link>
          </li>
          <li>
            <Link href='/technology'>
              <span className='font-bold mr-2'>03</span>TECHNOLOGY
            </Link>
          </li>
        </ul>
        <div className='absolute right-0 nav-bg z-10'>
          <span className='w-[30vw] h-[0.0625rem] fixed left-0 -translate-x-[28vw] bg-white opacity-[0.2515] z-20'></span>
        </div>
      </div>
    </nav>
  )
}
