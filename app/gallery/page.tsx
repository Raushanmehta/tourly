import PageTopSection from "@/components/common/PageTopSection";
import GallerySection from "@/sections/GallerySection";
import CtaSection from "@/sections/home/CtaSection";
import { site } from "@/data/index";

export default function GalleryPage() {
    return (
        <main>
            <PageTopSection
                title="Gallery"
                data={site.pageTopSection}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Gallery" },
                ]}
            />
            <GallerySection data={site.gallery} />
        </main>
    );
}