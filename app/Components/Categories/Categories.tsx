'use client'

import Link from "next/link"
import { useState } from "react"
import Electrician from "../Icons/ElectricianIcon"
import PaintIcon from "../Icons/PaintIcon"
import Category from "./Category"
import FeaturedWorker from "./FeaturedWorker"

const categories = [
  {
    name: "limpieza",
    svg: Electrician,
    featured: [
      {
        name: 'Liya James',
        image: '/images/workers/liya-james.jpeg',
        verified: true,
        rate: {
          average: 4.6,
          quantity: 824
        },
        price: 32
      },
      {
        name: 'James Winston',
        image: '/images/workers/james-winston.jpeg',
        verified: true,
        rate: {
          average: 3.2,
          quantity: 126
        },
        price: 45
      }
    ]
  },
  {
    name: "plomería",
    svg: Electrician,
    featured: [
      {
        name: 'Tinna Turner',
        image: '/images/workers/martina-lopez.jpg',
        verified: false,
        rate: {
          average: 3.6,
          quantity: 24
        },
        price: 45
      },
      {
        name: 'Alicia Strumer',
        image: '/images/workers/liya-james.jpeg',
        verified: true,
        rate: {
          average: 0.6,
          quantity: 1050
        },
        price: 108
      }
    ]
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
    <>
      <section className="flex flex-col gap-6">
        <h2>Categorías</h2>
        <div className="w-[10000px]">
          <div className="flex gap-4 w-fit first:m-0">
            {categories.map(({ name, svg }, index) => <Category key={'category-' + name} id={index} name={name} active={name === selectedCategory} SvgComponent={svg} handleCategory={handleCategory}/>)}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex justify-between align-bottom">
          <h2>Mejores en {selectedCategory}</h2>
          <Link className="text-sm font-semibold flex items-center text-[#FFC37B]" href={`/services/${selectedCategory}`}>Ver todo</Link>
        </div>
        <div className="w-[10000px]">
          <div className="flex gap-6">
            {categories
              .find(({ name }) => name === selectedCategory)
              ?.featured
              ?.map((worker) => <FeaturedWorker key={worker.name + '-featured'} {...worker} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories