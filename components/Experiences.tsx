"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Calendar, Check, Ticket, Users } from "lucide-react";
import Image from "next/image";

const MAIN_EVENT = {
  title: "Sunday Morning Run & Coffee",
  category: "Fitness & Social",
  date: "Sun, June 28",
  time: "8:00 AM - 10:30 AM",
  location: "Radio Coffee & Zilker Park, Austin",
  availableSeats: "6 spots left",
  image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=500&q=80",
};

const SMALL_EVENTS = [
  {
    id: 1,
    title: "Sunday Yoga in the Park",
    date: "Sun, July 5 &bull; 9:00 AM",
    location: "Zilker Park Lawn",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "Coffee & Conversations",
    date: "Tue, July 7 &bull; 8:00 AM",
    location: "Radio Coffee & Beer",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "Paint & Sip Social",
    date: "Fri, July 10 &bull; 6:30 PM",
    location: "Eastside Art Studio",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    title: "Founder Dinner",
    date: "Thu, July 16 &bull; 7:00 PM",
    location: "Loro Austin",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Experiences() {
  const [ticketCount, setTicketCount] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <section
      id="experiences"
      className="py-24 md:py-36 bg-muted-peach text-text-dark relative z-20 overflow-hidden border-t border-slate-200/40 select-none text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-bold text-primary-blue uppercase tracking-widest block font-display">
            BOOK NOW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Less scrolling. More showing up.
          </h2>
          <p className="text-slate-600 text-sm max-w-md font-normal leading-relaxed">
            Browse events, reserve your spot, and keep all your club experiences in one place.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Left: The Main Booking Card Mockup */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-display">
              Featured Experience
            </span>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-1 md:p-1.5 overflow-hidden"
            >
              {/* Chrome headers */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50 rounded-t-xl">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="text-[9.5px] text-slate-400 font-bold tracking-wider font-mono">
                  booking.happiest.team/event
                </div>
                <div className="w-10" />
              </div>

              {/* Booking Body */}
              <div className="p-5 sm:p-7 space-y-5 bg-white text-left text-xs leading-relaxed">
                <AnimatePresence mode="wait">
                  {!isConfirmed ? (
                    <motion.div
                      key="booking-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      {/* Big Cover Image */}
                      <div className="relative h-48 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/50 shadow-xs">
                        <Image
                          src={MAIN_EVENT.image}
                          alt={MAIN_EVENT.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-3 left-4 bg-primary-blue text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full font-display">
                          {MAIN_EVENT.category}
                        </div>
                      </div>

                      {/* Event Heading */}
                      <div className="space-y-1">
                        <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-display leading-tight">
                          {MAIN_EVENT.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-[9.5px] text-slate-500 font-semibold mt-1">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-primary-blue shrink-0" /> {MAIN_EVENT.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary-blue shrink-0" /> {MAIN_EVENT.time}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary-blue shrink-0" /> {MAIN_EVENT.location}</span>
                        </div>
                      </div>

                      {/* Attendance avatars */}
                      <div className="flex items-center space-x-3 py-2 border-y border-slate-100">
                        <div className="flex -space-x-1.5 overflow-hidden">
                          <div className="h-5.5 w-5.5 rounded-full border border-white bg-slate-200 overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&q=80" alt="Av" fill className="object-cover" /></div>
                          <div className="h-5.5 w-5.5 rounded-full border border-white bg-slate-200 overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&q=80" alt="Av" fill className="object-cover" /></div>
                          <div className="h-5.5 w-5.5 rounded-full border border-white bg-slate-200 overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=40&q=80" alt="Av" fill className="object-cover" /></div>
                        </div>
                        <span className="text-[8.5px] text-slate-400 font-extrabold uppercase tracking-wider">{MAIN_EVENT.availableSeats}</span>
                      </div>

                      {/* Ticket Count Select */}
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-slate-900 font-bold font-display">General Passes</span>
                        <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 p-0.5 rounded-lg">
                          <button
                            type="button"
                            onClick={() => setTicketCount((prev) => Math.max(1, prev - 1))}
                            className="h-6 w-6 rounded bg-white shadow-xs border border-slate-200 text-slate-700 font-bold flex items-center justify-center cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-slate-900 w-3 text-center">{ticketCount}</span>
                          <button
                            type="button"
                            onClick={() => setTicketCount((prev) => Math.min(4, prev + 1))}
                            className="h-6 w-6 rounded bg-white shadow-xs border border-slate-200 text-slate-700 font-bold flex items-center justify-center cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* CTA Trigger */}
                      <button
                        type="button"
                        onClick={() => setIsConfirmed(true)}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Ticket className="w-3.5 h-3.5 text-primary-blue shrink-0" />
                        <span>Reserve Spot</span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="booking-confirmation"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-8 space-y-4"
                    >
                      <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto shadow-sm">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base font-extrabold text-slate-900 font-display">Booking Confirmed!</h4>
                        <p className="text-[10.5px] text-slate-500 max-w-xs mx-auto leading-relaxed font-normal">
                          We have reserved {ticketCount} passes for **{MAIN_EVENT.title}**. Access tickets have been sent to your email.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsConfirmed(false)}
                        className="text-[9.5px] font-bold text-primary-blue hover:underline bg-transparent"
                      >
                        Book another slot
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Right: Editorial travel-style list layout of 3 smaller event cards */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-display">
              Upcoming Experiences
            </span>

            {/* Editorial Stack */}
            <div className="space-y-6">
              {SMALL_EVENTS.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex border-b border-slate-200/60 pb-5 last:border-b-0 last:pb-0 gap-4 group"
                >
                  {/* Event Thumbnail */}
                  <div className="relative h-20 w-28 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Event copy */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5 text-left text-xs leading-normal">
                    <div>
                      <h4 className="text-[11.5px] font-extrabold text-slate-900 font-display group-hover:text-primary-blue transition-colors truncate">
                        {item.title}
                      </h4>
                      <span className="text-[8px] font-bold text-slate-450 uppercase block mt-1 tracking-wider" dangerouslySetInnerHTML={{ __html: item.date }} />
                    </div>
                    
                    <div className="flex items-center space-x-1 text-[9px] text-slate-500 font-semibold mt-1">
                      <MapPin className="w-3 h-3 text-primary-blue shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
