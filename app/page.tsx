import Featured from "./Components/FeaturedContent/Featured";
import SearchBar from "./Components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <SearchBar />
      <Featured />
    </main>
  )
}
