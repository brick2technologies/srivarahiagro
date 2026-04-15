import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const differentiators = [
    { text: "Direct sourcing from trusted farmers", color: "#F4D03F" },
    { text: "Modern rice milling & steaming tech", color: "#1DA6D1" },
    { text: "Strict quality control at every stage", color: "#F28C28" },
    { text: "Hygienic processing & packaging", color: "#0F6C3F" },
  ];

  return (
    <main className="bg-[#FCFAF2] text-[#1A1A1A] min-h-screen overflow-hidden font-sans">

      {/* ================= HERO & STORY (Combined Flow) ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-[#F28C28] font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block">
            The Varahi Heritage
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black tracking-tight leading-[1]">
            Rooted in Tradition. <br />
            Built on <span className="text-[#0F6C3F] italic">Purity.</span>
          </h1>
        </motion.div>

        {/* Asymmetrical Story Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Images */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] relative z-10"
            >
              <img
                src="/about/about-1.jpg"
                alt="Rice processing"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            {/* Decorative offset block */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F4D03F] rounded-full border-2 border-[#1A1A1A] -z-0" />
          </div>

          {/* Right Side: Flowing Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:pl-10 space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Who We Are</h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-[#1A1A1A]/80">
                Sri Varahi Agro is a trusted rice processing and distribution company committed to delivering premium-quality rice to households, traders, and bulk buyers. We specialize in sourcing carefully selected paddy and processing it using modern milling techniques to ensure consistency, purity, and superior taste.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Our Journey</h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-[#1A1A1A]/80">
                Founded with a simple vision — to supply honest, high-quality rice rooted in trust and transparency. What began as a small, quality-driven operation has grown into a reliable agro enterprise serving diverse markets. Over the years, our consistent focus on hygiene and customer satisfaction has helped us build long-lasting relationships.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= BENTO BOX GRID (Differentiators & Vision) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Quality Image Block */}
          <div className="md:col-span-3 lg:col-span-2 rounded-3xl overflow-hidden border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] relative min-h-[300px]">
             <img
               src="/about/about-2.jpg"
               alt="Quality control"
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
               <h3 className="text-3xl font-serif font-bold text-white">Uncompromising Quality</h3>
             </div>
          </div>

          {/* Differentiator Cards */}
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              style={{ backgroundColor: item.color }}
              className={`rounded-3xl border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-8 flex flex-col justify-center cursor-default transition-transform ${index === 0 || index === 3 ? 'text-[#1A1A1A]' : 'text-white'}`}
            >
              <p className="text-xl font-bold leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}

          {/* Vision & Mission Block */}
          <div className="md:col-span-3 lg:col-span-4 grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-3xl border-2 border-[#1A1A1A] p-10 flex flex-col justify-center shadow-[6px_6px_0px_0px_#1A1A1A]">
              <span className="w-12 h-1 bg-[#1DA6D1] mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-lg font-medium text-[#1A1A1A]/80">
                To be a trusted name in the rice industry, known for integrity, quality, and total customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl border-2 border-[#1A1A1A] p-10 flex flex-col justify-center shadow-[6px_6px_0px_0px_#1A1A1A]">
              <span className="w-12 h-1 bg-[#0F6C3F] mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-lg font-medium text-[#1A1A1A]/80">
                To deliver premium rice products through ethical sourcing, advanced processing, and continuous quality improvement.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= FLOATING CTA WITH PUNCHING BUTTONS ================= */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-[#0F6C3F] border-4 border-[#1A1A1A] shadow-[12px_12px_0px_0px_#1A1A1A] rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden">
          
          {/* Subtle color accents inside the CTA */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F28C28] rounded-bl-full border-b-4 border-l-4 border-[#1A1A1A]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1DA6D1] rounded-tr-full border-t-4 border-r-4 border-[#1A1A1A]" />

          <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-6 relative z-10 [text-shadow:3px_3px_0px_#1A1A1A]">
            Looking for a Reliable Rice Supplier?
          </h2>
          <p className="text-lg font-bold text-[#FCFAF2]/90 max-w-2xl mx-auto mb-10 relative z-10">
            Connect with Sri Varahi Agro for premium-quality rice, transparent pricing, and dependable supply chains.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            {/* BUTTON 1: Yellow Punching Button */}
            <Link
              to="/products"
              className="px-10 py-5 rounded-full bg-[#F4D03F] text-[#1A1A1A] font-black uppercase tracking-widest border-[2px] border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] hover:bg-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1A1A1A] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-150"
            >
              View Products
            </Link>
            
            {/* BUTTON 2: White to Orange Punching Button */}
            <Link
              to="/contact"
              className="px-10 py-5 rounded-full bg-white text-[#1A1A1A] font-black uppercase tracking-widest border-[2px] border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] hover:bg-[#F28C28] hover:text-[#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1A1A1A] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-150"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}