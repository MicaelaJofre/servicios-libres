import { IconProps } from './IconTypes'

const TermsAndConditionsIcon = ({ color, width, height }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    width={width}
    height={height}
    fill="none"
  >
    <path
      d="M21.308 8.246v-.861C21.065 3.446 18.034.246 14.155 0h-2.06C10.276 0 7.73.246 6.034.37s-2.91 1.353-3.031 2.953c-.121 1.97-.364 5.785-.364 8.615 0 2.708.243 6.524.364 8.616.121 1.6 1.333 2.954 2.91 3.077 1.696.123 4.242.369 6.06.369s4.364-.246 6.061-.37c1.576-.122 2.789-1.476 2.91-3.076.121-1.97.364-5.785.364-8.616.12-.984 0-2.215 0-3.692Zm-12.971 5.17h2.424c.485 0 .97.369.97.984s-.364.985-.97.985H8.337c-.485 0-.97-.37-.97-.985s.485-.985.97-.985Zm4.849 5.66h-4.85c-.484 0-.969-.368-.969-.984s.364-.984.97-.984h4.849c.484 0 .97.369.97.984s-.486.985-.97.985ZM15.61 7.263c-.849 0-1.455-.739-1.455-1.477V1.846a5.881 5.881 0 0 1 5.334 5.416H15.61Z"
      fill={color.firstColor}
    />
  </svg>
)

export default TermsAndConditionsIcon
