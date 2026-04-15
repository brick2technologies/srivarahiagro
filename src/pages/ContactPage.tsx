import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

/* -------------------- */
/* Custom Dropdown      */
/* -------------------- */

const purposeOptions = [
  "Bulk Enquiry",
  "Product Details",
  "Distribution / Dealership",
  "Other Business Enquiry",
];

function PurposeDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full h-14 px-4 rounded-xl
          bg-white border-4 border-[#1A1A1A]
          text-left text-sm font-bold text-[#1A1A1A]
          flex items-center justify-between
          shadow-[4px_4px_0px_0px_#1A1A1A]
          hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
          outline-none transition-all
        "
      >
        <span className={selected ? "" : "opacity-50"}>
          {selected || "Select purpose"}
        </span>
        <span className={`transition-transform font-black ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open && (
        <ul className="absolute z-30 mt-2 w-full rounded-xl overflow-hidden bg-white border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]">
          {purposeOptions.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-3 text-sm font-bold text-[#1A1A1A] cursor-pointer hover:bg-[#F4D03F] border-b-2 last:border-0 border-[#1A1A1A] transition-colors"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <input type="hidden" name="purpose" value={selected} />
    </div>
  );
}

/* -------------------- */
/* Main Contact Page    */
/* -------------------- */

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-[#FCFAF2] text-[#1A1A1A] selection:bg-[#F28C28] selection:text-[#1A1A1A] overflow-hidden">
      
      {/* NEOBRUTALIST GRID BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1A1A1A 1.5px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-48">
        
        {/* HERO HEADER */}
        <section className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-[#F28C28] text-white px-5 py-1.5 rounded-lg border-4 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-xs font-black uppercase tracking-widest mb-8"
          >
            Get In Touch
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-black uppercase leading-[0.85] tracking-tighter"
          >
            LET'S START A <br />
            <span className="text-[#1DA6D1] [text-shadow:6px_6px_0px_#1A1A1A] [-webkit-text-stroke:2px_#1A1A1A]">PARTNERSHIP</span>
          </motion.h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN - Trust & Contact Info */}
          <div className="space-y-8">
            <div className="bg-white border-4 border-[#1A1A1A] p-8 rounded-[2rem] shadow-[12px_12px_0px_0px_#0F6C3F] -rotate-1">
              <h2 className="text-3xl font-black uppercase mb-6">Why Sri Varahi?</h2>
              <ul className="space-y-4">
                {[
                  "Export-grade quality assurance",
                  "Direct sourcing from trusted farms",
                  "Fast & transparent communication",
                  "Flexible bulk packaging options"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-lg">
                    <CheckCircle2 className="text-[#0F6C3F]" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/91XXXXXXXXXX" className="flex-1 min-w-[200px] h-16 flex items-center justify-center gap-3 bg-[#25D366] text-white border-4 border-[#1A1A1A] rounded-2xl shadow-[6px_6px_0px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black uppercase italic">
                <MessageCircle fill="currentColor" /> WhatsApp Us
              </a>
              <a href="tel:+91XXXXXXXXXX" className="flex-1 min-w-[200px] h-16 flex items-center justify-center gap-3 bg-[#F4D03F] text-[#1A1A1A] border-4 border-[#1A1A1A] rounded-2xl shadow-[6px_6px_0px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black uppercase italic">
                <Phone fill="currentColor" /> Direct Call
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - The Form */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-[#FCFAF2] border-4 border-[#1A1A1A] p-8 md:p-10 rounded-[2rem] shadow-[12px_12px_0px_0px_#1A1A1A] relative overflow-hidden"
          >
            {/* Form Accent Color Bar */}
            <div className="absolute top-0 left-0 w-full h-4 bg-[#1DA6D1] border-b-4 border-[#1A1A1A]" />
            
            <h3 className="text-2xl font-black uppercase mb-8 mt-4">Quick Enquiry Form</h3>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest">Name / Company</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-14 px-4 bg-white border-4 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0px_0px_#1A1A1A] focus:outline-none focus:bg-[#FEFACD] transition-colors font-bold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full h-14 px-4 bg-white border-4 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0px_0px_#1A1A1A] focus:outline-none focus:bg-[#FEFACD] transition-colors font-bold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest">Purpose</label>
                <PurposeDropdown />
              </div>

              <button
                type="submit"
                className="w-full h-16 mt-4 bg-[#0F6C3F] text-white border-4 border-[#1A1A1A] rounded-xl shadow-[6px_6px_0px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black uppercase text-xl tracking-tighter italic"
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FOOTER TRANSITION (Matching Product Page) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg viewBox="0 0 1440 100" className="w-full h-[80px] md:h-[120px]" preserveAspectRatio="none">
          <path d="M0,100 C240,0 480,0 720,40 960,80 1200,80 1440,30 L1440,0 L0,0 Z" fill="#1A1A1A" />
          <path d="M0,100 C240,0 480,0 720,40 960,80 1200,80 1440,30 L1440,6 L0,6 Z" fill="#0F6C3F" />
        </svg>
      </div>
    </main>
  );
}