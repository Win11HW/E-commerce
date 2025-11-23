import ProductCard from './components/productCard'

// Mock data - in real app, this would come from API
const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: '/api/placeholder/300/300',
    category: 'Electronics',
    rating: 4.5
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    image: '/api/placeholder/300/300',
    category: 'Electronics',
    rating: 4.2
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 79.99,
    image: '/api/placeholder/300/300',
    category: 'Fashion',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Laptop Backpack',
    price: 49.99,
    image: '/api/placeholder/300/300',
    category: 'Accessories',
    rating: 4.3
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    price: 59.99,
    image: '/api/placeholder/300/300',
    category: 'Electronics',
    rating: 4.1
  },
  {
    id: '6',
    name: 'Coffee Mug',
    price: 14.99,
    image: '/api/placeholder/300/300',
    category: 'Home',
    rating: 4.6
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to ShopEasy</h1>
        <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Electronics', 'Fashion', 'Home', 'Sports'].map((category) => (
            <div key={category} className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}