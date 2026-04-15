import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ShoppingBag, MessageCircle, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-[100dvh] py-12 bg-[#FCFAF2] flex items-center justify-center px-4 overflow-hidden selection:bg-[#F4D03F]">
      
      {/* NEOBRUTALIST GRID BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1A1A1A 1.5px, transparent 0)`,
          backgroundSize: '24px 24px' // Slightly tighter grid
        }}
      />

      <div className="relative z-10 w-full max-w-xl text-center flex flex-col items-center">
        
        {/* HUGE 404 STICKER - Scaled down for mobile */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: -2, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-block bg-[#F28C28] border-4 md:border-8 border-[#1A1A1A] px-8 py-4 md:px-10 md:py-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:shadow-[12px_12px_0px_0px_#1A1A1A] mb-8"
        >
          <h1 className="text-6xl sm:text-7xl md:text-9xl leading-none font-black text-white italic tracking-tighter [text-shadow:4px_4px_0px_#1A1A1A] md:[text-shadow:8px_8px_0px_#1A1A1A]">
            404
          </h1>
        </motion.div>

        {/* ERROR MESSAGE */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="px-2"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-3">
            LOST IN THE <span className="text-[#0F6C3F] underline decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">FIELDS?</span>
          </h2>
          <p className="text-base md:text-lg font-bold text-[#1A1A1A]/80 max-w-sm mx-auto mb-8 leading-tight md:leading-normal">
            This page has been harvested or moved. Let's get you back to the good stuff.
          </p>
        </motion.div>

        {/* ACTION BUTTONS - Compact layout */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center mb-12">
          <Link
            to="/"
            className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1DA6D1] text-white border-4 border-[#1A1A1A] rounded-xl font-black uppercase italic shadow-[4px_4px_0px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-sm md:text-base"
          >
            <Home size={18} strokeWidth={3} /> Go Home
          </Link>

          <Link
            to="/products"
            className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F4D03F] text-[#1A1A1A] border-4 border-[#1A1A1A] rounded-xl font-black uppercase italic shadow-[4px_4px_0px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-sm md:text-base"
          >
            <ShoppingBag size={18} strokeWidth={3} /> Products
          </Link>
        </div>

        {/* FLOATING HELP BOX - Tighter padding */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative bg-white border-4 border-[#1A1A1A] p-6 md:p-8 rounded-3xl shadow-[8px_8px_0px_0px_#0F6C3F] rotate-1 w-full max-w-md mx-auto"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap">
            <AlertTriangle size={14} className="text-[#F4D03F]" /> Still stuck?
          </div>
          
          <h3 className="text-lg md:text-xl font-black uppercase mb-1 md:mb-2 mt-2">Need a hand?</h3>
          <p className="text-sm md:text-base font-bold text-[#1A1A1A]/70 mb-5">
            Our support team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="flex-1 px-4 py-2.5 border-[3px] md:border-4 border-[#1A1A1A] rounded-xl font-black uppercase text-xs md:text-sm hover:bg-[#1A1A1A] hover:text-white transition-all text-center"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#25D366] text-white border-[3px] md:border-4 border-[#1A1A1A] rounded-xl font-black uppercase text-xs md:text-sm italic hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <MessageCircle size={16} fill="currentColor" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* DECORATIVE ACCENTS - Scaled & Repositioned */}
      <div className="absolute top-12 right-[5%] w-16 h-16 border-[6px] border-[#F4D03F] rounded-full opacity-30 animate-pulse hidden lg:block" />
      <div className="absolute bottom-12 left-[5%] w-24 h-6 bg-[#0F6C3F] border-4 border-[#1A1A1A] -rotate-12 opacity-30 hidden lg:block" />
    </main>
  );
}