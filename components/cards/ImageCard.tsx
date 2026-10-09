"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

export interface GalleryImage {
    id: number;
    title: string;
    image: string;
    location?: string;
}

interface ImageCardProps {
    item: GalleryImage;
    onSelect?: (item: GalleryImage) => void;
}

export default function ImageCard({ item, onSelect }: ImageCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => onSelect?.(item)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gray-100 border border-gray-100"
        >
            {/* Destination photo image */}
            <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
            />

            {/* Dark hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                {/* Center search icon */}
                <div className="w-full flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-xs text-white flex items-center justify-center">
                        <FaSearchPlus className="w-3.5 h-3.5" />
                    </div>
                </div>

                {/* Bottom caption text */}
                <div>
                    <h3 className="text-white text-xs sm:text-sm font-bold truncate drop-shadow-sm">
                        {item.title}
                    </h3>
                    {item.location && (
                        <p className="text-white/80 text-[11px] truncate">
                            {item.location}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
