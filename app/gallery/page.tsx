import BreadCrumb from "@/components/common/BreadCrumb";
import GallerySection from "@/sections/GallerySection";
import { site } from "@/data/index";

export default function GalleryPage() {
    return (
        <main>
            <BreadCrumb
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