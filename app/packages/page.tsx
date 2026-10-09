import PageTopSection from "@/components/common/PageTopSection";
import CtaSection from "@/sections/home/CtaSection";
import PackageSection from "@/sections/PackageSection";

export default function PackagesPage() {
    return (
        <main>
            <PageTopSection title="Packages" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Packages" }]} />
            <PackageSection />
            <CtaSection />
        </main>
    );
}