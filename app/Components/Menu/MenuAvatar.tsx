import { MenuContext } from '@/context/menu'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

const MenuAvatar = () => {
  const { toggleMenu } = useContext(MenuContext)
  return (
    <section className="p-2 border border-orange-light rounded-2xl flex gap-2">
      <div className="rounded-2xl h-fit overflow-hidden cursor-pointer">
        <Image src="/images/avatar-placeholder.png" alt="avatar image" width={68} height={68} />
      </div>
      <div className="flex flex-col justify-between py-1">
        <p className="font-bold leading-4">Jimmy Sulivan</p>
        <p className="text-gray-400 text-xs leading-4">placeholder@gmail.com</p>
        <Link href="/" className="text-sm text-blue-500 font-semibold leading-4 underline" onClick={toggleMenu}>
          Edit
        </Link>
      </div>
    </section>
  )
}

export default MenuAvatar
