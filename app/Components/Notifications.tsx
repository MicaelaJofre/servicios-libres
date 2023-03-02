'use client'

import { useState } from "react"
import BellIcon from "./Icons/BellIcon"

const Notifications = () => {
  const [notifications, setNotifications] = useState(['notification'])

  return (
    <div className="relative">
      <div className={notifications.length > 0 ? 'after:content-[""] after:block after:absolute after:w-2 after:h-2 after:right-0 after:top-0 after:bg-red-400 after:rounded-full' : ''}><BellIcon width={20} height={20} color={{ firstColor: '#888'}}/></div>
    </div>
  )
}

export default Notifications