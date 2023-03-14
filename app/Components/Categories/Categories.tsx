'use client'

import Link from 'next/link'
import { useState } from 'react'
import Electrician from '../Icons/ElectricianIcon'
import PaintIcon from '../Icons/PaintIcon'
import Category from './Category'
import FeaturedWorker from './FeaturedWorker'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.css'

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

  const handleCategory = (name: string) => {
    setSelectedCategory(name)
  }
  return (
    <>
      <section className="flex flex-col gap-6 relative">
        <h2>Categorías</h2>
        <div className="relative">
          <Swiper
            slidesPerView={4.5}
            spaceBetween={90}
            className="mySwiper"
            breakpoints={{
              400: {
                slidesPerView: 4.5,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 12,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 20,
                spaceBetween: 20
              },
              1775: {
                slidesPerView: 35,
                spaceBetween: 0
              }
            }}
          >
            {categories.map(({ name, svg }, index) => (
              <SwiperSlide key={'category-' + name} className="flex pb-5">
                <Category
                  id={index}
                  name={name}
                  active={name === selectedCategory}
                  SvgComponent={svg}
                  handleCategory={handleCategory}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1775: {
              slidesPerView: 2,
              spaceBetween: 0
            }
          }}
        >
          {categories
            .find(({ name }) => name === selectedCategory)
            ?.featured?.map((worker) => (
              <SwiperSlide key={worker.name + '-featured'}>
                <FeaturedWorker {...worker} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  )
}

export default Categories
