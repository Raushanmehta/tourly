"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaCompass, FaArrowRight } from "react-icons/fa";
import { site, type TourlyNotFoundData } from "@/data/index";

interface NotFoundSectionProps {
    data?: TourlyNotFoundData;
}

export default function NotFoundSection({ data = site.notFound }: NotFoundSectionProps) {
    return (
        <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8fbfe] via-white to-[#f4f9fd] overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-orange-100/40 via-teal-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                {/* Badge Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-50 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 border border-orange-100">
                    <span className="w-2 h-2 rounded-full bg-[#f15a24]" />
                    <span>{data.badge}</span>
                </div>

                {/* Decorative 404 */}
                <div className="relative mb-2 select-none">
                    <span className="font-sans font-black text-7xl sm:text-9xl md:text-[140px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#054553] via-[#f15a24] to-[#ea580c] drop-shadow-sm leading-none block">
                        {data.code}
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0f1d33] tracking-tight max-w-xl">
                    {data.title}
                </h1>

                {/* Explanatory subtitle */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mt-3 leading-relaxed font-normal">
                    {data.description}
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-7 w-full sm:w-auto">
                    <Link
                        href={data.primaryButton.href}
                        className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
                    >
                        <FaHome className="w-4 h-4" />
                        <span>{data.primaryButton.text}</span>
                        <FaArrowRight className="w-3.5 h-3.5 ml-0.5" />
                    </Link>

                    <Link
                        href={data.secondaryButton.href}
                        className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white border border-gray-200 hover:border-[#f15a24] text-[#0f1d33] hover:text-[#f15a24] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer text-center"
                    >
                        <FaCompass className="w-4 h-4" />
                        <span>{data.secondaryButton.text}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
