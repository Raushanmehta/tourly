import PageTopSection from "@/components/common/PageTopSection";
import GallerySection from "@/sections/GallerySection";
import CtaSection from "@/sections/home/CtaSection";

export default function GalleryPage() {
    return (
        <main>
            <PageTopSection title="Gallery" breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gallery" },
            ]} />
            <GallerySection />
            <CtaSection />
        </main>
    );
}