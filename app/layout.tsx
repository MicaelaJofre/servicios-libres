import Avatar from './Components/Avatar'
import MenuIcon from './Components/Icons/MenuIcon'
import Notifications from './Components/Notifications'
import './globals.css'

export const metadata = {
  title: 'Servicios libres',
  description: 'Bla bla bla...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="h-full max-w-md w-full bg-gray-100 rounded-xl mx-auto p-4 flex flex-col gap-2">
        <header className='w-full flex justify-between items-center'>
          <Avatar img='/images/avatar-placeholder.png' text='Logueate...' />
          <nav className='flex gap-2'>
            <Notifications />
            <MenuIcon color='#888'/>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
