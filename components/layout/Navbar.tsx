"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { site, type TourlyNavbarData } from "@/data/index";

interface NavbarProps {
    data?: TourlyNavbarData;
}

export default function Navbar({ data = site.navbar }: NavbarProps) {
    const pathname = usePathname() || "/";
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)]">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                <div className="flex items-center justify-between h-20">
                    {/* Brand logo link */}
                    <Link href="/" className="flex items-center shrink-0 py-1">
                        <Image
                            src={data.logo.src}
                            alt={data.logo.alt}
                            width={data.logo.width}
                            height={data.logo.height}
                            priority
                            className="h-14 sm:h-16 w-auto object-contain transition-transform"
                        />
                    </Link>

                    {/* Desktop navigation links */}
                    <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
                        {data.navItems.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative text-[15px] font-medium transition-colors py-2 ${active
                                        ? "text-[#f15a24]"
                                        : "text-[#13253f] hover:text-[#f15a24]"
                                        }`}
                                >
                                    <span>{item.name}</span>
                                    {active && (
                                        <motion.span
                                            layoutId="activeNavIndicator"
                                            className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#f15a24] rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA button desktop */}
                    <div className="hidden sm:flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Link
                                href={data.ctaButton.href}
                                className="group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-medium text-sm sm:text-[15px] shadow-md hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                            >
                                <span>{data.ctaButton.text}</span>
                                <div className="w-8 h-8 rounded-full bg-white text-[#f15a24] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                                    <FaArrowRight className="text-xs" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile hamburger button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle Navigation Menu"
                            className="p-2.5 rounded-lg text-gray-700 hover:text-[#f15a24] hover:bg-gray-100 transition-colors focus:outline-hidden"
                        >
                            {mobileOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile navigation drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden border-t border-gray-100 bg-white shadow-xl overflow-hidden"
                    >
                        <div className="px-5 py-6 space-y-4">
                            {data.navItems.map((item) => {
                                const active = isActive(item.href);

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block text-base font-medium py-1 transition-colors ${active
                                            ? "text-[#f15a24] font-semibold"
                                            : "text-[#13253f] hover:text-[#f15a24]"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}

                            {/* Mobile action button */}
                            <div className="pt-4 border-t border-gray-100">
                                <Link
                                    href={data.ctaButton.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-semibold text-sm shadow-md"
                                >
                                    <span>{data.ctaButton.text}</span>
                                    <FaArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}