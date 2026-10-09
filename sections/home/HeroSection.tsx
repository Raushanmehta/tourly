"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { site, type TourlyHeroData } from "@/data/index";

interface HeroSectionProps {
    data?: TourlyHeroData;
}

export default function HeroSection({ data = site.hero }: HeroSectionProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const onSelect = useCallback(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
    }, [api]);

    useEffect(() => {
        if (!api) return;
        const frameId = requestAnimationFrame(() => {
            onSelect();
        });
        api.on("select", onSelect);
        api.on("reInit", onSelect);

        const timer = setInterval(() => {
            api.scrollNext();
        }, 5500);

        return () => {
            cancelAnimationFrame(frameId);
            clearInterval(timer);
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api, onSelect]);

    return (
        <section className="relative w-full overflow-hidden bg-black">
            <Carousel
                setApi={setApi}
                opts={{
                    loop: true,
                    align: "start",
                }}
                className="w-full"
            >
                {/* Carousel content */}
                <CarouselContent className="ml-0">
                    {data.slides.map((slide, index) => (
                        <CarouselItem key={slide.id} className="pl-0 relative">
                            {/* Slide container */}
                            <div className="relative w-full h-[400px] sm:h-[450px] md:h-[580px] lg:h-[580px]">
                                {/* Background image */}
                                <Image
                                    src={slide.image}
                                    alt="Hero destination"
                                    fill
                                    priority={index === 0}
                                    className="object-cover object-center brightness-[0.96]"
                                />

                                {/* Subtle overall overlay */}
                                <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                                {/* Center frosted card */}
                                <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 z-20">
                                    <div className="w-full max-w-3xl lg:max-w-[860px] bg-[#054553]/75 sm:bg-[#044453]/75 backdrop-blur-xs border border-white/20 rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16 text-center shadow-2xl">
                                        <AnimatePresence mode="wait">
                                            {current === index && (
                                                <motion.div
                                                    key={`slide-content-${slide.id}`}
                                                    initial={{ opacity: 0, y: 18 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -18 }}
                                                    transition={{ duration: 0.55, ease: "easeOut" }}
                                                    className="flex flex-col items-center"
                                                >
                                                    {/* Headline */}
                                                    <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white leading-[1.18] tracking-tight whitespace-pre-line">
                                                        {slide.title}
                                                    </h1>

                                                    {/* Subtitle description */}
                                                    <p className="text-white/95 text-xs sm:text-sm md:text-base font-normal max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
                                                        {slide.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Left navigation arrow */}
                <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => api?.scrollPrev()}
                    aria-label="Previous slide"
                    className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/45 hover:bg-black/70 border border-white/70 flex items-center justify-center text-white backdrop-blur-sm shadow-xl transition-colors cursor-pointer"
                >
                    <FaChevronLeft className="text-sm sm:text-base pr-0.5" />
                </motion.button>

                {/* Right navigation arrow */}
                <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => api?.scrollNext()}
                    aria-label="Next slide"
                    className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/45 hover:bg-black/70 border border-white/70 flex items-center justify-center text-white backdrop-blur-sm shadow-xl transition-colors cursor-pointer"
                >
                    <FaChevronRight className="text-sm sm:text-base pl-0.5" />
                </motion.button>

                {/* Bottom pagination dots */}
                <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
                    {data.slides.map((slide, idx) => (
                        <button
                            key={slide.id}
                            type="button"
                            onClick={() => api?.scrollTo(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`transition-all duration-300 cursor-pointer ${current === idx
                                ? "w-3.5 h-3.5 rounded-full bg-[#f15a24] shadow-md border-0"
                                : "w-3 h-3 rounded-full border-2 border-white bg-transparent opacity-75 hover:opacity-100"
                                }`}
                        />
                    ))}
                </div>
            </Carousel>
        </section>
    );
}