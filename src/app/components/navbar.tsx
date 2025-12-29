'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart, User, Search } from 'lucide-react'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'Computers',
    'Smartphones',
    'Headphones',
    'Cameras',
    'Smartwatches',
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-gray-900 shrink-0 hover:text-blue-600 transition"
          >
            Shop<span className="text-blue-600">Easy</span>
          </Link>

          {/* Search (desktop only) */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-2xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, brands, or models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100 text-gray-700"
              asChild
            >
              <Link href="/cart/1" title="Shopping Cart">
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100 text-gray-700"
              title="Account"
            >
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile search */}
      <div className="md:hidden border-t border-gray-100 px-4 py-3 bg-gray-50">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
          />
        </div>
      </div>

      {/* Category bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 overflow-x-auto py-3 text-sm scrollbar-hide">
              <Link href="/"  className="whitespace-nowrap font-medium text-gray-700 transition hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-3">
                Home
              </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="whitespace-nowrap font-medium text-gray-700 transition hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-3"
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
