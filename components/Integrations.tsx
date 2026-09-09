"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, Sparkles, Check, RefreshCw } from "lucide-react";

interface IntegrationItem {
  id: string;
  name: string;
  desc: string;
  status: "Connected" | "Syncing" | "Configure";
  color: string;
  logoText: string;
}

const INTEGRATIONS: IntegrationItem[] = [
  { id: "slack", name: "Slack", desc: "Automate event notifications in channels.", status: "Connected", color: "#4A154B", logoText: "S" },
  { id: "discord", name: "Discord", desc: "Sync membership roles automatically.", status: "Syncing", color: "#5865F2", logoText: "D" },
  { id: "zoom", name: "Zoom", desc: "Generate secure video links on RSVP.", status: "Configure", color: "#2D8CFF", logoText: "Z" },
  { id: "stripe", name: "Stripe", desc: "Process membership fees directly.", status: "Connected", color: "#635BFF", logoText: "S" },
  { id: "notion", name: "Notion", desc: "Export member rosters & metrics.", status: "Connected", color: "#000000", logoText: "N" },
  { id: "gcal", name: "Google Calendar", desc: "Push event invites to member calendars.", status: "Connected", color: "#EA4335", logoText: "G" }
];

export default function Integrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      ref={containerRef}
      id="integrations"
      className="py-24 md:py-36 bg-[#FAFBFF] text-slate-900 relative z-20 overflow-hidden border-y border-slate-205/60 select-none text-left font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-primary">
              <Link className="w-3.5 h-3.5 text-primary" />
              <span>Native Integrations</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-display uppercase">
              PLUG DIRECTLY INTO <br />
              YOUR ENTIRE STACK.
            </h2>
            
            <p className="text-slate-500 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Sync member roles, automate notifications, trigger event updates, and manage recurring payroll distributions natively.
            </p>
          </div>
        </div>

        {/* Central Hub and Connection Lines Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Pulsing Hub Node Chart */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px]">
            
            {/* Pulsing Backlight behind central node */}
            <div className="absolute h-48 w-48 rounded-full bg-primary/5 blur-[50px] animate-pulse-slow pointer-events-none" />

            {/* Pulsing SVG Connection lines */}
            <svg className="absolute w-full h-full inset-0 pointer-events-none z-0" viewBox="0 0 400 400">
              {/* Lines from Center (200, 200) to surrounding spots */}
              {/* Slack (80, 80) */}
              <line x1="200" y1="200" x2="100" y2="100" stroke="white" strokeWidth="2" strokeDasharray="6 4" className="stroke-slate-200" />
              {/* Discord (320, 80) */}
              <line x1="200" y1="200" x2="300" y2="100" stroke="white" strokeWidth="2" strokeDasharray="6 4" />
              {/* Zoom (80, 200) */}
              <line x1="200" y1="200" x2="80" y2="200" stroke="white" strokeWidth="2" strokeDasharray="6 4" />
              {/* Stripe (320, 200) */}
              <line x1="200" y1="200" x2="320" y2="200" stroke="white" strokeWidth="2" strokeDasharray="6 4" />
              {/* Notion (100, 300) */}
              <line x1="200" y1="200" x2="120" y2="300" stroke="white" strokeWidth="2" strokeDasharray="6 4" />
              {/* Google Calendar (300, 300) */}
              <line x1="200" y1="200" x2="280" y2="300" stroke="white" strokeWidth="2" strokeDasharray="6 4" />

              {/* Pulsing SVG dashes traveling along lines */}
              {isInView && (
                <>
                  <circle r="4" fill="#5B5CEB" className="animate-[ping_2s_infinite]">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 200,200 L 100,100" />
                  </circle>
                  <circle r="4" fill="#5865F2" className="animate-[ping_2s_infinite]">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200,200 L 300,100" />
                  </circle>
                  <circle r="4" fill="#635BFF" className="animate-[ping_2s_infinite]">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 200,200 L 320,200" />
                  </circle>
                  <circle r="4" fill="#EA4335" className="animate-[ping_2s_infinite]">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 200,200 L 280,300" />
                  </circle>
                </>
              )}
            </svg>

            {/* Central Happiest Node */}
            <div className="absolute h-20 w-20 rounded-2xl bg-gradient-to-r from-primary to-accent border border-white flex items-center justify-center shadow-2xl text-white font-black text-xl font-display uppercase tracking-widest z-10 animate-float">
              Hub
            </div>

            {/* Surrounding Nodes */}
            {/* Slack Node */}
            <div
              onMouseEnter={() => setHoveredId("slack")}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute left-[20%] top-[20%] h-12 w-12 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10"
            >
              <span className="font-extrabold text-sm text-[#4A154B]">S</span>
            </div>

            {/* Discord Node */}
            <div
              onMouseEnter={() => setHoveredId("discord")}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute right-[20%] top-[20%] h-12 w-12 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10"
            >
              <span className="font-extrabold text-sm text-[#5865F2]">D</span>
            </div>

            {/* Zoom Node */}
            <div
              onMouseEnter={() => setHoveredId("zoom")}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute left-[15%] top-[45%] h-12 w-12 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10"
            >
              <span className="font-extrabold text-sm text-[#2D8CFF]">Z</span>
            </div>

            {/* Stripe Node */}
            <div
              onMouseEnter={() => setHoveredId("stripe")}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute right-[15%] top-[45%] h-12 w-12 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10"
            >
              <span className="font-extrabold text-sm text-[#635BFF]">S</span>
            </div>

            {/* Notion Node */}
            <div
              onMouseEnter={() => setHoveredId("notion")}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute left-[25%] bottom-[20%] h-12 w-12 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10"
            >
              <span className="font-extrabold text-sm text-black">N</span>
            </div>

            {/* Gcal Node */}
            <div
              onMouseEnter={() => setHoveredId("gcal")}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute right-[25%] bottom-[20%] h-12 w-12 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10"
            >
              <span className="font-extrabold text-xs text-[#EA4335]">GC</span>
            </div>

          </div>

          {/* Right Column: Descriptions & Live Status Board */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xs font-black text-slate-400 font-display uppercase tracking-wider">Connection Logs</h4>
            
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 space-y-4 shadow-xl shadow-slate-100/50">
              {INTEGRATIONS.map((item) => {
                const isActive = hoveredId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-white border-primary shadow-md"
                        : "bg-transparent border-slate-100"
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="h-9 w-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-extrabold shrink-0" style={{ color: item.color }}>
                        {item.logoText}
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-black text-slate-900 block leading-tight font-display">{item.name}</span>
                        <span className="text-[10px] text-slate-450 font-medium block mt-0.5 leading-normal">{item.desc}</span>
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="flex items-center space-x-1.5 shrink-0">
                      {item.status === "Connected" && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[9px] font-black uppercase tracking-wider border border-emerald-100">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Connected</span>
                        </span>
                      )}
                      {item.status === "Syncing" && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-primary/5 text-primary text-[9px] font-black uppercase tracking-wider border border-primary/10">
                          <RefreshCw className="w-3 h-3 text-primary animate-spin" />
                          <span>Syncing</span>
                        </span>
                      )}
                      {item.status === "Configure" && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 text-[9px] font-black uppercase tracking-wider border border-slate-200 hover:bg-slate-200 cursor-pointer">
                          <span>Set Up</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
