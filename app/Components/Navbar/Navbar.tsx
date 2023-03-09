'use client'

import { useState } from 'react'
import AccountNavIcon from '../Icons/AccountNavIcon'
import BubbleNavIcon from '../Icons/BubbleNavIcon'
import HomeNavbarIcon from '../Icons/HomeNavbarIcon'
import LookNavIcon from '../Icons/LookNavIcon'
import MailboxNavIcon from '../Icons/MailboxNavIcon'
import NavIcons from './NavIcons'

const iconsNav = [
  {
    name: 'home',
    svg: HomeNavbarIcon
  },
  {
    name: 'look',
    svg: LookNavIcon
  },
  {
    name: 'mailbox',
    svg: MailboxNavIcon
  },
  {
    name: 'account',
    svg: AccountNavIcon
  }
]

function Navbar() {
  const [selectAnimation, setSelectAnimation] = useState('')
  const [selectedIcons, setSelectedIcons] = useState('home')

  const handleIcons = (name: string) => {
    setSelectedIcons(name)

    if (name === 'home') return setSelectAnimation('translate-x-[0px]')
    if (name === 'look') return setSelectAnimation('translate-x-[92px]')
    if (name === 'mailbox') return setSelectAnimation('translate-x-[190px]')
    if (name === 'account') return setSelectAnimation('translate-x-[285px]')
  }

  return (
    <nav className="h-full w-full">
      <ul className="h-2/3 flex justify-evenly items-center relative z-20">
        {iconsNav.map(({ name, svg }) => (
          <NavIcons
            key={'navIcons-' + name}
            name={name}
            active={name === selectedIcons}
            SvgComponent={svg}
            handleIcons={handleIcons}
          />
        ))}
      </ul>
      <div
        className={`transition-all duration-500 transform  absolute -bottom-[150px] -left-[60px] ${selectAnimation}`}
      >
        <BubbleNavIcon
          width={500}
          height={500}
          color={{ firstColor: '#DE8011' }}
        />
      </div>
    </nav>
  )
}
export default Navbar
