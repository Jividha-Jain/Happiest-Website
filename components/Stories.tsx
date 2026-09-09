"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Story {
  id: number;
  clubName: string;
  title: string;
  excerpt: string;
  quote: string;
  founder: string;
  image: string;
}

const STORIES: Story[] = [
  {
    id: 1,
    clubName: "Sunday Run Club",
    title: "How Sunday Run Club turned strangers into friends",
    excerpt: "What started as three runners meeting by the bridge is now a city-wide weekly ritual of 1,200 active members.",
    quote: "“We came for the fitness, but stayed for the coffee breakfast mixers. It changed how we live in the city.”",
    founder: "Rohan Patel &bull; Founder",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    clubName: "Creative Makers",
    title: "From one pottery class to a creative community",
    excerpt: "Our clay socials have grown from single hand-building classes into a sanctuary for 420 active makers.",
    quote: "“I booked a pottery class to unwind. Today, I lead weekly glaze sessions. It is my creative sanctuary.”",
    founder: "Meera Shah &bull; Founder",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    clubName: "Founders Club",
    title: "A better way for founders to meet offline",
    excerpt: "Ditching virtual pitches for breakfast mixers let us talk naturally. We built lifelong friendships here.",
    quote: "“Co-founding can be lonely. Meeting face-to-face over breakfast let us connect naturally without pitch decks.”",
    founder: "Kabir Mehta &bull; Founder",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollToVal =
        direction === "left" ? scrollLeft - clientWidth * 0.6 : scrollLeft + clientWidth * 0.6;
      scrollRef.current.scrollTo({ left: scrollToVal, behavior: "smooth" });
    }
  };

  return (
    <section
      id="stories"
      className="py-24 md:py-36 bg-warm-cream text-text-dark relative z-20 overflow-hidden border-t border-slate-200/40 select-none text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading & Navigation controllers */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 max-w-5xl mx-auto">
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-primary-blue uppercase tracking-widest block font-display">
              COMMUNITY STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Great clubs create better lives.
            </h2>
            <div className="h-0.5 w-12 bg-primary-blue rounded mt-2" />
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-2.5">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer text-slate-800 shadow-sm"
              title="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer text-slate-800 shadow-sm"
              title="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable stories deck */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-8 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth snap-x snap-mandatory flex-nowrap max-w-5xl mx-auto"
        >
          {STORIES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="snap-align-start shrink-0 w-[300px] sm:w-[460px] md:w-[520px] bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:shadow-xl transition-all duration-300"
            >
              {/* Cover Image */}
              <div className="relative h-48 sm:h-56 w-full bg-slate-100 border-b border-slate-200 shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-slate-900/90 text-white text-[8.5px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-white/10 font-display">
                  {item.clubName}
                </span>
              </div>

              {/* Story Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug font-display">
                    {item.title}
                  </h3>
                  
                  <p className="text-[10.5px] text-slate-500 font-normal leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <p className="text-[10.5px] text-slate-600 font-normal leading-relaxed italic border-l-2 border-primary-blue pl-3 py-0.5">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-150 flex items-center justify-between text-[10px] font-bold select-none">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold" dangerouslySetInnerHTML={{ __html: item.founder }} />
                  <a href="#" className="flex items-center space-x-1 font-bold text-primary-blue hover:text-primary-blue/80 transition-colors">
                    <span>Read story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
