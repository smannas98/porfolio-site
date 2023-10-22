import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sean Mannas Portfolio',
  description: 'Browse current projects or learn more about me',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          <SideBar />
          { children }
        </main>
      </body>
    </html>
  )
}

export default RootLayout
