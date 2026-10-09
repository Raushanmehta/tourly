"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { IoCompassOutline } from "react-icons/io5";

export interface DestinationCardData {
    id: number | string;
    title: string;
    packages: string;
    description: string;
    image: string;
    href?: string;
    variant?: string;
}

interface DestinationCard2Props {
    item: DestinationCardData;
}

export default function DestinationCard2({ item }: DestinationCard2Props) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group h-full"
        >
            <div>
                {/* Top photo container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    {/* Destination photo image */}
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                </div>

                {/* Content body container */}
                <div className="px-4 pt-4 ">
                    {/* Destination title row */}
                    <div className="flex items-center gap-2 mb-2">
                        <FaMapMarkerAlt className="text-[#0f1d33] w-4 h-4 shrink-0" />
                        <h3 className="font-extrabold text-base sm:text-lg text-[#0f1d33] tracking-tight truncate">
                            {item.title}
                        </h3>
                    </div>

                    {/* Packages badge row */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                            <IoCompassOutline className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-slate-600 font-semibold text-xs sm:text-sm">
                            {item.packages}
                        </span>
                    </div>

                    {/* Description text paragraph */}
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed line-clamp-3 min-h-[52px] font-normal">
                        {item.description}
                    </p>
                </div>
            </div>

            {/* Action buttons row */}
            <div className="px-4 pb-4 pt-0 flex items-center gap-2.5">
                {/* Enquiry button link */}
                <Link
                    href="/enquiry-now"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/25 transition-all cursor-pointer"
                >
                    <span>Enquiry Now</span>
                    <FaArrowRight className="w-3 h-3 ml-0.5" />
                </Link>
            </div>
        </motion.div>
    );
}
