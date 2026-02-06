export default function AboutUsSection() {
  return (
    <section className="relative w-full bg-[#FEFACD] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">

      {/* Top Outward Curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C240,0 480,0 720,40 960,80 1200,80 1440,30 L1440,0 L0,0 Z"
            fill="#344C2F"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text + Mobile Image */}
        <div className="flex flex-col">

          {/* Label */}
          <span className="order-1 inline-block mb-4 text-sm font-semibold tracking-wide uppercase text-[#344C2F]/80 font-golden-goose">
            About Varadha Agro
          </span>

          {/* Heading */}
          <h2 className="order-2 text-2xl md:text-3xl font-bold text-[#344C2F] leading-tight mb-6 font-body text-center md:text-left">
            Supplying Quality Rice, Wheat & Dal  
            <span className="block">Naturally & Responsibly</span>
          </h2>

          {/* Image – moves under H2 on mobile */}
          <div className="order-3 md:hidden relative w-full h-[280px] rounded-2xl overflow-hidden shadow-lg mb-6">
            <img
              src="/images/about-varadha-agro.jpg"
              alt="Varadha Agro Grains"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#344C2F]/20" />
          </div>

          {/* Paragraphs */}
          <p className="order-4 text-[#344C2F]/90 text-base md:text-lg leading-relaxed mb-5">
            Varadha Agro is a trusted supplier of premium-quality rice, wheat,
            and dal, serving households, retailers, and bulk buyers with
            consistency and care. Our products are sourced from reliable farms
            and processed under strict quality standards to preserve natural
            taste and nutrition.
          </p>

          <p className="order-5 text-[#344C2F]/90 text-base md:text-lg leading-relaxed">
            Rooted in agricultural tradition and supported by modern practices,
            we are committed to delivering pure, wholesome grains — every grain,
            every harvest.
          </p>

          {/* Highlights */}
          <div className="order-6 mt-8 flex flex-wrap gap-4">
            {[
              "Multiple Rice Varieties",
              "Farm-Sourced Quality",
              "Hygienic Processing",
            ].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-[#344C2F] text-[#FEFACD] rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block relative w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/about-varadha-agro.jpg"
            alt="Varadha Agro Grains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#344C2F]/20" />
        </div>

      </div>
    </section>
  );
}
