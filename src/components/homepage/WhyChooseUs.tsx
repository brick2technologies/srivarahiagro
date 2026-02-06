import { motion } from "framer-motion";
import { Wheat, ShieldCheck, Factory, Truck, Users } from "lucide-react";

const whyChooseUs = [
  {
    icon: Wheat,
    title: "Premium Quality Rice",
    description:
      "Carefully sourced paddy and precision milling ensure superior grain quality.",
  },
  {
    icon: Factory,
    title: "Modern Milling Facility",
    description:
      "Advanced machinery delivers hygienic processing and uniform grain size.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality Control",
    description:
      "Multiple quality checks maintain consistency across every batch.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description:
      "Efficient logistics enable timely delivery for bulk and wholesale orders.",
  },
  {
    icon: Users,
    title: "Trusted by Traders",
    description:
      "Long-term partnerships with traders and distributors across regions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#FEFACD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#344C2F] mb-4 font-golden-goose">
            WHY CHOOSE SRI VARAHI AGRO?
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Consistent quality, trusted processes, and reliable supply
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="h-full"               
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div
                  className="h-full flex flex-col justify-between   /* 🔥 2 */
                             bg-[#344C2F] rounded-2xl p-6 text-center
                             shadow-md hover:shadow-xl transition-all duration-300"
                >

                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full
                                  bg-[#FEFACD] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#344C2F]" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow flex flex-col justify-center"> {/* 🔥 3 */}
                    <h3 className="text-lg font-semibold text-[#FEFACD] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#FEFACD]/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
