import '/styles/globals.css';
import Nav from '/components/Nav';
import Sidebar from '/components/Sidebar';

export const metadata = {
  title: 'Sean Mannas Portfolio',
  description: 'Browse current projects or learn more about me',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className="flex h-full">
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app h-full min-h-full'>
          <Nav />
          <div className="flex w-full h-full">
            <Sidebar />
            { children }
          </div>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
