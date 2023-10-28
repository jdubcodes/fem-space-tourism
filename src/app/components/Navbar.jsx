import Image from 'next/image'
import Link from 'next/link'
import { barlowCondensed } from '../fonts'

import menuItems from '../../../config/menuItems'

export default function Navbar() {
  return (
    <nav className={`${barlowCondensed.className} pt-16 px-[10.45rem]`}>
      <Link href='/' className='z-10 absolute left-[6vw] -translate-y-[12px]'>
        <Image src='/shared/logo.svg' alt='Logo' width={48} height={48} />
      </Link>
      <div className='flex items-center justify-between max-w-[69.125rem] mx-auto'>
        <span className='left-0 w-[478px] h-[0.0625rem] bg-white opacity-[0.2515] z-20'></span>
        <ul className='flex gap-14 text-lg z-20'>
          {menuItems.map((item) => (
            <li>
              <Link
                href={item.path}
                className='pb-9 border-b-[3px] border-hidden border-[#979797] hover:border-solid ease-out uppercase'
              >
                <span className='font-bold mr-2'>{item.number}</span>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className='absolute right-0 nav-bg z-10'></div>
      </div>
    </nav>
  )
}
