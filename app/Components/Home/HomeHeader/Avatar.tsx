'use client'

import { MenuContext } from '@/context/menu'
import Image from 'next/image'
import { useContext } from 'react'

type Props = {
  img: string
  text: string
}

const Avatar = ({ img, text }: Props) => {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <div className="flex gap-2">
      <div className="rounded-2xl border flex items-center justify-center p-0.5 cursor-pointer">
        <Image className="rounded-2xl" src={img} alt="profile-image" width={54} height={54} onClick={toggleMenu}></Image>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-gray-300 text-xs leading-3">¡Bienvenido!</p>
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  )
}

export default Avatar
