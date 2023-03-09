'use client'

import { useState } from 'react'
import GearIcon from '../Icons/GearIcon'
import HearthIcon from '../Icons/HearthIcon'
import TermsAndConditionsIcon from '../Icons/TermsAndConditionsIcon'

const items = [
  {
    name: 'favoritos',
    Icon: HearthIcon,
    url: '/favorites'
  }, {
    name: 'configuración',
    Icon: GearIcon,
    url: '/configuration'
  }, {
    name: 'términos & condiciones',
    Icon: TermsAndConditionsIcon,
    url: '/termsandconditions'
  }
]

const MenuList = () => {
  const [selected, setSelected] = useState('favoritos')
  const handleClick = ({ name }: { name: string }) => {
    setSelected(name)
  }

  return (
    <ul className='flex flex-col gap-4'>
      {items.map(({ name, Icon, url }) => (
        <li
          key={`menu-${name}`}
          className={`flex gap-4 px-5 py-3 rounded-xl items-center cursor-pointer ${
            selected === name
              ? 'bg-orange-gradient text-white'
              : 'bg-transparent text-[#222]'
          }`}
          onClick={() => handleClick({ name })}
        >
          <Icon
            width={23}
            height={23}
            color={{ firstColor: selected === name ? 'white' : '#222' }}
          />
          <p className="text-lg capitalize">{name}</p>
        </li>
      ))}
    </ul>
  )
}

export default MenuList
