"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, MapPin, Bell, ShoppingCart, ChevronDown, Users, ShieldCheck, ArrowRight,
  Bot, Newspaper, Package, BookOpen, Plus, Crown, UserCircle, History, Send, Sparkles,
  Heart, MessageCircle, Share2, MoreHorizontal, Check, Ticket, Calendar, Clock, Compass, ArrowUpRight,
  Home, GraduationCap, ShoppingBag, Layout, Mail, Globe, Camera, Hash, CheckCircle2, Play, Star
} from "lucide-react";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as [number,number,number,number];

function DiscoverClubsPanel() {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar bg-white">
      <img
        src="/images/Slide.png"
        alt="Discover Clubs Screenshot"
        className="w-full h-auto block" decoding="async"
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}

function CoursesPanel() {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar bg-white">
      <img
        src="/images/Slide-4.png"
        alt="Courses Screenshot"
        className="w-full h-auto block" decoding="async"
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}

function ProductsPanel() {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar bg-white">
      <img
        src="/images/Product.png"
        alt="Products Screenshot"
        className="w-full h-auto block" decoding="async"
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}

function ChannelPanel() {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar bg-white">
      <img
        src="/images/Slide-7.png"
        alt="Club Notifications Screenshot"
        className="w-full h-auto block" decoding="async"
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}

function MetaIntegrationPanel() {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar bg-white">
      <img
        src="/images/Slide-6.png"
        alt="Social Media Screenshot"
        className="w-full h-auto block" decoding="async"
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}

function HgptAssistantPanel() {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar bg-white">
      <img
        src="/images/Slide-3.png"
        alt="HGPT Screenshot"
        className="w-full h-auto block" decoding="async"
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}

function FeedPanel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    let pos = 0;
    let direction = 1;
    let isPaused = false;

    const onEnter = () => { isPaused = true; };
    const onLeave = () => { isPaused = false; };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    let lastTime = performance.now();

    const scrollLoop = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused && el) {
        const maxScroll = el.scrollHeight - el.clientHeight;
        if (maxScroll > 10) {
          pos += 45 * delta * direction;
          if (pos >= maxScroll) {
            pos = maxScroll;
            direction = -1;
          } else if (pos <= 0) {
            pos = 0;
            direction = 1;
          }
          el.scrollTop = pos;
        }
      }
      animId = requestAnimationFrame(scrollLoop);
    };

    animId = requestAnimationFrame(scrollLoop);

    return () => {
      cancelAnimationFrame(animId);
      if (el) {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto no-scrollbar bg-white scroll-smooth select-none"
    >
      <img
        src="/images/Slide-2.png"
        alt="Feeds Screenshot"
        className="w-full h-auto block"
        decoding="async"
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}

function BookNowPanel() {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar bg-white">
      <img
        src="/images/Booking.png"
        alt="Booking Screenshot"
        className="w-full h-auto block" decoding="async"
        style={{ display: "block", maxWidth: "100%" }}
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
      setCurrentSlide(s => (s + 1) % SLIDE_COUNT);
    }, 7000);
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
      className="relative py-24 md:py-32 overflow-hidden z-20 font-sans bg-[#0B0F1A]"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Tab Bar Above Mockup ── */}
        <div className="flex justify-center mb-10 relative z-30 max-w-full">
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

        {/* -- Product card wrapper -- */}
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

          <div className="absolute -inset-px rounded-[20px] pointer-events-none border border-slate-200/80" />

          {/* Main card */}
          <div
            className="relative rounded-[20px] overflow-hidden flex flex-col h-[620px]"
            style={{ background: "#ffffff", boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}
          >
            {/* Window chrome bar */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3.5 shrink-0 z-20 relative"
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

              {/* Nav icons */}
              <div className="hidden sm:flex items-center justify-end gap-2 shrink-0 w-[80px]">
                {["←","→","↻"].map(s => (
                  <span key={s} className="text-[13px] text-slate-400 w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-slate-100 rounded">{s}</span>
                ))}
              </div>
            </div>

            {/* App Content Slider */}
            <div className="flex-1 relative overflow-hidden bg-white min-h-[340px] sm:min-h-[460px] md:min-h-[560px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={{
                    enter: (dir: number) => ({
                      x: dir > 0 ? 120 : -120,
                      opacity: 0,
                    }),
                    center: {
                      x: 0,
                      opacity: 1,
                    },
                    exit: (dir: number) => ({
                      x: dir > 0 ? -120 : 120,
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0"
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-16"
        >
          <button
            className="flex items-center gap-2.5 px-8 py-4 rounded-full text-[13.5px] font-bold text-white cursor-pointer transition-all duration-300 hover:scale-[1.03] bg-[#6D4AFF] shadow-md hover:bg-[#5A38F0]"
          >
            Explore Communities
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
