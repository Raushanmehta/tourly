"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { site, type TourlyPageTopData } from "@/data/index";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface BreadCrumbProps {
    title?: string;
    breadcrumbs?: BreadcrumbItem[];
    bgImage?: string;
    data?: TourlyPageTopData;
}

export default function BreadCrumb({
    title,
    breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "About Us" },
    ],
    bgImage,
    data = site.pageTopSection,
}: BreadCrumbProps) {
    const defaultBg = data?.bgImage || site.pageTopSection?.bgImage || "/images/page-top-bg.webp";
    const defaultTitle = data?.defaultTitle || site.pageTopSection?.defaultTitle || "About Us";
    const activeBg = bgImage || defaultBg;
    const activeTitle = title || defaultTitle;

    return (
        <section className="relative w-full min-h-[260px] sm:min-h-[300px] md:min-h-[300px] lg:min-h-[300px] flex items-center justify-center overflow-hidden">
            {/* Background beach image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={activeBg}
                    alt={activeTitle}
                    fill
                    priority
                    className="object-cover object-center brightness-[0.9]"
                />
                {/* Teal color overlay */}
                <div className="absolute inset-0 bg-[#044452]/75 backdrop-blur-[0.5px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#03343f]/60 via-transparent to-[#03343f]/70 pointer-events-none" />
            </div>

            {/* Centered content wrapper */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center py-12">
                {/* Main page title */}
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-md mb-4 sm:mb-5"
                >
                    {activeTitle}
                </motion.h1>

                {/* Breadcrumbs trail pill */}
                <motion.nav
                    aria-label="Breadcrumbs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                    className="inline-flex items-center px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-black/25 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-white shadow-sm"
                >
                    <ol className="flex items-center flex-wrap justify-center gap-1.5 sm:gap-2">
                        {breadcrumbs.map((crumb, index) => {
                            const isLast = index === breadcrumbs.length - 1;

                            return (
                                <li key={crumb.label} className="flex items-center gap-1.5 sm:gap-2">
                                    {crumb.href && !isLast ? (
                                        <Link
                                            href={crumb.href}
                                            className="text-white/85 hover:text-[#f15a24] transition-colors duration-200"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`${isLast
                                                ? "text-white font-semibold"
                                                : "text-white/85"
                                                }`}
                                            aria-current={isLast ? "page" : undefined}
                                        >
                                            {crumb.label}
                                        </span>
                                    )}

                                    {!isLast && (
                                        <FaChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/50 shrink-0" />
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </motion.nav>
            </div>
        </section>
    );
}
