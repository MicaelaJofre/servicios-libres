'use client'

import { useState } from "react"
import Electrician from "../Icons/ElectricianIcon"
import PaintIcon from "../Icons/PaintIcon"
import Category from "./Category"

const categories = [
  {
    name: "limpieza",
    svg: Electrician,
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
    svg: PaintIcon
  },
  {
    name: "belleza",
    svg: Electrician
  }
]

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('limpieza')

  const handleCategory = (name: string) => {
    setSelectedCategory(name)
  }
  return (
    <section className="flex flex-col gap-6">
      <h2>Categorías</h2>
      <div className="w-[10000px]">
        <div className="flex gap-4 w-fit first:m-0">
          {categories.map(({ name, svg }, index) => <Category key={'category-' + name} id={index} name={name} active={name === selectedCategory} SvgComponent={svg} handleCategory={handleCategory}/>)}
        </div>
      </div>

    </section>
  )
}

export default Categories