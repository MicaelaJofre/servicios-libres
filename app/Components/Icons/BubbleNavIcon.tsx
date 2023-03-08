import { IconProps } from './IconTypes'

function BubbleNavIcon({ color, width, height }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={width}
      height={height}
      fill={color.firstColor}
    >
      <path d="M18.3 70.1c5.109 0 5.809-3.8 10-3.8s5.455 3.8 10 3.8z"></path>
    </svg>
  )
}

export default BubbleNavIcon
