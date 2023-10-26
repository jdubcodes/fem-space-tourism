import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Space Tourism',
  description: 'Frontend Mentor | Space Tourism Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className=''>
      <body className='w-screen h-screen bg-[url("/home/background-home-desktop.jpg")] bg-cover'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
