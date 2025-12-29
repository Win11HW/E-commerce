import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

type CardProps = {
  id: number;
  name: string;
  specs: string;
  price: string;
  image: string;
};

export function Card({ id, name, specs, price, image }: CardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Link href={`/product/${id}`} className="block min-w-[280px]">
      <div className="group relative rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-lg hover:border-blue-300">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100 h-48">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
          >
            <Heart
              size={18}
              className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}
            />
          </button>
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              alert(`Added ${name} to cart!`);
            }}
            className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white py-2 flex items-center justify-center gap-2 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingCart size={18} />
            Quick Add
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition">
              {name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{specs}</p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold text-gray-900">{price}</p>
            <p className="text-xs text-gray-400 line-through">$299.99</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-600">(128)</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
