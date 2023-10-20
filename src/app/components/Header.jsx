import Image from 'next/image'
import { barlowCondensed } from '../fonts'

export default function Header() {
  return (
    <header className={`${barlowCondensed.className} pt-10 pl-[55px]`}>
      <div className='flex items-center justify-between'>
        <Image
          src='/shared/logo.svg'
          alt='Logo'
          width={48}
          height={48}
          className='mr-auto'
        />
        <span className='bg-white opacity-[0.2515] w-[29.5625rem] h-[0.0625rem] -mr-7 z-10 flex-shrink-0'></span>
        <nav className='w-[51.875rem] pl-[7.72rem] pr-[10.45rem] bg-[rgba(255, 255, 255, 0.04)] backdrop-blur-[40.774227142333984px] py-9'>
          <ul className='relative -left-7 flex justify-between gap-12 text-lg'>
            <li>
              <span className='font-bold mr-2'>00</span>HOME
            </li>
            <li>
              <span className='font-bold mr-2'>01</span>DESTINATION
            </li>
            <li>
              <span className='font-bold mr-2'>02</span>CREW
            </li>
            <li>
              <span className='font-bold mr-2'>03</span>TECHNOLOGY
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
