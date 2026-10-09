"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { site, type TourlyTestimonialsData } from "@/data/index";

interface TestimonialSectionProps {
    data?: TourlyTestimonialsData;
}

export default function TestimonialSection({ data = site.testimonials }: TestimonialSectionProps) {
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

        return () => {
            cancelAnimationFrame(frameId);
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api, onSelect]);

    return (
        <section className="relative w-full py-8 lg:py-12 bg-gradient-to-b from-[#F6FBFE] via-white to-[#f4f9fd] overflow-hidden">
            {/* Ambient wave background */}
            <div className="absolute inset-0 pointer-events-none opacity-45">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-100 200 C300 120 700 350 1540 180"
                        stroke="#38bdf8"
                        strokeWidth="1.2"
                        strokeDasharray="4 6"
                        opacity="0.3"
                    />
                    <path
                        d="M-100 260 C400 180 800 420 1540 240"
                        stroke="#0284c7"
                        strokeWidth="1"
                        opacity="0.2"
                    />
                    <path
                        d="M-100 620 C350 520 850 720 1540 560"
                        stroke="#0284c7"
                        strokeWidth="1.2"
                        opacity="0.2"
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Header text container */}
                <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
                    {/* Badge pill */}
                    <div className="flex items-center justify-center gap-2 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 select-none">
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                        <span>{data.subtitle}</span>
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                    </div>

                    {/* Main section title */}
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0f1d33] tracking-tight">
                        {data.titlePrefix}
                        <span className="text-[#f15a24]">{data.titleHighlight}</span>
                    </h2>

                    {/* Header description subtitle */}
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-2 leading-relaxed font-normal">
                        {data.description}
                    </p>
                </div>

                {/* Shadcn UI Carousel */}
                <div className="relative w-full">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            loop: true,
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 sm:-ml-6">
                            {data.items.map((item) => (
                                <CarouselItem
                                    key={item.id}
                                    className="pl-4 sm:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="h-full py-2">
                                        <TestimonialCard testimonial={item} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {/* Bottom navigation bar */}
                    <div className="flex items-center justify-center gap-4 sm:gap-5 mt-4 select-none">
                        {/* Prev slide button */}
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                            onClick={() => api?.scrollPrev()}
                            aria-label="Previous testimonial"
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-gray-700 shadow-md border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer"
                        >
                            <FaChevronLeft className="text-xs sm:text-sm text-gray-600" />
                        </motion.button>

                        {/* Navigation dots */}
                        <div className="flex items-center gap-2 px-1">
                            {data.items.map((item, idx) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => api?.scrollTo(idx)}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                    className={`transition-all duration-300 cursor-pointer ${current === idx
                                        ? "w-3.5 h-3.5 rounded-full bg-[#f15a24] shadow-sm"
                                        : "w-2.5 h-2.5 rounded-full bg-[#bae6fd] hover:bg-sky-300"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Next slide button */}
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                            onClick={() => api?.scrollNext()}
                            aria-label="Next testimonial"
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white shadow-lg shadow-orange-500/35 flex items-center justify-center hover:shadow-xl transition-all cursor-pointer"
                        >
                            <FaChevronRight className="text-xs sm:text-sm text-white" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
