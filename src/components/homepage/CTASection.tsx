import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-20 bg-[#FEFACD]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden
                     bg-[#344C2F] rounded-3xl
                     shadow-xl px-8 py-10 md:px-14 md:py-12"
                >
                    {/* Decorative blur */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#FEFACD]/10 rounded-full blur-3xl" />

                    {/* Content */}
                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* Left content */}
                        <div className="max-w-2xl text-center lg:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#FEFACD] mb-4 font-golden-goose">
                                LOOKING FOR QUALITY RICE IN BULK?
                            </h2>

                            <p className="text-sm md:text-base text-[#FEFACD]/90 leading-relaxed">
                                Premium quality rice, consistent supply, and competitive bulk pricing.
                                Trusted by traders and distributors across South India.
                            </p>
                        </div>

                        {/* Right actions */}
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">

                            {/* Primary CTA */}
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2
                           bg-[#FEFACD] text-[#344C2F]
                           px-7 py-3.5 rounded-full font-semibold
                           hover:bg-[#344C2F] hover:text-[#FEFACD]
                           hover:border hover:border-[#FEFACD]
                           transition-all"
                            >
                                Get Bulk Price Quote
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            {/* Secondary CTA */}
                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="inline-flex items-center justify-center gap-2
                           border border-[#FEFACD] text-[#FEFACD]
                           px-7 py-3.5 rounded-full font-semibold
                           hover:bg-[#FEFACD] hover:text-[#344C2F]
                           transition-all"
                            >
                                <PhoneCall className="w-5 h-5" />
                                Talk to Our Team
                            </a>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
