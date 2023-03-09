'use client'

import { useContext } from 'react'
import Categories from './Components/Categories/Categories'
import Featured from './Components/FeaturedContent/Featured'
import Menu from './Components/Menu/Menu'
import SearchBar from './Components/SearchBar'
import { MenuContext } from './context/menu'

export default function Home() {
  const { isMenuOpen } = useContext(MenuContext)
  return (
    <>
      <main className='flex flex-col gap-8 p-4 relative'>
        <section className={`${isMenuOpen && 'blur-sm'}`}>
        <SearchBar />
        <Featured />
        <Categories />
        </section>
        <Menu/>
      </main>
    </>
  )
}
