import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";
import CtaSection from "@/sections/home/CtaSection";
import StatsSection from "@/sections/home/StatsSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";

export default function AboutPage() {
    return (
        <main>
            <PageTopSection title="About Us" breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "About Us" },
            ]} />
            <AboutSection />
            <StatsSection />
            <WhyChooseUsSection />
            <TestimonialSection />
            <CtaSection />
        </main>
    );
}