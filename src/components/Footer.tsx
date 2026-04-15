import { useLocation, Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const isProductsPage = location.pathname.startsWith("/products");

  return (
    <footer className="relative bg-[#0F6C3F] pt-32 pb-12 px-4 overflow-hidden">
      
      {/* BACKGROUND SVG - Keeping your original layer */}
      <img
        src="/footer-bg.svg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
      />

      {/* Top curve - Updated color to match our new design system */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] md:h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C240,0 480,0 720,40 960,80 1200,80 1440,30 L1440,0 L0,0 Z"
            fill={isContactPage || isProductsPage ? "#0F6C3F" : "#FCFAF2"}
          />
        </svg>
      </div>

      {/* FOOTER CARD - Neobrutalist Sticker Style */}
      <div className="relative z-20 max-w-7xl mx-auto rounded-[2rem] border-4 border-[#1A1A1A] bg-[#FCFAF2] px-8 md:px-12 py-12 shadow-[12px_12px_0px_0px_#1A1A1A]">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* Logo Section - With "Sticker" Frame */}
          <div className="flex justify-center md:justify-start">
            <div className="p-4 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1DA6D1] rounded-xl rotate-[-2deg]">
              <img
                src="/logo.png"
                alt="Sri Varahi Agro"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </div>

          {/* Navigation - Bold Neobrutalist Links */}
          <div className="grid grid-cols-2 gap-8 text-[#1A1A1A] font-bold uppercase tracking-wider text-xs md:text-sm">
            <div className="space-y-3">
              <Link to="/" className="block hover:text-[#F28C28] transition-colors">Home</Link>
              <Link to="/about" className="block hover:text-[#F28C28] transition-colors">About</Link>
              <Link to="/products" className="block hover:text-[#F28C28] transition-colors">Products</Link>
            </div>
            <div className="space-y-3">
              <Link to="/blogs" className="block hover:text-[#F28C28] transition-colors">Blogs</Link>
              <Link to="/contact" className="block hover:text-[#F28C28] transition-colors">Contact</Link>
              <a href="https://wa.me/91XXXXXXXXXX" className="block text-[#0F6C3F] underline decoration-2 underline-offset-4">Support</a>
            </div>
          </div>

          {/* Social - Neobrutalist Icon Boxes */}
          {/* Social - Neobrutalist Icon Boxes */}
          <div className="flex gap-4 justify-center md:justify-end">
            {[
              { icon: Facebook, color: "#1DA6D1" },
              { icon: Instagram, color: "#F28C28" },
              { icon: Youtube, color: "#0F6C3F" }
            ].map((social) => (
              <a
                key={social.color}
                href="#"
                // Added hover:bg-[var(--hover-bg)] right before transition-all
                className="p-3 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-[var(--hover-bg)] transition-all rounded-lg"
                style={{ '--hover-bg': social.color } as React.CSSProperties}
              >
                <social.icon className="w-6 h-6 text-[#1A1A1A]" strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Brand Giant Text - Logo Yellow with Heavy Stroke */}
        {/* <div className="mt-16 border-t-4 border-[#1A1A1A] pt-12 overflow-hidden">
          <h1 className="text-[10vw] leading-none font-black text-[#F4D03F] text-center tracking-tighter [-webkit-text-stroke:2px_#1A1A1A] [text-shadow:6px_6px_0px_#1A1A1A]">
            SRI VARAHI AGRO
          </h1>
        </div> */}

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-black text-[#1A1A1A] uppercase tracking-widest text-center">
          <p>© 2026 SRI VARAHI AGRO. CRAFTED FOR PURITY.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F28C28]">Privacy Policy</a>
            <a href="#" className="hover:text-[#F28C28]">Terms</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Padding Accent */}
      {/* <div className="h-4 w-full bg-[#F4D03F] mt-12 border-t-2 border-[#1A1A1A]" /> */}
    </footer>
  );
}