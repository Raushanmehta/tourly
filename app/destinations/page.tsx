import PageTopSection from "@/components/common/PageTopSection";
import DestintaionSection from "@/sections/DestintaionSection";
import CtaSection from "@/sections/home/CtaSection";

export default function DestinationsPage() {
    return (
        <main>
            <PageTopSection title="Destinations" breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Destinations" },
            ]} />
            <DestintaionSection />
            <CtaSection />
        </main>
    );
}