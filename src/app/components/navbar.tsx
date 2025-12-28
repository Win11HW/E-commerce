'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart, User, Search } from 'lucide-react'

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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-gray-900 shrink-0"
          >
            Shop<span className="text-blue-600">Easy</span>
          </Link>

          {/* Search (desktop only) */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="relative w-full max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, brands, or models"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100"
              asChild
            >
              <Link href="/cart/1">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100"
            >
              <User className="h-5 w-5 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile search */}
      <div className="md:hidden border-t border-gray-100 px-4 py-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Category bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto py-3 text-sm">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="whitespace-nowrap font-medium text-gray-600 transition hover:text-blue-600"
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
