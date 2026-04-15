import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";

const formatLabel = (str) => {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFAF2] text-[#1A1A1A] p-6 font-sans">
        <h1 className="text-4xl font-black uppercase mb-6 [text-shadow:3px_3px_0px_#F28C28]">Harvest Not Found</h1>
        <Link 
          to="/products" 
          className="px-8 py-3 bg-[#F4D03F] text-[#1A1A1A] font-black uppercase tracking-widest border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1A1A1A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
        >
          Return to Catalogue
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#FCFAF2] min-h-screen text-[#1A1A1A] font-sans selection:bg-[#F28C28] selection:text-[#1A1A1A] overflow-x-hidden relative">
      
      {/* ─── Navigation (Floating Neobrutalist Pill) ─── */}
      <nav className="absolute top-8 left-6 md:top-12 md:left-12 z-50">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 bg-white px-5 py-2 md:px-6 md:py-3 rounded-full border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-xs md:text-sm font-black tracking-widest uppercase hover:bg-[#F4D03F] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1A1A1A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20 relative z-10">
        
        {/* ─── Hero Section ─── */}
        <header className="mb-20 md:mb-32">
          <div className="text-center space-y-6 mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-[#1DA6D1] text-white px-5 py-1.5 rounded-full border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] text-xs font-black uppercase tracking-widest"
            >
              {product.specifications.riceType.split(' ')[0]} Collection
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-[6rem] font-serif font-black uppercase leading-[0.9] [text-shadow:6px_6px_0px_#F4D03F]"
            >
              {product.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed border-b-4 border-[#1A1A1A] pb-8 inline-block"
            >
              {product.title}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mt-12 group"
          >
            {/* Neobrutalist Image Frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#0F6C3F] rounded-[2rem] border-4 border-[#1A1A1A]" />
            
            <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] border-4 border-[#1A1A1A] bg-white shadow-[8px_8px_0px_0px_#1A1A1A]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Retro Badges */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-3 w-full px-4">
              {product.specifications.packaging.slice(0, 3).map((pack, i) => (
                <span key={pack} className={`px-5 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-black tracking-widest uppercase border-2 border-[#1A1A1A] rounded-full shadow-[4px_4px_0px_0px_#1A1A1A] whitespace-nowrap ${i % 2 === 0 ? 'bg-[#F4D03F] text-[#1A1A1A]' : 'bg-white text-[#1A1A1A]'}`}>
                  {pack}
                </span>
              ))}
            </div>
          </motion.div>
        </header>

        {/* ─── The Narrative ─── */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-24 md:mb-40 pt-10">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 bg-[#F28C28] p-8 rounded-3xl border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]">
            <h2 className="text-xs font-black tracking-widest uppercase text-[#1A1A1A] mb-4 border-b-2 border-[#1A1A1A] pb-2 inline-block">
              Flavor Profile
            </h2>
            <p className="text-3xl md:text-4xl font-serif font-black leading-tight text-white [text-shadow:2px_2px_0px_#1A1A1A]">
              Experience the {product.specifications.texture.split(',')[0].toLowerCase()} texture and natural aroma.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3">
            <p className="text-xl md:text-2xl leading-relaxed font-bold text-[#1A1A1A]">
              {product.description}
            </p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.keyFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] transition-all">
                  <span className="bg-[#1DA6D1] text-white w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#1A1A1A] font-black shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-base font-bold leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Visual Structure (Cards) ─── */}
        <section className="mb-24 md:mb-40">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10 border-b-4 border-[#1A1A1A] pb-6 gap-4">
            <h2 className="text-4xl md:text-6xl font-serif font-black uppercase [text-shadow:3px_3px_0px_#1DA6D1]">Texture Analysis</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 min-h-fit md:h-[500px]">
            {/* Visual 1: Raw (White Card) */}
            <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col justify-between border-4 border-[#1A1A1A] shadow-[10px_10px_0px_0px_#1A1A1A] relative overflow-hidden group">
              <div className="space-y-3 mb-8 md:mb-0 relative z-10">
                <span className="inline-block bg-[#1DA6D1] text-white px-3 py-1 rounded-full border-2 border-[#1A1A1A] text-[10px] font-black uppercase tracking-widest">Raw Form</span>
                <h3 className="text-3xl md:text-4xl font-serif font-black uppercase">{product.specifications.grainLength} Length</h3>
              </div>
              <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden relative z-10 border-4 border-[#1A1A1A] bg-[#FCFAF2]">
                 <img src={product.image} className="w-full h-full object-cover grayscale-[50%] scale-[2] group-hover:scale-[2.1] transition-transform duration-500" alt="Macro texture" />
              </div>
            </div>

            {/* Visual 2: Cooked (Green Card) */}
            <div className="bg-[#0F6C3F] text-white rounded-3xl p-8 md:p-12 flex flex-col justify-between border-4 border-[#1A1A1A] shadow-[10px_10px_0px_0px_#1A1A1A] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4D03F] rounded-bl-full border-b-4 border-l-4 border-[#1A1A1A]" />
              
              <div className="space-y-3 mb-10 md:mb-0 relative z-10">
                <span className="inline-block bg-[#F28C28] text-white px-3 py-1 rounded-full border-2 border-[#1A1A1A] text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#1A1A1A]">Culinary Result</span>
                <h3 className="text-3xl md:text-4xl font-serif font-black uppercase [text-shadow:2px_2px_0px_#1A1A1A]">Perfect for <br/> {product.popularDishes[0]}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                 {product.popularDishes.map((dish, i) => (
                    <span key={dish} className={`px-4 py-2 border-2 border-[#1A1A1A] rounded-full text-xs font-black tracking-widest uppercase shadow-[3px_3px_0px_0px_#1A1A1A] cursor-default whitespace-nowrap ${i % 2 === 0 ? 'bg-[#F4D03F] text-[#1A1A1A]' : 'bg-white text-[#1A1A1A]'}`}>
                      {dish}
                    </span>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Technical Specs ─── */}
        <section className="max-w-4xl mx-auto mb-24 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-black uppercase [text-shadow:3px_3px_0px_#0F6C3F] mb-4">Specifications</h2>
            <span className="bg-[#1A1A1A] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Quality Parameters</span>
          </div>

          <div className="mb-12 flex justify-center border-4 border-[#1A1A1A] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_#1A1A1A] bg-white p-4">
             
          </div>

          <div className="bg-white border-4 border-[#1A1A1A] rounded-3xl shadow-[8px_8px_0px_0px_#1A1A1A] overflow-hidden">
            {Object.entries(product.specifications).map(([key, value], index) => {
              if (key === "packaging") return null;
              return (
                <div key={key} className={`flex flex-col sm:flex-row items-baseline justify-between p-6 ${index !== 0 ? 'border-t-4 border-[#1A1A1A]' : ''} hover:bg-[#F4D03F] transition-colors group`}>
                  <span className="text-xs md:text-sm font-black tracking-widest uppercase text-[#1A1A1A] mb-1 sm:mb-0 w-1/3">
                    {formatLabel(key)}
                  </span>
                  <span className="text-lg md:text-2xl font-bold text-[#1A1A1A] sm:text-right sm:w-2/3 group-hover:translate-x-1 transition-transform">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Footer CTA (Punching Buttons) ─── */}
        <section className="text-center py-20 px-6 bg-[#1DA6D1] rounded-[3rem] border-4 border-[#1A1A1A] shadow-[12px_12px_0px_0px_#1A1A1A] relative overflow-hidden">
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#F4D03F] border-b-4 border-l-4 border-[#1A1A1A] rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F28C28] border-t-4 border-r-4 border-[#1A1A1A] rounded-tr-full" />

          <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-white mb-10 relative z-10 [text-shadow:4px_4px_0px_#1A1A1A]">
            Request a Bulk Quote
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            {/* Primary Orange Punching Button */}
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-[#F28C28] text-white rounded-full text-sm md:text-base font-black tracking-widest uppercase border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] hover:bg-[#F4D03F] hover:text-[#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1A1A1A] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all"
            >
              Contact Sales
            </Link>
            
            {/* Secondary White Punching Button */}
            <a 
              href="mailto:sales@srivarahi.com" 
              className="px-10 py-5 bg-white text-[#1A1A1A] rounded-full text-sm md:text-base font-black tracking-widest uppercase border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] hover:bg-[#0F6C3F] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1A1A1A] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all"
            >
              Email Us
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}