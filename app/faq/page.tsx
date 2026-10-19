import BreadCrumb from "@/components/common/BreadCrumb";
import FaqSection from "@/sections/FaqSection";
import { site } from "@/data/index";

export default function FaqPage() {
    return (
        <main>
            <BreadCrumb
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