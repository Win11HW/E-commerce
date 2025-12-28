'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Laptop,
  Smartphone,
  Headphones,
  Camera,
  Watch,
} from 'lucide-react'
import { Card } from "./components/card";

/* ================= MOCK DATA ================= */

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: '/api/placeholder/300/300',
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    image: '/api/placeholder/300/300',
    category: 'Electronics',
    rating: 4.2,
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 79.99,
    image: '/api/placeholder/300/300',
    category: 'Fashion',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Laptop Backpack',
    price: 49.99,
    image: '/api/placeholder/300/300',
    category: 'Accessories',
    rating: 4.3,
  },
]

const computers = [
  {
    id: 1,
    name: 'MacBook Pro 14"',
    specs: 'M2 Pro · 16GB · 512GB',
    price: '$1,999',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
  },
  {
    id: 2,
    name: 'Dell XPS 15',
    specs: 'Intel i7 · 16GB · 1TB',
    price: '$1,799',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    specs: 'Intel i7 · 16GB · 512GB',
    price: '$1,599',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04',
  },
  {
    id: 4,
    name: 'Lenovo ThinkPad X1',
    specs: 'Intel i7 · 16GB · 1TB',
    price: '$1,899',
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68',
  },
  {
    id: 5,
    name: 'Asus ROG Zephyrus',
    specs: 'Ryzen 9 · 32GB · RTX 4070',
    price: '$2,299',
    image: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf',
  },
];


const slides = [
  {
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=75',
    badge: 'New Arrivals',
    title: 'Upgrade Your Tech Today',
    description: 'Discover the latest gadgets with premium quality.',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=75',
    badge: 'Top Rated',
    title: 'Smart Devices for Modern Life',
    description: 'Innovation that fits your lifestyle.',
  },
]

const categories = [
  { name: 'Computers', icon: Laptop },
  { name: 'Smartphones', icon: Smartphone },
  { name: 'Headphones', icon: Headphones },
  { name: 'Cameras', icon: Camera },
  { name: 'Smartwatches', icon: Watch },
]

/* ================= PAGE ================= */

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="bg-[#F3F3F3]">

      {/* ========== HERO SECTION ========== */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Slider */}
          <div className="lg:col-span-3 relative min-h-[420px] rounded-xl overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                  <div className="p-8 max-w-xl text-white">
                    <span className="inline-block bg-white text-blue-600 px-4 py-1 rounded-full text-sm">
                      {slide.badge}
                    </span>
                    <h1 className="mt-4 text-4xl font-bold">
                      {slide.title}
                    </h1>
                    <p className="mt-3 text-gray-200">
                      {slide.description}
                    </p>
                    <Link
                      href="/products"
                      className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-sm font-semibold transition"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side Banners */}
          <div className="flex flex-col gap-6">
            {['smartphones', 'headphones'].map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat}`}
                className="relative h-1/2 rounded-xl overflow-hidden group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=75"
                  alt={cat}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white font-semibold">
                  Best {cat}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              href={`/category/${name.toLowerCase()}`}
              className="bg-white border rounded-lg p-8 text-center hover:shadow-md transition"
            >
              <Icon className="mx-auto mb-4 h-8 w-8 text-blue-600" />
              <h3 className="font-medium text-gray-900">
                {name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Popular Computers</h2>

            <Link
              href="/category/computers"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all
            </Link>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {computers.map((computer) => (
              <Card
                key={computer.id}
                id={computer.id}
                name={computer.name}
                specs={computer.specs}
                price={computer.price}
                image={computer.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Popular Smartphones</h2>

            <Link
              href="/category/smartphones"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all
            </Link>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {computers.map((computer) => (
              <Card
                key={computer.id}
                id={computer.id}
                name={computer.name}
                specs={computer.specs}
                price={computer.price}
                image={computer.image}
              />
            ))}
          </div>
        </div>
      </section>


    <br/><br/>
    </main>
  )
}
