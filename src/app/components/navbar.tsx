'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">
              Shop<span className="text-blue-600">Easy</span>
            </span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
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

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-blue-600" asChild>
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

            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
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

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[280px] bg-white">
              <SheetHeader>
                <SheetTitle className="text-left text-lg font-semibold">
                  Shop<span className="text-blue-600">Easy</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-4">
                {['Home', 'Products', 'Categories', 'Cart', 'Account'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
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
                className="whitespace-nowrap hover:text-blue-600 font-medium"
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
