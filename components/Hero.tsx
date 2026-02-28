"use client";

import React from "react";
import Image from "next/image";
import { Search, MapPin, Calendar } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 bg-[#060d19]">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Uttarakhand Mountains"
                    fill
                    className="object-cover opacity-60 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#060d19]/80 via-transparent to-[#060d19]/90"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center pt-20 md:pt-24">

                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
                    <span className="w-2 h-2 md:w-2 md:h-2 rounded-full bg-[#00cc99] animate-pulse"></span>
                    <span className="text-white text-xs md:text-sm font-medium tracking-wide">Premium Tour Packages in Uttarakhand</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    Find Best Service <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cc99] to-[#fe7601]">
                        at an Affordable Price!
                    </span>
                </h1>

                <p className="text-gray-300 text-base md:text-xl max-w-2xl mb-8 md:mb-12 px-2">
                    Discover the divine beauty of the Himalayas with our exclusive customizable tour packages designed for your perfect getaway.
                </p>

                {/* Search Bar - Premium Glassmorphism */}
                <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 p-3 lg:p-6 rounded-3xl lg:rounded-full shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4">

                        {/* Find Selection */}
                        <div className="flex-1 w-full bg-white rounded-2xl lg:rounded-l-full px-5 py-3 lg:px-6 lg:py-4 flex items-center gap-3">
                            <Search className="text-[#fe7601] w-5 h-5 flex-shrink-0" />
                            <div className="flex flex-col w-full text-left">
                                <label className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wider">Looking for?</label>
                                <select className="w-full bg-transparent text-[#060d19] text-sm lg:text-base font-medium focus:outline-none appearance-none cursor-pointer">
                                    <option>Tour Packages</option>
                                    <option>Hotels</option>
                                    <option>Cab / Taxi</option>
                                    <option>HomeStay</option>
                                </select>
                            </div>
                        </div>

                        {/* Location Selection */}
                        <div className="flex-1 w-full bg-white rounded-2xl py-3 px-5 lg:py-4 lg:px-6 flex items-center gap-3">
                            <MapPin className="text-[#00cc99] w-5 h-5 flex-shrink-0" />
                            <div className="flex flex-col w-full text-left">
                                <label className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wider">Location</label>
                                <select className="w-full bg-transparent text-[#060d19] text-sm lg:text-base font-medium focus:outline-none appearance-none cursor-pointer">
                                    <option>All Uttarakhand</option>
                                    <option>Char Dham</option>
                                    <option>Nainital</option>
                                    <option>Mussoorie</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full lg:w-auto px-10 py-4 lg:py-5 bg-gradient-to-r from-[#fe7601] to-[#e06800] text-white rounded-2xl lg:rounded-r-full font-bold tracking-wide hover:shadow-lg hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
                            <span>SEARCH</span>
                            <Search className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                    </div>
                </div>

                {/* Floating Stats */}
                <div className="hidden lg:flex items-center gap-12 mt-16">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">10K+</span>
                        <span className="text-sm font-medium text-gray-400 mt-1">Happy Travelers</span>
                    </div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">50+</span>
                        <span className="text-sm font-medium text-gray-400 mt-1">Tour Packages</span>
                    </div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">4.9/5</span>
                        <span className="text-sm font-medium text-gray-400 mt-1">Average Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
