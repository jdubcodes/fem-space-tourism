import Link from 'next/link'
import { barlowCondensed, barlow, bellefair } from './fonts'

export default function Home() {
  return (
    <main className='py-[18vh] px-[8rem] lg:page-container h-screen w-screen absolute top-0 bg-[url("/home/background-home-desktop.jpg")] bg-cover bg-center overflow-hidden'>
      <div className='bottom-0 h-full w-full max-w-[69.125rem] mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-end gap-10 lg:gap-0 text-center lg:text-left'>
        <div>
          <p className={`${barlowCondensed.className} h5`}>
            So, you want to travel to
          </p>
          <span className={`${bellefair.className} h1`}>Space</span>
          <p className={`${barlow.className} body-text`}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link href='/destination'>
          <div
            className={`${bellefair.className} w-[17.125rem] h-[17.125rem] flex justify-center items-center bg-white rounded-full uppercase text-h4 tracking-[0.125rem] text-[#0B0D17] cursor-pointer z-20`}
          >
            Explore
            <span className='absolute w-[17.125rem] h-[17.125rem] opacity-0 bg-white rounded-full hover:opacity-[0.1036] hover:w-[28.125rem] hover:h-[28.125rem] origin-center duration-700 ease-in-out'></span>
          </div>
        </Link>
      </div>
    </main>
  )
}
