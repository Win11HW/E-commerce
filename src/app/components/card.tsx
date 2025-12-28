import Link from "next/link";

type CardProps = {
  id: number;
  name: string;
  specs: string;
  price: string;
  image: string;
};

export function Card({ id, name, specs, price, image }: CardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="block min-w-[260px]"
    >
      <div className="rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md">
        <img
          src={image}
          alt={name}
          className="h-40 w-full rounded-md object-cover"
        />

        <div className="mt-4 space-y-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{specs}</p>
          <p className="font-bold text-blue-600">{price}</p>
        </div>
      </div>
    </Link>
  );
}
