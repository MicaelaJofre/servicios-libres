import { IconProps } from "./IconTypes"

const VerifiedIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    width={width}
    height={height}
    fill={color.firstColor}
  >
    <path d="M25.057 121.84c0-1.74.006-58.446 0-60.165 0-18.36 86.714-53.82 99.943-53.82 13.41 0 99.943 35.92 99.943 53.82-.003 1.733 0 60.248 0 62 0 59.403-79.099 118.47-99.862 118.47S25.057 181.243 25.057 121.84Zm91.125 43.814c8.65 0 47.96-43.549 65.192-61.728 10.67-11.256-6.154-27.042-16.598-16.598l-48.594 48.594-31.937-31.352c-9.152-9.152-27.08 6.114-15.078 18.117s38.365 42.967 47.015 42.967Z" />
  </svg>
  )
}

export default VerifiedIcon