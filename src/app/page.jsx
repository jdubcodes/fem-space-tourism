import { barlowCondensed, barlow, bellefair } from './fonts'

export default function Home() {
  return (
    <main className='page-container border border-[#54b2ec] h-screen absolute top-0'>
      <div className='sticky bottom-0 grid grid-cols-2 h-full w-full place-items-end m-w-6xl border border-[#e54d4d]'>
        <div className='px-10'>
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

        <div
          className={`${bellefair.className} w-[17.125rem] h-[17.125rem] flex justify-center items-center bg-white rounded-full uppercase text-h4 tracking-[0.125rem] text-[#0B0D17] cursor-pointer`}
        >
          Explore
          <span className='absolute w-[17.125rem] h-[17.125rem] opacity-0 bg-white rounded-full hover:opacity-[0.1036] hover:w-[28.125rem] hover:h-[28.125rem] origin-center duration-700 ease-in-out z-[1]'></span>
        </div>
      </div>
    </main>
  )
}
