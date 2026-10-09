"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { site, type TourlyFaqData } from "@/data/index";

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

interface FaqSectionProps {
    data?: TourlyFaqData;
}

export default function FaqSection({ data = site.faq }: FaqSectionProps) {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    const renderCard = (faq: FaqItem) => {
        const isOpen = openId === faq.id;

        return (
            <motion.div
                key={faq.id}
                layout
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? "bg-[#f0f9ff]/50 border-sky-200 shadow-sm"
                    : "bg-white border-gray-100 shadow-xs hover:border-gray-200 hover:shadow-sm"
                    }`}
            >
                {/* Question button header */}
                <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-3 sm:p-4 flex items-center justify-between gap-3.5 text-left cursor-pointer select-none"
                >
                    <div className="flex items-center gap-3 sm:gap-3.5 flex-1">
                        {/* Question mark badge */}
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f15a24] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                            ?
                        </div>
                        {/* Question text */}
                        <span className="font-bold text-xs sm:text-sm md:text-[15px] text-[#0f1d33] leading-snug">
                            {faq.question}
                        </span>
                    </div>

                    {/* Chevron icon indicator */}
                    <div
                        className={`text-[#0f1d33] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                    >
                        <FaChevronDown className="w-3.5 h-3.5" />
                    </div>
                </button>

                {/* Animated answer wrapper */}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 pl-14 sm:pl-16">
                                {/* Answer text paragraph */}
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    return (
        <section className="relative w-full py-8 lg:py-12 bg-gradient-to-b from-white via-[#f8fbfe] to-[#f4f9fd] overflow-hidden">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Section title header */}
                <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
                    {/* Badge pill */}
                    <div className="flex items-center justify-center gap-2 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 select-none">
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                        <span>{data.subtitle}</span>
                        <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                    </div>

                    {/* Main heading */}
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0f1d33] tracking-tight">
                        {data.titlePrefix}
                        <span className="text-[#f15a24]">{data.titleHighlight}</span>
                    </h2>

                    {/* Subtitle description */}
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-2 leading-relaxed font-normal">
                        {data.description}
                    </p>
                </div>

                {/* Two column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 items-start">
                    {/* Left FAQ column */}
                    <div className="flex flex-col gap-3.5 sm:gap-4">
                        {data.leftFaqs.map((faq) => renderCard(faq))}
                    </div>

                    {/* Right FAQ column */}
                    <div className="flex flex-col gap-3.5 sm:gap-4">
                        {data.rightFaqs.map((faq) => renderCard(faq))}
                    </div>
                </div>
            </div>
        </section>
    );
}
