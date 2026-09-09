"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  Star,
  Dumbbell,
  Trophy,
  Music,
  Flower2,
  Coffee,
  Search,
  Calendar,
  Users,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BarChart3
} from "lucide-react";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  desc: string;
  image: string;
}

const CATEGORIES: Category[] = [
  {
    id: "all",
    name: "All Businesses",
    icon: LayoutGrid,
    tag: "FOR ALL CREATORS & BUSINESSES",
    title: "Turn your passion into a thriving global business",
    desc: "Get discovered, offer consultations, manage bookings, and build a loyal community — all under $20/month.",
    image: "/images/categories/all.jpg",
  },
  {
    id: "fitness",
    name: "Gym & Fitness",
    icon: Dumbbell,
    tag: "FOR FITNESS TRAINERS",
    title: "Run classes, personal sessions & member clubs",
    desc: "Streamline workout bookings, sell training plans, and keep members motivated every day.",
    image: "/images/categories/fitness.jpg",
  },
  {
    id: "sports",
    name: "Sports & Clubs",
    icon: Trophy,
    tag: "FOR SPORTS CLUBS",
    title: "Unite players & manage tournaments effortlessly",
    desc: "Collect dues, schedule matches, organize leagues, and build a vibrant sports community.",
    image: "/images/categories/sports.jpg",
  },
  {
    id: "music",
    name: "Music & Dance",
    icon: Music,
    tag: "FOR MUSIC & DANCE ACADEMIES",
    title: "Share your rhythm & teach students worldwide",
    desc: "Host live practice sessions, sell video courses, and book 1-on-1 private music lessons.",
    image: "/images/categories/music.jpg",
  },
  {
    id: "yoga",
    name: "Yoga & Wellness",
    icon: Flower2,
    tag: "FOR YOGA & WELLNESS GUIDES",
    title: "Nurture mind & body with seamless bookings",
    desc: "Host meditation retreats, daily yoga flows, and 1:1 healing sessions with automated reminders.",
    image: "/images/categories/yoga.jpg",
  },
  {
    id: "cafes",
    name: "Cafes & Restaurants",
    icon: Coffee,
    tag: "FOR CAFES & RESTAURANTS",
    title: "Host food events, workshops & loyalty clubs",
    desc: "Take table reservations, host coffee tasting masterclasses, and reward repeat coffee lovers.",
    image: "/images/categories/cafes.jpg",
  },
  {
    id: "astrology",
    name: "Astrology",
    icon: Star,
    tag: "FOR ASTROLOGERS",
    title: "Turn your knowledge into a growing business",
    desc: "Get discovered, offer consultations, manage bookings, and build a loyal community — all under $20.",
    image: "/images/categories/astrology.jpg",
  }
];

export default function BuiltForEveryone() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeCategory = CATEGORIES[activeIdx];

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = direction === "left" ? -260 : 260;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="grow-together"
      className="relative py-20 md:py-28 font-sans select-none overflow-hidden bg-[#070914] text-white"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pt-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight font-display">
            Your Business. <span className="bg-gradient-to-r from-[#7C5CFF] via-[#a78bfa] to-[#c4b5fd] bg-clip-text text-transparent">Your Community.</span> Your Growth.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            One simple platform to help you reach customers and grow with confidence.
          </p>
        </div>
        {/* ── CATEGORY NAVIGATION TABS (Matches Image 1) ── */}
        <div className="flex items-center justify-between gap-2 max-w-5xl mx-auto px-2">
          <button
            onClick={() => scrollTabs("left")}
            className="w-8 h-8 rounded-full bg-[#12142b] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer z-10"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={tabsRef}
            className="flex items-center overflow-x-auto no-scrollbar py-2 px-3 scroll-smooth w-full touch-pan-x"
          >
            <div className="flex items-center gap-2 min-w-max mx-auto">
              {CATEGORIES.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#2E1065] text-white shadow-[0_0_25px_rgba(46,16,101,0.45)] border border-purple-700/60"
                        : "bg-[#111328] text-slate-300 border border-white/[0.08] hover:text-white hover:bg-[#191b38]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => scrollTabs("right")}
            className="w-8 h-8 rounded-full bg-[#12142b] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer z-10"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── 2-COLUMN FEATURE GRID ── */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">

          {/* Left Feature Showcase Card (Matches Image 1) */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[28px] border border-purple-100 p-6 sm:p-7 flex flex-col md:flex-row items-stretch gap-6 lg:gap-8 text-left shadow-[0_8px_40px_rgba(100,60,220,0.10)] relative overflow-visible h-full"
              >
                {/* Text Left Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-start py-1 sm:py-2 gap-5 z-10">
                  <div className="space-y-3 sm:space-y-4">
                    <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-[#2E1065] uppercase font-display block">
                      {activeCategory.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#2E1065] leading-[1.2] font-display">
                      {activeCategory.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                      {activeCategory.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button className="bg-gradient-to-r from-[#2E1065] via-[#3B137E] to-[#4C1D95] hover:from-[#1e0a45] hover:to-[#3B137E] text-white font-extrabold text-xs px-6 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-[0_6px_25px_rgba(46,16,101,0.4)] hover:scale-[1.02]">
                      <span>Start growing</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Image Right Column with Border/Stroke & Floating White Cards */}
                <div className="w-full md:w-1/2 shrink-0 flex items-center justify-center">
                  
                  {/* Inner tight wrapper — cards position relative to image frame only */}
                  <div className="relative w-full">

                    {/* Image Frame with Crisp Border/Stroke */}
                    <div className="relative w-full h-[320px] sm:h-[350px] rounded-[22px] overflow-hidden border-2 border-purple-100 shadow-xl">
                      <Image
                        src={activeCategory.image}
                        alt={activeCategory.title}
                        fill
                        className="object-cover object-top"
                        unoptimized
                      />
                    </div>

                    {/* 1. Top-Left Member Stats White Card — straddles the border */}
                    <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white backdrop-blur-md border border-white/80 rounded-2xl p-3 sm:p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between z-30 min-w-[135px] sm:min-w-[150px] text-slate-900">
                      <div className="flex items-center justify-between gap-2.5">
                        <div className="w-6.5 h-6.5 rounded-lg bg-purple-100 text-[#7C5CFF] flex items-center justify-center shrink-0">
                          <BarChart3 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                          ↑ 85%
                        </span>
                      </div>
                      <div className="mt-2">
                        <p className="text-xl sm:text-2xl font-black text-slate-900 leading-none font-display tracking-tight">850+</p>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">Active Members</p>
                      </div>
                    </div>

                    {/* 2. Bottom-Right New Booking White Card — straddles the border */}
                    <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-white backdrop-blur-md border border-white/80 rounded-2xl p-3 sm:p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between z-30 min-w-[160px] sm:min-w-[180px] text-slate-900">
                      <div className="flex items-center gap-2">
                        <div className="w-7.5 h-7.5 rounded-xl bg-purple-100 text-[#7C5CFF] flex items-center justify-center shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-extrabold text-slate-900 leading-tight font-display">New Booking</p>
                          <p className="text-[9.5px] sm:text-[10px] text-slate-500 font-medium mt-0.5">Yoga Session &bull; 10:00 AM</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="w-full bg-gradient-to-r from-[#6D4AFF] to-[#7C5CFF] text-white text-[11px] font-extrabold py-1 px-2.5 rounded-xl shadow-md text-center block tracking-wide">
                          Confirmed
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Feature Column: Everything You Need to Grow */}
          <div className="lg:col-span-5 bg-white rounded-[28px] border border-purple-100 p-6 sm:p-7 text-left flex flex-col justify-between shadow-[0_8px_40px_rgba(100,60,220,0.10)] space-y-6 h-full relative overflow-hidden">
            
            {/* Header Block */}
            <div className="space-y-2">
              <span className="text-[10px] font-black tracking-widest text-[#2E1065] uppercase font-display block">
                BUILT TO MOVE WITH YOU
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#2E1065] font-display leading-tight">
                Everything you need to grow
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                All-in-one suite for modern creators and businesses.
              </p>
            </div>

            {/* Feature Cards Stack (Clean, Natural Design) */}
            <div className="space-y-3">
              
              {/* Feature Item 1: Get Discovered */}
              <div className="bg-purple-50/60 border border-purple-100 hover:border-purple-200 hover:bg-purple-50 rounded-2xl p-4 flex items-center gap-4 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200/60 text-[#2E1065] flex items-center justify-center shrink-0">
                  <Search className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2E1065] font-display leading-tight">Get Discovered</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">Be visible to local and global customers.</p>
                </div>
              </div>

              {/* Feature Item 2: Take Bookings */}
              <div className="bg-purple-50/60 border border-purple-100 hover:border-purple-200 hover:bg-purple-50 rounded-2xl p-4 flex items-center gap-4 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200/60 text-[#2E1065] flex items-center justify-center shrink-0">
                  <Calendar className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2E1065] font-display leading-tight">Take Bookings</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">Automate bookings and payments easily.</p>
                </div>
              </div>

              {/* Feature Item 3: Build Your Community */}
              <div className="bg-purple-50/60 border border-purple-100 hover:border-purple-200 hover:bg-purple-50 rounded-2xl p-4 flex items-center gap-4 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200/60 text-[#2E1065] flex items-center justify-center shrink-0">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2E1065] font-display leading-tight">Build Your Community</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">Engage and retain your audience.</p>
                </div>
              </div>

              {/* Feature Item 4: Grow Your Revenue */}
              <div className="bg-purple-50/60 border border-purple-100 hover:border-purple-200 hover:bg-purple-50 rounded-2xl p-4 flex items-center gap-4 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200/60 text-[#2E1065] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2E1065] font-display leading-tight">Grow Your Revenue</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">Turn your passion into sustainable income.</p>
                </div>
              </div>

            </div>


          </div>

        </div>

      </div>
    </section>
  );
}
