import siteData from "@/data/site.json";

// Root Schema Types
export type RawSiteData = typeof siteData;
export type TourlySchema = typeof siteData.Tourly;
export type TourlySections = TourlySchema["sections"];
export type TourlyTemplateComponents = TourlySchema["templateComponents"];

// Universal SectionProps Interface
export interface SectionProps<T = unknown> {
    data?: T;
    className?: string;
    contentClassName?: string;
    variant?: string;
    isEditable?: boolean;
    onUpdate?: (newData: Partial<T>) => void;
}

// Canonical Mapped Site
const sec = siteData.Tourly.sections;

const destinationsVariant = sec.destinations.variants.TourlyDestinations1;
const destinationsMapped = {
    ...destinationsVariant,
    items: destinationsVariant.destinationsList,
    allDestinations: destinationsVariant.destinationsList,
    destinationsList: destinationsVariant.destinationsList,
};

// Strongly Typed Variants
export type TourlyTopbarData = TourlySections["topbar"]["variants"]["TourlyTopbar1"];
export type TourlyNavbarData = TourlySections["navbar"]["variants"]["TourlyNavbar1"];
export type TourlyFooterData = TourlySections["footer"]["variants"]["TourlyFooter1"];
export type TourlyHeroData = TourlySections["hero"]["variants"]["TourlyHero1"];
export type TourlyAboutData = TourlySections["about"]["variants"]["TourlyAbout1"];
export type TourlyDestinationsData = typeof destinationsMapped;
export type TourlyStatsData = TourlySections["stats"]["variants"]["TourlyStats1"];
export type TourlyWhyChooseUsData = TourlySections["whyChooseUs"]["variants"]["TourlyWhyChooseUs1"];
export type TourlyTestimonialsData = TourlySections["testimonials"]["variants"]["TourlyTestimonials1"];
export type TourlyCtaData = TourlySections["cta"]["variants"]["TourlyCta1"];
export type TourlyContactData = TourlySections["contact"]["variants"]["TourlyContact1"];
export type TourlyEnquiryNowData = TourlySections["enquiryNow"]["variants"]["TourlyEnquiryNow1"];
export type TourlyFaqData = TourlySections["faq"]["variants"]["TourlyFaq1"];
export type TourlyGalleryData = TourlySections["gallery"]["variants"]["TourlyGallery1"];
export type TourlyPackagesData = TourlySections["packages"]["variants"]["TourlyPackages1"];
export type TourlyPackageDetailData = TourlyPackagesData["packagesList"][number];
export type TourlyPageTopData = TourlySections["pageTopSection"]["variants"]["TourlyPageTop1"];
export type TourlyThankYouData = TourlySections["thankYou"]["variants"]["TourlyThankYou1"];
export type TourlyNotFoundData = TourlySections["notFound"]["variants"]["TourlyNotFound1"];

const siteMap = {
    topbar: sec.topbar.variants.TourlyTopbar1,
    navbar: sec.navbar.variants.TourlyNavbar1,
    footer: sec.footer.variants.TourlyFooter1,
    hero: sec.hero.variants.TourlyHero1,
    about: sec.about.variants.TourlyAbout1,
    destinations: destinationsMapped,
    stats: sec.stats.variants.TourlyStats1,
    whyChooseUs: sec.whyChooseUs.variants.TourlyWhyChooseUs1,
    testimonials: sec.testimonials.variants.TourlyTestimonials1,
    cta: sec.cta.variants.TourlyCta1,
    contact: sec.contact.variants.TourlyContact1,
    enquiryNow: sec.enquiryNow.variants.TourlyEnquiryNow1,
    faq: sec.faq.variants.TourlyFaq1,
    gallery: sec.gallery.variants.TourlyGallery1,
    packages: sec.packages.variants.TourlyPackages1,
    packageDetail: sec.packages.variants.TourlyPackages1.packagesList[0],
    pageTopSection: sec.pageTopSection.variants.TourlyPageTop1,
    thankYou: sec.thankYou.variants.TourlyThankYou1,
    notFound: sec.notFound.variants.TourlyNotFound1,

    // Home aggregation
    home: {
        hero: sec.hero.variants.TourlyHero1,
        about: sec.about.variants.TourlyAbout1,
        destinations: destinationsMapped,
        stats: sec.stats.variants.TourlyStats1,
        whyChooseUs: sec.whyChooseUs.variants.TourlyWhyChooseUs1,
        testimonials: sec.testimonials.variants.TourlyTestimonials1,
        cta: sec.cta.variants.TourlyCta1,
    },

    // Root reference
    Tourly: siteData.Tourly,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default site;
