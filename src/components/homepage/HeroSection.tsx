import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#E7D7C1]">

      {/* ========================================================= */}
      {/* 1. BACKGROUND IMAGE - Optimized for the Illustration      */}
      {/* ========================================================= */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src="/varahi-hero.png"
          alt="Vintage Farm Landscape Illustration"
          className="w-full h-full object-cover object-bottom md:object-center brightness-[0.95] contrast-[1.05]"
        />
      </motion.div>

      {/* ========================================================= */}
      {/* 2. SMART GRADIENTS - Ensuring Text Readability            */}
      {/* ========================================================= */}
      {/* Top vignette to pull focus to the center */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent via-transparent to-[#2B2621]/30" />

      {/* Bottom heavy gradient to ground the CTA and text */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#E7D7C1]/20 to-[#2B2621]/40 mix-blend-multiply" />

      {/* Paper Texture Overlay to match the illustration style */}
      <div className="absolute inset-0 z-10 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* ========================================================= */}
      {/* 3. HERO CONTENT - Styled for "Vintage Premium" Look      */}
      {/* ========================================================= */}
      <div className="relative z-20 px-6 text-center max-w-5xl mx-auto">

        {/* Retro Subtitle Badge - Using the Deep Green from the fields */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block"
        >
          <span className="text-[#FCFAF2] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs bg-[#3E4A3D] px-6 py-2 border-2 border-[#C48C46] shadow-[4px_4px_0px_0px_#C48C46]">
            Sri Varahi Agro Foods
          </span>
        </motion.div>

        {/* Main Headline - Using the Sun Gold and Deep Earth Tones */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-5xl md:text-7xl lg:text-[8rem] font-serif leading-[0.9] tracking-tight
                     text-[#FCFAF2] 
                     [-webkit-text-stroke:1px_#3E4A3D] md:[-webkit-text-stroke:2px_#3E4A3D] 
                     [text-shadow:4px_4px_0px_#3E4A3D] md:[text-shadow:8px_8px_0px_#3E4A3D]"
        >
          A pure <span className="italic text-[#C48C46]">harvest</span> <br className="hidden md:block" />
          for everyone.
        </motion.h1>

        {/* Description - Semi-opaque background for high-detail areas */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-lg md:text-2xl text-[#FCFAF2] font-medium tracking-wide max-w-2xl mx-auto 
                     bg-[#3E4A3D]/40 backdrop-blur-sm py-2 px-4 rounded-sm border-l-4 border-[#C48C46]"
        >
          Nutrition is a journey. Take it with confidence directly from heritage farms.
        </motion.p>

        {/* CTA Button - High contrast against the earthy background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Link to="/contact">
            <button
              className="flex items-center gap-2 bg-[#EF8D27] text-[#FCFAF2] text-sm md:text-base font-medium px-8 py-3 rounded-full border-[1.5px] border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-[#F4CE31] hover:text-[#1A1A1A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Explore the Harvest
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </Link>
        </motion.div>

      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 z-20 text-[#3E4A3D] font-bold text-xs tracking-widest uppercase opacity-60"
      >
        Scroll to discover
      </motion.div>
    </div>
  );
}