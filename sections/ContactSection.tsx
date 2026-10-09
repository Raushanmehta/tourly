"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaRegUser,
    FaRegEnvelope,
    FaArrowRight,
    FaPlane,
    FaCheckCircle,
} from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { site, type TourlyContactData } from "@/data/index";

interface ContactSectionProps {
    data?: TourlyContactData;
}

export default function ContactSection({ data = site.contact }: ContactSectionProps) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        <section className="relative w-full py-8 lg:py-12 bg-gradient-to-b from-[#f8fbfe] via-white to-[#f4f9fd] overflow-hidden">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Top contact info cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 mb-4 sm:mb-6">
                    {/* Office address card */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-5 sm:p-6 flex items-center gap-4 transition-all"
                    >
                        <div className="w-13 h-13 rounded-full bg-[#f15a24] text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
                            <FaMapMarkerAlt className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-base text-[#0f1d33]">
                                {data.cards.address.title}
                            </h3>
                            <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-snug">
                                {data.cards.address.line1} <br />
                                {data.cards.address.line2}
                            </p>
                        </div>
                    </motion.div>

                    {/* Call us card */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-5 sm:p-6 flex items-center gap-4 transition-all"
                    >
                        <div className="w-13 h-13 rounded-full bg-[#054553] text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-900/20">
                            <FaPhoneAlt className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-base text-[#0f1d33]">
                                {data.cards.phone.title}
                            </h3>
                            <p className="text-gray-800 text-xs sm:text-sm font-semibold mt-0.5">
                                {data.cards.phone.number}
                            </p>
                            <p className="text-gray-400 text-xs mt-0.5">
                                {data.cards.phone.hours}
                            </p>
                        </div>
                    </motion.div>

                    {/* Email card */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-5 sm:p-6 flex items-center gap-4 transition-all"
                    >
                        <div className="w-13 h-13 rounded-full bg-[#f15a24] text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
                            <FaEnvelope className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-base text-[#0f1d33]">
                                {data.cards.email.title}
                            </h3>
                            <p className="text-gray-800 text-xs sm:text-sm font-semibold mt-0.5">
                                {data.cards.email.address}
                            </p>
                            <p className="text-gray-400 text-xs mt-0.5">
                                {data.cards.email.note}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Main middle grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-4 sm:mb-6">
                    {/* Left content area */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                        <div className="relative">
                            {/* Orange dash badge */}
                            <div className="flex items-center gap-2 text-[#f15a24] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 select-none">
                                <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                                <span>{data.subtitle}</span>
                                <span className="w-6 sm:w-8 h-[2px] bg-[#f15a24]" />
                            </div>

                            {/* Main headline */}
                            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-[44px] text-[#0f1d33] tracking-tight leading-[1.2]">
                                {data.title}
                            </h2>

                            {/* Description text */}
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-2 mb-4 font-normal">
                                {data.description}
                            </p>

                            {/* Faint flight trail decoration */}
                            <div className="absolute right-2 top-4 pointer-events-none opacity-25 select-none hidden sm:block">
                                <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
                                    <path
                                        d="M10 80 C40 60 70 40 100 15"
                                        stroke="#0284c7"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 5"
                                    />
                                </svg>
                                <div className="absolute top-1 right-2 -rotate-12 text-[#0284c7]">
                                    <FaPlane className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Consultation image card */}
                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-[22/11] w-full">
                            <Image
                                src={data.form.sideImage}
                                alt="Travel expert consulting clients"
                                fill
                                className="object-cover object-center"
                            />
                            {/* Dark gradient for badge */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                            {/* Quick assistance badge */}
                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#054553]/95 backdrop-blur-md rounded-xl p-3 sm:p-4 text-white flex items-center gap-3.5 shadow-xl border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                                    <FaPhoneAlt className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/80 font-normal leading-tight">
                                        Need Quick Assistance?
                                    </p>
                                    <p className="text-sm sm:text-base font-bold text-white tracking-wide mt-0.5">
                                        {data.cards.phone.number}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right form card */}
                    <div className="lg:col-span-6">
                        <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-lg shadow-sky-950/5 border border-gray-100">
                            {/* Form headline */}
                            <h3 className="font-extrabold text-2xl sm:text-3xl text-[#0f1d33] tracking-tight">
                                {data.form.title}
                            </h3>
                            {/* Form subtitle */}
                            <p className="text-gray-500 text-xs sm:text-sm mt-1.5 mb-6 font-normal">
                                {data.form.subtitle}
                            </p>

                            {submitted ? (
                                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                                    <FaCheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                                    <h4 className="font-bold text-lg text-emerald-900">
                                        Message Sent!
                                    </h4>
                                    <p className="text-emerald-700 text-sm mt-1">
                                        Thank you for getting in touch. We will reply to your email within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name inputs row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* First name input */}
                                        <div className="relative">
                                            <FaRegUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                placeholder="First Name*"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-800 placeholder:text-gray-400"
                                            />
                                        </div>

                                        {/* Last name input */}
                                        <div className="relative">
                                            <FaRegUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                            <input
                                                type="text"
                                                name="lastName"
                                                required
                                                placeholder="Last Name*"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-800 placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone input */}
                                    <div className="relative">
                                        <FaPhoneAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 pointer-events-none" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="Phone Number*"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-800 placeholder:text-gray-400"
                                        />
                                    </div>

                                    {/* Email input */}
                                    <div className="relative">
                                        <FaRegEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Email Address*"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-800 placeholder:text-gray-400"
                                        />
                                    </div>

                                    {/* Message textarea */}
                                    <div className="relative">
                                        <LuMessageSquare className="absolute left-3.5 top-3.5 text-gray-400 w-4 h-4 pointer-events-none" />
                                        <textarea
                                            name="message"
                                            rows={4}
                                            required
                                            placeholder="Write your message...*"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] transition-all bg-white text-gray-800 placeholder:text-gray-400 resize-none"
                                        />
                                    </div>

                                    {/* Submit button */}
                                    <motion.button
                                        type="submit"
                                        disabled={loading}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f15a24] to-[#f97316] text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-orange-500/35 hover:shadow-orange-500/50 transition-all cursor-pointer select-none"
                                    >
                                        <span>{loading ? "Sending..." : data.form.buttonText}</span>
                                        <FaArrowRight className="w-4 h-4 ml-1" />
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Map section container */}
                <div className="relative w-full h-[200px] sm:h-[240px] md:h-[300px] rounded-xl overflow-hidden border border-gray-100">
                    {/* Google map iframe */}
                    <iframe
                        title={data.map?.title || "Tourly Office Location"}
                        src={data.map?.embedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(`${data.cards.address.line1} ${data.cards.address.line2}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        className="w-full h-full border-0"
                        loading="lazy"
                    />

                    {/* Floating location card */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-5 flex items-start gap-3.5 max-w-xs sm:max-w-sm z-20">
                        <div className="w-10 h-10 rounded-full bg-[#f15a24] text-white flex items-center justify-center shrink-0 shadow-sm">
                            <FaMapMarkerAlt className="w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm sm:text-base text-[#0f1d33]">
                                {data.cards.address.title}
                            </h4>
                            <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-snug">
                                {data.cards.address.line1} <br />
                                {data.cards.address.line2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
