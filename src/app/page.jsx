import Link from 'next/link'
import { barlowCondensed, barlow, bellefair } from '../../config/fonts'

export default function Home() {
  return (
    <main
      className={`${barlowCondensed.className} p-home-short xs:p-home-mobile sm:p-home-tablet lg:p-home-desktop h-screen w-screen bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover bg-center`}
    >
      <div className='mx-auto h-full w-full max-w-container grid grid-cols-1 text-center lg:gap-12 xl:gap-0 xl:grid-cols-2 xl:place-items-end xl:text-left'>
        <div className='flex flex-col gap-2 self-end sm:gap-4 md:self-center xl:self-end xl:pr-20'>
          <p className='text-sub-mobile sm:text-sub-tablet lg:text-sub-desktop text-light uppercase'>
            So, you want to travel to
          </p>
          <span
            className={`${bellefair.className} text-accent1-mobile sm:text-[6.75rem] md:text-accent1-tablet text-white uppercase`}
          >
            Space
          </span>
          <p
            className={`${barlow.className} max-w-md self-center text-para-mobile text-light text-balance sm:text-para-tablet md:max-w-xl lg:text-para-desktop`}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          href='/destination'
          className='justify-self-center self-end md:self-center xl:justify-self-end xl:self-end'
        >
          {/* explore button */}
          <div
            className={`${bellefair.className} btn-mobile-sm xs:btn-mobile md:btn-tablet xl:btn-desktop bg-white rounded-full`}
          >
            Explore
            {/* hover effect */}
            <span className='absolute btn-mobile md:btn-tablet xl:btn-desktop opacity-0 bg-white rounded-full hover:btn-hover-mobile md:hover:btn-hover-tablet xl:hover:btn-hover-desktop hover:opacity-btn duration-700 origin-center ease-in-out'></span>
          </div>
        </Link>
      </div>
    </main>
  )
}
