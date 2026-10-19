import BreadCrumb from "@/components/common/BreadCrumb";
import AboutSection from "@/sections/home/AboutSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import CtaSection from "@/sections/home/CtaSection";
import { site } from "@/data/index";

export default function AboutPage() {
    return (
        <main>
            <BreadCrumb
                title="About Us"
                data={site.pageTopSection}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us" },
                ]}
            />
            <AboutSection data={site.about} showButtons={false} />
            <WhyChooseUsSection data={site.whyChooseUs} />
            <TestimonialSection data={site.testimonials} />
            <CtaSection data={site.cta} />
        </main>
    );
}