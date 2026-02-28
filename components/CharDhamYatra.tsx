import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CalendarDays, Clock } from "lucide-react";

export default function CharDhamYatra() {
    const packages = [
        {
            title: "Char Dham Yatra",
            duration: "11 Days / 10 Nights",
            price: "₹18,500",
            image: "/images/char-dham.jpg",
            link: "/packages/4-dham-yatra",
            locations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
            featured: true,
        },
        {
            title: "Do Dham Yatra",
            duration: "6 Days / 5 Nights",
            price: "₹12,499",
            image: "/images/do-dham.jpg",
            link: "/packages/do-dham-yatra",
            locations: ["Kedarnath", "Badrinath"],
            featured: false,
        },
        {
            title: "Kedarnath Yatra",
            duration: "4 Days / 3 Nights",
            price: "₹8,999",
            image: "/images/kedarnath.jpg",
            link: "/packages/kedarnath-dham-yatra",
            locations: ["Kedarnath Temple", "Guptkashi"],
            featured: false,
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center space-x-2 bg-[#00cc99]/10 py-1.5 px-4 rounded-full text-[#00cc99] font-bold text-sm tracking-wide uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#00cc99]"></span>
                        <span>Spiritual Journey</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#060d19] mb-4 tracking-tight">
                        Char Dham <span className="text-[#fe7601]">Yatra!!!</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#fe7601] to-[#00cc99] rounded-full mb-6"></div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mix-blend-multiply px-2">
                        Discover the divine beauty of the Char Dham Yatra with our exclusive package booking! Experience an enlightening journey as you traverse through the divine locations, each of which has its own unique charm.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {packages.map((pkg, index) => (
                        <div key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100">

                            {/* Image Container */}
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>

                                {pkg.featured && (
                                    <div className="absolute top-4 left-4 bg-[#fe7601] text-white px-3 py-1 text-xs font-bold uppercase rounded-lg shadow-lg tracking-wide">
                                        Best Value
                                    </div>
                                )}


                                {/* Duration Overlay */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                    <Clock size={16} className="text-[#00cc99]" />
                                    {pkg.duration}
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#060d19] mb-3 group-hover:text-[#fe7601] transition-colors">{pkg.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {pkg.locations.map((loc, i) => (
                                            <span key={i} className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                                                <MapPin size={12} className="text-[#00cc99]" />
                                                {loc}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-gray-100 flex items-center justify-end">
                                    <Link href={pkg.link} className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 hover:bg-[#fe7601] text-gray-900 hover:text-white rounded-full transition-colors duration-300">
                                        <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <Link href="/packages" className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#060d19] text-[#060d19] rounded-full font-bold hover:bg-[#060d19] hover:text-white transition-colors group">
                        Explore All Char Dham Packages
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
