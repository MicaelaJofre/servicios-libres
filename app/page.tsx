import Categories from "./Components/Categories/Categories";
import Featured from "./Components/FeaturedContent/Featured";
import SearchBar from "./Components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <SearchBar />
      <Featured />
      <Categories />
    </main>
  )
}
