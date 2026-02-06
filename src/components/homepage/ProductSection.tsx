import { Link } from "react-router-dom";

export default function ProductsSection() {
  const products = [
    { name: "JSR Rice", image: "/products/jsr.jpg", slug: "jsr-raw-rice" },
    { name: "KNM Rice", image: "/products/KNM.jpg", slug: "knm-steam-rice" },
    { name: "HMT Rice", image: "/products/hmt.jpg", slug: "hmt-rice" },
    { name: "BPT Rice", image: "/products/bpt.jpg", slug: "bpt-raw-rice" },
    { name: "Broken Rice", image: "/products/broken-rice.jpg", slug: "broken-rice" },
    { name: "IR64 Rice", image: "/products/ir64.jpg", slug: "ir-64-boiled-rice" },
    { name: "Swarna Rice", image: "/products/swarna.jpg", slug: "swarna-raw-rice" },
    { name: "NLR Rice", image: "/products/nlr.jpg", slug: "nlr-steam-rice" },
    { name: "Ganga Kaveri Rice", image: "/products/ganga-kaveri.jpg", slug: "ganga-kaveri-steam-rice" },
  ];

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
          {products.map((product) => (
            <div
              key={product.slug}
              className="group bg-[#344C2F] rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <Link to={`/products/${product.slug}`}>
                <div className="h-40 md:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 text-center">
                {/* ✅ Name as Link */}
                <Link to={`/products/${product.slug}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FEFACD] font-body hover:underline">
                    {product.name}
                  </h3>
                </Link>

                {/* ✅ Button as Link */}
                <Link to={`/products/${product.slug}`}>
                  <button
                    className="mt-4 px-6 py-2 text-sm font-medium text-[#344C2F]
                               bg-[#FEFACD] rounded-full
                               hover:bg-[#2c4028] transition hover:text-[#FEFACD]"
                  >
                    View Varieties
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
