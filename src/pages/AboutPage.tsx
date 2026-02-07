export default function AboutPage() {
  return (
    <main className="bg-[#FEFACD] text-[#344C2F] min-h-screen">

      {/* ================= HERO + INTRO ================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-16 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-golden-goose tracking-tight">
            ABOUT SRI VARAHI AGRO
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-[#344C2F]/80 font-body max-w-4xl mx-auto">
            Delivering pure, premium-quality rice through trusted sourcing,
            modern processing, and a deep commitment to quality.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE + IMAGE (full-bleed feel) ================= */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-golden-goose">
              WHO WE ARE
            </h2>
            <p className="mt-8 text-lg md:text-xl text-[#344C2F]/80 font-body leading-relaxed">
              Sri Varahi Agro is a trusted rice processing and distribution
              company committed to delivering premium-quality rice to
              households, traders, and bulk buyers. We specialize in sourcing
              carefully selected paddy and processing it using modern milling
              techniques to ensure consistency, purity, and superior taste.
            </p>
            <p className="mt-6 text-lg md:text-xl text-[#344C2F]/80 font-body leading-relaxed">
              Rooted in agricultural tradition and strengthened by technology,
              we take pride in supplying rice that meets the expectations of
              both everyday consumers and commercial partners.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <img
              src="/about/about-1.jpg"
              alt="Rice processing and grains"
              className="w-full h-[380px] md:h-[480px] lg:h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <section className="py-20 px-6 bg-[#344C2F]/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-golden-goose">
            OUR JOURNEY
          </h2>
          <div className="mt-10 max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-[#344C2F]/80 font-body leading-relaxed">
              Sri Varahi Agro was founded with a simple vision — to supply honest,
              high-quality rice rooted in trust and transparency. What began as a
              small, quality-driven operation has grown into a reliable agro
              enterprise serving diverse markets.
            </p>
            <p className="text-lg md:text-xl text-[#344C2F]/80 font-body leading-relaxed">
              Over the years, our consistent focus on quality, hygiene, and
              customer satisfaction has helped us build long-lasting
              relationships with farmers, traders, and buyers.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-golden-goose mb-16">
            WHAT MAKES US DIFFERENT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Direct sourcing from trusted farmers",
              "Modern rice milling & steaming technology",
              "Strict quality control at every stage",
              "Hygienic processing & packaging",
              "Consistent grain quality and taste",
              "Reliable supply and timely delivery",
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-3xl border border-[#344C2F]/10 bg-white/60 backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
                  index % 2 === 1 ? "lg:mt-12" : ""
                }`}
              >
                <p className="text-lg font-body text-[#344C2F]/90 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY & PROCESSING (flipped order for rhythm) ================= */}
      <section className="py-20 px-6 bg-[#344C2F]/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-golden-goose">
              QUALITY & PROCESSING STANDARDS
            </h2>
            <p className="mt-8 text-lg md:text-xl text-[#344C2F]/80 font-body leading-relaxed">
              Quality is at the heart of everything we do. From selecting the
              right paddy to final packaging, every step follows strict hygiene
              and quality standards to preserve nutrition, aroma, and taste.
            </p>
            <p className="mt-6 text-lg md:text-xl text-[#344C2F]/80 font-body leading-relaxed">
              Our controlled processing environment ensures safe, clean, and
              consistent rice that customers can rely on every time.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
            <img
              src="/about/about-2.jpg"
              alt="Rice quality and processing"
              className="w-full h-[380px] md:h-[480px] lg:h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= VALUES: Farmers + Vision + Mission ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-golden-goose mb-12">
            Our Core Commitments
          </h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-golden-goose mb-6">
                Commitment to Farmers & Sustainability
              </h3>
              <p className="text-lg md:text-xl text-[#344C2F]/80 font-body leading-relaxed max-w-4xl mx-auto">
                We believe strong partnerships with farmers are the foundation of
                quality. By supporting fair sourcing practices and responsible
                agriculture, we aim to promote sustainable farming and long-term
                rural development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-[#344C2F]/10">
              <div>
                <h3 className="text-3xl font-golden-goose mb-6">OUR VISION</h3>
                <p className="text-lg md:text-xl text-[#344C2F]/80 font-body leading-relaxed">
                  To be a trusted name in the rice industry, known for integrity,
                  quality, and customer satisfaction.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-golden-goose mb-6">OUR MISSION</h3>
                <p className="text-lg md:text-xl text-[#344C2F]/80 font-body leading-relaxed">
                  To deliver premium rice products through ethical sourcing,
                  advanced processing, and continuous quality improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-[#344C2F]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-golden-goose">
            Looking for a Reliable Rice Supplier?
          </h2>
          <p className="mt-6 text-xl text-[#344C2F]/80 font-body">
            Connect with Sri Varahi Agro for premium-quality rice and dependable
            supply.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/products"
              className="px-10 py-4 rounded-2xl bg-[#344C2F] text-[#FEFACD] text-base font-medium hover:opacity-90 transition shadow-md"
            >
              View Our Products
            </a>
            <a
              href="/contact"
              className="px-10 py-4 rounded-2xl border-2 border-[#344C2F] text-[#344C2F] text-base font-medium hover:bg-[#344C2F] hover:text-[#FEFACD] transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}