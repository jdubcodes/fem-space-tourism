import { Barlow_Condensed } from 'next/font/google'
import Header from './components/Header'

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main
      className={`${barlowCondensed.className} h-screen w-screen bg-[url("/home/background-home-desktop.jpg")] bg-cover`}
    >
      <Header />
    </main>
  )
}
