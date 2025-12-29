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
  ChevronRight,
} from 'lucide-react'
import { Card } from "./components/card";

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
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=75',
    badge: 'New Arrivals',
    title: 'Upgrade Your Tech Today',
    description: 'Discover the latest gadgets with premium quality and unbeatable prices.',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=75',
    badge: 'Top Rated',
    title: 'Smart Devices for Modern Life',
    description: 'Innovation that fits your lifestyle and budget.',
  },
]

const categories = [
  { name: 'Computers', icon: Laptop },
  { name: 'Smartphones', icon: Smartphone },
  { name: 'Headphones', icon: Headphones },
  { name: 'Cameras', icon: Camera },
  { name: 'Smartwatches', icon: Watch },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Slider */}
            <div className="lg:col-span-3 relative min-h-[420px] rounded-xl overflow-hidden shadow-lg">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                    <div className="p-8 max-w-xl text-white">
                      <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {slide.badge}
                      </span>
                      <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="mt-3 text-gray-100 text-lg">
                        {slide.description}
                      </p>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-base font-semibold transition-all hover:shadow-lg"
                      >
                        Shop Now
                        <ChevronRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Side Banners */}
            <div className="flex flex-col gap-6">
              {['smartphones', 'headphones'].map((cat) => (
                <Link
                  key={cat}
                  href={`/category/${cat}`}
                  className="relative h-1/2 rounded-xl overflow-hidden group shadow-md"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=75"
                    alt={cat}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-end p-4 text-white font-semibold transition">
                    Best {cat}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map(({ name, icon: Icon }) => (
              <Link
                key={name}
                href={`/category/${name.toLowerCase()}`}
                className="group bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Computers Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular Computers</h2>
              <p className="text-gray-600 mt-2">Discover our best-selling laptops and desktops</p>
            </div>
            <Link
              href="/category/computers"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
            >
              View all
              <ChevronRight size={20} />
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

      {/* Popular Smartphones Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular Smartphones</h2>
              <p className="text-gray-600 mt-2">Latest and greatest mobile devices</p>
            </div>
            <Link
              href="/category/smartphones"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
            >
              View all
              <ChevronRight size={20} />
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

      {/* Promotional Banner */}
      <section className="my-16 py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Special Offer: Get 20% Off Today!
          </h2>
          <p className="text-blue-100 text-lg mb-6">
            Use code SAVE20 at checkout. Limited time offer.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Shop Now
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  )
}
