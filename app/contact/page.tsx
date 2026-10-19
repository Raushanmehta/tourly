import BreadCrumb from "@/components/common/BreadCrumb";
import ContactSection from "@/sections/ContactSection";
import { site } from "@/data/index";

export default function ContactPage() {
    return (
        <main>
            <BreadCrumb
                title="Contact Us"
                data={site.pageTopSection}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" },
                ]}
            />
            <ContactSection data={site.contact} />
        </main>
    );
}