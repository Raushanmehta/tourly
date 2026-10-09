"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaStar,
    FaArrowRight,
    FaRegCalendarAlt,
    FaBed,
    FaPlane,
    FaUmbrellaBeach,
    FaMountain,
    FaUtensils,
    FaCamera,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";
import { IoLocationOutline, IoWaterOutline } from "react-icons/io5";
import { HiOutlineUsers, HiOutlineBuildingLibrary } from "react-icons/hi2";
import { site, type TourlyPackageDetailData } from "@/data/index";

const highlightIconMap: Record<string, React.ElementType> = {
    umbrellaBeach: FaUmbrellaBeach,
    buildingLibrary: HiOutlineBuildingLibrary,
    waterOutline: IoWaterOutline,
    mountain: FaMountain,
    utensils: FaUtensils,
    camera: FaCamera,
};

interface PackageDetailSectionProps {
    data?: TourlyPackageDetailData;
}

export default function PackageDetailSection({ data = site.packageDetail }: PackageDetailSectionProps) {
    return (
        <section className="relative w-full py-6 lg:py-10 bg-[#fafcfd]">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4 sm:space-y-6">
                {/* Top hero grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                    {/* Hero image container */}
                    <div className="lg:col-span-7">
                        <div className="relative w-full h-full min-h-[260px] sm:min-h-[360px] rounded-xl overflow-hidden shadow-md border border-gray-100">
                            <Image
                                src={data.heroImage}
                                alt={data.title}
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Right summary card */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-xs border border-gray-100 flex-1">
                            {/* Location line */}
                            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-500 mb-1">
                                <IoLocationOutline className="text-[#0284c7] w-4 h-4 shrink-0" />
                                <span>{data.location}</span>
                            </div>

                            {/* Title */}
                            <h1 className="font-extrabold text-2xl sm:text-3xl text-[#0f1d33] tracking-tight">
                                {data.title}
                            </h1>

                            {/* Reviews rating */}
                            <div className="flex items-center gap-2 mt-2 mb-3">
                                <div className="flex items-center gap-1 text-[#f15a24]">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar key={i} className="w-3.5 h-3.5" />
                                    ))}
                                </div>
                                <span className="font-bold text-xs sm:text-sm text-[#0f1d33]">
                                    {data.rating}
                                </span>
                                <span className="text-gray-400 text-xs font-normal">
                                    {data.reviewsCount}
                                </span>
                            </div>

                            {/* Short description */}
                            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                                {data.shortDescription}
                            </p>

                            {/* Meta grid items */}
                            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                        <FaRegCalendarAlt className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-semibold block uppercase">
                                            Duration
                                        </span>
                                        <span className="text-xs sm:text-sm font-bold text-[#0f1d33] block">
                                            {data.duration}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                        <HiOutlineUsers className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-semibold block uppercase">
                                            Group Size
                                        </span>
                                        <span className="text-xs sm:text-sm font-bold text-[#0f1d33] block">
                                            {data.groupSize}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                        <FaBed className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-semibold block uppercase">
                                            Accommodation
                                        </span>
                                        <span className="text-xs sm:text-sm font-bold text-[#0f1d33] block">
                                            {data.accommodation}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                        <FaPlane className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-semibold block uppercase">
                                            Transport
                                        </span>
                                        <span className="text-xs sm:text-sm font-bold text-[#0f1d33] block">
                                            {data.transport}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Price booking strip */}
                        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-xs border border-gray-100 flex items-center justify-between gap-3">
                            <div>
                                <span className="text-xs text-gray-400 font-medium block">
                                    {data.priceLabel}
                                </span>
                                <span className="text-[#f15a24] text-2xl sm:text-3xl font-black tracking-tight leading-none block mt-0.5">
                                    {data.price}
                                </span>
                                <span className="text-xs text-gray-400 block mt-0.5">
                                    {data.priceUnit}
                                </span>
                            </div>

                            <Link
                                href={data.enquiryButton.href}
                                className="py-2.5 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-orange-500/25 hover:scale-102 transition-transform cursor-pointer shrink-0"
                            >
                                <span>{data.enquiryButton.text}</span>
                                <FaArrowRight className="w-3.5 h-3.5 ml-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Overview section wrapper */}
                <div>
                    <div className="flex items-center gap-2 ">
                        <div className="w-1.5 h-5 bg-[#f15a24] rounded-full shrink-0" />
                        <h2 className="font-extrabold text-xl sm:text-3xl text-[#0f1d33] tracking-tight">
                            {data.overview.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                        <div className="lg:col-span-7">
                            <p className="text-gray-600 text-xs sm:text-sm md:text-[16px] leading-relaxed font-normal">
                                {data.overview.description}
                            </p>
                        </div>

                        {/* Overview image thumbnail */}
                        <div className="lg:col-span-5">
                            <div className="relative w-full h-[140px] sm:h-[160px] md:h-[175px] rounded-xl overflow-hidden shadow-sm">
                                <Image
                                    src={data.overview.image}
                                    alt={data.overview.title}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights grid container */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-5 bg-[#f15a24] rounded-full shrink-0" />
                        <h2 className="font-extrabold text-xl sm:text-3xl text-[#0f1d33] tracking-tight">
                            {data.highlightsTitle}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                        {data.highlights.map((item, idx) => {
                            const Icon = highlightIconMap[item.icon] || FaUmbrellaBeach;
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-gray-100 shadow-2xs"
                                >
                                    <div className="w-14 h-14 rounded-full bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xs sm:text-sm text-[#0f1d33]">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-[12px] sm:text-sm mt-0.5 font-normal">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Itinerary timeline wrapper */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-1.5 h-5 bg-[#f15a24] rounded-full shrink-0" />
                        <h2 className="font-extrabold text-xl sm:text-3xl text-[#0f1d33] tracking-tight">
                            {data.itineraryTitle}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {data.itinerary.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35 }}
                                className="flex items-start gap-3 sm:gap-4.5 relative"
                            >
                                {/* Single itinerary day */}
                                <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-[#054553] text-white flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-sm mt-0.5">
                                    {item.day}
                                </div>

                                <div className="flex-1 bg-white rounded-xl p-4 sm:px-6 border border-gray-100  flex flex-col md:flex-row md:items-center justify-between gap-3.5">
                                    <div className="flex-1 pr-2">
                                        <h3 className="font-bold text-sm sm:text-lg text-[#0f1d33]">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs sm:text-base leading-relaxed mt-1 font-normal">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="relative w-full md:w-54 h-28 md:h-32 rounded-xl overflow-hidden shrink-0 shadow-2xs">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Inclusions and exclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
                    {/* Inclusions card container */}
                    <div className="bg-[#f0fdf4] rounded-xl p-5 sm:p-6 border border-emerald-100">
                        <div className="flex items-center gap-2 mb-3.5">
                            <FaCheckCircle className="text-emerald-600 w-5 h-5 shrink-0" />
                            <h3 className="font-bold text-base sm:text-lg text-[#0f1d33]">
                                {data.inclusionsTitle}
                            </h3>
                        </div>

                        <ul className="space-y-2.5">
                            {data.inclusions.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium"
                                >
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exclusions card container */}
                    <div className="bg-[#fff1f2] rounded-xl p-5 sm:p-6 border border-rose-100">
                        <div className="flex items-center gap-2 mb-3.5">
                            <FaTimesCircle className="text-rose-500 w-5 h-5 shrink-0" />
                            <h3 className="font-bold text-base sm:text-lg text-[#0f1d33]">
                                {data.exclusionsTitle}
                            </h3>
                        </div>

                        <ul className="space-y-2.5">
                            {data.exclusions.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium"
                                >
                                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Gallery thumbnails strip */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-1.5 h-5 bg-[#f15a24] rounded-full shrink-0" />
                        <h2 className="font-extrabold text-xl sm:text-3xl text-[#0f1d33] tracking-tight">
                            Gallery
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-3.5">
                        {(site.gallery?.photos || []).slice(0, 6).map((item, idx) => (
                            <motion.div
                                key={item.id ?? idx}
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.2 }}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-gray-100 group cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title || `Gallery photo ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
