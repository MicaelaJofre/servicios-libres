import Categories from './Components/Categories/Categories'
import Featured from './Components/FeaturedContent/Featured'
import Navbar from './Components/Navbar/Navbar'
import SearchBar from './Components/SearchBar'

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 p-4 ">
        <SearchBar />
        <Featured />
        <Categories />
      </main>
      <footer className="w-full">
        <Navbar />
      </footer>
    </>
  )
}
