import BreadCrumb from "@/components/common/BreadCrumb";
import EnquiryNowSection from "@/sections/EnquryNowSection";
import { site } from "@/data/index";

export default function EnquiryNowPage() {
    return (
        <main>
            <BreadCrumb
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