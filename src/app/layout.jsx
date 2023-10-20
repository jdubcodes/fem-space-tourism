import './globals.css'

export const metadata = {
  title: 'Space Tourism',
  description: 'Frontend Mentor Space Tourism Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
