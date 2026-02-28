import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TravelServices() {
    const services = [
        { title: "Restaurants & Bars", image: "/images/svc-restaurants.jpg", link: "/restaurant" },
        { title: "Homestay", image: "/images/svc-homestay.jpg", link: "/homestay" },
        { title: "Cottages", image: "/images/svc-cottages.jpg", link: "/cottages" },
        { title: "Resorts", image: "/images/svc-resorts.jpg", link: "/resorts" },
        { title: "Camping", image: "/images/svc-camping.jpg", link: "/camping" },
        { title: "Hotels", image: "/images/svc-hotel.jpg", link: "/hotels" },
        { title: "Activities", image: "/images/svc-activities.jpg", link: "/" },
        { title: "Cab | Taxi", image: "/images/svc-taxi.jpg", link: "/car-rental" },
        { title: "Bike on Rent", image: "/images/svc-bike.jpg", link: "/bike-rental" }
    ];

    return (
        <section className="py-16 md:py-24 bg-zinc-50 overflow-hidden relative">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00cc99]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fe7601]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center space-x-2 bg-[#060d19]/5 py-1.5 px-4 rounded-full text-[#060d19] font-bold text-sm tracking-wide uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#060d19]"></span>
                        <span>Premium Facilities</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#060d19] mb-4 tracking-tight">
                        Best Travel <span className="text-[#fe7601]">Services</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#fe7601] to-[#00cc99] rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed px-2">
                        Find the Best Stay, Cab, Restaurants, and Bike Rental Services in Uttarakhand! With our specialized service experts, you can explore the beautiful landscape with ease.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-shadow duration-300 h-[220px] sm:h-[260px] flex items-end"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060d19]/80 via-[#060d19]/30 to-transparent"></div>
                            </div>

                            {/* Title Overlay */}
                            <div className="relative z-10 w-full p-4 sm:p-5">
                                <h3 className="text-base sm:text-xl font-bold text-white">
                                    {service.title}
                                </h3>
                                <div className="w-10 h-1 bg-[#fe7601] rounded-full mt-2"></div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
