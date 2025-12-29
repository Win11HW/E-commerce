'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ShoppingCart, Heart, Truck, Shield, RotateCcw, Star } from 'lucide-react'

// Mock product database - in real app, fetch from API based on ID
const productDatabase: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Wireless Headphones Pro',
    price: 99.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=75',
    category: 'Electronics',
    rating: 4.5,
    reviews_count: 328,
    description: 'Premium wireless headphones with active noise cancellation and exceptional sound quality. Perfect for music lovers, professionals, and everyday use.',
    features: [
      'Active Noise Cancellation (ANC)',
      '40-hour battery life',
      'Bluetooth 5.3 connectivity',
      'Premium over-ear design with memory foam',
      'Built-in microphone for calls',
      'Foldable design for portability',
      'Touch controls',
      'Multi-device pairing'
    ],
    specs: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 Ohms',
      'Weight': '250g',
      'Warranty': '2 years'
    },
    reviews: [
      { id: 1, user: 'John D.', rating: 5, comment: 'Amazing sound quality and comfort! Best headphones I\'ve owned.', date: '2024-01-15' },
      { id: 2, user: 'Sarah M.', rating: 4, comment: 'Great headphones, very comfortable for long sessions.', date: '2024-01-10' },
      { id: 3, user: 'Mike T.', rating: 5, comment: 'Excellent noise cancellation. Worth every penny!', date: '2024-01-08' }
    ],
    inStock: true,
    sku: 'WH-PRO-001'
  },
  '2': {
    id: '2',
    name: 'Smart Watch Ultra',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=75',
    category: 'Electronics',
    rating: 4.7,
    reviews_count: 512,
    description: 'Advanced smartwatch with health monitoring, fitness tracking, and seamless smartphone integration.',
    features: [
      'AMOLED display',
      'Heart rate monitor',
      'Sleep tracking',
      '7-day battery life',
      'Water resistant (5ATM)',
      'GPS tracking',
      'Fitness modes',
      'Notifications'
    ],
    specs: {
      'Display': '1.4" AMOLED',
      'Resolution': '454x454',
      'Battery': '7 days',
      'Water Resistance': '5ATM',
      'Weight': '48g'
    },
    reviews: [
      { id: 1, user: 'Alex K.', rating: 5, comment: 'Perfect smartwatch for fitness tracking!', date: '2024-01-12' },
      { id: 2, user: 'Emma L.', rating: 5, comment: 'Love the display and battery life.', date: '2024-01-09' }
    ],
    inStock: true,
    sku: 'SW-ULTRA-001'
  }
}

function getProduct(id: string) {
  return productDatabase[id] || productDatabase['1']
}

function StarRating({ rating, count }: { rating: number; count?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-gray-700">{rating}</span>
      {count && <span className="text-sm text-gray-500">({count} reviews)</span>}
    </div>
  )
}

export default function ProductPage() {
  const params = useParams()
  const product = getProduct(params.id as string)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const images = [
    product.image,
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=75',
    'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=800&q=75',
    'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=800&q=75'
  ]

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const addToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart!`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-blue-600">Products</a>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-96 w-full object-cover"
              />
              {discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -{discount}%
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? 'border-blue-600 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
              <div className="mb-2 inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <StarRating rating={product.rating} count={product.reviews_count} />
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                >
                  −
                </button>
                <span className="px-6 py-2 font-medium text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={addToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-6 py-3 rounded-lg border-2 font-semibold transition ${
                  isWishlisted
                    ? 'border-red-500 bg-red-50 text-red-600'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-red-500'
                }`}
              >
                <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col items-center gap-2 text-center">
                <Truck className="text-blue-600" size={24} />
                <span className="text-xs font-medium text-gray-700">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Shield className="text-blue-600" size={24} />
                <span className="text-xs font-medium text-gray-700">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <RotateCcw className="text-blue-600" size={24} />
                <span className="text-xs font-medium text-gray-700">Easy Returns</span>
              </div>
            </div>

            {/* Product Meta */}
            <div className="bg-gray-100 rounded-lg p-4 space-y-2 text-sm">
              <p><span className="font-medium text-gray-700">SKU:</span> <span className="text-gray-600">{product.sku}</span></p>
              <p><span className="font-medium text-gray-700">Category:</span> <span className="text-gray-600">{product.category}</span></p>
            </div>
          </div>
        </div>

        {/* Features & Specs */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Features */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
            <div className="space-y-3">
              {Object.entries(product.specs).map(([key, value]: [string, any]) => (
                <div key={key} className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review: any) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.user}</h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
