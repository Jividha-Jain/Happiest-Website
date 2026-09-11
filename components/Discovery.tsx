"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell, ArrowRight,
  Bot, Newspaper, ShoppingBag, GraduationCap,
  Share2, Calendar, Compass
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function DiscoverClubsPanel() {
  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <img
        src="/images/Club.png"
        alt="Discover Clubs Screenshot"
        className="w-full h-full object-contain object-top block"
        decoding="async"
      />
    </div>
  );
}

function CoursesPanel() {
  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <img
        src="/images/Slide-4.png"
        alt="Courses Screenshot"
        className="w-full h-full object-contain object-top block"
        decoding="async"
      />
    </div>
  );
}

function ProductsPanel() {
  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <img
        src="/images/Slide.png"
        alt="Products Screenshot"
        className="w-full h-full object-contain object-top block"
        decoding="async"
      />
    </div>
  );
}

function ChannelPanel() {
  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <img
        src="/images/Slide-7.png"
        alt="Club Notifications Screenshot"
        className="w-full h-full object-contain object-top block"
        decoding="async"
      />
    </div>
  );
}

function MetaIntegrationPanel() {
  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <img
        src="/images/Slide-6.png"
        alt="Social Media Screenshot"
        className="w-full h-full object-contain object-top block"
        decoding="async"
      />
    </div>
  );
}

function HgptAssistantPanel() {
  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <img
        src="/images/Slide-3.png"
        alt="HGPT Screenshot"
        className="w-full h-full object-contain object-top block"
        decoding="async"
      />
    </div>
  );
}

function FeedPanel() {
  return (
    <div className="w-full min-h-full bg-white">
      <img
        src="/images/Slide-2.png"
        alt="Feeds Screenshot"
        className="w-full h-auto block"
        decoding="async"
      />
    </div>
  );
}

function BookNowPanel() {
  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <img
        src="/images/Booking.png"
        alt="Booking Screenshot"
        className="w-full h-full object-contain object-top block"
        decoding="async"
      />
    </div>
  );
}

export default function Discovery() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const SLIDE_COUNT = 8;

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((s) => (s + 1) % SLIDE_COUNT);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const goToSlide = (newSlide: number) => {
    if (newSlide > currentSlide) {
      setDirection(1);
    } else if (newSlide < currentSlide) {
      setDirection(-1);
    }
    setCurrentSlide(newSlide);
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
  ) => {
    const swipeConfidenceThreshold = 10000;
    const swipePower = Math.abs(offset.x) * velocity.x;

    if (swipePower < -swipeConfidenceThreshold || offset.x < -40) {
      setDirection(1);
      setCurrentSlide((s) => (s + 1) % SLIDE_COUNT);
    } else if (swipePower > swipeConfidenceThreshold || offset.x > 40) {
      setDirection(-1);
      setCurrentSlide((s) => (s - 1 + SLIDE_COUNT) % SLIDE_COUNT);
    }
  };

  const slideNames = [
    "/discover",
    "/feed",
    "/hgpt",
    "/courses",
    "/booking",
    "/products",
    "/club-notifications",
    "/social-media"
  ];

  return (
    <section
      id="discover"
      className="relative py-10 sm:py-20 md:py-32 overflow-hidden z-20 font-sans bg-[#0B0F1A]"
    >
      {/* ── Glowing Top Section Divider Line ── */}
      <div className="absolute top-0 left-0 right-0 w-full flex items-center justify-center pointer-events-none z-30">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-[#7C5CFF]/70 to-transparent shadow-[0_0_15px_rgba(124,92,255,0.6)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Tab Bar Above Mockup (Desktop & Tablet Only - Hidden on Mobile) ── */}
        <div className="hidden md:flex justify-center mb-8 relative z-30 max-w-full">
          <div className="flex bg-[#121829]/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-xs overflow-x-auto no-scrollbar max-w-full">
            {[
              { id: 0, label: "Discover Club", icon: Compass },
              { id: 1, label: "Feed", icon: Newspaper },
              { id: 2, label: "HGPT", icon: Bot },
              { id: 3, label: "Courses", icon: GraduationCap },
              { id: 4, label: "Booking", icon: Calendar },
              { id: 5, label: "Products", icon: ShoppingBag },
              { id: 6, label: "Club Notification", icon: Bell },
              { id: 7, label: "Social Media", icon: Share2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = currentSlide === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => goToSlide(tab.id)}
                  className={`group relative flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer shrink-0 z-10 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`} />
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeMockTabGlow"
                      className="absolute inset-0 bg-[#7C5CFF] rounded-xl -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* -- Product card wrapper with Mobile Touch Swipe -- */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.80, delay: 0.15, ease }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(109,74,255,0.12) 0%, transparent 70%)", filter: "blur(24px)" }} />

          <div className="absolute -inset-px rounded-[16px] sm:rounded-[20px] pointer-events-none border border-slate-200/80" />

          {/* Main card */}
          <div
            className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden flex flex-col aspect-[185/96] sm:aspect-auto sm:h-[460px] md:h-[560px] lg:h-[620px]"
            style={{ background: "#ffffff", boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}
          >
            {/* Window chrome bar */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 shrink-0 z-20 relative"
              style={{ background: "linear-gradient(180deg, #f8faff 0%, #f1f4fd 100%)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57] shadow-[0_0_0_0.5px_rgba(0,0,0,0.12)] cursor-pointer" onClick={() => goToSlide(0)} />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e] shadow-[0_0_0_0.5px_rgba(0,0,0,0.12)] cursor-pointer" onClick={() => goToSlide(1)} />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840] shadow-[0_0_0_0.5px_rgba(0,0,0,0.12)] cursor-pointer" onClick={() => goToSlide(2)} />
              </div>

              {/* URL bar */}
              <div className="flex-1 flex justify-center px-1 sm:px-0">
                <div className="flex items-center bg-white rounded-lg px-2.5 sm:px-4 py-1 sm:py-1.5 border border-slate-200/80 shadow-xs w-full max-w-[400px]">
                  <span className="text-[10px] sm:text-[11.5px] text-slate-500 font-medium w-full text-center tracking-[-0.01em] truncate">
                    happiest.team<span className="text-[#2E1065] font-semibold">{slideNames[currentSlide]}</span>
                  </span>
                </div>
              </div>

              {/* Right spacer to balance traffic lights and keep URL centered */}
              <div className="w-8 sm:w-12 shrink-0" />
            </div>

            {/* App Content Slider with Swipe Support */}
            <div
              className={`flex-1 relative bg-white ${currentSlide === 1 ? 'overflow-y-auto' : 'overflow-hidden'}`}
              {...(currentSlide === 1 ? { 'data-lenis-prevent': '' } : {})}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  drag={currentSlide === 1 ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  variants={{
                    enter: (dir: number) => ({
                      x: dir > 0 ? "100%" : "-100%",
                      opacity: 0,
                    }),
                    center: {
                      x: 0,
                      opacity: 1,
                    },
                    exit: (dir: number) => ({
                      x: dir > 0 ? "-100%" : "100%",
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
                  className={`${currentSlide === 1 ? 'relative w-full' : 'absolute inset-0 cursor-grab active:cursor-grabbing touch-pan-y'}`}
                >
                  {currentSlide === 0 && <DiscoverClubsPanel />}
                  {currentSlide === 1 && <FeedPanel />}
                  {currentSlide === 2 && <HgptAssistantPanel />}
                  {currentSlide === 3 && <CoursesPanel />}
                  {currentSlide === 4 && <BookNowPanel />}
                  {currentSlide === 5 && <ProductsPanel />}
                  {currentSlide === 6 && <ChannelPanel />}
                  {currentSlide === 7 && <MetaIntegrationPanel />}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </motion.div>

        {/* ── Dots Pagination Bar Below Mockup Screen (Mobile Responsive Only) ── */}
        <div className="flex md:hidden items-center justify-center gap-2.5 mt-6 sm:mt-8 relative z-30">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative py-2 px-1 cursor-pointer transition-all focus:outline-none"
              >
                <div
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-[#7C5CFF] shadow-[0_0_15px_rgba(124,92,255,0.8)]"
                      : "w-2.5 bg-white/20 hover:bg-white/50"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6 sm:mt-12"
        >
          <button
            className="flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-[13.5px] font-bold text-white cursor-pointer transition-all duration-300 hover:scale-[1.03] bg-[#6D4AFF] shadow-md hover:bg-[#5A38F0]"
          >
            Explore Communities
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
