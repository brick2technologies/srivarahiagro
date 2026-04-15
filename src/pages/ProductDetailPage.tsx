import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageSquare, Mail } from "lucide-react";

const formatLabel = (str: string) => {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str: string) => str.toUpperCase());
};

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFAF2] text-[#1A1A1A] p-6 font-sans relative overflow-hidden selection:bg-[#F28C28]">
        {/* Dotted Background */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(#1A1A1A 1.5px, transparent 0)`, backgroundSize: '32px 32px' }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 [text-shadow:4px_4px_0px_#F28C28] [-webkit-text-stroke:2px_#1A1A1A]">
            Harvest Not Found
          </h1>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4D03F] text-[#1A1A1A] font-black uppercase tracking-widest border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <ArrowLeft size={20} strokeWidth={3} /> Return to Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#FCFAF2] min-h-screen text-[#1A1A1A] font-sans selection:bg-[#F28C28] selection:text-[#1A1A1A] overflow-x-hidden relative">
      
      {/* NEOBRUTALIST GRID BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#1A1A1A 1.5px, transparent 0)`, backgroundSize: '32px 32px' }}
      />
      
      {/* ─── Navigation (Floating Neobrutalist Pill) ─── */}
      <nav className="absolute top-6 left-6 md:top-10 md:left-10 z-50">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-xl border-4 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] text-xs md:text-sm font-black tracking-widest uppercase hover:bg-[#F4D03F] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <ArrowLeft size={18} strokeWidth={3} /> Back
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">
        
        {/* ─── HERO SECTION ─── */}
        <header className="mb-20 md:mb-32">
          <div className="text-center space-y-6 mb-16 flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-[#1DA6D1] text-white px-5 py-1.5 rounded-lg border-4 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-xs font-black uppercase tracking-widest -rotate-2"
            >
              {product.specifications.riceType.split(' ')[0]} Collection
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-[6rem] font-serif font-black uppercase leading-[0.85] [text-shadow:6px_6px_0px_#F4D03F] tracking-tighter"
            >
              {product.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl font-bold max-w-3xl mx-auto leading-tight border-b-4 border-[#1A1A1A] pb-6"
            >
              {product.title}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mt-12 group max-w-5xl mx-auto"
          >
            {/* Neobrutalist Image Frame Offset */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#0F6C3F] rounded-[2rem] border-4 border-[#1A1A1A]" />
            
            <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] border-4 border-[#1A1A1A] bg-white shadow-[8px_8px_0px_0px_#1A1A1A]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Retro Badges */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-3 w-full px-4">
              {product.specifications.packaging.slice(0, 3).map((pack, i) => (
                <span key={pack} className={`px-5 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-black tracking-widest uppercase border-4 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0px_0px_#1A1A1A] whitespace-nowrap hover:-translate-y-1 transition-transform ${i % 2 === 0 ? 'bg-[#F4D03F] text-[#1A1A1A]' : 'bg-white text-[#1A1A1A] relative -top-2'}`}>
                  {pack}
                </span>
              ))}
            </div>
          </motion.div>
        </header>

        {/* ─── THE NARRATIVE ─── */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-24 md:mb-40 pt-10">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 bg-[#F28C28] p-8 rounded-[2rem] border-4 border-[#1A1A1A] shadow-[12px_12px_0px_0px_#1A1A1A] -rotate-1">
            <h2 className="text-xs font-black tracking-widest uppercase text-[#1A1A1A] mb-4 border-b-4 border-[#1A1A1A] pb-2 inline-block">
              Flavor Profile
            </h2>
            <p className="text-3xl md:text-4xl font-serif font-black leading-none text-white [text-shadow:3px_3px_0px_#1A1A1A] italic">
              Experience the {product.specifications.texture.split(',')[0].toLowerCase()} texture and natural aroma.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3">
            <p className="text-xl md:text-3xl leading-tight font-black text-[#1A1A1A] bg-white p-6 md:p-8 border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1DA6D1] rounded-2xl">
              {product.description}
            </p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.keyFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl border-4 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  <CheckCircle2 className="text-[#0F6C3F] shrink-0" size={28} strokeWidth={3} />
                  <span className="text-lg font-bold leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VISUAL STRUCTURE (CARDS) ─── */}
        <section className="mb-24 md:mb-40">
          <div className="flex flex-col items-center mb-12 border-b-4 border-[#1A1A1A] pb-6 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-black uppercase [text-shadow:4px_4px_0px_#1DA6D1]">Texture Analysis</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 min-h-fit md:h-[450px]">
            {/* Visual 1: Raw (White Card) */}
            <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between border-4 border-[#1A1A1A] shadow-[12px_12px_0px_0px_#1A1A1A] relative overflow-hidden group">
              <div className="space-y-3 mb-8 md:mb-0 relative z-10">
                <span className="inline-block bg-[#1DA6D1] text-white px-3 py-1 rounded-md border-4 border-[#1A1A1A] text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#1A1A1A]">Raw Form</span>
                <h3 className="text-3xl md:text-4xl font-serif font-black uppercase leading-none">{product.specifications.grainLength} Length</h3>
              </div>
              <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden relative z-10 border-4 border-[#1A1A1A] bg-[#FCFAF2]">
                 <img src={product.image} className="w-full h-full object-cover grayscale-[40%] scale-[2] group-hover:scale-[2.2] group-hover:grayscale-0 transition-all duration-700" alt="Macro texture" />
              </div>
            </div>

            {/* Visual 2: Cooked (Green Card) */}
            <div className="bg-[#0F6C3F] text-white rounded-[2rem] p-8 flex flex-col justify-between border-4 border-[#1A1A1A] shadow-[12px_12px_0px_0px_#1A1A1A] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4D03F] rounded-bl-[3rem] border-b-4 border-l-4 border-[#1A1A1A]" />
              
              <div className="space-y-3 mb-10 md:mb-0 relative z-10">
                <span className="inline-block bg-[#F28C28] text-white px-3 py-1 rounded-md border-4 border-[#1A1A1A] text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#1A1A1A]">Culinary Result</span>
                <h3 className="text-3xl md:text-4xl font-serif font-black uppercase leading-none [text-shadow:3px_3px_0px_#1A1A1A]">Perfect for <br/> {product.popularDishes[0]}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                 {product.popularDishes.map((dish, i) => (
                    <span key={dish} className={`px-4 py-2 border-4 border-[#1A1A1A] rounded-xl text-xs font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_#1A1A1A] cursor-default whitespace-nowrap hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${i % 2 === 0 ? 'bg-[#F4D03F] text-[#1A1A1A]' : 'bg-white text-[#1A1A1A]'}`}>
                      {dish}
                    </span>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TECHNICAL SPECS (Receipt Style) ─── */}
        <section className="max-w-4xl mx-auto mb-24 md:mb-32">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#1A1A1A] text-white px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest mb-4 border-2 border-transparent">Quality Parameters</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black uppercase [text-shadow:4px_4px_0px_#0F6C3F] tracking-tighter">Specifications</h2>
          </div>

          <div className="bg-white border-4 border-[#1A1A1A] rounded-2xl shadow-[12px_12px_0px_0px_#1A1A1A] overflow-hidden rotate-1">
            {Object.entries(product.specifications).map(([key, value], index) => {
              if (key === "packaging") return null;
              return (
                <div key={key} className={`flex flex-col sm:flex-row items-baseline justify-between p-6 ${index !== 0 ? 'border-t-4 border-[#1A1A1A]' : ''} odd:bg-white even:bg-[#FCFAF2] hover:bg-[#F4D03F] transition-colors group`}>
                  <span className="text-xs md:text-sm font-black tracking-widest uppercase text-[#1A1A1A]/60 mb-1 sm:mb-0 w-1/3">
                    {formatLabel(key)}
                  </span>
                  <span className="text-lg md:text-2xl font-black text-[#1A1A1A] sm:text-right sm:w-2/3 group-hover:translate-x-2 transition-transform">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── FOOTER CTA (Billboard Sticker) ─── */}
        <section className="text-center py-20 px-6 bg-[#1DA6D1] rounded-[2rem] border-4 border-[#1A1A1A] shadow-[16px_16px_0px_0px_#1A1A1A] relative overflow-hidden -rotate-1">
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#F4D03F] border-b-4 border-l-4 border-[#1A1A1A] rounded-bl-[4rem]" />
          <div className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-[#F28C28] border-t-4 border-r-4 border-[#1A1A1A] rounded-tr-[3rem]" />

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black uppercase text-white mb-10 relative z-10 [text-shadow:6px_6px_0px_#1A1A1A] leading-none">
            Request a <br className="md:hidden" /> Bulk Quote
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-[#F28C28] text-white rounded-xl text-sm md:text-base font-black tracking-widest uppercase border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:bg-[#F4D03F] hover:text-[#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <MessageSquare fill="currentColor" size={20} /> Contact Sales
            </Link>
            
            <a 
              href="mailto:sales@srivarahi.com" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#1A1A1A] rounded-xl text-sm md:text-base font-black tracking-widest uppercase border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:bg-[#0F6C3F] hover:text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <Mail fill="currentColor" size={20} /> Email Us
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}