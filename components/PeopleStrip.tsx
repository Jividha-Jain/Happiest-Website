"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Member {
  name: string;
  club: string;
  image: string;
}

const MEMBERS: Member[] = [
  {
    name: "Aarav",
    club: "Sunday Run Club",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Meera",
    club: "Creative Circle",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Kabir",
    club: "Founders Club",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Riya",
    club: "Yoga Collective",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Arjun",
    club: "Food Explorers",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
  },
];

const MARQUEE_ITEMS = [...MEMBERS, ...MEMBERS, ...MEMBERS, ...MEMBERS];

const STATS = [
  { value: "12K+", label: "members" },
  { value: "600+", label: "clubs" },
  { value: "2K+", label: "experiences" },
  { value: "40+", label: "cities" },
];

export default function PeopleStrip() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="people-strip"
      className="bg-warm-cream text-text-dark py-20 md:py-28 border-y border-slate-200/50 z-20 relative select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3"
        >
          <span className="text-[10px] font-bold text-primary-blue uppercase tracking-widest block font-display">
            REAL CONNECTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Built around real people, not just profiles.
          </h2>
        </motion.div>

        {/* Endless Marquee Loop of Portrait Cards */}
        <div className="relative overflow-hidden w-full py-4 bg-slate-50/50 border-y border-slate-100">
          {/* Edge gradients */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-warm-cream via-warm-cream/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-warm-cream via-warm-cream/50 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{ x: ["0%", "-25%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 18,
            }}
            className="flex space-x-6 w-max"
          >
            {MARQUEE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3.5 bg-white border border-slate-200/60 p-3 rounded-full shadow-xs shrink-0 pr-6 hover:border-primary-blue/30 transition-colors"
              >
                <div className="h-10 w-10 rounded-full overflow-hidden relative bg-slate-100 border border-slate-100 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left leading-tight">
                  <span className="font-extrabold text-slate-900 text-xs block font-display">{item.name}</span>
                  <span className="text-[10px] text-slate-450 block mt-0.5 font-semibold">{item.club}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Statistics below */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto pt-8 px-4"
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1.5">
              <span className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight block font-display">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-450 uppercase tracking-widest block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
