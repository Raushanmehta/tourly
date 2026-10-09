import PageTopSection from "@/components/common/PageTopSection";
import PackageDetailSection from "@/sections/PackageDetailSection";
import { site } from "@/data/index";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return site.packages.packagesList.map((pkg) => ({
        slug: pkg.slug,
    }));
}

export default async function PackageDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const pkg =
        site.packages.packagesList.find((p) => p.slug === slug) || site.packageDetail;

    return (
        <main>
            <PageTopSection
                title={pkg.title}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Packages", href: "/packages" },
                    { label: pkg.title },
                ]}
            />
            <PackageDetailSection data={pkg} />
        </main>
    );
}