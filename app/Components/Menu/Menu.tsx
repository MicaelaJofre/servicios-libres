'use client'

import { MenuContext } from '@/app/context/menu'
import { useContext } from 'react'
import MenuAvatar from './MenuAvatar'
import MenuList from './MenuList'

const Menu = () => {
  const { isMenuOpen } = useContext(MenuContext)
  return (
    <>
    {
      isMenuOpen &&
        <div className="bg-white w-[350px] h-full absolute z-50 left-0 -top-[115px] p-4 flex flex-col gap-5 pt-8">
              <MenuAvatar />
              <hr className="shadow-sm shadow-slate-300/20"/>
              <MenuList />
            </div>
    }
    </>
  )
}

export default Menu
