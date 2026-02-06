import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  /* ============================= */
  /* TEXT ANIMATION */
  /* ============================= */
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  /* ============================= */
  /* SCROLL PARALLAX FOR BIG PADDY */
  /* ============================= */
  const { scrollY } = useScroll();

  const bigPaddyY1 = useTransform(scrollY, [0, 500], [0, -80]);
  const bigPaddyY2 = useTransform(scrollY, [0, 500], [0, 100]);
  const bigPaddyY3 = useTransform(scrollY, [0, 500], [0, -120]);

  return (
    <section className="relative w-full min-h-[150vh] bg-[#344C2F] overflow-hidden">

      {/* ================================================= */}
      {/* FLOATING SMALL PADDY (FIRST 100VH) */}
      {/* ================================================= */}
      <div className="absolute inset-0 h-screen pointer-events-none z-0">
        {[
          { src: "/paddy-1.svg", className: "top-16 left-10 w-20", dur: 7, y: -25 },
          { src: "/paddy-2.svg", className: "top-28 right-12 w-34", dur: 8, y: 30 },
          { src: "/paddy-3.svg", className: "top-1/3 left-20 w-28", dur: 9, y: -35 },
          { src: "/paddy-4.svg", className: "top-1/3 right-24 w-32", dur: 8.5, y: 40 },
          { src: "/paddy-5.svg", className: "bottom-32 left-16 w-26", dur: 10, y: -30 },
          { src: "/paddy-6.svg", className: "bottom-28 right-20 w-30", dur: 9, y: 35 },
          { src: "/paddy-7.svg", className: "bottom-16 right-1/3 w-24", dur: 8, y: -25 },
        ].map((item, i) => (
          <motion.img
            key={i}
            src={item.src}
            alt=""
            aria-hidden
            className={`absolute opacity-70 ${item.className}`}
            animate={{ y: [0, item.y, 0] }}
            transition={{
              duration: item.dur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ================================================= */}
      {/* BIG PADDY BEHIND H1 (FIRST 50VH + PARALLAX) */}
      {/* ================================================= */}
      <div className="absolute inset-0 h-[50vh] pointer-events-none z-0 flex items-center justify-center">

        <motion.img
          src="/paddy-6.svg"
          alt=""
          aria-hidden
          style={{ y: bigPaddyY1 }}
          className="absolute w-[360px] md:w-[520px] lg:w-[680px] opacity-45 blur-sm"
        />

        <motion.img
          src="/paddy-7.svg"
          alt=""
          aria-hidden
          style={{ y: bigPaddyY2 }}
          className="absolute w-[300px] md:w-[460px] lg:w-[620px] opacity-35 blur-xs"
        />

        <motion.img
          src="/paddy-8.svg"
          alt=""
          aria-hidden
          style={{ y: bigPaddyY3 }}
          className="absolute w-[280px] md:w-[420px] lg:w-[580px] opacity-40 blur-xs"
        />
      </div>

      {/* ================================================= */}
      {/* HERO CONTENT */}
      {/* ================================================= */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-32">
        <div className="text-center px-6 max-w-6xl w-full relative">

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl lg:text-7xl font-golden-goose text-[#FEFACD] leading-tight"
          >
            {"PURE GRAINS.".split("").map((char, i) => (
              <motion.span
                key={`l1-${i}`}
                variants={letter}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {"HONEST NUTRITION.".split("").map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                variants={letter}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="mt-6 text-lg md:text-xl text-[#FEFACD]/80 max-w-3xl mx-auto font-body">
            Premium quality rices and millets sourced directly from farmers,
            processed with care, and delivered with trust.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-2xl bg-[#FEFACD] text-[#344C2F] hover:opacity-90 transition">
              Enquiry Now
            </button>
            <button className="px-8 py-3 rounded-2xl border border-[#FEFACD] text-[#FEFACD] hover:bg-[#FEFACD] hover:text-[#344C2F] transition">
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* CATEGORIES BELOW HERO */}
      {/* ================================================= */}
      <div className="pb-32 relative z-10">
        <div className="px-6 max-w-6xl mx-auto">
          <img
            src="/categories.png"
            alt="Rice, Dal and Wheat"
            className="w-full h-[260px] md:h-[320px] object-contain rounded-2xl mb-16"
          />

          <p className="text-center text-sm uppercase tracking-widest text-[#FEFACD]/60 mb-8 font-body">
            Our Categories
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-4xl mx-auto">
            {["Rice", "Dal", "Wheat"].map((item) => (
              <div
                key={item}
                className="border border-[#FEFACD]/30 rounded-xl p-8 text-center backdrop-blur-sm hover:bg-[#FEFACD]/10 transition"
              >
                <h3 className="text-xl font-golden-goose text-[#FEFACD]">
                  {item}
                </h3>
                <p className="mt-2 text-sm text-[#FEFACD]/70 font-body">
                  Premium quality grains
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
