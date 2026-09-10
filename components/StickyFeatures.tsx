"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { 
  Compass, CalendarDays, MessageSquare, Users, BrainCircuit,
  Search, MapPin, Ticket, Send, Sparkles
} from "lucide-react";
import Image from "next/image";

const SLIDES = [
  {
    id: "discovery",
    title: "Discover Communities",
    description: "Find your people. Explore a rich directory of clubs and spaces tailored to your interests, curated automatically.",
    icon: Compass,
    color: "#4f46e5", // Indigo
  },
  {
    id: "events",
    title: "Seamless Events",
    description: "Host meetups, classes, and large events with built-in ticketing, waitlists, and RSVP management.",
    icon: CalendarDays,
    color: "#f97316", // Orange
  },
  {
    id: "chat",
    title: "Engaging Discussions",
    description: "Keep the conversation flowing with organized channels, direct messages, and rich media support.",
    icon: MessageSquare,
    color: "#ec4899", // Pink
  },
  {
    id: "members",
    title: "Member Directories",
    description: "Get to know who is who. Rich member profiles help your community connect on a deeper level.",
    icon: Users,
    color: "#06b6d4", // Cyan
  },
  {
    id: "ai",
    title: "AI-Powered Autopilot",
    description: "Your personal assistant. Happiest AI answers questions, curates content, and welcomes members automatically.",
    icon: BrainCircuit,
    color: "#8b5cf6", // Purple
  }
];

export default function StickyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) setActiveSlide(0);
    else if (latest < 0.4) setActiveSlide(1);
    else if (latest < 0.6) setActiveSlide(2);
    else if (latest < 0.8) setActiveSlide(3);
    else setActiveSlide(4);
  });

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#0a0e1a] z-20 font-sans"
      style={{ height: "250vh" }} // Reduced from 500vh to make scrolling faster
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Ambient background glow based on active slide color */}
        <div 
          className="absolute inset-0 transition-colors duration-1000 ease-in-out opacity-20"
          style={{ 
            background: `radial-gradient(circle at 70% 50%, ${SLIDES[activeSlide].color}, transparent 60%)` 
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full py-20 lg:py-0 gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-12 self-start">
              <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.9)]" />
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.12em]">
                Everything in one platform
              </span>
            </div>

            {/* Slides Indicator Dots */}
            <div className="flex items-center gap-2 mb-8">
              {SLIDES.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === activeSlide ? "w-8 bg-white" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Text Crossfade */}
            <div className="relative h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {React.createElement(SLIDES[activeSlide].icon, { 
                      className: "w-8 h-8", 
                      style: { color: SLIDES[activeSlide].color } 
                    })}
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                      {SLIDES[activeSlide].title}
                    </h2>
                  </div>
                  <p className="text-[17px] md:text-[19px] text-slate-400 leading-relaxed max-w-lg mt-6">
                    {SLIDES[activeSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: Visual Mockups */}
          <div className="w-full lg:w-[50%] h-[400px] lg:h-[600px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeSlide === 0 && <DiscoveryMockup key="discovery" />}
              {activeSlide === 1 && <EventsMockup key="events" />}
              {activeSlide === 2 && <ChatMockup key="chat" />}
              {activeSlide === 3 && <MembersMockup key="members" />}
              {activeSlide === 4 && <AiMockup key="ai" />}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   VISUAL MOCKUPS
   ════════════════════════════════════════════════ */

const mockupVariants: any = {
  initial: { opacity: 0, scale: 0.95, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.95, y: -30, transition: { duration: 0.4 } }
};

function MacWindowWrapper({ children, url }: { children: React.ReactNode, url: string }) {
  return (
    <motion.div 
      variants={mockupVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      className="relative w-full h-[500px] lg:h-[600px] max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col"
    >
      <div className="h-12 bg-white border-b border-slate-100 flex items-center px-4 shrink-0 justify-between">
        <div className="flex gap-2 w-20">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="bg-slate-50 text-slate-500 text-[12px] font-medium px-4 py-1.5 rounded-full border border-slate-200 flex items-center gap-2 min-w-[240px] justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
            happiest.team <span className="text-slate-300">/</span> <span className="text-[#7c3aed]">{url}</span>
          </div>
        </div>
        
        <div className="w-20 flex justify-end gap-3 text-slate-300">
          <span className="text-[10px]">←</span>
          <span className="text-[10px]">→</span>
          <span className="text-[10px]">↻</span>
        </div>
      </div>
      <div className="flex-1 w-full bg-white relative overflow-hidden flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}

function DiscoveryMockup() {
  return (
    <MacWindowWrapper url="discover">
      <div className="flex-1 w-full relative bg-white">
        <Image 
          src={`/images/Club.png`} 
          alt="Discovery Screen" 
          fill 
          className="object-cover object-top" 
          unoptimized 
        />
      </div>
    </MacWindowWrapper>
  );
}

function EventsMockup() {
  return (
    <motion.div variants={mockupVariants} initial="initial" animate="animate" exit="exit" className="relative w-full h-[500px] lg:h-[600px] max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col">
      <div className="flex-1 w-full relative bg-white">
        <Image 
          src={`/images/slide2-events.png?v=1`} 
          alt="Events Screen" 
          fill 
          className="object-cover object-top" 
          unoptimized 
        />
      </div>
    </motion.div>
  );
}

function ChatMockup() {
  return (
    <motion.div variants={mockupVariants} initial="initial" animate="animate" exit="exit" className="relative w-full h-[500px] lg:h-[600px] max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col">
      <div className="flex-1 w-full relative bg-white">
        <Image 
          src={`/images/slide3-chat.png?v=1`} 
          alt="Chat Screen" 
          fill 
          className="object-cover object-top" 
          unoptimized 
        />
      </div>
    </motion.div>
  );
}

function MembersMockup() {
  const membersList = [
    { name: "Priya Sharma", role: "Organizer", clubs: 3, color: "bg-indigo-500" },
    { name: "Marcus Lewis", role: "Member", clubs: 2, color: "bg-emerald-500" },
    { name: "Sophie Renard", role: "Co-host", clubs: 4, color: "bg-pink-500" },
    { name: "Kevin Zhang", role: "Member", clubs: 1, color: "bg-cyan-500" },
  ];

  return (
    <MacWindowWrapper url="members">
      <div className="flex-1 bg-[#12182a] flex flex-col items-center justify-center relative p-6">
        <div className="absolute -inset-10 bg-cyan-500/10 blur-3xl -z-10 rounded-full" />
        <div className="w-full max-w-md bg-[#1a2235] border border-white/10 rounded-[24px] p-6 shadow-2xl relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-white text-lg">Community Members</h3>
            <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-md">Total 1,240</span>
          </div>

          <div className="space-y-4">
            {membersList.map((m, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${m.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {m.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{m.name}</h4>
                    <p className="text-xs text-slate-400">{m.clubs} shared clubs</p>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${
                  m.role === 'Organizer' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/20' :
                  m.role === 'Co-host' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/20' :
                  'bg-slate-800 text-slate-400 border border-slate-700'
                }`}>
                  {m.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MacWindowWrapper>
  );
}

function AiMockup() {
  return (
    <MacWindowWrapper url="ai">
      <div className="flex-1 bg-[#12182a] flex flex-col items-center justify-center relative p-6">
        <div className="absolute -inset-10 bg-purple-500/10 blur-3xl -z-10 rounded-full" />
        
        <div className="w-full max-w-md bg-[#1a2235] border border-white/10 rounded-[24px] p-6 shadow-2xl relative z-10 overflow-hidden">
          {/* Animated border glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 shrink-0">
              <BrainCircuit className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white">Happiest AI Autopilot</h3>
              <p className="text-xs text-slate-400">Online & learning</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-slate-300">
              Your community has grown by <span className="text-emerald-400 font-bold">+24%</span> this week. I recommend scheduling an onboarding event to boost engagement.
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 flex gap-3">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Generated Draft</h4>
                <p className="text-xs text-purple-200/70 mb-3">
                  &quot;Welcome to all new members! Let&apos;s meet up this Friday...&quot;
                </p>
                <button className="text-[10px] font-bold bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded-md transition-colors uppercase tracking-wider">
                  Approve & Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MacWindowWrapper>
  );
}
