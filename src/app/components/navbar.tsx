'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false)

  const products = [
    { name: 'Converse', href: '/products/Converse' },
    { name: 'Nike', href: '/products/nike' },
    { name: 'Adidas', href: '/products/adidas' },
    { name: 'Puma', href: '/products/puma' },
    { name: 'Apple', href: '/products/apple' },
    { name: 'Samsung', href: '/products/samsung' },
    { name: 'Microsoft', href: '/products/Microsoft' },
    { name: 'Sony', href: '/products/sony' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ShopEasy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* products */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 sm:w-[400px] md:w-[500px] lg:w-[600px] md:grid-cols-2 lg:grid-cols-3 p-4">
                      {/* Featured Brand Section */}
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-6 no-underline outline-none focus:shadow-md"
                            href="/brands"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              All Brands
                            </div>
                            <p className="text-sm leading-tight text-blue-100">
                              Discover our complete collection of premium brands
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      
                      {/* Brand List */}
                      {products.map((brand) => (
                        <ListItem
                          key={brand.name}
                          href={brand.href}
                          title={brand.name}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Products */}
                <NavigationMenuItem>
                  <Link href="/products" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Products
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Categories */}
                <NavigationMenuItem>
                  <Link href="/categories" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Categories
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-blue-600 relative" asChild>
              <Link href="/cart/1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Link href="/" className="text-2xl font-bold text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                    ShopEasy
                  </Link>
                </SheetTitle>
              </SheetHeader>
              
              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-4 mt-8">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Mobile Brands */}
                <div className="border-b border-gray-200 pb-2">
                  <button 
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                    onClick={() => setIsMobileBrandsOpen(!isMobileBrandsOpen)}
                  >
                    Brands
                    <svg 
                      className={`w-4 h-4 transition-transform ${isMobileBrandsOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isMobileBrandsOpen && (
                    <div className="ml-4 flex flex-col space-y-2 mt-2">
                      {products.map((products) => (
                        <Link
                          key={products.name}
                          href={products.href}
                          className="text-gray-600 hover:text-blue-600 transition duration-200 py-1 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {products.name}
                        </Link>
                      ))}
                      <Link
                        href="/product"
                        className="text-blue-600 font-medium text-sm mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View All Brands
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="/products" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  href="/categories" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

// Updated ListItem component without description
const ListItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}