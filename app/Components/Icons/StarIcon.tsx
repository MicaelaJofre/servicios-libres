import { IconProps } from "./IconTypes"

const StarIcon = ({width, height, color}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 250"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      width={width}
      height={height}
    >
    <path fill={color.firstColor} d="M125.1 198.453c-22.21 13.44-66.927 39.582-74.03 39.441s14.138-82.434 14.138-82.434S5.316 103.641 5.316 97.08s82.769-12.027 82.769-12.027 29.26-75.001 37.015-75.001v188.4Z" />
    <path fill={color.secondColor} d="M124.9 198.453c22.21 13.44 66.927 39.582 74.03 39.441s-14.138-82.434-14.138-82.434 59.892-51.819 59.892-58.38-82.769-12.027-82.769-12.027-29.26-75.001-37.015-75.001v188.4Z" />
  </svg>
  )
}

export default StarIcon
