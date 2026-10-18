import PageTopSection from "@/components/common/PageTopSection";
import PackageSection from "@/sections/PackageSection";
import { site } from "@/data/index";

export default function PackagesPage() {
    return (
        <main>
            <PageTopSection
                title="Packages"
                data={site.pageTopSection}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Packages" },
                ]}
            />
            <PackageSection data={site.packages} />
        </main>
    );
}