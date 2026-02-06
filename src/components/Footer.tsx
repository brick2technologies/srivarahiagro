import { useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";


export default function Footer() {
  const location = useLocation();
 const isContactPage = location.pathname === "/contact";
const isProductsPage = location.pathname.startsWith("/products");


    return (
        <footer className="relative bg-[#344C2F] pt-32 pb-12 px-4 overflow-hidden">

            {/* BACKGROUND SVG (FOOTER LEVEL) */}
            <img
                src="/footer-bg.svg"
                alt=""
                aria-hidden
                className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-90
          pointer-events-none
          z-0
        "
            />

            {/* Top inverse convex curve */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg
                    viewBox="0 0 1440 90"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-[90px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,90 C240,0 480,0 720,40 960,80 1200,80 1440,30 L1440,0 L0,0 Z"
                             fill={isContactPage || isProductsPage ? "#344C2F" : "#FEFACD"}

                    />
                </svg>
            </div>

            {/* FOOTER CARD (TRANSPARENT) */}
            <div
                className="
          relative z-20
          max-w-7xl mx-auto
          rounded-3xl
          border border-[#FEFACD]/25
          bg-transparent
          px-8 md:px-12 py-10
          backdrop-blur-md
        "
            >
                {/* Top section */}
                <div className="
          grid grid-cols-1
          md:grid-cols-3
          gap-12
          items-start
        ">

                    {/* Logo */}
                    <div className="flex justify-center">
                        <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                            <img
                                src="/logo.png"
                                alt="Sri Varahi Agro"
                                className="h-full w-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="
            grid grid-cols-3 sm:grid-cols-3
            gap-8
            text-sm text-[#FEFACD]/90
            md:pt-10
            text-center sm:text-left
          ">
                        <div className="space-y-2">
                            <a href="/" className="block hover:underline">Home</a>
                            <a href="/about" className="block hover:underline">About</a>
                            <a href="/products" className="block hover:underline">Products</a>
                        </div>

                        <div className="space-y-2">
                            <a href="/products/rice" className="block hover:underline">Rice</a>
                            <a href="/products/wheat" className="block hover:underline">Wheat</a>
                            <a href="/products/dal" className="block hover:underline">Dal</a>
                        </div>

                        <div className="space-y-2">
                            <a href="/blogs" className="block hover:underline">Blogs</a>
                            <a href="/contact" className="block hover:underline">Contact</a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex gap-5 md:pt-10 justify-center text-[#FEFACD]">

                        {/* Facebook */}
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:opacity-80 transition"
                        >
                            <Facebook className="w-6 h-6" strokeWidth={1.5} />
                        </a>

                        {/* Instagram */}
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:opacity-80 transition"
                        >
                            <Instagram className="w-6 h-6" strokeWidth={1.5} />
                        </a>

                        {/* YouTube */}
                        <a
                            href="#"
                            aria-label="YouTube"
                            className="hover:opacity-80 transition"
                        >
                            <Youtube className="w-7 h-7" strokeWidth={1.5} />
                        </a>

                    </div>


                </div>

                {/* Brand text */}
                <div className="mt-12 border-t border-[#FEFACD]/25 pt-8">
                    <h1 className="
            text-[8vw]
            md:text-[9vw]
            lg:text-[9vw]
            leading-none
            font-light
            text-[#344C2F]
            font-golden-goose
            text-center 
          ">
                        SRI VARAHI AGRO
                    </h1>
                </div>

                {/* Bottom bar */}
                <div className="
          mt-6
          flex flex-col md:flex-row
          justify-between
          items-center
          gap-4
          text-xs text-[#344C2F]
          text-center md:text-left
        ">
                    <p>© 2026 SRI VARAHI AGRO. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#">Terms Of Use</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
