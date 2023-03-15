'use client'

import { MenuContext } from '@/context/menu'
import { useContext } from 'react'
import MenuAvatar from './MenuAvatar'
import MenuList from './MenuList'

const Menu = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
  return (
    <>
      {isMenuOpen && (
        <>
          <div className="bg-white w-[320px] absolute z-50 left-0 top-0 bottom-0 p-4 flex flex-col gap-5 pt-8">
            <MenuAvatar />
            <hr className="shadow-sm shadow-slate-300/20" />
            <MenuList />
          </div>
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/5 backdrop-blur-sm z-40" onClick={toggleMenu}></div>
        </>
      )}
    </>
  )
}

export default Menu
