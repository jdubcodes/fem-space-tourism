import Image from 'next/image'
import Link from 'next/link'
import { barlowCondensed } from '../fonts'

export default function Navbar() {
  return (
    <nav className={`${barlowCondensed.className} pt-10 pl-[55px]`}>
      <div className='flex items-center justify-between'>
        <Link href='/' className='z-10 mr-auto'>
          <Image src='/shared/logo.svg' alt='Logo' width={48} height={48} />
        </Link>
        <span className='translate-x-8 bg-white opacity-[0.2515] w-[450px] h-[0.0625rem] z-20 flex-shrink-0'></span>
        <div className='w-[51.875rem] pl-[7.72rem] pr-[10.45rem] bg-[rgba(255, 255, 255, 0.04)] backdrop-blur-[5.5rem] py-9 z-10'>
          <ul className='relative -left-7 flex justify-between gap-12 text-lg'>
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
        </div>
      </div>
    </nav>
  )
}
