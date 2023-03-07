import { IconProps } from './IconTypes'

function HomeNavbar({ color, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color.firstColor}
      viewBox="0 0 24 24"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"></path>
    </svg>
  )
}

export default HomeNavbar
/* <svg width="49.174" height="93.063" viewBox="176.183 221.574 49.174 93.063">
<path
  stroke="#000"
  d="M225.357 314.637c-61.4-3.437-47.66-38.847-48.254-93.063"
></path>
<path
  xmlns="http://www.w3.org/2000/svg"
  stroke="#000"
  d="M179.744 215.153c-1.939-1.939-1.975 54.595.912 57.482l.913 15.511c9.288 53.846 158.724 25.598 111.313-1.824l11.862-13.686c4.331-5.775 1.996-60.447-.912-56.57"
></path>
<path
  xmlns="http://www.w3.org/2000/svg"
  xmlnsBx="https://boxy-svg.com"
  stroke="#000"
  d="M220.207 156.525q21.404-22.504 42.809 0L317.5 213.81q21.404 22.504-21.405 22.504H187.128q-42.809 0-21.405-22.504z"
  bxShape="triangle 144.319 134.021 194.585 102.293 0.5 0.22 1@d96abab0"
></path>
</svg> */
