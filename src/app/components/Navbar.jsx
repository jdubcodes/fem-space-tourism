import Image from 'next/image'
import Link from 'next/link'
import { barlowCondensed } from '../fonts'

import menuItems from '../../../config/menuItems'

export default function Navbar() {
  return (
    <nav className={`${barlowCondensed.className} pt-16 px-[10.45rem]`}>
      <div className='flex items-center justify-end max-w-[69.125rem] mx-auto'>
        <Link href='/' className='z-10 absolute left-11'>
          <Image src='/shared/logo.svg' alt='Logo' width={48} height={48} />
        </Link>
        <ul className='flex gap-14 text-lg z-20'>
          {menuItems.map((item) => (
            <li>
              <Link
                href={item.path}
                className='pb-9 border-b-[3px] border-hidden border-[#979797] hover:border-solid ease-out'
              >
                <span className='font-bold mr-2'>{item.number}</span>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className='absolute right-0 nav-bg z-10'>
          <span className='w-[30vw] h-[0.0625rem] fixed left-0 -translate-x-[28vw] bg-white opacity-[0.2515] z-20'></span>
        </div>
      </div>
    </nav>
  )
}
