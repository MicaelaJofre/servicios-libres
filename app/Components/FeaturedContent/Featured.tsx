'use client'

import { useState } from 'react'
import AdBanner from './AdBanner'
import AppBanner from './AppBanner'

const randomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)]

const Featured = () => {
  const [ads, setAds] = useState(['/images/ad.png'])

  return (
    <div className='w-fit align-center rounded-xl justify-center flex overflow-hidden'>
      {ads.length > 0 ? <AdBanner img={randomElement(ads)} /> : <AppBanner />}
    </div>
  )
}

export default Featured

