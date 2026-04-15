import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
    return (
        <section className="py-24 bg-[#FCFAF2]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden
                     bg-[#0F6C3F] rounded-[2rem] border-4 border-[#1A1A1A]
                     shadow-[12px_12px_0px_0px_#1A1A1A] px-8 py-12 md:px-16 md:py-16"
                >
                    {/* Neobrutalist Geometric Decorations */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1DA6D1] border-4 border-[#1A1A1A] rotate-12" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#F4D03F] border-4 border-[#1A1A1A] -rotate-12 rounded-full" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Left content */}
                        <div className="max-w-2xl text-center lg:text-left">
                            <span className="bg-[#F4D03F] text-[#1A1A1A] px-4 py-1 rounded-full border-2 border-[#1A1A1A] text-xs font-black uppercase tracking-widest mb-6 inline-block">
                                Bulk Inquiries
                            </span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-[1.1]">
                                LOOKING FOR QUALITY <br className="hidden md:block" />
                                <span className="text-[#F4D03F]">RICE IN BULK?</span>
                            </h2>

                            <p className="text-base md:text-xl text-white/90 font-medium leading-relaxed max-w-xl">
                                Premium quality rice, consistent supply, and competitive bulk pricing.
                                Trusted by traders across South India.
                            </p>
                        </div>

                        {/* Right actions */}
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 shrink-0 w-full lg:w-auto">

                            {/* Primary CTA - Orange Neobrutalist Button */}
                            <Link
                                to="/contact"
                                className="group flex items-center justify-center gap-3
                                   bg-[#F28C28] text-white
                                   px-8 py-5 rounded-full font-black uppercase tracking-widest
                                   border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A]
                                   hover:bg-[#F4D03F] hover:text-[#1A1A1A]
                                   hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1A1A1A]
                                   active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
                                   transition-all duration-150"
                            >
                                Get Quote
                                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                            </Link>

                            {/* Secondary CTA - Outlined Button */}
                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="group flex items-center justify-center gap-3
                                   bg-[#FCFAF2] text-[#1A1A1A]
                                   px-8 py-5 rounded-full font-black uppercase tracking-widest
                                   border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A]
                                   hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1A1A1A]
                                   active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
                                   transition-all duration-150"
                            >
                                <PhoneCall className="w-5 h-5" />
                                Call Us
                            </a>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}