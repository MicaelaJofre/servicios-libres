import { IconProps } from './IconTypes'

function BubbleNavIcon({ color, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      width={width}
      height={height}
      fill={color.firstColor}
    >
      <path d="M0 302.781c76.635 0 89.52-89.088 150-89.088s81.825 89.088 150 89.088Z" />
    </svg>
  )
}

export default BubbleNavIcon
