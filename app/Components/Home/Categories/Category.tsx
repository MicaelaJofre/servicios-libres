import { IconProps } from '@icons/IconTypes'

type Props = {
  id: number
  name: string
  active: boolean
  SvgComponent: ({ color, width, height }: IconProps) => JSX.Element
  handleCategory: (name: string) => void
}

const Category = ({ id, name, active, SvgComponent, handleCategory }: Props) => {
  const handleClick = () => {
    handleCategory(name)
  }

  return (
    <div className="cursor-pointer flex flex-col items-center w-[75px] gap-3" onClick={handleClick}>
      <div
        className={`w-[65px] h-[65px] shadow-lg rounded-full flex items-center relative justify-center bg-orange-gradient after:absolute after:duration-500 after:-left-[1px] after:-top-[1px] after:-bottom-[1px] after:-right-[1px] after:rounded-full after:bg-[#EEEDEF] after:opacity-0 after:transition-all transition-all duration-500 ${
          !active ? 'after:opacity-100 shadow-gray-800/10' : 'shadow-[#FFC37B]/60'
        }`}
      >
        <SvgComponent
          id={id}
          color={{
            firstColor: active ? 'white' : '#FF6A76',
            secondColor: active ? 'white' : '#FFC37B'
          }}
          width={28}
          height={28}
        />
      </div>
      <p className="text-gray-400 text-sm font-semibold capitalize">{name}</p>
    </div>
  )
}

export default Category
