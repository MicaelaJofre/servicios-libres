import Avatar from './Components/Avatar'
import LocationIcon from './Components/Icons/Location'
import Notifications from './Components/Notifications'
import './globals.css'

import { Poppins } from 'next/font/google'
import { MenuProvider } from './context/menu'

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
    <html lang="es" className={poppins.className}>
      <body className="h-auto max-w-md w-full bg-gray-100 rounded-xl mx-auto flex flex-col gap-6">
        <header className="w-full flex justify-between items-center p-4 ">
          <Avatar img="/images/avatar-placeholder.png" text="Logueate..." />
          <nav className="flex gap-2">
            <Notifications />
            <LocationIcon
              width={20}
              height={20}
              color={{ firstColor: '#888' }}
            />
          </nav>
        </header>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  )
}
