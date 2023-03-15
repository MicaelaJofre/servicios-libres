import './globals.css'

import { Poppins } from 'next/font/google'
import { MenuProvider } from './context/menu'
import Menu from './Components/Menu/Menu'
import ScrollableContainer from './Components/ScrollableContainer/ScrollableContainer'
import Header from './Components/Header/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata = {
  title: 'Servicios libres',
  description: 'Bla bla bla...'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <html lang="es" className={poppins.className + ' h-full'}>
        <body className="bg-gray-100 h-full max-w-md mx-auto w-full">
          <Header />
          <Menu />
          <ScrollableContainer>{children}</ScrollableContainer>
        </body>
      </html>
    </MenuProvider>
  )
}
