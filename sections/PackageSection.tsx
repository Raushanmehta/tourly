"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import PackageCard, { type PackageItem } from "@/components/cards/PackageCard";
import { site, type TourlyPackagesData } from "@/data/index";

interface PackageSectionProps {
    data?: TourlyPackagesData;
}

export default function PackageSection({ data = site.packages }: PackageSectionProps) {
    const [page, setPage] = useState(1);
    const packagesList = ((data.packagesList || []) as unknown as PackageItem[]);
    const itemsPerPage = 6;
    const totalPages = Math.max(1, Math.ceil(packagesList.length / itemsPerPage));
    const startIndex = (page - 1) * itemsPerPage;
    const currentPackages: PackageItem[] = packagesList.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="relative w-full py-8 lg:py-12 bg-gradient-to-b from-[#f8fbfe] via-white to-[#f4f9fd] overflow-hidden">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Top banner header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-4 sm:mb-6">
                    {/* Left text area */}
                    <div className="lg:col-span-5 ">
                        {/* Orange dash badge */}
                        <div className="flex items-center gap-2 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 select-none">
                            <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                            <span>{data.subtitle}</span>
                            <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                        </div>

                        {/* Main section headline */}
                        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#0f1d33] tracking-tight leading-[1.12]">
                            {data.titlePrefix} <br />
                            <span className="text-[#f15a24]">{data.titleHighlight}</span>
                        </h2>

                        {/* Subtitle description text */}
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-2 max-w-xl font-normal">
                            {data.description}
                        </p>
                    </div>

                    {/* Right hero photo */}
                    <div className="lg:col-span-7 ">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                            className="relative w-full aspect-[16/9] sm:aspect-[16/9.5] rounded-xl overflow-hidden shadow-xl border border-gray-100"
                        >
                            {/* Traveler panorama photo */}
                            <Image
                                src="/images/why-us-3.jpg"
                                alt="Traveler overlooking scenic bay"
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Packages grid container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 mb-4 sm:mb-6">
                    {currentPackages.map((item) => (
                        <PackageCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Pagination container */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 select-none">
                    {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1;
                        const isActive = page === pageNum;

                        return (
                            <motion.button
                                key={pageNum}
                                type="button"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.94 }}
                                onClick={() => setPage(pageNum)}
                                aria-label={`Go to page ${pageNum}`}
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
                            setPage((prev) => (prev < totalPages ? prev + 1 : 1))
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
