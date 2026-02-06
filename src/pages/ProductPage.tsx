import { useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ProductsPage() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;

      bgRef.current.style.transform = `translate3d(
        0,
        ${window.scrollY * 0.25}px,
        0
      )`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#FEFACD] overflow-hidden">
      
      {/* PARALLAX BACKGROUND */}
      <div
        ref={bgRef}
        className="
          absolute top-0 left-0 w-full
          h-full
          md:h-[250vh]
          sm:h-[250vh]
          lg:h-[250vh]

          z-0
          bg-no-repeat
          bg-cover 
          sm:bg-cover       /* Mobile */
          md:bg-cover
          lg:bg-cover       /* Tablet & Desktop */
          bg-top
          opacity-80
          pointer-events-none
          will-change-transform
        "
        style={{
          backgroundImage: "url('/product-bg.svg')",
        }}
      />

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        
        {/* HERO */}
        <section className="px-4 pt-28 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#344C2F] font-golden-goose">
            OUR RICE VARIETIES
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-[#344C2F]/80">
            Export-quality agricultural products available in 25kg & 50kg packaging.
          </p>
        </section>

        {/* PRODUCTS GRID */}
        <section className="px-4 pb-24">
          <div className="max-w-7xl mx-auto grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 font-body">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                image={product.image}
                slug={product.slug}
                packaging={product.specifications.packaging}
              />
            ))}
          </div>
        </section>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C240,0 480,0 720,40 960,80 1200,80 1440,30 L1440,0 L0,0 Z"
            fill="#344C2F"
          />
        </svg>
      </div>

      </div>
    </main>
  );
}
