"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ImageCard, { type GalleryImage } from "@/components/cards/ImageCard";
import VideoCard, { type GalleryVideo } from "@/components/cards/VideoCard";
import { site, type TourlyGalleryData } from "@/data/index";

interface GallerySectionProps {
    data?: TourlyGalleryData;
}

export default function GallerySection({ data = site.gallery }: GallerySectionProps) {
    const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<GalleryImage | null>(null);

    return (
        <section className="relative w-full py-8 lg:py-12 bg-gradient-to-b from-[#f8fbfe] via-white to-[#f4f9fd] overflow-hidden">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Photos header block */}
                <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
                    {/* Photo badge pill */}
                    <div className="flex items-center justify-center gap-2 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 select-none">
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                        <span>{data.photoSubtitle}</span>
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                    </div>

                    {/* Photo section title */}
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0f1d33] tracking-tight">
                        {data.photoTitlePrefix}
                        <span className="text-[#f15a24]">{data.photoTitleHighlight}</span>
                    </h2>

                    {/* Photos subtitle description */}
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-2 leading-relaxed font-normal">
                        {data.photoDescription}
                    </p>
                </div>

                {/* Photo grid container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 mb-6 sm:mb-8">
                    {data.photos.map((item) => (
                        <ImageCard
                            key={item.id}
                            item={item}
                            onSelect={(selected) => setSelectedPhoto(selected)}
                        />
                    ))}
                </div>

                {/* Video header block */}
                <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 ">
                    {/* Video badge pill */}
                    <div className="flex items-center justify-center gap-2 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 select-none">
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                        <span>{data.videoSubtitle}</span>
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                    </div>

                    {/* Video section title */}
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0f1d33] tracking-tight">
                        {data.videoTitlePrefix}
                        <span className="text-[#f15a24]">{data.videoTitleHighlight}</span>
                    </h2>

                    {/* Video subtitle description */}
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
                        {data.videoDescription}
                    </p>
                </div>

                {/* Video grid container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {data.videos.map((item) => (
                        <VideoCard
                            key={item.id}
                            item={item}
                            onPlay={(vid) => setSelectedVideo(vid)}
                        />
                    ))}
                </div>
            </div>

            {/* Video lightbox modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideo(null)}
                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            {/* Close button */}
                            <button
                                type="button"
                                onClick={() => setSelectedVideo(null)}
                                aria-label="Close video"
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* YouTube video iframe */}
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title={selectedVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image lightbox modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl max-h-[85vh] w-full rounded-xl overflow-hidden bg-black shadow-2xl border border-white/10 flex flex-col"
                        >
                            {/* Close button */}
                            <button
                                type="button"
                                onClick={() => setSelectedPhoto(null)}
                                aria-label="Close preview"
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Large image container */}
                            <div className="relative w-full h-[60vh] sm:h-[70vh]">
                                <Image
                                    src={selectedPhoto.image}
                                    alt={selectedPhoto.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Caption bar */}
                            <div className="p-4 bg-black/90 text-white flex items-center justify-between border-t border-white/10">
                                <div>
                                    <h4 className="font-bold text-base sm:text-lg">
                                        {selectedPhoto.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs sm:text-sm">
                                        {selectedPhoto.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
