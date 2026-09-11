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
  Sparkles,
  Palette,
  Shirt,
  BookOpen,
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
    id: "ai",
    name: "AI & Tech",
    icon: Sparkles,
    tag: "FOR AI CREATORS & TECH EXPERTS",
    title: "Host workshops, mentorship & build tech communities",
    desc: "Sell AI prompt bundles, host coding bootcamps, schedule 1:1 tech mentorship, and grow your subscriber base.",
    image: "/images/categories/ai.jpg",
  },
  {
    id: "arts",
    name: "Art & Design",
    icon: Palette,
    tag: "FOR ARTISTS & DESIGNERS",
    title: "Showcase creative portfolios & teach art masterclasses",
    desc: "Sell custom artwork, host live painting sessions, offer design portfolio reviews, and build a patron community.",
    image: "/images/categories/arts.jpg",
  },
  {
    id: "fashion",
    name: "Fashion & Apparel",
    icon: Shirt,
    tag: "FOR FASHION CREATORS & APPAREL",
    title: "Launch style drops, styling sessions & boutique clubs",
    desc: "Sell exclusive apparel collections, book personal styling consultations, and host VIP launch events.",
    image: "/images/categories/fashion.jpg",
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
  },
  {
    id: "education",
    name: "Education & Coaching",
    icon: BookOpen,
    tag: "FOR EDUCATORS & COACHES",
    title: "Conduct masterclasses & 1-on-1 coaching cohorts",
    desc: "Host interactive cohorts, distribute digital workbooks, schedule office hours, and monetize your expertise.",
    image: "/images/categories/education.jpg",
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
          <span className="inline-block text-[11.5px] font-extrabold tracking-widest text-[#a78bfa] uppercase">
            BUILT FOR YOUR WORLD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight font-display">
            For Creators, Clubs, Coaches<br className="hidden sm:inline" /> Communities & Businesses
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            No matter what you do, Happiest.team helps you bring people together, create meaningful experiences and grow your business.
          </p>
        </div>
        {/* ── CATEGORY NAVIGATION TABS ── */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-2 max-w-5xl mx-auto px-1 sm:px-2">
          <button
            onClick={() => scrollTabs("left")}
            className="hidden sm:flex w-8 h-8 rounded-full bg-[#12152e] items-center justify-center text-slate-400 hover:text-white hover:bg-[#1a1e40] transition-colors shrink-0 cursor-pointer z-10"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={tabsRef}
            data-lenis-prevent
            className="flex items-center overflow-x-auto no-scrollbar py-2 px-1 sm:px-3 scroll-smooth w-full touch-pan-x"
          >
            <div className="flex items-center gap-2 min-w-max mx-auto">
              {CATEGORIES.map((cat, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#6D4AFF] text-white shadow-[0_4px_20px_rgba(109,74,255,0.4)]"
                        : "bg-[#12152e] text-slate-400 hover:text-white hover:bg-[#1a1e40]"
                    }`}
                  >
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => scrollTabs("right")}
            className="hidden sm:flex w-8 h-8 rounded-full bg-[#12152e] items-center justify-center text-slate-400 hover:text-white hover:bg-[#1a1e40] transition-colors shrink-0 cursor-pointer z-10"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── 2-COLUMN FEATURE GRID ── */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 items-stretch max-w-6xl mx-auto">

          {/* Left Feature Showcase Card */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[24px] sm:rounded-[28px] border border-purple-100 p-5 sm:p-7 flex flex-col justify-between gap-5 sm:gap-6 text-left shadow-[0_8px_40px_rgba(100,60,220,0.10)] relative overflow-visible h-full"
              >
                {/* ── FULL WIDESCREEN LAYOUT FOR ALL CATEGORIES ── */}
                <div className="flex flex-col gap-4 sm:gap-6 w-full h-full justify-between">
                  {/* Top Row: Title, Tag & CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
                    <div className="space-y-1 sm:space-y-1.5 max-w-lg">
                      <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-[#6D4AFF] uppercase font-display block">
                        {activeCategory.tag}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-black text-[#2E1065] leading-snug sm:leading-tight font-display">
                        {activeCategory.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                        {activeCategory.desc}
                      </p>
                    </div>

                    <div className="shrink-0 self-start sm:self-center pt-1 sm:pt-0">
                      <button className="bg-gradient-to-r from-[#2E1065] via-[#3B137E] to-[#4C1D95] hover:from-[#1e0a45] hover:to-[#3B137E] text-white font-extrabold text-xs px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-[0_6px_20px_rgba(46,16,101,0.35)] hover:scale-[1.02]">
                        <span>Start growing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom: Full 16:9 Image Showcase with Clean Badges */}
                  <div className="relative w-full overflow-visible mt-1 sm:mt-0">
                    {/* Inner Image Frame */}
                    <div className="relative w-full aspect-[16/9] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-purple-100/80 shadow-md sm:shadow-xl bg-slate-900">
                      <Image
                        src={activeCategory.image}
                        alt={activeCategory.title}
                        fill
                        className="object-cover object-center"
                        unoptimized
                        priority
                      />
                    </div>

                    {/* Top-Left Member Stats White Card */}
                    <div className="absolute top-2 left-2 sm:-top-5 sm:-left-4 bg-white/95 sm:bg-white backdrop-blur-md border border-white/90 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_8px_25px_rgba(0,0,0,0.18)] sm:shadow-[0_15px_35px_rgba(0,0,0,0.25)] flex items-center gap-2 sm:gap-3 z-20 text-slate-900">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-100 text-[#7C5CFF] flex items-center justify-center shrink-0">
                        <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <p className="text-xs sm:text-base font-black text-slate-900 leading-none font-display">850+</p>
                          <span className="text-[8.5px] sm:text-[10px] font-extrabold text-emerald-700 bg-emerald-100 border border-emerald-200 px-1.5 py-0.2 rounded-full">
                            ↑ 85%
                          </span>
                        </div>
                        <p className="text-[8.5px] sm:text-[10px] text-slate-500 font-medium mt-0.5">Active Members</p>
                      </div>
                    </div>

                    {/* Bottom-Right New Booking White Card */}
                    <div className="absolute bottom-2 right-2 sm:-bottom-5 sm:-right-4 bg-white/95 sm:bg-white backdrop-blur-md border border-white/90 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_8px_25px_rgba(0,0,0,0.18)] sm:shadow-[0_15px_35px_rgba(0,0,0,0.25)] flex items-center gap-2 sm:gap-3 z-20 text-slate-900">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-100 text-[#7C5CFF] flex items-center justify-center shrink-0">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-extrabold text-slate-900 leading-tight font-display">New Booking</p>
                        <p className="text-[8.5px] sm:text-[10px] text-slate-500 font-medium truncate max-w-[110px] sm:max-w-none">
                          {activeCategory.id === "ai"
                            ? "AI Workshop • 2:00 PM"
                            : activeCategory.id === "arts"
                            ? "Design Review • 4:30 PM"
                            : activeCategory.id === "fashion"
                            ? "Style Consultation • 1:00 PM"
                            : activeCategory.id === "education"
                            ? "1:1 Coaching • 11:00 AM"
                            : activeCategory.id === "astrology"
                            ? "Birth Chart • 3:00 PM"
                            : activeCategory.id === "cafes"
                            ? "Table Reservation • 6:30 PM"
                            : activeCategory.id === "yoga"
                            ? "Meditation Flow • 8:00 AM"
                            : activeCategory.id === "music"
                            ? "Guitar Session • 4:00 PM"
                            : activeCategory.id === "sports"
                            ? "Match Practice • 5:00 PM"
                            : activeCategory.id === "fitness"
                            ? "HIIT Session • 7:00 AM"
                            : "Live Masterclass • 10:00 AM"}
                        </p>
                      </div>
                      <span className="bg-gradient-to-r from-[#6D4AFF] to-[#7C5CFF] text-white text-[9px] sm:text-[10.5px] font-extrabold py-0.5 sm:py-1 px-2 sm:px-2.5 rounded-lg shadow-xs ml-0.5">
                        Confirmed
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Feature Column: Everything You Need to Grow */}
          <div className="lg:col-span-5 bg-white rounded-[24px] sm:rounded-[28px] border border-purple-100 p-5 sm:p-7 text-left flex flex-col justify-between shadow-[0_8px_40px_rgba(100,60,220,0.10)] space-y-5 sm:space-y-6 h-full relative overflow-hidden">
            
            {/* Header Block */}
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] font-black tracking-widest text-[#6D4AFF] uppercase font-display block">
                BUILT TO MOVE WITH YOU
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-[#2E1065] font-display leading-tight">
                Everything you need to grow
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                All-in-one suite for modern creators and businesses.
              </p>
            </div>

            {/* Feature Cards Stack */}
            <div className="space-y-2.5 sm:space-y-3">
              
              {/* Feature Item 1: Get Discovered */}
              <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 border border-purple-200/60 text-[#2E1065] flex items-center justify-center shrink-0">
                  <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2E1065] font-display leading-tight">Get Discovered</h4>
                  <p className="text-[11px] sm:text-sm text-slate-500 font-normal mt-0.5">Be visible to local and global customers.</p>
                </div>
              </div>

              {/* Feature Item 2: Take Bookings */}
              <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 border border-purple-200/60 text-[#2E1065] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2E1065] font-display leading-tight">Take Bookings</h4>
                  <p className="text-[11px] sm:text-sm text-slate-500 font-normal mt-0.5">Automate bookings and payments easily.</p>
                </div>
              </div>

              {/* Feature Item 3: Build Your Community */}
              <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 border border-purple-200/60 text-[#2E1065] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2E1065] font-display leading-tight">Build Your Community</h4>
                  <p className="text-[11px] sm:text-sm text-slate-500 font-normal mt-0.5">Engage and retain your audience.</p>
                </div>
              </div>

              {/* Feature Item 4: Grow Your Revenue */}
              <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 border border-purple-200/60 text-[#2E1065] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2E1065] font-display leading-tight">Grow Your Revenue</h4>
                  <p className="text-[11px] sm:text-sm text-slate-500 font-normal mt-0.5">Turn your passion into sustainable income.</p>
                </div>
              </div>

            </div>


          </div>

        </div>

      </div>
    </section>
  );
}
