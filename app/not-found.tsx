import NotFoundSection from "@/sections/NotFoundSection";
import { site } from "@/data/index";

export default function NotFound() {
    return (
        <main>
            <NotFoundSection data={site.notFound} />
        </main>
    );
}