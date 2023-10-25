import { barlowCondensed, barlow, bellefair } from './fonts'

export default function Home() {
  return (
    <main className='pt-12 px-[10.3rem] pb-[8.2rem] flex justify-items-center'>
      <div className='grid grid-cols-2 h-full w-full place-items-end m-w-6xl'>
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
        </div>
      </div>
    </main>
  )
}
