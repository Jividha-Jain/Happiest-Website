"use client";

import React, { useRef } from "react";
import { Shield, Users, Calendar, DollarSign, MapPin } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
}

const STATS: StatItem[] = [
  { value: "98.4%", label: "Retention Rate", sub: "Active community members", icon: <Users className="w-4.5 h-4.5 text-primary" /> },
  { value: "480k+", label: "RSVPs Managed", sub: "Annual hosted events", icon: <Calendar className="w-4.5 h-4.5 text-secondary" /> },
  { value: "$12M+", label: "Creator Income", sub: "Processed memberships", icon: <DollarSign className="w-4.5 h-4.5 text-emerald-600" /> },
  { value: "85+", label: "Global Cities", sub: "In-person meetups", icon: <MapPin className="w-4.5 h-4.5 text-indigo-500" /> }
];

const BRAND_LOGOS = ["Stripe", "Vercel", "Linear", "Apple", "Figma", "Raycast", "Arc", "Retool"];

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="trusted"
      className="bg-slate-50 text-slate-900 py-24 md:py-32 border-y border-slate-200/60 z-20 relative select-none font-sans"
    >
      <div className="max-w-7xl mx-auto space-y-20 px-6 lg:px-8">
        
        {/* Top Header Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-xs">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>Enterprise Grade Security</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-display uppercase">
              TRUSTED BY WORLD-CLASS <br />
              BRANDS & HOSTS.
            </h2>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-end text-left">
            <p className="text-slate-505 text-sm sm:text-base leading-relaxed max-w-xl font-normal font-sans">
              From corporate networking divisions to custom local running clubs, Happiest.team handles the complex billing, automated event scheduling, and analytics so you can focus on building relationships.
            </p>
          </div>
        </div>

        {/* Clean Logos strip */}
        <div className="bg-white border border-slate-200 rounded-2xl py-6 px-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {BRAND_LOGOS.map((name, idx) => (
              <span
                key={idx}
                className="text-slate-400 hover:text-slate-700 transition-colors font-display font-extrabold tracking-wider text-sm sm:text-base cursor-pointer select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Metric Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-left hover:border-slate-300 transition-colors duration-250 shadow-xs flex flex-col justify-between h-[140px]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                    {stat.value}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-150 text-slate-500">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider block font-display">
                  {stat.label}
                </span>
                <span className="text-[10px] text-slate-450 font-medium block font-sans">
                  {stat.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
