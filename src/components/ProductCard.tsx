import { Link } from "react-router-dom";

type ProductCardProps = {
  name: string;
  image: string;
  slug: string;
  packaging: string[];
};

export default function ProductCard({
  name,
  image,
  slug,
  packaging,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">

      {/* Image */}
      <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>

        {/* Packaging */}
        <div className="flex justify-center gap-3">
          {packaging.map((pack) => (
            <span
              key={pack}
              className="px-3 py-1 text-xs rounded-full bg-[#FEFACD] text-[#344C2F]"
            >
              {pack}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={`/products/${slug}`}
          className="
            inline-flex items-center justify-center px-5 py-2 text-sm font-medium
            text-white bg-[#344C2F] rounded-full
            hover:bg-[#2c4028] transition
          "
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
