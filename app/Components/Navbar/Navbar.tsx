'use client'

import { useState } from 'react'
import AccountNavIcon from '../Icons/AccountNavIcon'
import BubbleNavIcon from '../Icons/BubbleNavIcon'
import HomeNavbarIcon from '../Icons/HomeNavbarIcon'
import LookNavIcon from '../Icons/LookNavIcon'
import MailboxNavIcon from '../Icons/MailboxNavIcon'

function Navbar() {
  const [selectAnimation, setSelectAnimation] = useState('')

  const handleAnimation = (num: number) => {
    if (num === 1) return setSelectAnimation('translate-x-[10px]')
    if (num === 2) return setSelectAnimation('translate-x-[110px]')
    if (num === 3) return setSelectAnimation('translate-x-[200px]')
    if (num === 4) return setSelectAnimation('translate-x-[295px]')
  }

  return (
    <section className="rounded-tl-3xl rounded-tr-3xl bg-white tex w-full h-24 relative overflow-hidden">
      <div className="h-2/3 flex justify-evenly items-center relative z-20">
        <div
          onClick={() => {
            handleAnimation(1)
          }}
        >
          <HomeNavbarIcon
            width={40}
            height={40}
            color={{ firstColor: '#FDA63F' }}
          />
        </div>
        <div
          onClick={() => {
            handleAnimation(2)
          }}
        >
          <LookNavIcon
            width={25}
            height={25}
            color={{ firstColor: '#FDA63F' }}
          />
        </div>
        <div
          onClick={() => {
            handleAnimation(3)
          }}
        >
          <MailboxNavIcon
            width={30}
            height={30}
            color={{ firstColor: '#FDA63F' }}
          />
        </div>
        <div
          onClick={() => {
            handleAnimation(4)
          }}
        >
          <AccountNavIcon
            width={30}
            height={30}
            color={{ firstColor: '#FDA63F' }}
          />
        </div>
      </div>
      <div
        className={`transition-all duration-500 transform  absolute -bottom-[150px] -left-[70px] ${selectAnimation}`}
      >
        <BubbleNavIcon
          width={500}
          height={500}
          color={{ firstColor: '#FDA63F' }}
        />
      </div>
    </section>
  )
}
/* ${
  selectAnimation ? 'translate-x-4' : 'translate-x-16'
} */
export default Navbar
