"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
                                    className="object-cover object-center"
                                />

                                {/* Subtle overall overlay */}
                                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
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