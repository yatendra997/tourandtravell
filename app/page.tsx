import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CharDhamYatra from "@/components/CharDhamYatra";
import PopularPackages from "@/components/PopularPackages";
import HotelBooking from "@/components/HotelBooking";
import TravelServices from "@/components/TravelServices";
import PlanTrip from "@/components/PlanTrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#fe7601] selection:text-white">
      <Header />
      <Hero />
      <CharDhamYatra />
      <PopularPackages />
      <HotelBooking />
      <TravelServices />
      <PlanTrip />
      <Footer />
    </main>
  );
}
