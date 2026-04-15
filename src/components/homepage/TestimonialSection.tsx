import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Rice Trader",
    location: "Tamil Nadu",
    message: "Sri Varahi Agro delivers consistent quality every time. Their rice grains are uniform and customers are always satisfied.",
    accent: "#1DA6D1" // Logo Blue
  },
  {
    name: "Suresh Patel",
    role: "Wholesale Distributor",
    location: "Andhra Pradesh",
    message: "Reliable supply and on-time delivery. We have been sourcing rice from them for years without any issues.",
    accent: "#F28C28" // Logo Orange
  },
  {
    name: "Mahesh Reddy",
    role: "Bulk Buyer",
    location: "Telangana",
    message: "Excellent milling quality and packaging. Their team is professional and very responsive.",
    accent: "#0F6C3F" // Logo Green
  },
  {
    name: "Anil Shah",
    role: "Exporter",
    location: "Gujarat",
    message: "Quality, consistency, and commitment — Sri Varahi Agro stands out in the rice industry.",
    accent: "#F4D03F" // Logo Yellow
  },
];

const scrollingTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FCFAF2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-[#1DA6D1] text-white px-4 py-1 rounded-full border-[1.5px] border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] [text-shadow:3px_3px_0px_#F4D03F]">
            CLIENT REVIEWS
          </h2>
        </div>

        {/* Infinite Scroll Wrapper */}
        <div className="relative flex">
          <motion.div
            className="flex gap-8 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            whileHover={{ transition: { duration: 60 } }} // Slows down on hover
          >
            {scrollingTestimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[320px] max-w-[320px] bg-white rounded-2xl p-8 border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] flex flex-col justify-between"
              >
                <div>
                  {/* Neobrutalist Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="bg-[#F4D03F] p-1 border border-[#1A1A1A] rounded-sm">
                        <Star className="w-3.5 h-3.5 fill-[#1A1A1A] text-[#1A1A1A]" />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-base font-medium text-[#1A1A1A] leading-relaxed mb-8 italic">
                    "{item.message}"
                  </p>
                </div>

                {/* Client Info with Color Accent */}
                <div 
                  className="pt-6 border-t-2 border-[#1A1A1A] mt-auto"
                  style={{ borderColor: item.accent }}
                >
                  <h4 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-sm font-bold text-[#1A1A1A]/60">
                    {item.role} <span className="text-[#1DA6D1]">/</span> {item.location}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}