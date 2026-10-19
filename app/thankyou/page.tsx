import BreadCrumb from "@/components/common/BreadCrumb";
import ThankYouSection from "@/sections/ThankYouSection";
import { site } from "@/data/index";

export default function ThankYouPage() {
    return (
        <main>
            <BreadCrumb
                title="Thank You"
                data={site.pageTopSection}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Thank You" },
                ]}
            />
            <ThankYouSection data={site.thankYou} />
        </main>
    );
}