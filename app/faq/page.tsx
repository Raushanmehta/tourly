import PageTopSection from "@/components/common/PageTopSection";
import FaqSection from "@/sections/FaqSection";
import { site } from "@/data/index";

export default function FaqPage() {
    return (
        <main>
            <PageTopSection
                title="FAQ"
                data={site.pageTopSection}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "FAQ" },
                ]}
            />
            <FaqSection data={site.faq} />
        </main>
    );
}