import PageTopSection from "@/components/common/PageTopSection";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/home/CtaSection";
import { site } from "@/data/index";

export default function ContactPage() {
    return (
        <main>
            <PageTopSection
                title="Contact Us"
                data={site.pageTopSection}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" },
                ]}
            />
            <ContactSection data={site.contact} />
        </main>
    );
}