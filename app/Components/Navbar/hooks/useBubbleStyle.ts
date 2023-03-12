import { useEffect, useRef, useState } from 'react'

const WIDTH_OF_BUBBLE = 100

export const useWidth = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(document.body.clientWidth)
    const handleResize = () => {
      setWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return width
}

export const useBubbleStyle = ({ navEl }: { navEl: React.RefObject<HTMLElement> }) => {
  const [selected, setSelected] = useState(1)
  const [selectedIcons, setSelectedIcons] = useState('home')
  const [styles, setStyles] = useState({})
  const width = useWidth()
  const quantityOfItems = useRef<number>()
  const widthOfItem = useRef<number>()

  const handleIcons = ({ index, name }: { index: number; name: string }) => {
    setSelectedIcons(name)
    setSelected(index + 1)
  }

  useEffect(() => {
    quantityOfItems.current ||= navEl.current?.querySelector('ul')?.children.length || 0
    widthOfItem.current ||= navEl.current?.querySelector('ul')?.querySelector('svg')?.clientWidth || 0

    const translate =
      selected * ((width - quantityOfItems.current * widthOfItem.current) / (quantityOfItems.current + 1)) -
      (WIDTH_OF_BUBBLE / 2 - widthOfItem.current / 2) +
      widthOfItem.current * (selected - 1)

    setStyles({
      transform: `translate(${translate}px, -${WIDTH_OF_BUBBLE}px)`
    })
  }, [width, selected, navEl])

  return { widthOfbubble: WIDTH_OF_BUBBLE, styles, selectedIcons, handleIcons }
}
