'use client'

import Link from 'next/link'
import { useState } from 'react'
import Electrician from '../Icons/ElectricianIcon'
import PaintIcon from '../Icons/PaintIcon'
import Category from './Category'
import FeaturedWorker from './FeaturedWorker'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const categories = [
  {
    name: 'limpieza',
    svg: Electrician,
    featured: [
      {
        name: 'James Winston',
        image: '/images/workers/james-winston.jpeg',
        verified: true,
        rate: {
          average: 3.2,
          quantity: 126
        },
        price: 45
      },
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
        name: 'Jhon Smith',
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
    name: 'plomería',
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
    name: 'electricidad',
    svg: Electrician
  },
  {
    name: 'pintura',
    svg: PaintIcon
  },
  {
    name: 'belleza',
    svg: Electrician
  }
]

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('limpieza')

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4.5
  }

  const handleCategory = (name: string) => {
    setSelectedCategory(name)
  }
  return (
    <>
      <section className="flex flex-col gap-6">
        <h2>Categorías</h2>
        <div>
          <Slider {...settings}>
            {categories.map(({ name, svg }, index) => (
              <Category
                key={'category-' + name}
                id={index}
                name={name}
                active={name === selectedCategory}
                SvgComponent={svg}
                handleCategory={handleCategory}
              />
            ))}
          </Slider>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex justify-between align-bottom">
          <h2>Mejores en {selectedCategory}</h2>
          <Link
            className="text-sm font-semibold flex items-center text-[#FFC37B]"
            href={`/services/${selectedCategory}`}
          >
            Ver todo
          </Link>
        </div>
        <div>
          <Slider
            dots={false}
            infinite={false}
            speed={500}
            slidesToShow={1.5}
            slidesToScroll={1.5}
          >
            {categories
              .find(({ name }) => name === selectedCategory)
              ?.featured?.map((worker) => (
                <FeaturedWorker key={worker.name + '-featured'} {...worker} />
              ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Categories
