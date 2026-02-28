"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, Phone, Mail, Mountain, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: "Hotel", href: "/hotels" },
    { name: "HomeStay", href: "/homestay" },
    { name: "Cottages", href: "/cottages" },
    { name: "Camping", href: "/camping" },
    { name: "Trekking", href: "/uttarakhand/trekking" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2 lg:py-3" : "bg-white py-3 lg:py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#060d19] p-1.5 lg:p-2 rounded-lg group-hover:bg-[#fe7601] transition-colors">
            <Mountain className="text-white w-5 h-5 lg:w-6 lg:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg lg:text-xl font-bold leading-none tracking-tight">
              <span className="text-[#00cc99]">Tour</span>
              <span className="text-[#060d19]">Travel</span>
              <span className="text-[#00cc99]">Tourism</span>
              <span className="text-xs lg:text-sm font-semibold text-[#fe7601]">.Com</span>
            </span>
            <span className="text-[9px] lg:text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-0.5">Explore the Unseen</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#060d19] font-medium hover:text-[#fe7601] transition-colors text-sm"
            >
              {item.name}
            </Link>
          ))}

          {/* Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-[#060d19] font-medium hover:text-[#fe7601] transition-colors text-sm py-2">
              Packages <ChevronDown className="w-4 h-4" />
            </button>

            {/* Mega Menu Content */}
            {isMegaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl rounded-2xl p-8 grid grid-cols-3 gap-8 mt-2 border border-gray-100">
                <div>
                  <h3 className="text-lg font-bold text-[#060d19] mb-3 border-b pb-2">Uttarakhand Tour Packages</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    If you are planning to visit Uttarakhand then we have multiple options for your travel plan which suits your pocket.
                  </p>
                  <Link href="/all-package" className="text-[#fe7601] font-semibold text-sm hover:underline">View All Packages →</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-[#060d19] mb-3 border-b pb-2">Popular Tours</h3>
                  {[
                    "Char Dham Yatra 2024",
                    "Chopta Tour Packages",
                    "KedarKantha Tour Package",
                    "Manali Tour Package"
                  ].map((pkg) => (
                    <Link key={pkg} href="#" className="text-sm text-gray-600 hover:text-[#fe7601] transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00cc99] rounded-full"></span>
                      {pkg}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-[#060d19] mb-3 border-b pb-2">Destinations</h3>
                  {[
                    "Nainital Tour Package",
                    "Mukteshwar Tour Package",
                    "Munsiyari Tour Package",
                    "Adventure Tour Packages"
                  ].map((pkg) => (
                    <Link key={pkg} href="#" className="text-sm text-gray-600 hover:text-[#fe7601] transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#fe7601] rounded-full"></span>
                      {pkg}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/plan-your-trip" className="text-[#060d19] font-medium hover:text-[#fe7601] transition-colors text-sm">
            Plan Your Trip
          </Link>
          <Link href="/register" className="text-[#060d19] font-medium hover:text-[#fe7601] transition-colors text-sm">
            Register
          </Link>
          <Link href="/contact" className="text-[#060d19] font-medium hover:text-[#fe7601] transition-colors text-sm">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+918006888388" className="flex items-center gap-2 text-[#060d19] font-semibold hover:text-[#fe7601] transition-colors">
            <div className="bg-gray-100 p-2 rounded-full">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm">+91-800-6888-388</span>
          </a>
          <Link
            href="/plan-your-trip"
            className="bg-[#fe7601] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#e06800] transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile: Phone + Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="tel:+918006888388"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#060d19] hover:bg-[#fe7601] hover:text-white transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 bg-[#060d19] rounded-xl flex items-center justify-center text-white hover:bg-[#fe7601] transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="text-lg font-bold">
            <span className="text-[#00cc99]">Tour</span>
            <span className="text-[#060d19]">Travel</span>
            <span className="text-[#00cc99]">Tourism</span>
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <nav className="flex flex-col p-5 gap-1 overflow-y-auto max-h-[calc(100vh-180px)]">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#060d19] font-medium hover:text-[#fe7601] hover:bg-orange-50 transition-colors text-base py-3 px-4 rounded-xl"
            >
              {item.name}
            </Link>
          ))}

          {/* Packages Section */}
          <div className="border-t border-gray-100 mt-2 pt-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 py-2 block">Packages</span>
            {[
              "Char Dham Yatra 2024",
              "Chopta Tour Packages",
              "KedarKantha Tour Package",
              "Manali Tour Package"
            ].map((pkg) => (
              <Link
                key={pkg}
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-gray-600 hover:text-[#fe7601] hover:bg-orange-50 transition-colors py-2.5 px-4 rounded-xl flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-[#00cc99] rounded-full flex-shrink-0"></span>
                {pkg}
              </Link>
            ))}
          </div>

          {/* Other Links */}
          <div className="border-t border-gray-100 mt-2 pt-2">
            <Link href="/plan-your-trip" onClick={() => setIsMobileMenuOpen(false)} className="text-[#060d19] font-medium hover:text-[#fe7601] hover:bg-orange-50 transition-colors text-base py-3 px-4 rounded-xl block">
              Plan Your Trip
            </Link>
            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="text-[#060d19] font-medium hover:text-[#fe7601] hover:bg-orange-50 transition-colors text-base py-3 px-4 rounded-xl block">
              Register
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[#060d19] font-medium hover:text-[#fe7601] hover:bg-orange-50 transition-colors text-base py-3 px-4 rounded-xl block">
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Footer CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100 bg-white">
          <Link
            href="/plan-your-trip"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center bg-[#fe7601] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#e06800] transition-colors shadow-lg shadow-orange-500/30"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
