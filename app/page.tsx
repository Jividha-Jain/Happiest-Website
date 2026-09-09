"use client";

import React, { useCallback } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Discovery from "@/components/Discovery";
import WhatIsHappiest from "@/components/WhatIsHappiest";
import AppPromo from "@/components/AppPromo";
import Feed from "@/components/Feed";
import BuiltForEveryone from "@/components/BuiltForEveryone";
import ProductShowcase from "@/components/ProductShowcase";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const scrollTo = useCallback((id: string) => {
    if (id === "pricing") {
      router.push("/pricing");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [router]);

  return (
    <div className="relative select-none font-sans">
      {/* 1. Page Entrance Loader */}
      <Loader />

      {/* 2. Frosted sticky navigation header */}
      <Navbar scrollTo={scrollTo} />

      {/* -- Normal scrolling sections -- */}
      <main>
        <Hero scrollTo={scrollTo} />
        <WhatIsHappiest scrollTo={scrollTo} />
        <Discovery />
        <AppPromo />
        <Feed />
        <ProductShowcase scrollTo={scrollTo} />
        <BuiltForEveryone />
        <Faq />
        <Cta scrollTo={scrollTo} />
        <Footer scrollTo={scrollTo} />
      </main>


      {/* Mobile Bottom Tab Navigation */}
      <MobileBottomNav scrollTo={scrollTo} />
    </div>
  );
}
