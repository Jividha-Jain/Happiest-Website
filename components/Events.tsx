"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Heart, Check, ChevronRight, Award, ShieldCheck, Ticket } from "lucide-react";
import Image from "next/image";

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  spots: string;
  image: string;
  price: string;
}

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Sunset Rooftop Mixer & Drinks",
    date: "June 28",
    time: "6:00 PM PST",
    location: "Loom Loft, Austin TX",
    spots: "18 slots left",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
    price: "$15.00"
  },
  {
    id: 2,
    title: "Watercolor & Botanical Painting",
    date: "June 29",
    time: "2:00 PM PST",
    location: "Creative Hive, Brooklyn NY",
    spots: "4 slots left",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80",
    price: "Free"
  },
  {
    id: 3,
    title: "Early Stage Founders Roundtable",
    date: "July 2",
    time: "8:00 AM PST",
    location: "Capital Factory, Austin TX",
    spots: "12 slots left",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    price: "$25.00"
  }
];

export default function Events() {
  const [rsvped, setRsvped] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Tick Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 24, minutes: 0, seconds: 0 }; // Loop it
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRsvp = (id: number) => {
    setRsvped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      ref={containerRef}
      id="events"
      className="py-24 md:py-36 bg-gradient-to-br from-[#FAFBFF] via-[#FFF6F2] to-[#FFF0E6] text-slate-900 relative z-20 overflow-hidden border-t border-slate-100 select-none text-left font-sans"
    >
      {/* Decorative Warm Aurora spots */}
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-orange-400/5 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-rose-450/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        
        {/* Title Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/5 border border-rose-500/10 text-[9px] font-black uppercase tracking-widest text-rose-500 shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-rose-500" />
              <span>Real-Time Scheduling</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] font-display uppercase">
              EXPERIENCE EVENTS <br />
              IN REAL TIME.
            </h2>
            
            <p className="text-slate-500 text-sm sm:text-base max-w-xl font-normal leading-relaxed font-sans">
              Ditch complicated scheduling threads. Schedule, RSVP, pay, and receive tickets instantly with one integrated portal.
            </p>
          </div>
          
          {/* Live Countdown widget */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="bg-white rounded-3xl border border-slate-200/50 p-6 shadow-premium flex flex-col justify-center min-w-[280px]">
              <span className="text-[8.5px] font-black text-rose-500 uppercase tracking-widest block font-display">NEXT SUNSET RUN DEPARTS IN</span>
              <div className="flex items-center space-x-4 mt-3">
                <div className="text-center">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 font-display block">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Hours</span>
                </div>
                <span className="text-2xl font-black text-slate-205 font-display">:</span>
                <div className="text-center">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 font-display block">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Mins</span>
                </div>
                <span className="text-2xl font-black text-slate-205 font-display">:</span>
                <div className="text-center">
                  <span className="text-2xl md:text-3xl font-black text-rose-500 font-display block">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] text-rose-500 font-bold uppercase tracking-wider">Secs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetrical Layout Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Beautiful Event Cards Column */}
          <div className="lg:col-span-7 space-y-6">
            {EVENTS.map((event) => {
              const isRsvped = rsvped[event.id] || false;
              return (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl border border-slate-200/50 p-5 flex flex-col sm:flex-row gap-5 shadow-premium hover:shadow-premium-hover transition-all duration-300 group"
                >
                  <div className="relative h-32 sm:w-44 w-full rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 text-slate-800 text-[8px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                      {event.date}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors font-display">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] text-slate-500 font-semibold mt-1">
                        <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-slate-400" /> {event.time}</span>
                        <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" /> {event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <div className="flex items-center space-x-2 text-[10px] font-semibold text-slate-500">
                        <span className="flex items-center text-rose-500"><Users className="w-3.5 h-3.5 mr-1 text-rose-500" /> {event.spots}</span>
                        <span>&bull;</span>
                        <span className="text-emerald-600 font-bold">{event.price}</span>
                      </div>

                      <button
                        onClick={() => handleRsvp(event.id)}
                        className={`px-4.5 py-2.2 rounded-xl text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 border ${
                          isRsvped
                            ? "bg-emerald-500 border-emerald-500 text-white shadow-md"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-205"
                        }`}
                      >
                        {isRsvped ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>RSVP'd</span>
                          </>
                        ) : (
                          <span>RSVP Event</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Premium Event details block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-premium space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 font-display">Active Ticket Stub</span>
                <Ticket className="w-4 h-4 text-rose-500" />
              </div>

              {/* Barcode Mock stub */}
              <div className="border border-dashed border-slate-200 p-4.5 rounded-2xl space-y-3.5 relative overflow-hidden bg-slate-50/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-[11.5px] font-black text-slate-905 font-display leading-tight">Sunset Rooftop Mixer</h5>
                    <span className="text-[9px] text-slate-450 block font-sans font-medium">Loom Loft &bull; June 28</span>
                  </div>
                  <span className="text-[8.5px] font-black text-emerald-600 px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded-lg">PAID</span>
                </div>
                
                {/* Visual Barcode bars */}
                <div className="h-9 w-full flex items-stretch space-x-[2px] opacity-35 pt-1.5">
                  {[2,3,1,2,4,1,2,3,1,4,2,1,3,2,1,4,2,3,1,2,4,1,2,3,1,4].map((w, idx) => (
                    <div key={idx} className="bg-slate-950 rounded-xs" style={{ flexGrow: w }} />
                  ))}
                </div>
              </div>

              {/* Steps/Info */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3.5">
                  <div className="h-6 w-6 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0 font-bold text-[10px]">1</div>
                  <p className="text-slate-500 text-[10.5px] font-semibold leading-relaxed">Select event spaces in the directory.</p>
                </div>
                <div className="flex items-start space-x-3.5">
                  <div className="h-6 w-6 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0 font-bold text-[10px]">2</div>
                  <p className="text-slate-500 text-[10.5px] font-semibold leading-relaxed">RSVP directly; billing is handled instantly via native Stripe gates.</p>
                </div>
                <div className="flex items-start space-x-3.5">
                  <div className="h-6 w-6 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0 font-bold text-[10px]">3</div>
                  <p className="text-slate-500 text-[10.5px] font-semibold leading-relaxed">Export ticket passes directly to Apple Wallet or Google calendar logs.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
