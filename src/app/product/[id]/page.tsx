'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'

// Mock product data - in real app, fetch from API based on ID
const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 99.99,
  image: '/api/placeholder/500/500',
  category: 'Electronics',
  rating: 4.5,
  description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
  features: [
    'Active Noise Cancellation',
    '30-hour battery life',
    'Bluetooth 5.0',
    'Comfortable over-ear design',
    'Built-in microphone'
  ],
  reviews: [
    { id: 1, user: 'John D.', rating: 5, comment: 'Amazing sound quality!', date: '2024-01-15' },
    { id: 2, user: 'Sarah M.', rating: 4, comment: 'Great headphones, very comfortable.', date: '2024-01-10' }
  ]
}

export default function ProductPage() {
  const params = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    '/api/placeholder/500/500',
    '/api/placeholder/500/500',
    '/api/placeholder/500/500',
    '/api/placeholder/500/500'
  ]

  const addToCart = () => {
    // In real app, this would add to cart context/state
    alert(`Added ${quantity} ${product.name} to cart!`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img 
              src={images[selectedImage]} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={`w-full h-24 object-cover rounded-lg cursor-pointer ${
                  selectedImage === index ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-gray-600">({product.rating})</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity:</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button 
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button 
                onClick={addToCart}
                className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Meta */}
          <div className="text-sm text-gray-600">
            <p>Category: <span className="font-medium">{product.category}</span></p>
            <p>SKU: {product.id}</p>
            <p>In Stock: <span className="text-green-600">Available</span></p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{review.user}</h4>
                <div className="flex text-yellow-400">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              <p className="text-gray-600 mb-2">{review.comment}</p>
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}