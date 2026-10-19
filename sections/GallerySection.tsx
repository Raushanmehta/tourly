"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ChevronDown, MapPin } from "lucide-react";
import ImageCard from "@/components/cards/ImageCard";
import VideoCard, { type GalleryVideo } from "@/components/cards/VideoCard";
import { site, type TourlyGalleryData } from "@/data/index";

interface GallerySectionProps {
    data?: TourlyGalleryData;
}

export default function GallerySection({ data = site.gallery }: GallerySectionProps) {
    const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
    const [photoIndex, setPhotoIndex] = useState<number | null>(null);

    const INITIAL_COUNT = 8;
    const INCREMENT = 4;
    const [visiblePhotosCount, setVisiblePhotosCount] = useState<number>(INITIAL_COUNT);
    const [visibleVideosCount, setVisibleVideosCount] = useState<number>(INITIAL_COUNT);

    const visiblePhotos = data.photos.slice(0, visiblePhotosCount);
    const visibleVideos = data.videos.slice(0, visibleVideosCount);

    const hasMorePhotos = visiblePhotosCount < data.photos.length;
    const hasMoreVideos = visibleVideosCount < data.videos.length;

    const currentPhoto = photoIndex !== null ? data.photos[photoIndex] : null;
    const totalPhotos = data.photos.length;

    const handleNextPhoto = useCallback(() => {
        if (!totalPhotos) return;
        setPhotoIndex((prev) => (prev === null ? 0 : (prev + 1) % totalPhotos));
    }, [totalPhotos]);

    const handlePrevPhoto = useCallback(() => {
        if (!totalPhotos) return;
        setPhotoIndex((prev) => (prev === null ? 0 : (prev - 1 + totalPhotos) % totalPhotos));
    }, [totalPhotos]);

    const handleClosePhoto = useCallback(() => {
        setPhotoIndex(null);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        if (photoIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClosePhoto();
            } else if (e.key === "ArrowRight") {
                handleNextPhoto();
            } else if (e.key === "ArrowLeft") {
                handlePrevPhoto();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [photoIndex, handleNextPhoto, handlePrevPhoto, handleClosePhoto]);

    // Lock scroll
    useEffect(() => {
        if (photoIndex !== null || selectedVideo !== null) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [photoIndex, selectedVideo]);

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

                {/* Photo grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 mb-6">
                    {visiblePhotos.map((item, idx) => (
                        <ImageCard
                            key={item.id}
                            item={item}
                            onSelect={() => setPhotoIndex(idx)}
                        />
                    ))}
                </div>

                {/* Load more photos */}
                {hasMorePhotos && (
                    <div className="flex justify-center -mt-2 mb-10 sm:mb-12">
                        <button
                            type="button"
                            onClick={() =>
                                setVisiblePhotosCount((prev) =>
                                    Math.min(prev + INCREMENT, data.photos.length)
                                )
                            }
                            className="px-7 py-2.5 sm:py-3 rounded-xl bg-white border border-gray-200 hover:border-[#f15a24] text-[#0f1d33] hover:text-[#f15a24] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer group"
                        >
                            <span>Load More Photos</span>
                            <span className="text-[11px] font-semibold text-gray-400 group-hover:text-[#f15a24]/80">
                                ({visiblePhotos.length} / {data.photos.length})
                            </span>
                            <ChevronDown className="w-4 h-4 text-[#f15a24] group-hover:translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                )}

                {/* Video header */}
                <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 ">
                    {/* Video badge */}
                    <div className="flex items-center justify-center gap-2 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 select-none">
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                        <span>{data.videoSubtitle}</span>
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                    </div>

                    {/* Video title */}
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0f1d33] tracking-tight">
                        {data.videoTitlePrefix}
                        <span className="text-[#f15a24]">{data.videoTitleHighlight}</span>
                    </h2>

                    {/* Video subtitle */}
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
                        {data.videoDescription}
                    </p>
                </div>

                {/* Video grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {visibleVideos.map((item) => (
                        <VideoCard
                            key={item.id}
                            item={item}
                            onPlay={(vid) => setSelectedVideo(vid)}
                        />
                    ))}
                </div>

                {/* Load more videos */}
                {hasMoreVideos && (
                    <div className="flex justify-center mt-6 sm:mt-8">
                        <button
                            type="button"
                            onClick={() =>
                                setVisibleVideosCount((prev) =>
                                    Math.min(prev + INCREMENT, data.videos.length)
                                )
                            }
                            className="px-7 py-2.5 sm:py-3 rounded-xl bg-white border border-gray-200 hover:border-[#f15a24] text-[#0f1d33] hover:text-[#f15a24] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer group"
                        >
                            <span>Load More Videos</span>
                            <span className="text-[11px] font-semibold text-gray-400 group-hover:text-[#f15a24]/80">
                                ({visibleVideos.length} / {data.videos.length})
                            </span>
                            <ChevronDown className="w-4 h-4 text-[#f15a24] group-hover:translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                )}
            </div>

            {/* Video modal */}
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

                            {/* YouTube iframe */}
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

            {/* Image lightbox */}
            <AnimatePresence>
                {photoIndex !== null && currentPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClosePhoto}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl max-h-[90vh] w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 flex flex-col"
                        >
                            {/* Header bar */}
                            <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none">
                                <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-md border border-white/10 pointer-events-auto">
                                    {photoIndex + 1} / {data.photos.length}
                                </span>
                                <button
                                    type="button"
                                    onClick={handleClosePhoto}
                                    aria-label="Close preview"
                                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#f15a24] text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/10 pointer-events-auto"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Image container */}
                            <div className="relative w-full h-[58vh] sm:h-[68vh] md:h-[72vh] flex items-center justify-center bg-black/60">
                                {/* Previous button */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevPhoto();
                                    }}
                                    aria-label="Previous photo"
                                    className="absolute left-3 sm:left-5 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#f15a24] text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-lg group"
                                >
                                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                                </button>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentPhoto.id ?? photoIndex}
                                        initial={{ opacity: 0, scale: 0.97 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.24, ease: "easeInOut" }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={currentPhoto.image}
                                            alt={currentPhoto.title}
                                            fill
                                            priority
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Next button */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNextPhoto();
                                    }}
                                    aria-label="Next photo"
                                    className="absolute right-3 sm:right-5 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#f15a24] text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-lg group"
                                >
                                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>

                            {/* Caption bar */}
                            <div className="p-4 sm:px-6 bg-black/95 text-white flex items-center justify-between border-t border-white/10 z-20">
                                <div>
                                    <h4 className="font-bold text-base sm:text-lg tracking-tight">
                                        {currentPhoto.title}
                                    </h4>
                                    {currentPhoto.location && (
                                        <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5 mt-0.5">
                                            <MapPin className="w-3.5 h-3.5 text-[#f15a24]" />
                                            <span>{currentPhoto.location}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
