import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = navItems.find((item) => item.path === location.pathname)?.name || "Home";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans text-[#1A1A1A]
        ${
          scrolled
            ? "bg-[#FCFAF2]/95 backdrop-blur-md shadow-sm pt-4 pb-3"
            : "bg-transparent pt-6 pb-6"
        }`}
      >
        {/* Brand Color Stripe (Blue, Green, Yellow, Orange) */}
        <div className="absolute top-0 left-0 w-full h-1.5 flex z-50">
          <div className="flex-1 bg-[#1CA2C9]"></div>
          <div className="flex-1 bg-[#1B7145]"></div>
          <div className="flex-1 bg-[#F4CE31]"></div>
          <div className="flex-1 bg-[#EF8D27]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="/logo.png"
              alt="Sri Varahi Agro Foods"
              className="h-10 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />
           
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm tracking-wide transition-colors duration-200
                ${
                  active === item.name
                    ? "text-[#EF8D27] font-bold"
                    : "text-[#1A1A1A] hover:text-[#1B7145]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <Link to="/contact">
              <span className="text-sm text-[#1A1A1A] hover:text-[#1B7145] transition-colors tracking-wide font-medium">
                Enquiry
              </span>
            </Link>

            {/* Signature Offset Shadow Button - Using Logo Orange */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#EF8D27] text-[#FCFAF2] text-sm font-medium px-6 py-2.5 rounded-full border-[1.5px] border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-[#F4CE31] hover:text-[#1A1A1A] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              WhatsApp
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 flex flex-col gap-1.5 z-50 relative"
          >
            <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-[2.5px] bg-[#1A1A1A] origin-center transition-all" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[2.5px] bg-[#1A1A1A] transition-all" />
            <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-[2.5px] bg-[#1A1A1A] origin-center transition-all" />
          </button>

        </div>
      </nav>

      {/* Mobile Dropdown Menu (Floating Card Style) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 bg-[#FCFAF2] border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] z-40 rounded-xl p-6 lg:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-xl font-serif border-b border-[#1A1A1A]/10 pb-3 transition-colors
                  ${
                    active === item.name
                      ? "text-[#EF8D27] font-bold"
                      : "text-[#1A1A1A]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <button className="w-full py-3 text-[#1A1A1A] font-medium border-[1.5px] border-[#1A1A1A] rounded-full active:bg-[#1A1A1A]/5 transition-colors">
                  Make an Enquiry
                </button>
              </Link>
              
              <a
                href="https://wa.me/919876543210"
                className="w-full flex justify-center items-center gap-2 bg-[#EF8D27] text-[#FCFAF2] font-medium py-3 rounded-full border-[1.5px] border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                WhatsApp
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}