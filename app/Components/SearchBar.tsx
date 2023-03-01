import LensIcon from "./Icons/LensIcon"

const SearchBar = () => {
  return (
    <div className="w-full flex gap-2 items-center rounded-full bg-white px-4 py-2"><LensIcon color='#888'/><input placeholder="Buscá servicios y materiales" className="p-2 w-full" type='search'/></div>
  )
}

export default SearchBar