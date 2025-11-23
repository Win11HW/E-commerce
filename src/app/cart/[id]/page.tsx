'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'

// Mock cart data - in real app, this would come from context/state
const cartItems = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: '/api/placeholder/100/100',
    quantity: 1
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    image: '/api/placeholder/100/100',
    quantity: 2
  }
]

export default function CartPage() {
  const params = useParams()
  const [items, setItems] = useState(cartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setItems(items.filter(item => item.id !== id))
    } else {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center border-b py-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-blue-600 font-semibold">${item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-lg">
                    <button 
                      className="px-3 py-1 text-gray-600 hover:text-gray-800"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button 
                      className="px-3 py-1 text-gray-600 hover:text-gray-800"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => updateQuantity(item.id, 0)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 mb-4">
              Proceed to Checkout
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition duration-300">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  )
}