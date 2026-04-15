import { useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { motion } from "framer-motion";

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
    <main className="relative min-h-screen bg-[#FCFAF2] text-[#1A1A1A] overflow-hidden selection:bg-[#F28C28] selection:text-[#1A1A1A]">
      
      {/* PARALLAX BACKGROUND - Neobrutalist Texture Blend */}
      <div
        ref={bgRef}
        className="
          absolute top-0 left-0 w-full
          h-[150vh] sm:h-[200vh] md:h-[250vh]
          z-0
          bg-no-repeat bg-cover bg-top
          opacity-30
          mix-blend-multiply
          pointer-events-none
          will-change-transform
        "
        
      />

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="px-6 pt-32 pb-20 text-center max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#1DA6D1] text-white px-6 py-2 rounded-full border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-xs font-black uppercase tracking-widest mb-8"
          >
            The Collection
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-black uppercase leading-[0.9] [text-shadow:6px_6px_0px_#F4D03F]"
          >
            OUR RICE VARIETIES
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl mx-auto text-lg md:text-2xl font-bold border-b-4 border-[#1A1A1A] pb-6 inline-block"
          >
            Export-quality agricultural products available in 25kg & 50kg packaging.
          </motion.p>
        </section>

        {/* PRODUCTS GRID */}
        <section className="px-6 pb-32">
          {/* Adjusted grid to handle heavy Neobrutalist cards */}
          <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-sans">
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

        {/* BOTTOM CURVE (Transitions into Green Footer) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none z-20">
          <svg
            viewBox="0 0 1440 90"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[60px] md:h-[90px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,90 C240,0 480,0 720,40 960,80 1200,80 1440,30 L1440,0 L0,0 Z"
              fill="#0F6C3F" /* Logo Green */
            />
            {/* Optional thick line to separate the wave from the footer visually */}
            <path
              d="M0,90 C240,0 480,0 720,40 960,80 1200,80 1440,30 L1440,0 L0,0 Z"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="4"
            />
          </svg>
        </div>

      </div>
    </main>
  );
}