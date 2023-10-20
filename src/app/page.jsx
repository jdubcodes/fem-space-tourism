import Header from './components/Header'

export default function Home() {
  return (
    <main
      className={`h-screen w-screen bg-[url("/home/background-home-desktop.jpg")] bg-cover`}
    >
      <Header />
    </main>
  )
}
