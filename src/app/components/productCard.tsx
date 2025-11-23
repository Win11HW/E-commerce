'use client'

import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  rating: number
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // In real app, this would add to cart context/state
    alert(`Added ${product.name} to cart!`)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.category}</p>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-gray-600 text-sm">({product.rating})</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">${product.price}</span>
            <button 
              onClick={addToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}