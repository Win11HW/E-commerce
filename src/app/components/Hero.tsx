'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    badge: 'New Arrivals',
    title: 'Upgrade Your Tech Today',
    description:
      'Discover the latest gadgets with premium quality and unbeatable prices.',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    badge: 'Top Rated',
    title: 'Smart Devices for Modern Life',
    description:
      'Experience innovation with our best-selling electronics.',
  },
  {
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    badge: 'Best Sellers',
    title: 'Sound That Moves You',
    description:
      'Premium audio products built for comfort and performance.',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

          {/* ================= LEFT: HERO SLIDER (3/4) ================= */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-xl bg-gray-100 min-h-[420px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10 flex items-center">
                  <div className="p-8 max-w-xl">
                    <span className="inline-block mb-3 rounded-full bg-white/90 px-4 py-1 text-sm font-medium text-blue-600">
                      {slide.badge}
                    </span>

                    <h1 className="text-4xl font-bold text-white sm:text-5xl">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-lg text-gray-200">
                      {slide.description}
                    </p>

                    <div className="mt-6 flex gap-4">
                      <Link
                        href="/products"
                        className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
                      >
                        Shop Now
                      </Link>

                      <Link
                        href="/categories"
                        className="rounded-md bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition"
                      >
                        Browse Categories
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === currentSlide
                      ? 'bg-white'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ================= RIGHT: TOP SELLERS (1/4) ================= */}
          <div className="flex flex-col gap-6">

            {/* Seller Card 1 */}
            <Link
              href="/category/smartphones"
              className="group relative overflow-hidden rounded-xl bg-gray-100 h-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                alt="Top smartphones"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-semibold">
                    Best Smartphones
                  </h3>
                  <p className="text-sm text-gray-200">
                    Top sellers
                  </p>
                </div>
              </div>
            </Link>

            {/* Seller Card 2 */}
            <Link
              href="/category/headphones"
              className="group relative overflow-hidden rounded-xl bg-gray-100 h-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                alt="Top headphones"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-semibold">
                    Best Headphones
                  </h3>
                  <p className="text-sm text-gray-200">
                    Customer favorites
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
