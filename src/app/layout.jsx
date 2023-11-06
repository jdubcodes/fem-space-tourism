import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Space Tourism',
  description: 'Frontend Mentor | Space Tourism Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='min-h-screen'>
      <body className='w-full h-full min-h-screen'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
