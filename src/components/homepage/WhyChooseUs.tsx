import { motion } from "framer-motion";
import { Wheat, ShieldCheck, Factory, Truck, Users } from "lucide-react";

const whyChooseUs = [
  {
    icon: Wheat,
    title: "Premium Quality",
    description: "Carefully sourced paddy and precision milling for superior grains.",
    color: "#0F6C3F", // Logo Green
  },
  {
    icon: Factory,
    title: "Modern Milling",
    description: "Advanced machinery delivers hygienic processing and uniform size.",
    color: "#1DA6D1", // Logo Blue
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality",
    description: "Multiple checks maintain consistency across every single batch.",
    color: "#F28C28", // Logo Orange
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Efficient logistics enable timely delivery for bulk wholesale.",
    color: "#0F6C3F", // Logo Green
  },
  {
    icon: Users,
    title: "Trusted Partner",
    description: "Long-term partnerships with traders across multiple regions.",
    color: "#F4D03F", // Logo Yellow
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#FCFAF2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading - Bold Neobrutalist Style */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-[#F28C28] text-white px-4 py-1 rounded-full border-[1.5px] border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Our Promise
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] mt-4 [text-shadow:3px_3px_0px_#1DA6D1]">
            WHY CHOOSE US?
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            // Determine text color based on background brightness (Yellow card needs dark text)
            const isLightBg = item.color === "#F4D03F";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
                className="h-full cursor-default"
              >
                <div
                  style={{ backgroundColor: item.color }}
                  className={`h-full flex flex-col items-center p-8 text-center border-2 border-[#1A1A1A] rounded-2xl shadow-[6px_6px_0px_0px_#1A1A1A] transition-all duration-300`}
                >
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center mb-6 shadow-[3px_3px_0px_0px_#1A1A1A] ${isLightBg ? 'bg-[#1A1A1A]' : 'bg-[#FCFAF2]'}`}>
                    <Icon className={`w-8 h-8 ${isLightBg ? 'text-white' : 'text-[#1A1A1A]'}`} />
                  </div>

                  {/* Text Content */}
                  <h3 className={`text-xl font-bold mb-4 uppercase leading-tight ${isLightBg ? 'text-[#1A1A1A]' : 'text-white'}`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm font-medium leading-relaxed ${isLightBg ? 'text-[#1A1A1A]/80' : 'text-white/90'}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}