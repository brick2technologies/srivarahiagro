import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductsSection() {
  const products = [
    { name: "JSR Rice", image: "/products/jsr.jpg", slug: "jsr-raw-rice" },
    { name: "KNM Rice", image: "/products/KNM.jpg", slug: "knm-steam-rice" },
    { name: "HMT Rice", image: "/products/hmt.jpg", slug: "hmt-rice" },
    { name: "BPT Rice", image: "/products/bpt.jpg", slug: "bpt-raw-rice" },
    { name: "Broken Rice", image: "/products/broken-rice.jpg", slug: "broken-rice" },
    { name: "IR64 Rice", image: "/products/ir64.jpg", slug: "ir-64-boiled-rice" },
    { name: "Swarna Rice", image: "/products/swarna.jpg", slug: "swarna-raw-rice" },
    { name: "NLR Rice", image: "/products/nlr.jpg", slug: "nlr-steam-rice" },
    { name: "Ganga Kaveri Rice", image: "/products/ganga-kaveri.jpg", slug: "ganga-kaveri-steam-rice" },
  ];

  return (
    <section className="w-full bg-[#FCFAF2] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header - Using Logo Blue & Orange accents */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#1DA6D1] text-white px-5 py-1.5 rounded-full border-[1.5px] border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Premium Selection
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] [text-shadow:3px_3px_0px_#F28C28]">
            OUR RICE VARIETIES
          </h2>
          <div className="h-1.5 w-24 bg-[#F4D03F] mx-auto mt-4 border border-[#1A1A1A] rounded-full shadow-[2px_2px_0px_0px_#1A1A1A]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div
              key={product.slug}
              whileHover={{ y: -8 }}
              className="group bg-[#0F6C3F] rounded-2xl border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] overflow-hidden flex flex-col"
            >
              {/* Image Container - Using Logo Blue for the bottom border */}
              <Link to={`/products/${product.slug}`} className="relative h-64 overflow-hidden border-b-2 border-[#1A1A1A]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                />
                {/* Floating Badge - Using Logo Yellow */}
                <div className="absolute top-4 right-4 bg-[#F4D03F] text-[#1A1A1A] text-[10px] font-black px-4 py-1.5 rounded-full border-[1.5px] border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A]">
                  TOP GRADE
                </div>
              </Link>

              {/* Content */}
              <div className="p-8 flex flex-col items-center flex-grow">
                <Link to={`/products/${product.slug}`}>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-[#F4D03F] transition-colors text-center uppercase tracking-tight">
                    {product.name}
                  </h3>
                </Link>

                <div className="mt-auto w-full pt-8">
                  <Link to={`/products/${product.slug}`} className="block">
                    <button
                      className="w-full flex justify-center items-center gap-3 bg-[#F28C28] text-white font-black uppercase tracking-widest py-4 rounded-full border-[2px] border-[#1A1A1A] shadow-[5px_5px_0px_0px_#1A1A1A] hover:bg-[#F4D03F] hover:text-[#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#1A1A1A] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all duration-150"
                    >
                      View Variety
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}