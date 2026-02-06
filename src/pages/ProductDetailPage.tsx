import  { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const formatLabel = (str: string) => {
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEFACD] text-[#344C2F] p-6">
        <h1 className="text-3xl font-serif font-medium mb-4">Variety Not Found</h1>
        <Link to="/products" className="underline underline-offset-4 opacity-70">Return to Catalogue</Link>
      </div>
    );
  }

  return (
    <main className="bg-[#FEFACD] min-h-screen text-[#344C2F] selection:bg-[#344C2F] selection:text-[#FEFACD] overflow-x-hidden">
      
      {/* ─── Navigation ─── */}
      <nav className="absolute top-20 left-0 w-full p-6 md:p-10 z-50">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-3 text-xs md:text-sm font-medium tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
        >
          <span className="w-6 md:w-8 h-px bg-[#344C2F]"></span>
          Back
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-16">
        
        {/* ─── Hero Section ─── */}
        <header className="text-center mb-16 md:mb-32">
          <div className="space-y-4 md:space-y-6">
            <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-50">
              {product.specifications.riceType.split(' ')[0]} Collection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium leading-[1.1] px-2">
              {product.name}
            </h1>
            <p className="text-lg md:text-2xl font-light opacity-80 max-w-2xl mx-auto leading-relaxed px-4">
              {product.title}
            </p>
          </div>

          <div className="relative mt-10 md:mt-16 group px-2 sm:px-0">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-2xl md:rounded-[3rem]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#344C2F]/5 mix-blend-multiply pointer-events-none"></div>
            </div>
            
            {/* Packaging Badges - Responsive wrap */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 w-full px-4">
              {product.specifications.packaging.slice(0, 3).map((pack) => (
                <span key={pack} className="bg-[#FEFACD] text-[#344C2F] px-3 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs font-bold tracking-widest border border-[#344C2F]/10 rounded-full shadow-lg whitespace-nowrap">
                  {pack}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ─── The Narrative (Story) - Fixed Overlap ─── */}
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start mb-24 md:mb-40">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-40 mb-3 md:mb-4">
              The Profile
            </h2>
            <div className="h-px w-10 md:w-12 bg-[#344C2F] mb-6"></div>
            <p className="text-2xl md:text-3xl font-serif leading-tight">
              "Experience the <span className="italic">{product.specifications.texture.split(',')[0].toLowerCase()}</span> texture and <span className="italic">natural</span> aroma."
            </p>
          </div>
          
          <div className="w-full lg:w-2/3">
            <p className="text-lg md:text-2xl leading-relaxed font-light opacity-90">
              {product.description}
            </p>
            
            <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8">
              {product.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-baseline gap-4 border-t border-[#344C2F]/5 pt-4">
                  <span className="text-[#344C2F]/30 font-serif text-base md:text-lg">{(i + 1).toString().padStart(2, '0')}</span>
                  <span className="text-base md:text-lg opacity-80 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Visual Structure (Texture & Plate) - Responsive Height ─── */}
        <section className="mb-24 md:mb-40">
          <div className="flex items-end justify-between mb-8 md:mb-12 px-2">
            <h2 className="text-3xl md:text-4xl font-serif">Visual Texture</h2>
            <span className="hidden sm:block text-[10px] md:text-xs opacity-50 tracking-widest uppercase">Grain Analysis</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-h-fit md:h-[500px]">
            {/* Visual 1: Raw */}
            <div className="bg-[#344C2F]/5 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-between hover:bg-[#344C2F]/10 transition-colors group">
              <div className="space-y-2 mb-8 md:mb-0">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-50">Raw Composition</span>
                <h3 className="text-xl md:text-2xl font-serif">{product.specifications.grainLength} Length</h3>
              </div>
              <div className="w-full h-48 md:h-64 bg-[#344C2F]/5 rounded-xl overflow-hidden border border-[#344C2F]/5">
                 <img src={product.image} className="w-full h-full object-cover opacity-40 scale-[2] grayscale contrast-125" alt="Macro texture" />
              </div>
            </div>

            {/* Visual 2: Cooked */}
            <div className="bg-[#344C2F] text-[#FEFACD] rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-between">
              <div className="space-y-2 mb-10 md:mb-0">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-50">Culinary Result</span>
                <h3 className="text-xl md:text-2xl font-serif px-1">Perfect for {product.popularDishes[0]}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                 {product.popularDishes.map(dish => (
                    <span key={dish} className="px-3 py-1.5 border border-[#FEFACD]/30 rounded-full text-[11px] md:text-xs hover:bg-[#FEFACD] hover:text-[#344C2F] transition-all cursor-default whitespace-nowrap">
                      {dish}
                    </span>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Technical Specs - Fixed for Mobile ─── */}
        <section className="max-w-3xl mx-auto mb-24 md:mb-40 px-2">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-serif mb-2">Technical Summary</h2>
            <p className="text-xs md:text-sm opacity-50 tracking-widest uppercase">Quality Parameters</p>
          </div>

          <div className="divide-y divide-[#344C2F]/10 border-t border-b border-[#344C2F]/10">
            {Object.entries(product.specifications).map(([key, value]) => {
              if (key === "packaging") return null;
              return (
                <div key={key} className="flex flex-col sm:flex-row items-center sm:items-center justify-between py-5 md:py-8 group hover:px-2 transition-all">
                  <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-40 mb-1 sm:mb-0">
                    {formatLabel(key)}
                  </span>
                  <span className="text-lg md:text-xl font-medium sm:text-right">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Footer CTA ─── */}
        <section className="text-center py-16 md:py-32 border-t border-[#344C2F]/10">
          <h2 className="text-4xl md:text-7xl font-serif mb-8 md:mb-12">
            Start a <span className="italic">Partnership</span>
          </h2>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <a 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-[#344C2F] text-[#FEFACD] rounded-full font-bold tracking-wide text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Enquire for Bulk Supply
            </a>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm md:text-base">
              <span className="opacity-40 uppercase tracking-tighter hidden sm:block">─── or ───</span>
              <a href="mailto:sales@yourdomain.com" className="underline underline-offset-8 decoration-[#344C2F]/20 hover:decoration-[#344C2F] transition-all">
                Download Technical Datasheet
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}