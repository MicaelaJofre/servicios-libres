import { IconProps } from "./IconTypes"

const LensIcon = ({ color, width, height }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    width={width}
    height={height}
    fill={color.firstColor}
  >
    <path d="M3 109.646C3 50.747 50.747 3 109.646 3s106.647 47.747 106.647 106.646c0 24.482-8.25 47.038-22.12 65.038l47.687 47.687c10.853 10.853-5.603 27.31-16.457 16.457l-47.356-47.356c-18.515 15.494-42.369 24.82-68.4 24.82C50.746 216.293 3 168.547 3 109.647Zm106.646 83.8c46.281 0 83.8-37.519 83.8-83.8s-37.519-83.799-83.8-83.799-83.799 37.518-83.799 83.8 37.518 83.799 83.8 83.799Z" />
  </svg>
)

export default LensIcon
