import { IconProps } from '../Icons/IconTypes'

type Props = {
  name: string
  active: boolean
  SvgComponent: ({ color, width, height }: IconProps) => JSX.Element
  handleIcons: (name: string) => void
}

const NavIcons = ({ name, active, SvgComponent, handleIcons }: Props) => {
  const handleClick = () => {
    handleIcons(name)
  }

  return (
    <li onClick={handleClick}>
      <SvgComponent
        width={30}
        height={30}
        color={{ firstColor: active ? '#DE8011' : '#EEEDEF' }}
      />
    </li>
  )
}

export default NavIcons
