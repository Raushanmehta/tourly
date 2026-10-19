"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaArrowRight,
    FaHome,
    FaCompass,
} from "react-icons/fa";
import { site, type TourlyThankYouData } from "@/data/index";

interface ThankYouSectionProps {
    data?: TourlyThankYouData;
}

export default function ThankYouSection({ data = site.thankYou }: ThankYouSectionProps) {
    return (
        <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8fbfe] via-white to-[#f4f9fd] overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-100/40 via-teal-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Main Hero Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 md:p-12 text-center flex flex-col items-center"
            >
                {/* Checkmark badge */}
                <motion.div
                    initial={{ scale: 0, rotate: -25 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.1 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#ea580c] via-[#f15a24] to-[#f97316] text-white flex items-center justify-center shadow-xl shadow-orange-500/25 ring-8 ring-orange-500/10 mb-6"
                >
                    <FaCheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
                </motion.div>

                {/* Badge Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-50 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 border border-orange-100">
                    <span className="w-2 h-2 rounded-full bg-[#f15a24] animate-ping" />
                    <span>{data.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0f1d33] tracking-tight max-w-2xl">
                    {data.titlePrefix}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316]">
                        {data.titleHighlight}
                    </span>
                </h1>

                {/* Subtitle Message */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mt-4 leading-relaxed font-normal">
                    {data.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-8 w-full sm:w-auto">
                    <Link
                        href={data.primaryButton.href}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
                    >
                        <FaCompass className="w-4 h-4" />
                        <span>{data.primaryButton.text}</span>
                        <FaArrowRight className="w-3.5 h-3.5 ml-0.5" />
                    </Link>

                    <Link
                        href={data.secondaryButton.href}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-[#f15a24] text-[#0f1d33] hover:text-[#f15a24] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer text-center"
                    >
                        <FaHome className="w-4 h-4" />
                        <span>{data.secondaryButton.text}</span>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}