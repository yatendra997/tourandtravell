import React from "react";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";

export default function HotelBooking() {
    const hotels = [
        {
            title: "Hotels in Kedarnath",
            locations: "Guptkashi, Phata, Sonprayag, Kedarnath",
            image: "/images/hotel-1.jpg",
            whatsapp: "https://api.whatsapp.com/send?phone=+918006888388&text=Hi,%20I%20am%20visiting%20hotels%20in%20Kedarnath"
        },
        {
            title: "Hotels in Char Dham",
            locations: "Yamunotri, Gangotri, Kedarnath, Badrinath",
            image: "/images/hotel-2.jpg",
            whatsapp: "https://api.whatsapp.com/send?phone=+918006888388&text=Hi,%20I%20am%20visiting%20hotels%20in%20CharDhamYatra"
        },
        {
            title: "Hotel in Badrinath",
            locations: "Chamoli, Pipalkoti, Joshimath, Badrinath",
            image: "/images/hotel-3.jpg",
            whatsapp: "https://api.whatsapp.com/send?phone=+918006888388&text=Hi,%20I%20am%20visiting%20hotels%20in%20Badrinath"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header & Description */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#060d19] mb-4 tracking-tight">
                            Book Your <span className="text-[#00cc99]">Hotel!</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-[#00cc99] rounded-full mb-6"></div>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            We guarantee to provide you with the best prices available and the greatest selection of hotels anywhere in Uttarakhand.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="/hotels" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00cc99] text-white rounded-full font-bold shadow-lg shadow-[#00cc99]/30 hover:bg-[#00a37a] transition-colors duration-300">
                            View All Packages
                        </a>
                    </div>
                </div>

                {/* Hotels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500">

                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={hotel.image}
                                    alt={hotel.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                                {/* Rating Badge Overlay */}
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-bold text-[#060d19]">4.9</span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-[#060d19] mb-3 group-hover:text-[#00cc99] transition-colors">{hotel.title}</h3>

                                <div className="flex items-start gap-2 mb-6">
                                    <MapPin className="w-5 h-5 text-[#00cc99] mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-gray-500 leading-relaxed">{hotel.locations}</p>
                                </div>

                                <a
                                    href={hotel.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center px-6 py-3 border-2 border-gray-200 text-[#060d19] font-bold rounded-xl hover:bg-[#00cc99] hover:border-[#00cc99] hover:text-white transition-all duration-300"
                                >
                                    View Detail
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
