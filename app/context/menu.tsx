'use client'

import { createContext, useState } from 'react'

type MenuContextType = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

type MenuProviderProps = {
  children: React.ReactNode
}

export const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  toggleMenu: () => {}
})

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const value: MenuContextType = {
    isMenuOpen,
    toggleMenu
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
