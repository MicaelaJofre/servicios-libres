'use client'

import { useState } from 'react'
import AdBanner from './AdBanner'
import AppBanner from './AppBanner'

const randomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)]

const Featured = () => {
  const [ads, setAds] = useState([])

  return (
    <div className='w-full align-center rounded-3xl justify-center flex overflow-hidden'>
      {ads.length > 0 ? <AdBanner img={randomElement(ads)} /> : <AppBanner />}
    </div>
  )
}

export default Featured

