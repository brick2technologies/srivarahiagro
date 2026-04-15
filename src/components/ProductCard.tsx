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
    <div className="group flex flex-col bg-white rounded-[2rem] border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#1A1A1A] transition-all duration-300 overflow-hidden">

      {/* ─── Image Section ─── */}
      <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden border-b-4 border-[#1A1A1A] bg-[#FCFAF2]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-500"
        />
        {/* Decorative "Premium" Badge */}
        <div className="absolute top-4 right-4 bg-[#1DA6D1] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A]">
          Premium
        </div>
      </div>

      {/* ─── Content Section ─── */}
      <div className="p-6 md:p-8 flex flex-col items-center text-center flex-grow">
        
        {/* Name */}
        <h3 className="text-2xl md:text-3xl font-serif font-black uppercase text-[#1A1A1A] mb-4">
          {name}
        </h3>

        {/* Packaging Badges (Retro Pills) */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {packaging.map((pack, i) => (
            <span
              key={pack}
              className={`px-3 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-full border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] whitespace-nowrap ${
                i % 2 === 0 ? 'bg-[#F4D03F] text-[#1A1A1A]' : 'bg-white text-[#1A1A1A]'
              }`}
            >
              {pack}
            </span>
          ))}
        </div>

        {/* ─── CTA Button (Punching Action) ─── */}
        <div className="mt-auto w-full">
          <Link
            to={`/products/${slug}`}
            className="w-full flex justify-center items-center gap-2 bg-[#F28C28] text-white text-sm font-black uppercase tracking-widest py-4 rounded-full border-[2.5px] border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:bg-[#F4D03F] hover:text-[#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1A1A1A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
          >
            View Details
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
        
      </div>
    </div>
  );
}