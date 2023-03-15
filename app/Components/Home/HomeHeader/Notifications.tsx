'use client'

import { useEffect, useState } from 'react'
import BellIcon from '@icons/BellIcon'

const Notifications = () => {
  const [notifications, setNotifications] = useState<string[]>([])

  useEffect(() => {
    setNotifications(['notification'])
  }, [])

  return (
    <div className="relative">
      <div
        className={
          notifications.length > 0
            ? 'after:content-[""] after:block after:absolute after:w-2 after:h-2 after:right-0 after:top-0 after:bg-red-400 after:rounded-full'
            : ''
        }
      >
        <BellIcon width={24} height={24} color={{ firstColor: '#888' }} />
      </div>
    </div>
  )
}

export default Notifications
