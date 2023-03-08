import MenuAvatar from './MenuAvatar'
import MenuList from './MenuList'

const Menu = () => {
  return (
    <div className="bg-white w-[350px] h-full absolute z-50 left-0 top-0 p-4 flex flex-col gap-5 pt-8">
      <MenuAvatar />
      <hr className="shadow-sm shadow-slate-300/20"/>
      <MenuList />
    </div>
  )
}

export default Menu
