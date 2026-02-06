import CTASection from "@/components/homepage/CTASection";
import AboutUsSection from "../components/homepage/AboutSection";
import HeroSection from "../components/homepage/HeroSection";
import ProductsSection from "../components/homepage/ProductSection";
import Testimonials from "../components/homepage/TestimonialSection";
import WhyChooseUs from "../components/homepage/WhyChooseUs";


export default function HomePage() {
    return (
        <div className="min-h-screen bg-transparent">
            <HeroSection />
            <AboutUsSection />
            <ProductsSection />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
            
        </div>
    )
};