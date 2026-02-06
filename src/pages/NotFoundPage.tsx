import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="relative min-h-screen pt-20 bg-[#FEFACD] flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND SVG */}
      <div
        className="
          absolute inset-0
          bg-no-repeat
          bg-cover
          bg-center
          opacity-80
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/404-bg.svg')",
        }}
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl text-center"
      >
        {/* 404 */}
        <h1
          className="
            text-[18vw] md:text-[12vw]
            leading-none
            font-golden-goose
            text-[#344C2F]
            font-extrabold
          "
        >
          404
        </h1>

        {/* Title */}
        <h2 className="mt-2 text-2xl md:text-3xl font-golden-goose text-[#344C2F]">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-[#344C2F]/80 font-body">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Action buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-2.5 rounded-xl bg-[#344C2F] text-[#FEFACD] text-sm hover:opacity-90 transition"
          >
            Go Home
          </Link>

          <Link
            to="/products"
            className="px-6 py-2.5 rounded-xl border border-[#344C2F] text-[#344C2F] text-sm hover:bg-[#344C2F] hover:text-[#FEFACD] transition"
          >
            View Products
          </Link>
        </div>

        {/* ================= CONTACT CARD ================= */}
        <div
          className="
            mt-10
            rounded-2xl
            border border-[#344C2F]/30
            bg-white
            p-6
            shadow-sm
          "
        >
          <h3 className="text-lg font-golden-goose text-[#344C2F]">
            Need Help?
          </h3>

          <p className="mt-2 text-sm text-[#344C2F]/80 font-body">
            If you believe this is an error or need assistance, feel free to contact us.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="
                px-5 py-2.5
                rounded-xl
                bg-[#344C2F]
                text-[#FEFACD]
                text-sm
                hover:opacity-90
                transition
              "
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/919876543210"
              className="
                px-5 py-2.5
                rounded-xl
                border border-[#344C2F]
                text-[#344C2F]
                text-sm
                hover:bg-[#344C2F]
                hover:text-[#FEFACD]
                transition
              "
            >
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
