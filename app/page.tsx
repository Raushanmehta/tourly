import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import DestinationSection from "@/sections/home/DestinationSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import StatsSection from "@/sections/home/StatsSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import CtaSection from "@/sections/home/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <DestinationSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  );
}
