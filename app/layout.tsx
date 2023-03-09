import Avatar from './Components/Avatar'
import LocationIcon from './Components/Icons/Location'
import Notifications from './Components/Notifications'
import './globals.css'

import { Poppins } from 'next/font/google'
import { MenuProvider } from './context/menu'
import Menu from './Components/Menu/Menu'
import Navbar from './Components/Navbar/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata = {
  title: 'Servicios libres',
  description: 'Bla bla bla...'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <MenuProvider>
      <html lang="es" className={poppins.className}>
        <body className="h-full max-w-md w-full bg-gray-100 mx-auto flex flex-col gap-6 relative overflow-hidden">
          <header className="overflow-hidden rounded-tl-3xl rounded-tr-3xl bg-white w-full h-24 absolute bottom-0 left-0 right-0 z-30 shadow-2xl">
            <Navbar />
          </header>
          <div className="mb-24 overflow-y-auto overflow-x-hidden">
            <div className="w-full flex justify-between items-center p-4">
              <Avatar img="/images/avatar-placeholder.png" text="Logueate..." />
              <div className="flex gap-2">
                <Notifications />
                <LocationIcon
                  width={20}
                  height={20}
                  color={{ firstColor: '#888' }}
                />
              </div>
            </div>
            <Menu />
            {children}
          </div>
        </body>
      </html>
    </MenuProvider>
  )
}
