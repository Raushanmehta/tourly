import BreadCrumb from "@/components/common/BreadCrumb";
import DestintaionSection from "@/sections/DestintaionSection";
import { site } from "@/data/index";

export default function DestinationsPage() {
    return (
        <main>
            <BreadCrumb
                title="Destinations"
                data={site.pageTopSection}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Destinations" },
                ]}
            />
            <DestintaionSection data={site.destinations} />
        </main>
    );
}