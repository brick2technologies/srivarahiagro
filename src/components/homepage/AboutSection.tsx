export default function AboutUsSection() {
  return (
    // Updated background to a cleaner off-white to let the logo colors pop
    <section className="relative w-full bg-[#FCFAF2] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="flex flex-col">

          {/* Label - Using Logo Blue */}
          <div className="order-1 self-start mb-6">
            <span className="bg-[#1DA6D1] text-white px-5 py-1.5 rounded-full border-[2px] border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-xs font-black uppercase tracking-[0.2em]">
              About Sri Varahi
            </span>
          </div>

          {/* Heading - Bold with Logo Orange Accent */}
          <h2 className="order-2 text-3xl md:text-5xl font-serif font-bold text-[#1A1A1A] leading-[1.1] mb-8 md:text-left">
            Supplying Quality Rice & Grains  
            <span className="block italic text-[#F28C28]">Naturally & Responsibly</span>
          </h2>

          {/* Mobile Image - With Logo Green Shadow */}
          <div className="order-3 md:hidden relative w-full h-[300px] rounded-2xl overflow-hidden border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#0F6C3F] mb-10">
            <img
              src="/images/about-varadha-agro.jpg"
              alt="Varahi Agro Grains"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Paragraphs */}
          <div className="order-4 space-y-5">
            <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed font-bold">
              Sri Varahi Agro is a trusted supplier of premium-quality rice, wheat,
              and dal, serving households and retailers with consistency and care. 
            </p>

            <p className="text-[#1A1A1A]/80 text-base md:text-lg leading-relaxed font-medium">
              Rooted in agricultural tradition and supported by modern practices,
              we are committed to delivering pure, wholesome grains — every grain,
              every harvest.
            </p>
          </div>

          {/* Highlights - Using the Yellow & Green from Logo */}
          <div className="order-6 mt-10 flex flex-wrap gap-4">
            {[
              { text: "Multiple Rice Varieties", color: "#F4D03F", textCol: "#1A1A1A" },
              { text: "Farm-Sourced Quality", color: "#0F6C3F", textCol: "#FCFAF2" },
              { text: "Hygienic Processing", color: "#1DA6D1", textCol: "#FCFAF2" },
            ].map((item, index) => (
              <span
                key={index}
                style={{ backgroundColor: item.color, color: item.textCol }}
                className="px-5 py-2 text-sm font-black uppercase tracking-tight rounded-full border-[2px] border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]"
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop Image - Neobrutalist Frame using Logo Blue & Orange */}
        <div className="hidden md:block relative group">
            {/* Background Decorative Shadow Box - Logo Orange */}
            <div className="absolute inset-0 translate-x-5 translate-y-5 bg-[#F28C28] rounded-2xl border-2 border-[#1A1A1A]" />
            
            {/* Main Image Container */}
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden border-2 border-[#1A1A1A] bg-white shadow-[10px_10px_0px_0px_#1DA6D1]">
                <img
                    src="/images/about-varadha-agro.jpg"
                    alt="Varahi Agro Grains"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Green tint overlay to unify with brand */}
                <div className="absolute inset-0 bg-[#0F6C3F]/10 mix-blend-multiply" />
            </div>
        </div>

      </div>
    </section>
  );
}