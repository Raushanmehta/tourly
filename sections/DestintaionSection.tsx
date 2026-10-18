"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import DestinationCard2, {
    type DestinationCardData,
} from "@/components/cards/DestinationCard2";
import { site, type TourlyDestinationsData } from "@/data/index";

interface DestintaionSectionProps {
    data?: TourlyDestinationsData;
}

export default function DestintaionSection({ data = site.destinations }: DestintaionSectionProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const destinationsList: DestinationCardData[] =
        ((data.destinationsList || data.allDestinations || data.items || []) as unknown as DestinationCardData[]);
    const itemsPerPage = 8;
    const totalPages = Math.max(1, Math.ceil(destinationsList.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedDestinations = destinationsList.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="relative w-full py-8 lg:py-12 bg-gradient-to-b from-[#f8fbfe] via-white to-[#f4f9fd] overflow-hidden">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Section header container */}
                <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
                    {/* Orange dash badge */}
                    <div className="flex items-center justify-center gap-2 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 select-none">
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                        <span>{data.subtitle || "DESTINATIONS"}</span>
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                    </div>

                    {/* Main section title */}
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0f1d33] tracking-tight">
                        {data.titlePrefix || "Explore Amazing "}<span className="text-[#f15a24]">{data.titleHighlight || "Destinations"}</span>
                    </h2>

                    {/* Subtitle description text */}
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
                        {data.description || "Discover the most beautiful places around the world. From pristine beaches to majestic mountains, find your perfect destination for the next unforgettable journey."}
                    </p>
                </div>

                {/* Destinations grid container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 mb-4 sm:mb-6">
                    {displayedDestinations.map((item) => (
                        <DestinationCard2 key={item.id} item={item} />
                    ))}
                </div>

                {/* Pagination container */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 select-none">
                    {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1;
                        const isActive = currentPage === pageNum;

                        return (
                            <motion.button
                                key={pageNum}
                                type="button"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.94 }}
                                onClick={() => setCurrentPage(pageNum)}
                                aria-label={`Page ${pageNum}`}
                                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer ${isActive
                                    ? "bg-[#054553] text-white shadow-md shadow-teal-950/20"
                                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#f15a24] hover:text-[#f15a24]"
                                    }`}
                            >
                                {pageNum}
                            </motion.button>
                        );
                    })}

                    {/* Next page button */}
                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={() =>
                            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1))
                        }
                        aria-label="Next page"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-gray-700 border border-gray-200 hover:border-[#f15a24] hover:text-[#f15a24] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                    >
                        <FaChevronRight className="w-3 h-3" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
