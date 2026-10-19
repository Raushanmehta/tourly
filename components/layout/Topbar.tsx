"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { site, type TourlyTopbarData } from "@/data/index";

const iconMap: Record<string, React.ElementType> = {
    facebook: FaFacebookF,
    twitter: FaXTwitter,
    instagram: FaInstagram,
    youtube: FaYoutube,
    linkedin: FaLinkedinIn,
};

interface TopbarProps {
    data?: TourlyTopbarData;
}

export default function Topbar({ data = site.topbar }: TopbarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="hidden md:block w-full bg-[#054553] text-white text-xs sm:text-[13px] font-sans border-b border-white/10"
        >
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 flex items-center justify-between gap-4">
                {/* Left contact info */}
                <div className="flex items-center flex-wrap gap-x-3.5 sm:gap-x-5 gap-y-1.5 text-white/90">
                    {/* Phone link */}
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={data.phoneHref}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                        aria-label={`Call ${data.phone}`}
                    >
                        <FaPhoneAlt className="text-[11px] text-white shrink-0" />
                        <span className="font-normal tracking-wide">{data.phone}</span>
                    </motion.a>

                    {/* Divider */}
                    <span className="text-white/40 select-none">|</span>

                    {/* Email link */}
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={data.emailHref}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                        aria-label={`Email ${data.email}`}
                    >
                        <FaEnvelope className="text-xs text-white shrink-0" />
                        <span className="font-normal tracking-wide">{data.email}</span>
                    </motion.a>

                    {/* Divider */}
                    <span className="hidden md:inline text-white/40 select-none">|</span>

                    {/* Address line */}
                    <div className="hidden md:flex items-center gap-2 text-white/90">
                        <FaMapMarkerAlt className="text-xs text-white shrink-0" />
                        <span className="font-normal tracking-wide">{data.address}</span>
                    </div>
                </div>

                {/* Right social links */}
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    {/* Divider */}
                    <span className="text-white/40 select-none">|</span>

                    {/* Social icons */}
                    <div className="flex items-center gap-2 sm:gap-2.5">
                        {data.socialLinks.map((item) => {
                            const IconComponent = iconMap[item.icon] || FaFacebookF;
                            return (
                                <motion.div
                                    key={item.name}
                                    whileHover={{ scale: 1.12, y: -1 }}
                                    whileTap={{ scale: 0.92 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.name}
                                        className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border border-white/70 hover:border-white hover:bg-white hover:text-[#054553] flex items-center justify-center text-white transition-all duration-200"
                                    >
                                        <IconComponent className="text-[11px] sm:text-xs" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}