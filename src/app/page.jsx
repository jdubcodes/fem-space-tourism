import Link from 'next/link'
import { barlowCondensed, barlow, bellefair } from './fonts'

export default function Home() {
  return (
    <main className='p-main-mobile sm:p-main-tablet lg:p-main-desktop h-screen w-screen absolute top-0 bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover bg-center overflow-hidden'>
      <div className='mx-auto h-full w-full max-w-container grid grid-cols-1 text-center lg:gap-12 xl:gap-0 xl:grid-cols-2 xl:place-items-end xl:text-left'>
        <div className='self-end xl:pr-20'>
          <p
            className={`${barlowCondensed.className} text-sm-accent-mobile md:text-sm-accent-tablet lg:text-sm-accent-desktop`}
          >
            So, you want to travel to
          </p>
          <span
            className={`${bellefair.className} text-lg-accent-mobile md:text-lg-accent-desktop`}
          >
            Space
          </span>
          <p
            className={`${barlow.className} text-para-mobile md:text-para-tablet lg:text-para-desktop`}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          href='/destination'
          className='justify-self-center self-end xl:justify-self-end'
        >
          <div
            className={`${bellefair.className} btn-mobile md:btn-tablet lg:btn-desktop bg-white rounded-full`}
          >
            Explore
            <span className='absolute btn-mobile md:btn-tablet lg:btn-desktop opacity-0 bg-white rounded-full hover:btn-hover-mobile md:hover:btn-hover-tablet lg:hover:btn-hover-desktop hover:opacity-btn duration-700 origin-center ease-in-out'></span>
          </div>
        </Link>
      </div>
    </main>
  )
}
