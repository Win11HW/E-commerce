import ProductCard from './components/productCard'
import Link from 'next/link'

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


const computers = [
  {
    id: 1,
    name: 'MacBook Pro 14"',
    specs: 'M2 Pro · 16GB · 512GB',
    price: '$1,999',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
  },
  {
    id: 2,
    name: 'Dell XPS 15',
    specs: 'Intel i7 · 16GB · 1TB',
    price: '$1,799',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    specs: 'Intel i7 · 16GB · 512GB',
    price: '$1,599',
    image:
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04',
  },
  {
    id: 4,
    name: 'Lenovo ThinkPad X1',
    specs: 'Intel i7 · 16GB · 1TB',
    price: '$1,899',
    image:
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68',
  },
  {
    id: 5,
    name: 'Asus ROG Zephyrus',
    specs: 'Ryzen 9 · 32GB · RTX 4070',
    price: '$2,299',
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf',
  },
]


export default function Home() {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <section className="bg-white py-16">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Popular Computers
          </h2>

          <Link
            href="/category/computers"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View all
          </Link>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {computers.map((computer) => (
              <Link
                key={computer.id}
                href={`/product/${computer.id}`}
                className="group min-w-[260px] max-w-[260px] rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden rounded-t-xl bg-gray-100">
                  <img
                    src={computer.image}
                    alt={computer.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {computer.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {computer.specs}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">
                      {computer.price}
                    </span>

                    <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      Buy
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#0F1111]">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#0F1111]">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Fashion', 'Home & Kitchen', 'Sports'].map((category) => (
              <div
                key={category}
                className="bg-white border border-[#D5D9D9] rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-200 cursor-pointer group"
              >
                <div className="mb-4 text-4xl">
                  {category === 'Electronics' && '💻'}
                  {category === 'Fashion' && '👗'}
                  {category === 'Home & Kitchen' && '🏠'}
                  {category === 'Sports' && '⚽'}
                </div>
                <h3 className="text-lg font-medium text-[#0F1111] group-hover:text-[#C7511F] transition-colors">
                  {category}
                </h3>
                <p className="text-sm text-[#565959] mt-2">Shop now</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}