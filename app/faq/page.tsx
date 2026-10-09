import PageTopSection from "@/components/common/PageTopSection";
import FaqSection from "@/sections/FaqSection";
import CtaSection from "@/sections/home/CtaSection";

export default function FaqPage() {
    return (
        <main>
            <PageTopSection title="FAQ" breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "FAQ" },
            ]} />
            <FaqSection />
            <CtaSection />
        </main>
    );
}