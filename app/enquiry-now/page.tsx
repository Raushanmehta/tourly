import PageTopSection from "@/components/common/PageTopSection";
import EnquiryNowSection from "@/sections/EnquryNowSection";
import CtaSection from "@/sections/home/CtaSection";

export default function EnquiryNowPage() {
    return (
        <main>
            <PageTopSection title="Enquiry Now" breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Enquiry Now" },
            ]} />
            <EnquiryNowSection />
            <CtaSection />
        </main>
    );
}