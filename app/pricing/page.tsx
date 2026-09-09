"use client";

import React from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function PricingPage() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#03050f] text-white flex flex-col relative select-none font-sans pb-16 md:pb-0">
      {/* 1. Page Entrance Loader */}
      <Loader />

      {/* 2. Frosted sticky navigation header */}
      <Navbar scrollTo={scrollTo} />

      {/* 3. Main Pricing Container */}
      <main className="flex-1 flex flex-col pt-20 sm:pt-24">
        <Pricing scrollTo={scrollTo} />
      </main>

      {/* 4. Footer */}
      <Footer scrollTo={scrollTo} />

      {/* 5. Mobile Bottom Tab Navigation */}
      <MobileBottomNav scrollTo={scrollTo} />
    </div>
  );
}
