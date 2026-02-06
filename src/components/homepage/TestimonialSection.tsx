import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Rice Trader",
    location: "Tamil Nadu",
    message:
      "Sri Varahi Agro delivers consistent quality every time. Their rice grains are uniform and customers are always satisfied.",
  },
  {
    name: "Suresh Patel",
    role: "Wholesale Distributor",
    location: "Andhra Pradesh",
    message:
      "Reliable supply and on-time delivery. We have been sourcing rice from them for years without any issues.",
  },
  {
    name: "Mahesh Reddy",
    role: "Bulk Buyer",
    location: "Telangana",
    message:
      "Excellent milling quality and packaging. Their team is professional and very responsive.",
  },
  {
    name: "Anil Shah",
    role: "Exporter",
    location: "Gujarat",
    message:
      "Quality, consistency, and commitment — Sri Varahi Agro stands out in the rice industry.",
  },
];

// duplicate for seamless loop
const scrollingTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FEFACD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#344C2F] mb-4 font-golden-goose">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Trusted by traders, wholesalers, and bulk buyers across regions
          </p>
        </div>

        {/* Infinite Scroll */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {scrollingTestimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-[320px]
                         bg-[#344C2F] rounded-2xl p-6
                         shadow-md hover:shadow-xl transition-all duration-300
                         flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FEFACD] text-[#FEFACD]"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-sm text-[#FEFACD]/90 leading-relaxed mb-6">
                “{item.message}”
              </p>

              {/* Client Info */}
              <div className="border-t border-[#FEFACD]/20 pt-4">
                <h4 className="text-sm font-semibold text-[#FEFACD]">
                  {item.name}
                </h4>
                <p className="text-xs text-[#FEFACD]/70">
                  {item.role} · {item.location}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
