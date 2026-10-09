"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { site, type TourlyCtaData } from "@/data/index";

interface CtaSectionProps {
    data?: TourlyCtaData;
}

export default function CtaSection({ data = site.cta }: CtaSectionProps) {
    return (
        <section className="relative w-full py-8 lg:py-12 bg-white overflow-hidden">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Banner card container */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex items-center shadow-xl border border-gray-100"
                >
                    {/* Background image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={data.bgImage}
                            alt="Tropical Island Panorama"
                            fill
                            className="object-cover object-center"
                            priority={false}
                        />
                        {/* Left gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#03343f] via-[#03343f]/90 via-45% to-transparent pointer-events-none" />
                    </div>

                    {/* Content container */}
                    <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-16 py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                        {/* Left text area */}
                        <div className="flex flex-col items-start">
                            {/* Orange dash badge */}
                            <div className="flex items-center gap-2 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3 select-none">
                                <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                                <span>{data.badge}</span>
                                <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                            </div>

                            {/* Main banner headline */}
                            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white tracking-tight leading-tight">
                                {data.titlePrefix}
                                <span className="text-[#f15a24]">{data.titleHighlight}</span>
                            </h2>
                        </div>

                        {/* Enquiry button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="self-start md:self-auto shrink-0"
                        >
                            <Link
                                href={data.ctaButton.href}
                                className="group relative inline-flex items-center gap-3 sm:gap-4 pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-bold text-sm sm:text-base md:text-lg shadow-xl shadow-orange-500/40 border-2 border-white/40 hover:border-white/70 transition-all cursor-pointer select-none"
                            >
                                <span>{data.ctaButton.text}</span>
                                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#f15a24] flex items-center justify-center shadow-md group-hover:translate-x-0.5 transition-transform">
                                    <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
