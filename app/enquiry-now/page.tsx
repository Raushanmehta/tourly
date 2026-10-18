import PageTopSection from "@/components/common/PageTopSection";
import EnquiryNowSection from "@/sections/EnquryNowSection";
import { site } from "@/data/index";

export default function EnquiryNowPage() {
    return (
        <main>
            <PageTopSection
                title="Enquiry Now"
                data={site.pageTopSection}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Enquiry Now" },
                ]}
            />
            <EnquiryNowSection data={site.enquiryNow} />
        </main>
    );
}