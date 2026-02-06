export default function ProductsSection() {
  const products = [
    { name: "JSR Rice", image: "/products/jsr.jpg" },
    { name: "RNR Rice", image: "/products/rnr.jpg" },
    { name: "HMT Rice", image: "/products/hmt.jpg" },
    { name: "BPT Rice", image: "/products/bpt.jpg" },
    { name: "Broken Rice", image: "/products/broken-rice.jpg" },
    { name: "IR64 Rice", image: "/products/ir64.jpg" },
    { name: "Swarna Rice", image: "/products/swarna.jpg" },
    { name: "NLR Rice", image: "/products/nlr.jpg" },
    { name: "Ganga Kaveri Rice", image: "/products/ganga-kaveri.jpg" },
  ]

  return (
    <section className="w-full bg-[#FEFACD] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 font-golden-goose">
          <h2 className="text-3xl md:text-4xl font-bold text-[#344C2F]">
            OUR RICE VARIETIES
          </h2>
          <p className="mt-3 text-gray-700">
            Premium quality rice sourced and processed with care
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-[#344C2F] rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 md:h-48 lg:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FEFACD] font-body">
                  {product.name} 
                </h3>

                <button
                  className="mt-4 px-6 py-2 text-sm font-medium text-[#344C2F]
                             bg-[#FEFACD] rounded-full
                             hover:bg-[#2c4028] transition hover:text-[#FEFACD]"
                >
                  View Varieties
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
