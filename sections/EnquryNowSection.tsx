"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaRegUser,
    FaRegEnvelope,
    FaPhoneAlt,
    FaRegCalendarAlt,
    FaChevronDown,
    FaArrowRight,
    FaLock,
    FaPlane,
    FaCheckCircle,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuFileText } from "react-icons/lu";
import { site, type TourlyEnquiryNowData } from "@/data/index";

interface EnquiryNowSectionProps {
    data?: TourlyEnquiryNowData;
}

export default function EnquiryNowSection({ data = site.enquiryNow }: EnquiryNowSectionProps) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        destination: "",
        travelDate: "",
        people: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 800);
    };

    return (
        <section className="relative w-full py-8 lg:py-12 bg-gradient-to-b from-[#f0f9ff]/70 via-[#f8fbfe] to-white overflow-hidden">
            {/* Airplane trail background */}
            <div className="absolute top-6 left-8 sm:left-16 pointer-events-none opacity-20 select-none">
                <svg
                    width="260"
                    height="140"
                    viewBox="0 0 260 140"
                    fill="none"
                    className="text-[#0284c7]"
                >
                    <path
                        d="M10 120 C60 100 120 70 210 25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="5 6"
                    />
                </svg>
                <div className="absolute top-4 right-10 -rotate-12 text-[#0284c7]">
                    <FaPlane className="w-6 h-6" />
                </div>
            </div>

            <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Section title header */}
                <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
                    {/* Enquiry badge pill */}
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

                    {/* Subtitle description text */}
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-2 leading-relaxed font-normal">
                        {data.description}
                    </p>
                </div>

                {/* Main white card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white rounded-xl shadow-xl shadow-sky-950/5 border border-sky-100/70 p-2 lg:p-2"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                        {/* Form left column */}
                        <div className="lg:col-span-7 flex flex-col justify-between">
                            <div className="p-6">
                                {/* Form title bar */}
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-1.5 h-7 bg-[#f15a24] rounded-full shrink-0" />
                                    <h3 className="font-extrabold text-2xl sm:text-3xl text-[#0f1d33] tracking-tight">
                                        {data.form.title}
                                    </h3>
                                </div>

                                {/* Form subtitle text */}
                                <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4 font-normal leading-relaxed">
                                    {data.form.subtitle}
                                </p>

                                {submitted ? (
                                    <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                                        <FaCheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                                        <h4 className="font-bold text-lg text-emerald-900">
                                            Thank You!
                                        </h4>
                                        <p className="text-emerald-700 text-sm mt-1">
                                            Your enquiry has been received. Our travel specialists will contact you shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-3">
                                        {/* Two column inputs */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
                                            {/* Full name field */}
                                            <div>
                                                <label className="block text-xs sm:text-sm font-bold text-[#0f1d33] mb-1.5">
                                                    Full Name <span className="text-[#f15a24]">*</span>
                                                </label>
                                                <div className="relative">
                                                    <FaRegUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        required
                                                        placeholder="Enter your full name"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-800 placeholder:text-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email address field */}
                                            <div>
                                                <label className="block text-xs sm:text-sm font-bold text-[#0f1d33] mb-1.5">
                                                    Email Address <span className="text-[#f15a24]">*</span>
                                                </label>
                                                <div className="relative">
                                                    <FaRegEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        placeholder="Enter your email address"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-800 placeholder:text-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone number field */}
                                            <div>
                                                <label className="block text-xs sm:text-sm font-bold text-[#0f1d33] mb-1.5">
                                                    Phone Number <span className="text-[#f15a24]">*</span>
                                                </label>
                                                <div className="relative">
                                                    <FaPhoneAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 pointer-events-none" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        placeholder="Enter your phone number"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-800 placeholder:text-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            {/* Destination select field */}
                                            <div>
                                                <label className="block text-xs sm:text-sm font-bold text-[#0f1d33] mb-1.5">
                                                    Travel Destination <span className="text-[#f15a24]">*</span>
                                                </label>
                                                <div className="relative">
                                                    <IoLocationOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                                    <select
                                                        name="destination"
                                                        required
                                                        value={formData.destination}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-9 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-700 appearance-none cursor-pointer"
                                                    >
                                                        <option value="">Select Destination</option>
                                                        {data.form.destinations.map((dest) => (
                                                            <option key={dest} value={dest}>
                                                                {dest}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
                                                </div>
                                            </div>

                                            {/* Travel date field */}
                                            <div>
                                                <label className="block text-xs sm:text-sm font-bold text-[#0f1d33] mb-1.5">
                                                    Travel Date <span className="text-[#f15a24]">*</span>
                                                </label>
                                                <div className="relative">
                                                    <FaRegCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                                    <input
                                                        type="date"
                                                        name="travelDate"
                                                        required
                                                        value={formData.travelDate}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-700 cursor-pointer"
                                                    />
                                                </div>
                                            </div>

                                            {/* People count select */}
                                            <div>
                                                <label className="block text-xs sm:text-sm font-bold text-[#0f1d33] mb-1.5">
                                                    No. of People <span className="text-[#f15a24]">*</span>
                                                </label>
                                                <div className="relative">
                                                    <HiOutlineUsers className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                                    <select
                                                        name="people"
                                                        required
                                                        value={formData.people}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-9 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-700 appearance-none cursor-pointer"
                                                    >
                                                        <option value="">Select number of people</option>
                                                        <option value="1">1 Person</option>
                                                        <option value="2">2 People</option>
                                                        <option value="3-5">3 - 5 People</option>
                                                        <option value="6-10">6 - 10 People</option>
                                                        <option value="10+">10+ People (Group)</option>
                                                    </select>
                                                    <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message textarea field */}
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-[#0f1d33] mb-1.5">
                                                Your Message / Requirements
                                            </label>
                                            <div className="relative">
                                                <LuFileText className="absolute left-3.5 top-3.5 text-gray-400 w-4 h-4 pointer-events-none" />
                                                <textarea
                                                    name="message"
                                                    rows={3}
                                                    placeholder="Tell us about your travel plans, budget, special requirements, etc."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-800 placeholder:text-gray-400 resize-none"
                                                />
                                            </div>
                                        </div>

                                        {/* Submit button */}
                                        <motion.button
                                            type="submit"
                                            disabled={loading}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg shadow-orange-500/35 hover:shadow-orange-500/50 transition-all cursor-pointer select-none"
                                        >
                                            <span>{loading ? "Submitting..." : data.form.buttonText}</span>
                                            <FaArrowRight className="w-4 h-4 ml-1" />
                                        </motion.button>

                                        {/* Privacy notice */}
                                        <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs text-center pt-1">
                                            <FaLock className="w-3 h-3 shrink-0" />
                                            <span>{data.form.privacyNotice}</span>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Right image column */}
                        <div className="lg:col-span-5 h-[340px] sm:h-[420px] lg:h-auto min-h-full">
                            <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[540px] rounded-xl lg:rounded-2xl overflow-hidden shadow-md">
                                {/* Resort photograph */}
                                <Image
                                    src={data.form.sideImage}
                                    alt="Overwater bungalow resort in turquoise lagoon"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
