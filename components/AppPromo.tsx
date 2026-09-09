"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, BookOpen, Radio, ShoppingBag,
  Calendar, Hash, TrendingUp, Settings2, Video, Mic
} from "lucide-react";
import Image from "next/image";

const GooglePlayBadge = () => (
  <a href="#" className="bg-[#111] hover:bg-zinc-900 text-white rounded-2xl px-5 py-3 flex items-center gap-3 transition-all cursor-pointer shadow-lg">
    <svg className="w-6 h-6 text-white fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M5.25 2.25c-.2 0-.37.07-.5.2L12.56 10.3l3.6-3.6-10.4-5.96c-.16-.09-.34-.14-.51-.14zm11.78 5.17l-3.2 3.2 3.2 3.2 3.16-1.8c.61-.35.91-.95.91-1.4 0-.45-.3-.15-.91-.5l-3.16-1.8zM4.75 21.55c.17 0 .35-.05.51-.14l10.4-5.96-3.6-3.6-7.81 7.85c.13.13.3.2.5.2zM3.5 3.5c-.07.15-.1.32-.1.5v16c0 .18.03.35.1.5L11.5 12 3.5 3.5z" />
    </svg>
    <div className="text-left leading-none">
      <p className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold mb-1">GET IT ON</p>
      <p className="text-[14px] font-bold">Google Play</p>
    </div>
  </a>
);

const AppStoreBadge = () => (
  <a href="#" className="bg-[#111] hover:bg-zinc-900 text-white rounded-2xl px-5 py-3 flex items-center gap-3 transition-all cursor-pointer shadow-lg">
    <svg className="w-6 h-6 text-white fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.63.73-1.18 1.87-1.03 2.99 1.12.09 2.27-.56 2.98-1.43z" />
    </svg>
    <div className="text-left leading-none">
      <p className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold mb-1">DOWNLOAD ON THE</p>
      <p className="text-[14px] font-bold">App Store</p>
    </div>
  </a>
);

const points = [
  { icon: Users,       title: "Instant Setup",        desc: "Set up your community club in minutes.",        iconBg: "bg-violet-50",   iconColor: "text-violet-600", image: "/images/Instant-setup.png" },
  { icon: Users,       title: "Audience Growth",      desc: "Invite members & share with your audience.",     iconBg: "bg-sky-50",      iconColor: "text-sky-600",    image: "/images/Audience-growth.png" },
  { icon: Mic,         title: "Audio Rooms & Calls",  desc: "Host voice huddles, audio lounges & podcasts.", iconBg: "bg-purple-50",  iconColor: "text-purple-600", image: "/images/Audio.png" },
  { icon: Video,       title: "Video Calls & Streams",desc: "Host 1-on-1 video calls & HD live streams.",    iconBg: "bg-fuchsia-50", iconColor: "text-fuchsia-600",image: "/images/Video.png" },
  { icon: Radio,       title: "Interactive Feeds",    desc: "Post updates, host discussions & go live.",     iconBg: "bg-rose-50",     iconColor: "text-rose-600",   image: "/images/Interactive-Feeds.png" },
  { icon: BookOpen,    title: "Online Courses",       desc: "Create & sell courses to your community.",       iconBg: "bg-amber-50",    iconColor: "text-amber-600",  image: "/images/Online Courses.png" },
  { icon: Calendar,    title: "Events & Booking",     desc: "Run events, sessions & book appointments.",     iconBg: "bg-emerald-50",  iconColor: "text-emerald-600",image: "/images/Events & Bookings.png" },
  { icon: Hash,        title: "Private Channels",     desc: "Build private channels for deeper engagement.", iconBg: "bg-indigo-50",   iconColor: "text-indigo-600", image: "/images/private-channel.png" },
  { icon: ShoppingBag, title: "Easy Monetization",    desc: "Monetize with memberships, products & ads.",    iconBg: "bg-pink-50",     iconColor: "text-pink-600",   image: "/images/Easy Monetrization.png" },
  { icon: TrendingUp,  title: "Smart Analytics",      desc: "Track growth with real-time analytics.",        iconBg: "bg-teal-50",     iconColor: "text-teal-600",   image: "/images/Smart-analytics.png" },
];

export default function AppPromo() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="app-promo"
      className="relative overflow-hidden font-sans select-none"
      style={{
        background: "linear-gradient(180deg, #f1ebfe 0%, #f6f2ff 50%, #faf8ff 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      {/* Large blob right side */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[42%_58%] gap-8 lg:gap-12 items-center">

          {/* ── LEFT ── */}
          <div className="min-w-0 space-y-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11.5px] font-bold uppercase tracking-widest border"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  borderColor: "rgba(139,92,246,0.25)",
                  color: "#7c3aed",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Settings2 className="w-3.5 h-3.5" />
                How It Works
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <h2 className="text-[44px] md:text-[52px] font-black text-slate-900 tracking-tight leading-[1.1] mb-1">
                Everything Your
              </h2>
              <h2
                className="text-[44px] md:text-[52px] font-black tracking-tight leading-[1.1]"
                style={{
                  background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Community Needs
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-600 text-[15.5px] font-medium leading-relaxed max-w-md"
            >
              Launch, grow and monetize your community —<br />all from one powerful platform.
            </motion.p>

            {/* Points — 2-col bento grid */}
            <div 
              className="grid grid-cols-2 gap-4 max-h-[490px] overflow-y-auto no-scrollbar pr-2 pt-3 pb-3 px-1.5 text-left"
              style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
            >
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                const isActive = activeIdx === idx;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + idx * 0.05 }}
                    className={`group relative flex flex-col gap-3.5 p-5.5 rounded-[24px] border backdrop-blur-md cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-white border-indigo-400/80 shadow-[0_24px_48px_rgba(99,102,241,0.15)] ring-2 ring-indigo-500/20 -translate-y-1.5"
                        : "border-white/90 bg-gradient-to-br from-white/95 to-white/50 hover:-translate-y-1.5 hover:from-white hover:to-white hover:border-indigo-200/60 hover:shadow-[0_24px_48px_rgba(99,102,241,0.08)]"
                    }`}
                  >
                    {/* Icon Container */}
                    <div className="flex items-center">
                      <div className={`w-11.5 h-11.5 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.02)] ${pt.iconBg}`}>
                        <Icon className={`${pt.iconColor}`} style={{ width: 21, height: 21 }} />
                      </div>
                    </div>
                    {/* Title + Text */}
                    <div className="space-y-1">
                      <h4 className={`text-[15.5px] font-bold tracking-tight leading-snug transition-colors duration-300 ${
                        isActive ? "text-indigo-600 font-extrabold" : "text-slate-800 group-hover:text-indigo-600"
                      }`}>{pt.title}</h4>
                      <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{pt.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <GooglePlayBadge />
              <AppStoreBadge />
            </motion.div>
          </div>

          {/* ── RIGHT — Dynamic App Image with Seamless Background Integration ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-[640px] sm:max-w-[680px] mx-auto">
              
              {/* Background Glow Aura for Seamless Integration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-gradient-to-tr from-purple-400/30 via-indigo-300/30 to-violet-400/25 rounded-full blur-[100px] pointer-events-none" />

              {/* Image Frame Container (Elliptical mask crops out outer rectangular box edges) */}
              <div
                className="relative w-full"
                style={{
                  WebkitMaskImage: "radial-gradient(ellipse 65% 75% at 50% 50%, black 35%, transparent 78%)",
                  maskImage: "radial-gradient(ellipse 65% 75% at 50% 50%, black 35%, transparent 78%)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={points[activeIdx].image}
                      alt={points[activeIdx].title}
                      width={720}
                      height={860}
                      className="w-full h-auto object-contain mx-auto border-none outline-none select-none"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
