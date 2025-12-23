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
      <div className="bg-white border border-[#D5D9D9] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col">
        {/* Product Image */}
        <div className="relative bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Product Name */}
          <h3 className="text-base font-normal text-[#0F1111] mb-2 line-clamp-2 hover:text-[#C7511F] transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex text-[#FF9900] text-sm mr-2">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-[#007185] text-sm hover:text-[#C7511F] hover:underline cursor-pointer">
              ({Math.floor(Math.random() * 1000) + 100})
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <div className="flex items-baseline gap-1">
              <span className="text-sm align-super text-[#0F1111]">$</span>
              <span className="text-2xl font-normal text-[#0F1111]">{Math.floor(product.price)}</span>
              <span className="text-sm align-super text-[#0F1111]">{((product.price % 1) * 100).toFixed(0).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Prime Badge (Optional) */}
          <div className="mb-3">
            <span className="text-xs text-[#565959]">FREE delivery</span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="w-full bg-[#FF9900] hover:bg-[#F3A847] text-[#0F1111] font-normal py-2 px-4 rounded-lg transition-colors duration-200 text-sm mt-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}