import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute active item from location
  const active = navItems.find(item => item.path === location.pathname)?.name || "Home";

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[96%] max-w-7xl rounded-2xl font-golden-goose
        transition-all duration-300 border-2 border-[#344C2F]/20
        ${scrolled ? "bg-[#FEFACD] backdrop-blur-sm shadow-lg" : "bg-[#FEFACD] shadow-lg"}`}
    >
      <div className="px-6 md:px-10 lg:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer shrink-0">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Sri Varahi Agro"
              className="h-10 w-10 md:h-11 md:w-11 rounded-lg object-cover"
            />
          </Link>
          <Link to="/">
            <span className="text-lg md:text-xl lg:text-2xl text-[#344C2F] whitespace-nowrap">
              Sri Varahi Agro
            </span>
          </Link>
        </div>

        {/* Center menu */}
        <div className="hidden md:flex bg-[#344C2F] rounded-2xl px-1.5 py-1 items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <button
                className={`px-3 lg:px-4 py-1.5 text-xs lg:text-sm font-medium rounded-xl transition-all
                  ${active === item.name
                    ? "bg-[#FEFACD] text-[#344C2F]"
                    : "text-[#FEFACD] hover:bg-[#FEFACD]/10"}`}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link to="/contact">
            <button className="px-4 lg:px-5 py-1.5 lg:py-2 rounded-2xl border border-[#344C2F] text-xs lg:text-sm text-[#344C2F] hover:bg-[#344C2F] hover:text-[#FEFACD] transition">
              Enquiry Now
            </button>
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 lg:px-5 py-1.5 lg:py-2 rounded-2xl bg-[#344C2F] text-[#FEFACD] text-xs lg:text-sm font-medium hover:bg-[#FEFACD] hover:text-[#344C2F] transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-[#344C2F]"
        >
          <div className="w-5 h-[2px] bg-[#344C2F] mb-1" />
          <div className="w-5 h-[2px] bg-[#344C2F] mb-1" />
          <div className="w-5 h-[2px] bg-[#344C2F]" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={() => setOpen(false)}>
              <button
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition
                  ${active === item.name
                    ? "bg-[#344C2F] text-[#FEFACD]"
                    : "text-[#344C2F] hover:bg-[#344C2F]/10"}`}
              >
                {item.name}
              </button>
            </Link>
          ))}

          <div className="pt-3 flex gap-2">
            {/* Enquiry */}
            <Link to="/contact" className="flex-1">
              <button className="w-full py-2 rounded-2xl border border-[#344C2F] text-[#344C2F] text-sm">
                Enquiry Now
              </button>
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              className="flex-1 w-full py-2 rounded-2xl bg-[#344C2F] text-[#FEFACD] text-center text-sm"
            >
              WhatsApp
            </a>
          </div>

        </div>
      )}
    </nav>
  );
}
