"use client";

import React, { useRef } from "react";
import { Sparkles, Calendar, BookOpen, CreditCard, BarChart3, FolderHeart, MessageCircle } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge: string;
}

const FEATURES: FeatureCardProps[] = [
  {
    icon: <Calendar className="w-5 h-5 text-primary" />,
    title: "Automated Events Coordination",
    desc: "Host in-person track meets or global Zoom webinars with built-in email alerts, calendar reminders, ticket generation, and waitlist logs.",
    badge: "Events"
  },
  {
    icon: <BookOpen className="w-5 h-5 text-secondary" />,
    title: "Course E-Learning Modules",
    desc: "Publish lesson playlists, track user progression, and assign homework in visual video boards directly within your spaces.",
    badge: "Courses"
  },
  {
    icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
    title: "Integrated Subscriptions & Payments",
    desc: "Set weekly, monthly, or annual subscription tiers. Fully integrated invoice and receipt billing powered natively by Stripe Connect.",
    badge: "Payments"
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-indigo-500" />,
    title: "Hub Metrics & Custom Analytics",
    desc: "Track retention rates, chat density, and monthly active user counts with clear, clean visual dashboards and reports.",
    badge: "Analytics"
  },
  {
    icon: <FolderHeart className="w-5 h-5 text-sky-500" />,
    title: "Directory Folders & Spaces",
    desc: "Organize discussions, documents, links, and resource directories into clean nested folders with custom access controls.",
    badge: "Spaces"
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-rose-500" />,
    title: "Live Chat & Threaded Messaging",
    desc: "Enable live messaging boards and threaded community comment boards with complete moderation controls and roles.",
    badge: "Chat"
  }
];

export default function FeaturesBento() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="features"
      className="py-24 md:py-32 bg-white text-slate-900 z-20 relative select-none text-left font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        
        {/* Title Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Feature Stack</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-display uppercase">
            A COMPLETE WORKSPACE <br />
            FOR MODERN HUBS.
          </h2>
          
          <p className="text-slate-500 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Stop stitching together dozens of separate tools. Happiest.team gives you all community tools built as one premium platform.
          </p>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-premium-hover transition-all duration-300 shadow-xs h-[230px]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                    {feat.icon}
                  </div>
                  <span className="text-[9px] font-bold uppercase text-slate-400 tracking-wider bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-md">
                    {feat.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 font-display">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] text-slate-450 font-semibold leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
