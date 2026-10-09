import PageTopSection from "@/components/common/PageTopSection";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/home/CtaSection";

export default function ContactPage() {
    return (
        <main>
            <PageTopSection title="Contact Us" breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Contact Us" },
            ]} />
            <ContactSection />
            <CtaSection />
        </main>
    );
}