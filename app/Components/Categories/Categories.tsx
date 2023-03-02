'use client'

import Electrician from "../Icons/ElectricianIcon"
import Category from "./Category"

const categories = [
  {
    name: "limpieza",
    svg: Electrician
  },
  {
    name: "plomería",
    svg: Electrician
  },
  {
    name: "electricidad",
    svg: Electrician
  },
  {
    name: "pintura",
    svg: Electrician
  },
  {
    name: "belleza",
    svg: Electrician
  }
]

const Categories = () => {

  const handleCategory = (name: string) => {
    console.log(name)
  }
  return (
    <section className="flex flex-col gap-6">
      <h2>Categorías</h2>
      <div className="w-[10000px]">
        <div className="flex gap-4 w-fit first:m-0">
          {categories.map(({ name, svg }) => <Category key={'category-' + name} name={name} SvgComponent={svg} handleCategory={handleCategory}/>)}
        </div>
      </div>

    </section>
  )
}

export default Categories