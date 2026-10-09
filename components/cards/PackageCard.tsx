"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaHeart,
    FaRegHeart,
    FaPlane,
    FaCar,
    FaRegCalendarAlt,
    FaRegUser,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export interface PackageItem {
    id: number | string;
    title: string;
    tag: string;
    location: string;
    duration: string;
    people: string;
    transportType: "flight" | "transport" | string;
    transportText: string;
    description: string;
    price: string;
    image: string;
    href?: string;
    slug?: string;
    [key: string]: unknown;
}

interface PackageCardProps {
    item: PackageItem;
}

export default function PackageCard({ item }: PackageCardProps) {
    const [liked, setLiked] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group h-full"
        >
            <div>
                {/* Top photo container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    {/* Package thumbnail image */}
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                    />

                    {/* Category badge tag */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="bg-[#054553]/90 text-white text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-xs">
                            {item.tag}
                        </span>
                    </div>

                    {/* Wishlist heart button */}
                    <button
                        type="button"
                        onClick={() => setLiked(!liked)}
                        aria-label="Add to wishlist"
                        className="absolute top-3.5 right-3.5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-xs text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
                    >
                        {liked ? (
                            <FaHeart className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-red-500" />
                        ) : (
                            <FaRegHeart className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" />
                        )}
                    </button>
                </div>

                {/* Content body container */}
                <div className="px-4 pt-3">
                    {/* Title and location */}
                    <h3 className="font-extrabold text-xl sm:text-2xl text-[#0f1d33] tracking-tight truncate">
                        {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 font-medium mt-1.5 truncate">
                        <IoLocationOutline className="text-[#0284c7] w-4 h-4 shrink-0" />
                        <span className="truncate">{item.location}</span>
                    </div>

                    {/* Inclusions meta row */}
                    <div className="flex items-center justify-between text-xs sm:text-[13px] text-gray-500 py-3.5 my-3.5 border-y border-gray-100 gap-2">
                        {/* Duration item */}
                        <div className="flex items-center gap-1.5 shrink-0">
                            <FaRegCalendarAlt className="text-[#f15a24] w-3.5 h-3.5" />
                            <span>{item.duration}</span>
                        </div>

                        {/* People count item */}
                        <div className="flex items-center gap-1.5 shrink-0">
                            <FaRegUser className="text-[#f15a24] w-3 h-3" />
                            <span>{item.people}</span>
                        </div>

                        {/* Transport feature item */}
                        <div className="flex items-center gap-1.5 shrink-0">
                            {item.transportType === "flight" ? (
                                <FaPlane className="text-[#f15a24] w-3.5 h-3.5" />
                            ) : (
                                <FaCar className="text-[#f15a24] w-3.5 h-3.5" />
                            )}
                            <span className="truncate">{item.transportText}</span>
                        </div>
                    </div>

                    {/* Package description */}
                    <p className="text-gray-500 text-sm sm:text-[14.5px] leading-relaxed line-clamp-2 min-h-[42px] font-normal">
                        {item.description}
                    </p>
                </div>
            </div>

            {/* View details action */}
            <div className="p-4 sm:p-4 pt-2">
                <Link
                    href={item.href || (item.slug ? `/packages/${item.slug}` : "/enquiry-now")}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 transition-all cursor-pointer"
                >
                    <span>View Details</span>
                    <FaArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
            </div>
        </motion.div>
    );
}
