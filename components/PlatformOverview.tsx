"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, Bot, MessageSquare, Calendar, ShoppingBag, PlusCircle, Sparkles } from "lucide-react";

export default function PlatformOverview() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // surrounding features list with coordinates for connecting lines on an 800x500 svg canvas
  // Center is at (400, 250)
  const features = [
    {
      name: "Discover Clubs",
      icon: <Compass className="w-3.5 h-3.5 text-primary-blue" />,
      pos: "absolute top-[5%] left-[2%] md:left-[8%]",
      linePath: "M 220,120 L 320,180",
      desc: "Explore communities built around your exact vibe."
    },
    {
      name: "HGPT",
      icon: <Bot className="w-3.5 h-3.5 text-primary-blue" />,
      pos: "absolute top-[42%] left-[0%] md:left-[2%]",
      linePath: "M 190,250 L 300,250",
      desc: "Get personalized recommendations from our AI copilot."
    },
    {
      name: "Feeds",
      icon: <MessageSquare className="w-3.5 h-3.5 text-primary-blue" />,
      pos: "absolute bottom-[8%] left-[2%] md:left-[8%]",
      linePath: "M 220,380 L 320,320",
      desc: "Stay connected between events with photos and posts."
    },
    {
      name: "Book Now",
      icon: <Calendar className="w-3.5 h-3.5 text-primary-blue" />,
      pos: "absolute top-[5%] right-[2%] md:right-[8%]",
      linePath: "M 580,120 L 480,180",
      desc: "Browse activities, book tickets, and manage passes."
    },
    {
      name: "Products",
      icon: <ShoppingBag className="w-3.5 h-3.5 text-primary-blue" />,
      pos: "absolute top-[42%] right-[0%] md:right-[2%]",
      linePath: "M 610,250 L 500,250",
      desc: "Sell memberships, ticket passes, and merchandise."
    },
    {
      name: "Create Club",
      icon: <PlusCircle className="w-3.5 h-3.5 text-primary-blue" />,
      pos: "absolute bottom-[8%] right-[2%] md:right-[8%]",
      linePath: "M 580,380 L 480,320",
      desc: "Invite members and track analytics in one dashboard."
    }
  ];

  return (
    <section
      ref={containerRef}
      id="platform-overview"
      className="bg-midnight-navy text-white py-24 md:py-36 relative z-20 overflow-hidden border-t border-white/5 select-none text-center"
    >
      {/* Background radial spotlight lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-primary-blue/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold text-accent-blue uppercase tracking-widest block font-display">
            PLATFORM OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            One platform for every way people come together.
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Everything Happiest.team offers is connected under a unified dashboard, enabling seamless interaction and growth.
          </p>
        </div>

        {/* Ecosystem Connected Visual Canvas */}
        <div className="relative w-full max-w-4xl h-[620px] md:h-[520px] mx-auto mt-16 select-none overflow-visible">
          
          {/* SVG Connecting lines (Desktop only) */}
          <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30" viewBox="0 0 800 500">
            {features.map((f, idx) => (
              <motion.path
                key={idx}
                d={f.linePath}
                fill="none"
                stroke="#5A63F6"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.2, delay: idx * 0.15 }}
              />
            ))}
          </svg>

          {/* Central Platform Dashboard base */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[190px] bg-slate-900 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 flex flex-col justify-between text-left hidden md:flex z-20"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-white/5 select-none">
              <div className="flex items-center space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4.5 w-4.5">
                  <rect width="32" height="32" rx="6" fill="#5A63F6"/>
                  <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#FCFCF8" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="700">H</text>
                </svg>
                <span className="text-[9.5px] font-bold text-white font-display">Happiest Dashboard</span>
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="py-2.5 text-[8.5px] text-slate-400 font-semibold space-y-1">
              <div>Total Members: <strong className="text-white">1,248</strong></div>
              <div>Active Bookings: <strong className="text-white">128</strong></div>
              <div>Month Payouts: <strong className="text-white">$3,420</strong></div>
            </div>

            <div className="text-[7.5px] text-slate-500 font-bold uppercase tracking-wider select-none text-center border-t border-white/5 pt-2">
              Ecosystem Core
            </div>
          </motion.div>

          {/* Surrounding features grids */}
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`${item.pos} bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left w-[240px] sm:w-[220px] shadow-lg hover:border-primary-blue/35 transition-colors z-20`}
            >
              <div className="flex items-center space-x-2">
                <div className="h-7 w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[11px] font-extrabold text-white font-display">{item.name}</span>
              </div>
              <p className="text-[9.5px] text-slate-400 font-normal leading-normal mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
