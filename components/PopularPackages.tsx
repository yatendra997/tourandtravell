import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PopularPackages() {
    const packages = [
        { title: "Kumaon Darshan Tour Packages", image: "/images/kumaon.jpg", link: "/packages/kumaon-darshan.html" },
        { title: "Vrindavan Tour Packages", image: "/images/vrindavan.jpg", link: "/plan-your-trip/" },
        { title: "Kainchi Dham Tour", image: "/images/kainchi-dham.jpg", link: "/plan-your-trip/" },
        { title: "Vaishno Devi Tour", image: "/images/vaishno-devi.jpg", link: "/plan-your-trip/" },
        { title: "Weekend Tour Packages", image: "/images/weekend.jpg", link: "/plan-your-trip/" },
        { title: "Adventure Tour Packages", image: "/images/adventure.jpg", link: "/packages/adventure-tour-packages.html" },
        { title: "Family Tour Package", image: "/images/family.jpg", link: "/packages/family-tour-packages.html" },
        { title: "Lake Tour Package", image: "/images/lake.jpg", link: "/plan-your-trip/" },
        { title: "Ranikhet Tour Package", image: "/images/ranikhet.jpg", link: "/plan-your-trip/" },
        { title: "Kashmir Tour Package", image: "/images/kashmir.jpg", link: "/plan-your-trip/" },
        { title: "Mussoorie Tour Package", image: "/images/mussoorie.jpg", link: "/plan-your-trip/" },
        { title: "Chopta Tungnath Tour", image: "/images/chopta.jpg", link: "/packages/chopta-tungnath-chandrashila-tour-package.html" },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center space-x-2 bg-[#fe7601]/10 py-1.5 px-4 rounded-full text-[#fe7601] font-bold text-sm tracking-wide uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#fe7601]"></span>
                        <span>Discover The Best</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#060d19] mb-4 tracking-tight">
                        Popular Tour <span className="text-[#00cc99]">Packages</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#00cc99] to-[#fe7601] rounded-full mb-6"></div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed px-2">
                        Be enthralled by the picturesque valleys of Kumaon & Garhwal regions. We offer Group Tour & Customized tour Packages including all transportation, stay & meals.
                    </p>
                    <a href="tel:+919084164754" className="mt-6 inline-flex items-center gap-2 text-white bg-gradient-to-r from-[#060d19] to-[#2a3040] hover:from-[#fe7601] hover:to-[#e06800] px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-colors shadow-xl shadow-[#060d19]/20 group">
                        CALL NOW FOR BEST DEAL !!!
                    </a>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-[320px] bg-white border border-gray-100 flex flex-col justify-end p-6">

                            {/* Background Image Container */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060d19]/90 via-[#060d19]/40 to-transparent"></div>
                            </div>

                            {/* Torn Paper Effect - SVG Shape Divider */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto fill-current">
                                    <path d="M0,160L48,154.7C96,149,192,139,288,144C384,149,480,171,576,170.7C672,171,768,149,864,154.7C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                </svg>
                            </div>

                            {/* Content Box (Text Overlay) */}
                            <div className="relative z-20 group-hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    {pkg.title}
                                </h3>
                                <div className="h-[2px] w-12 bg-[#fe7601] mb-4"></div>

                                <Link href={pkg.link} className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-[#fe7601] text-white rounded-full p-2">
                                        <ArrowRight size={16} />
                                    </span>
                                    View Details
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
