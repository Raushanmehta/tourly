import BreadCrumb from "@/components/common/BreadCrumb";
import PackageSection from "@/sections/PackageSection";
import { site } from "@/data/index";

export default function PackagesPage() {
    return (
        <main>
            <BreadCrumb
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