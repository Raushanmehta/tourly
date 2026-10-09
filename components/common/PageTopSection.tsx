"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { site } from "@/data/index";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageTopSectionProps {
    title?: string;
    breadcrumbs?: BreadcrumbItem[];
    bgImage?: string;
}

export default function PageTopSection({
    title,
    breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "About Us" },
    ],
    bgImage,
}: PageTopSectionProps) {
    const defaultBg = site.pageTopSection?.bgImage || "/images/page-top-bg.jpg";
    const defaultTitle = site.pageTopSection?.defaultTitle || "About Us";
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

                {/* Frosted breadcrumb pill */}
                <motion.nav
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
                    aria-label="Breadcrumb"
                    className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/15 hover:bg-white/20 backdrop-blur-md border border-white/25 shadow-lg text-xs sm:text-sm text-white/90 transition-all select-none"
                >
                    {breadcrumbs.map((item, index) => {
                        const isLast = index === breadcrumbs.length - 1;

                        return (
                            <React.Fragment key={index}>
                                {index > 0 && (
                                    <FaChevronRight className="w-2.5 h-2.5 text-white/70 mx-0.5 shrink-0" />
                                )}
                                {item.href && !isLast ? (
                                    <Link
                                        href={item.href}
                                        className="text-white/80 hover:text-white transition-colors font-normal cursor-pointer"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="font-bold text-white">
                                        {item.label}
                                    </span>
                                )}
                            </React.Fragment>
                        );
                    })}
                </motion.nav>
            </div>
        </section>
    );
}
