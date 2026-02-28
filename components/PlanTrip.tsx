"use client";

import React from "react";
import Image from "next/image";
import { Send, Map, Users, Calendar, Wallet } from "lucide-react";

export default function PlanTrip() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">

            {/* Background with overlay */}
            <div className="absolute inset-0 z-0 bg-[#060d19]">
                <Image
                    src="/images/plan-trip-bg.png"
                    alt="Uttarakhand Scenery"
                    fill
                    className="object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#060d19] via-[#060d19]/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="text-left text-white max-w-xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#fe7601] animate-pulse"></span>
                            <span className="text-white text-sm font-medium tracking-wide">Custom Tours Available</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight">
                            Plan Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cc99] to-[#fe7601]">Perfect Trip!</span>
                        </h2>

                        <div className="w-24 h-1.5 bg-[#fe7601] rounded-full mb-8"></div>

                        <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-8 md:mb-10">
                            Book your next trip with our experts and get the best out of your vacation! With our expert tour planners, you can rest assured that you'll receive the highest quality of service and have the peace of mind.
                        </p>

                        {/* Offer Banners */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex bg-gradient-to-br from-[#fe7601] to-[#d45f00] p-6 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl border border-white/10">
                                <div className="pr-6 border-r border-white/20">
                                    <div className="text-3xl font-black text-white leading-none">25%</div>
                                    <div className="text-sm font-bold text-orange-200 mt-1">OFF</div>
                                </div>
                                <div className="pl-6 flex flex-col justify-center">
                                    <div className="text-white font-bold mb-1">Kumaon Darshan</div>
                                    <div className="text-xs text-white/80">Valid until 15th Mar</div>
                                </div>
                            </div>

                            <div className="flex bg-gradient-to-br from-[#00cc99] to-[#009973] p-6 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl border border-white/10">
                                <div className="pr-6 border-r border-white/20">
                                    <div className="text-3xl font-black text-white leading-none">30%</div>
                                    <div className="text-sm font-bold text-teal-200 mt-1">OFF</div>
                                </div>
                                <div className="pl-6 flex flex-col justify-center">
                                    <div className="text-white font-bold mb-1">Garhwal Packages</div>
                                    <div className="text-xs text-white/80">Valid until 15th Mar</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form - Glassmorphism */}
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-2xl relative">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 border-b border-white/10 pb-4">
                            Send an Enquiry
                        </h3>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>

                            <div className="space-y-2 col-span-1 md:col-span-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Destination Target</label>
                                <div className="relative">
                                    <Map className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input type="text" placeholder="Where do you want to go?" className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-12 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-[#fe7601] transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Arrival Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input type="date" className="w-full bg-white/5 border border-white/10 text-gray-300 placeholder-gray-500 rounded-xl px-10 md:px-12 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-[#fe7601] transition-all [color-scheme:dark]" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Departure Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input type="date" className="w-full bg-white/5 border border-white/10 text-gray-300 placeholder-gray-500 rounded-xl px-10 md:px-12 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-[#fe7601] transition-all [color-scheme:dark]" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Number of People</label>
                                <div className="relative flex gap-4">
                                    <div className="relative flex-1">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input type="number" placeholder="Adults" min="1" className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-10 md:px-12 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-[#fe7601] transition-all" />
                                    </div>
                                    <div className="relative flex-1">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input type="number" placeholder="Children" min="0" className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-10 md:px-12 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-[#fe7601] transition-all" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Approximate Budget</label>
                                <div className="relative">
                                    <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <select defaultValue="" className="w-full bg-transparent border border-white/10 bg-black/20 text-gray-300 rounded-xl px-12 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-[#fe7601] transition-all appearance-none cursor-pointer">
                                        <option value="" disabled>Select Budget Profile</option>
                                        <option value="economy" className="text-black">Economy (Standard)</option>
                                        <option value="premium" className="text-black">Premium (3/4 Star)</option>
                                        <option value="luxury" className="text-black">Luxury (5 Star)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-2 pt-2 md:pt-4">
                                <button className="w-full group bg-gradient-to-r from-[#fe7601] to-[#e06800] hover:shadow-lg hover:shadow-[#fe7601]/40 text-white font-bold text-base md:text-lg rounded-xl py-4 md:py-5 px-8 flex justify-center items-center gap-3 transition-shadow">
                                    <span>SUBMIT REQUEST</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
