import { IconProps } from './IconTypes'

const BellIcon = ({ color, width, height }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    fill={color.firstColor}
    width={width}
    height={height}
  >
    <path d="M41.829 101.094C41.829 45.261 79.066 0 125 0s83.171 45.261 83.171 101.094S307.221 202.188 125 202.188s-83.171-45.261-83.171-101.094Z" />
    <circle transform="matrix(.84706 0 0 .84706 125 228.775)" r={25.057} />
  </svg>
)

export default BellIcon
