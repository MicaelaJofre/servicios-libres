import Navbar from './Navbar/Navbar'

const Header = () => {
  return (
    <header className="rounded-tl-3xl rounded-tr-3xl max-w-md bg-white w-full h-header fixed left-[50%] translate-x-[-50%] bottom-0 z-30 shadow-2xl">
      <Navbar />
    </header>
  )
}

export default Header
