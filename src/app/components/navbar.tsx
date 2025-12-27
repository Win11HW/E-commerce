'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'Home',
    'Computers',
    'Smartphones',
    'Headphones',
    'Cameras',
    'Smartwatches',
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 space-y-3">

        {/* Row 1: Logo + Search + Icons (desktop) / Logo + Icons (mobile) */}
        <div className="flex items-center justify-between gap-3">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900 shrink-0">
            Shop<span className="text-blue-600">Easy</span>
          </Link>

          {/* Search (desktop only) */}
          <div className="hidden md:block flex-1 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart/1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.6 3m0 0h13.4l-1.5 7H7.1m0 0L5 6m2.1 7L5.4 15.6A1.5 1.5 0 006.6 18h10.8"
                  />
                </svg>
              </Link>
            </Button>

            <Button variant="ghost" size="icon">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 3c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Row 2: Search (mobile only) */}
        <div className="md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Category Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 py-2 text-sm text-gray-600 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="whitespace-nowrap font-medium hover:text-blue-600"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
