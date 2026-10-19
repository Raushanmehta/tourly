"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
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
    FaChevronLeft,
    FaChevronRight,
    FaPlay,
    FaPause,
    FaTimes,
    FaExpand,
    FaShieldAlt,
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
    const galleryPhotos = (site.gallery?.photos || []).slice(0, 6);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const handleNext = useCallback(() => {
        if (galleryPhotos.length === 0) return;
        setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryPhotos.length));
    }, [galleryPhotos.length]);

    const handlePrev = useCallback(() => {
        if (galleryPhotos.length === 0) return;
        setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + galleryPhotos.length) % galleryPhotos.length));
    }, [galleryPhotos.length]);

    const handleClose = useCallback(() => {
        setLightboxIndex(null);
        setIsPlaying(false);
    }, []);

    // Autoplay slideshow
    useEffect(() => {
        if (lightboxIndex === null || !isPlaying || galleryPhotos.length <= 1) return;
        const interval = setInterval(() => {
            handleNext();
        }, 3500);
        return () => clearInterval(interval);
    }, [lightboxIndex, isPlaying, handleNext, galleryPhotos.length]);

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            } else if (e.key === "ArrowRight") {
                handleNext();
            } else if (e.key === "ArrowLeft") {
                handlePrev();
            } else if (e.key === " ") {
                e.preventDefault();
                setIsPlaying((prev) => !prev);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, handleNext, handlePrev, handleClose]);

    // Lock scroll
    useEffect(() => {
        if (lightboxIndex !== null) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [lightboxIndex]);

    return (
        <section className="relative w-full py-6 lg:py-10 bg-[#fafcfd]">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4 sm:space-y-8">
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
                            <h1 className="font-extrabold text-2xl sm:text-3xl text-[#0f1d33] tracking-tight mb-2">
                                {data.title}
                            </h1>

                            {/* Short description */}
                            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                                {data.shortDescription}
                            </p>

                            {/* Meta grid items */}
                            <div className="grid grid-cols-2 gap-3.5 pt-3 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                        <FaRegCalendarAlt className="w-7 h-7" />
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

                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                        <HiOutlineUsers className="w-7 h-7" />
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

                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                        <FaBed className="w-7 h-7" />
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

                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                        <FaPlane className="w-7 h-7" />
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

                        {/* Booking strip */}
                        <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-xs border border-gray-100 flex items-center justify-between gap-3 sm:gap-4">
                            {/* Trip guarantee */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                                    <FaShieldAlt className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-[#0f1d33] tracking-tight">
                                        100% Customisable Package
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-gray-400 font-medium mt-0.5">
                                        Instant quotes &amp; 24/7 assistance
                                    </p>
                                </div>
                            </div>

                            {/* Right: Booking Button */}
                            <Link
                                href={data.enquiryButton.href}
                                className="w-auto px-5 sm:px-7 py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm shadow-orange-500/20 hover:shadow-md hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center shrink-0"
                            >
                                <span>{data.enquiryButton.text}</span>
                                <FaArrowRight className="w-3.5 h-3.5 ml-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Overview section wrapper */}
                <div className="">
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
                            <div className="relative w-full h-[140px] sm:h-[160px] md:h-[190px] rounded-xl overflow-hidden shadow-sm">
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
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-gray-100 shadow-2xs hover:shadow-md hover:border-orange-200/80 transition-all duration-300 cursor-pointer overflow-hidden"
                                >
                                    {/* Accent line */}
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f15a24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="w-16 h-16 rounded-full bg-orange-50 text-[#f15a24] group-hover:bg-[#f15a24] group-hover:text-white flex items-center justify-center shrink-0 shadow-xs group-hover:shadow-md group-hover:shadow-orange-500/25 group-hover:scale-105 transition-all duration-300">
                                        <Icon className="w-8 h-8 group-hover:rotate-6 transition-transform duration-300" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-sm sm:text-base text-[#0f1d33] group-hover:text-[#f15a24] transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-[12px] sm:text-sm mt-0.5 font-normal leading-snug">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
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

                                    <div className="relative w-full md:w-64 lg:w-72 h-32 md:h-36 rounded-xl overflow-hidden shrink-0 shadow-2xs">
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
                            <FaCheckCircle className="text-emerald-600 w-6 h-6 shrink-0" />
                            <h3 className="font-bold text-base sm:text-lg text-[#0f1d33]">
                                {data.inclusionsTitle}
                            </h3>
                        </div>

                        <ul className="space-y-2.5 pl-5 sm:pl-6">
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
                            <FaTimesCircle className="text-rose-500 w-6 h-6 shrink-0" />
                            <h3 className="font-bold text-base sm:text-lg text-[#0f1d33]">
                                {data.exclusionsTitle}
                            </h3>
                        </div>

                        {/* ul list */}
                        <ul className="space-y-2.5 pl-5 sm:pl-6">
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
                        {galleryPhotos.map((item, idx) => (
                            <motion.button
                                key={item.id ?? idx}
                                type="button"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => {
                                    setLightboxIndex(idx);
                                    setIsPlaying(true);
                                }}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-gray-100 group cursor-pointer text-left block w-full focus:outline-hidden focus:ring-2 focus:ring-[#f15a24]"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title || `Gallery photo ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                                />
                                {/* Hover overlay indicator */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-white/85 backdrop-blur-xs text-[#0f1d33] flex items-center justify-center shadow-md">
                                        <FaExpand className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox modal */}
            <AnimatePresence>
                {lightboxIndex !== null && galleryPhotos[lightboxIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6"
                    >
                        {/* Top Control Bar */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-5xl mx-auto flex items-center justify-between z-20"
                        >
                            {/* Counter status */}
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold tracking-wider border border-white/10 backdrop-blur-xs">
                                    {lightboxIndex + 1} / {galleryPhotos.length}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setIsPlaying((prev) => !prev)}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer border ${isPlaying
                                        ? "bg-[#f15a24]/20 text-[#f15a24] border-[#f15a24]/40"
                                        : "bg-white/10 text-white/80 border-white/10 hover:bg-white/20"
                                        }`}
                                    title={isPlaying ? "Pause autoplay" : "Play slideshow"}
                                >
                                    {isPlaying ? (
                                        <FaPause className="w-2.5 h-2.5" />
                                    ) : (
                                        <FaPlay className="w-2.5 h-2.5 ml-0.5" />
                                    )}
                                    <span>{isPlaying ? "Autoplay On" : "Autoplay Off"}</span>
                                </button>
                            </div>

                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={handleClose}
                                aria-label="Close lightbox"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer border border-white/10"
                            >
                                <FaTimes className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Image slider */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl mx-auto flex items-center justify-center my-auto px-2"
                        >
                            {/* Prev Button */}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                                aria-label="Previous photo"
                                className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#f15a24] text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer border border-white/20 shadow-lg group"
                            >
                                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
                            </button>

                            {/* Center Image Container */}
                            <div className="relative w-full h-[52vh] sm:h-[62vh] md:h-[68vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={lightboxIndex}
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.28, ease: "easeInOut" }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={galleryPhotos[lightboxIndex].image}
                                            alt={galleryPhotos[lightboxIndex].title || `Gallery photo ${lightboxIndex + 1}`}
                                            fill
                                            priority
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Next Button */}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                aria-label="Next photo"
                                className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#f15a24] text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer border border-white/20 shadow-lg group"
                            >
                                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>

                        {/* Caption bar */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 z-20"
                        >
                            {/* Title & Location */}
                            <div className="text-center sm:text-left">
                                <h4 className="text-white font-bold text-sm sm:text-base">
                                    {galleryPhotos[lightboxIndex].title || `Gallery Photo ${lightboxIndex + 1}`}
                                </h4>
                                {galleryPhotos[lightboxIndex].location && (
                                    <p className="text-gray-400 text-xs flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                                        <IoLocationOutline className="text-[#f15a24] w-3 h-3" />
                                        <span>{galleryPhotos[lightboxIndex].location}</span>
                                    </p>
                                )}
                            </div>

                            {/* Thumbnail strip */}
                            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
                                {galleryPhotos.map((photo, i) => (
                                    <button
                                        key={photo.id ?? i}
                                        type="button"
                                        onClick={() => {
                                            setLightboxIndex(i);
                                        }}
                                        className={`relative w-12 h-9 sm:w-14 sm:h-10 rounded-lg overflow-hidden shrink-0 transition-all cursor-pointer ${i === lightboxIndex
                                            ? "ring-2 ring-[#f15a24] scale-105 opacity-100"
                                            : "opacity-45 hover:opacity-85 ring-1 ring-white/20"
                                            }`}
                                    >
                                        <Image
                                            src={photo.image}
                                            alt={photo.title || `Thumbnail ${i + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
