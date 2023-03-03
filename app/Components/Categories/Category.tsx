import { IconProps } from "../Icons/IconTypes"

type Props = {
  name: string,
  active: boolean,
  SvgComponent: ({ color, width, height }: IconProps) => JSX.Element
  handleCategory: (name: string) => void
}

const Category = ({ name, active, SvgComponent, handleCategory }: Props) => {
  const handleClick = () => {
    handleCategory(name)
  }

  return (
    <div className="cursor-pointer flex flex-col items-center w-[75px] gap-3" onClick={handleClick}>
      <div className={`w-[75px] h-[75px] rounded-full flex items-center justify-center ${active ? 'bg-orange-gradient' : 'bg-[#EEEDEF]'}`}>
        {active
          ? <SvgComponent color={{ firstColor: 'white', secondColor: 'white' }} width={28} height={28} />
          : <SvgComponent color={{ firstColor: '#FF6A76', secondColor: '#FFC37B' }} width={28} height={28} />
        }
      </div>
      <p className="text-gray-400 text-sm font-semibold capitalize">{name}</p>
    </div>
    
  )
}

export default Category