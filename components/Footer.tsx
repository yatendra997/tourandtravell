import React from "react";
import Link from "next/link";
import { Mountain, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
    const popularTours = [
        "Char Dham Yatra", "Do Dham Yatra", "Kedarnath Yatra",
        "Kumaon Darshan", "Nainital Tour Packages", "Ranikhet Almora Binsar",
        "Chopta Tungnath Tour", "Kedarkantha Tour Package", "Pilgrimage Tour", "Weekend Tour"
    ];

    const supportLinks = [
        "Home", "Plan Your Trip", "About Us", "How to Pay",
        "Terms & Conditions", "Privacy Policy", "Contact Us", "Refund Policy"
    ];

    return (
        <footer className="bg-[#060d19] text-gray-300 relative border-t-[8px] border-[#00cc99]">

            {/* Footer Top */}
            <div className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-10 md:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16">

                    {/* Column 1 - About */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-flex items-center gap-2 group mb-2">
                            <div className="bg-[#fe7601] p-2 rounded-lg group-hover:bg-[#00cc99] transition-colors">
                                <Mountain className="text-white w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-none tracking-tight">
                                    <span className="text-[#00cc99]">Tour</span>
                                    <span className="text-white">Travel</span>
                                    <span className="text-[#00cc99]">Tourism</span>
                                    <span className="text-sm font-semibold text-[#fe7601]">.Com</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed mix-blend-screen">
                            TourTravelTourism.Com gives you the option of fully personalizing your trips and holidays. Keeping in mind your preferences within your budget to provide you the most memorable experience.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#fe7601] hover:border-transparent transition-all"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#fe7601] hover:border-transparent transition-all"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#fe7601] hover:border-transparent transition-all"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#fe7601] hover:border-transparent transition-all"><Instagram size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2 - Contact */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-4">
                            Address & Contact
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-[10px] bg-white/5 flex items-center justify-center text-[#fe7601] flex-shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-sm text-gray-400 leading-relaxed">
                                    Haldwani | Haridwar | Rishikesh | Dehradun | Delhi
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-[10px] bg-white/5 flex items-center justify-center text-[#00cc99] flex-shrink-0">
                                    <Phone size={20} />
                                </div>
                                <a href="tel:+918006888388" className="text-sm text-gray-400 hover:text-white transition-colors leading-relaxed">
                                    +91-800-6888-388 <br />
                                    <span className="text-xs text-[#00cc99]">Available 24/7 on WhatsApp</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-[10px] bg-white/5 flex items-center justify-center text-blue-400 flex-shrink-0">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:info@tourtraveltourism.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    info@tourtraveltourism.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Popular Tours */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-4">
                            Most Popular
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {popularTours.slice(0, 6).map((tour, idx) => (
                                <li key={idx}>
                                    <Link href="/packages" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#00cc99] transition-colors">
                                        <ArrowRight size={14} className="text-gray-600 group-hover:text-[#fe7601] transition-colors" />
                                        {tour}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Support */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-4">
                            Support & Help
                        </h4>
                        <ul className="grid grid-cols-2 gap-3">
                            {supportLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href="#" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#fe7601] transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#00cc99] transition-colors"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/5 bg-black/40 py-6">
                <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left">
                        Copyrights © 2012-2028 <span className="text-[#00cc99] font-medium">TourTravelTourism.Com</span>. All Rights Reserved
                    </p>
                    <p className="text-xs text-gray-500">
                        Powered by <a href="https://www.khozlo.in/" target="_blank" rel="noopener" className="text-[#fe7601] font-bold hover:underline tracking-wider">KHOZLO</a>
                    </p>
                </div>
            </div>

        </footer>
    );
}
