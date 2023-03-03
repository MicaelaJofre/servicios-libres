import { IconProps } from './IconTypes'

const LocationIcon = ({ color, width, height }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    width={width}
    height={height}
    fill={color.firstColor}
  >
    <path d="M18.184 102.334C18.184 45.817 64 0 120.518 0s102.334 45.817 102.334 102.334S138.085 250 120.518 250 18.184 158.852 18.184 102.334Zm102.334 40.824c28.794 0 52.136-23.342 52.136-52.135s-23.342-52.136-52.136-52.136-52.136 23.342-52.136 52.136 23.342 52.135 52.136 52.135Z" />
  </svg>
)

export default LocationIcon
