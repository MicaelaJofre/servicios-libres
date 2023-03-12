import { IconProps } from '../Icons/IconTypes'

type Props = {
  index: number
  name: string
  active: boolean
  SvgComponent: ({ color, width, height }: IconProps) => JSX.Element
  handleIcons: ({ index, name }: { index: number; name: string }) => void
}

const NavIcons = ({ index, name, active, SvgComponent, handleIcons }: Props) => {
  const handleClick = () => {
    handleIcons({ index, name })
  }

  return (
    <li onClick={handleClick}>
      <SvgComponent width={30} height={30} color={{ firstColor: active ? '#DE8011' : '#EEEDEF' }} />
    </li>
  )
}

export default NavIcons
