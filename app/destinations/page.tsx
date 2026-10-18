import PageTopSection from "@/components/common/PageTopSection";
import DestintaionSection from "@/sections/DestintaionSection";
import { site } from "@/data/index";

export default function DestinationsPage() {
    return (
        <main>
            <PageTopSection
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