"use client";

import React, { useRef } from "react";
import { Sparkles, Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  hub: string;
  quote: string;
  avatar: string;
  metric: string;
  metricLabel: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "Chief Organizer",
    hub: "Austin Runners Guild",
    quote: "Happiest.team completely automated our membership collection and scheduling. We grew from 80 runners to 1,200 active members in 4 months.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    metric: "+1,400%",
    metricLabel: "Member Growth",
    rating: 5
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Studio Director",
    hub: "Creative Ceramics Brooklyn",
    quote: "Managing passes, material payments, and guest RSVPs in one premium visual dashboard saved us 15 hours of admin overhead every single week.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    metric: "15 hours",
    metricLabel: "Weekly Time Saved",
    rating: 5
  },
  {
    id: 3,
    name: "Rohan Patel",
    role: "Organizer",
    hub: "Founders Roundtable",
    quote: "Our members love the sleek glass UI. The checkout is Stripe-native and takes 10 seconds, which doubled our subscription conversion rate.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    metric: "2x Rate",
    metricLabel: "Conversions",
    rating: 5
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="py-24 md:py-32 bg-white text-slate-900 z-20 relative select-none text-left font-sans border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Reviews</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-display uppercase">
            HEAR FROM THE LEADING <br />
            COMMUNITY HOSTS.
          </h2>
          
          <p className="text-slate-500 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Discover how organizers are replacing cluttered chat groups and spreadsheets with one automated home.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-205/70 rounded-2xl p-6.5 flex flex-col justify-between hover:shadow-premium transition-all duration-200 shadow-xs h-[300px]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                    {item.hub}
                  </span>
                </div>

                <div className="space-y-2 relative text-left">
                  <Quote className="w-6 h-6 text-primary/10 absolute -top-1.5 -left-1" />
                  <p className="text-slate-600 text-[11px] leading-relaxed font-medium pl-5 italic font-sans">
                    “{item.quote}”
                  </p>
                </div>
              </div>

              {/* User details & Metrics strip */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-2.5">
                  <div className="h-8 w-8 rounded-full overflow-hidden relative border border-slate-200 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-900 block leading-none font-display">{item.name}</span>
                    <span className="text-[8.5px] text-slate-400 font-semibold block mt-0.5">{item.role}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-primary font-display block leading-none">{item.metric}</span>
                  <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">{item.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
