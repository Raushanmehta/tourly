"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export interface GalleryVideo {
    id: number;
    title: string;
    duration: string;
    thumbnail: string;
    youtubeId?: string;
}

interface VideoCardProps {
    item: GalleryVideo;
    onPlay?: (item: GalleryVideo) => void;
}

export default function VideoCard({ item, onPlay }: VideoCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => onPlay?.(item)}
            className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gray-900 border border-gray-100"
        >
            {/* Video thumbnail image */}
            <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center brightness-[0.92] group-hover:scale-108 transition-transform duration-500 ease-out"
            />

            {/* Gradient overlay layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

            {/* Center play button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/45 group-hover:bg-[#f15a24] text-white flex items-center justify-center border-2 border-white/85 shadow-lg group-hover:scale-110 group-hover:border-[#f15a24] transition-all duration-300">
                    <FaPlay className="text-xs sm:text-sm ml-0.5 text-white" />
                </div>
            </div>

            {/* Bottom information bar */}
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-3.5 flex items-center justify-between gap-2 z-10">
                {/* Video title heading */}
                <h3 className="text-white text-xs sm:text-sm font-semibold truncate drop-shadow-sm flex-1">
                    {item.title}
                </h3>

                {/* Video duration pill */}
                <span className="bg-black/65 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md shrink-0 shadow-xs">
                    {item.duration}
                </span>
            </div>
        </motion.div>
    );
}
