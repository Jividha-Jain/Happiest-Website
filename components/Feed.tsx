"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import {
  Sparkles,
  Check,
  MessageSquare,
  Heart,
  MessageCircle,
  Send,
  CheckCircle2,
  MoreHorizontal,
  BookOpen,
  Radio,
  Users,
  Paintbrush,
  Award,
  BarChart3,
  CalendarDays,
  ArrowRight,
  BadgeDollarSign,
  Wallet,
  ShoppingBag,
  X,
  ChevronRight,
  ChevronLeft,
  Zap,
  Layers,
  Repeat,
  ShieldCheck,
  MousePointerClick,
  Search,
  UserPlus
} from "lucide-react";

/* --- Flow Diagram Steps Data --- */
interface FlowStep {
  id: string;
  stepNum: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  anchor: "top" | "bottom" | "left" | "right" | "center";
  position: { top: string; left: string; width: string; height: string };
}

const FLOW_STEPS: FlowStep[] = [
  {
    id: "discover",
    stepNum: "STEP 01",
    title: "1. Discover",
    description: "Attract new members through an SEO-optimized club website, automated synchronization with Instagram, WhatsApp, and Facebook, and discoverability on our public marketplace.",
    tags: [],
    icon: Sparkles,
    anchor: "top",
    position: { top: "5%", left: "36%", width: "27%", height: "19%" }
  },
  {
    id: "join",
    stepNum: "STEP 02",
    title: "2. Join",
    description: "Deliver a frictionless onboarding experience with customizable intake forms, comprehensive member profiles, and an integrated member CRM with custom tags.",
    tags: [],
    icon: UserPlus,
    anchor: "right",
    position: { top: "26%", left: "63%", width: "31%", height: "19%" }
  },
  {
    id: "engage",
    stepNum: "STEP 03",
    title: "3. Engage",
    description: "Foster active community interactions with engaging posts, polls, and discussions, dedicated channels for 1:1 and group chats, and vibrant live events and activities.",
    tags: [],
    icon: Zap,
    anchor: "right",
    position: { top: "55%", left: "63%", width: "31%", height: "19%" }
  },
  {
    id: "transact",
    stepNum: "STEP 04",
    title: "4. Transact",
    description: "Monetize your community seamlessly with digital products and courses, bookable services and 1:1 sessions, and flexible paid memberships and clubs.",
    tags: [],
    icon: BadgeDollarSign,
    anchor: "bottom",
    position: { top: "76%", left: "34%", width: "30%", height: "17%" }
  },
  {
    id: "support",
    stepNum: "STEP 05",
    title: "5. Support",
    description: "Provide dedicated, responsive care with support tickets, high-quality 1:1 audio and video calls, and a 24/7 intelligent Club AI agent powered by HGPT.",
    tags: [],
    icon: ShieldCheck,
    anchor: "left",
    position: { top: "55%", left: "6%", width: "31%", height: "19%" }
  },
  {
    id: "return",
    stepNum: "STEP 06",
    title: "6. Return",
    description: "Keep members coming back with gamified loyalty programs and rewards, competitive leaderboards and recognition, and automated broadcast and scheduled notifications.",
    tags: [],
    icon: Repeat,
    anchor: "left",
    position: { top: "26%", left: "6%", width: "31%", height: "19%" }
  },
  {
    id: "center-hub",
    stepNum: "CORE ENGINE",
    title: "One Relationship Graph",
    description: "Keep all member conversations, transactions, and behavioral signals seamlessly synchronized in real-time across your entire community ecosystem.",
    tags: [],
    icon: Layers,
    anchor: "bottom",
    position: { top: "27%", left: "32%", width: "36%", height: "48%" }
  }
];

/* --- Tabs config ------------ */
const TABS = [
  { id: "management",    label: "Community Management" },
  { id: "events",        label: "Events & Bookings" },
  { id: "chats",         label: "Chats & Discussions" },
  { id: "memberships",   label: "Memberships" },
  { id: "payments",      label: "Payments" },
  { id: "marketplace",   label: "Marketplace" },
];

/* --- Tab content config - */
const TAB_CONTENT: Record<string, {
  heading: string;
  features: string[];
  testimonial: { quote: string; name: string; role: string };
}> = {
  management: {
    heading: "Create public or private communities with complete member control.",
    features: [
      "Built for engagement",
      "Personalized feed",
      "Posts and comments with rich media",
      "Automated moderation",
      "Search with unlimited history",
    ],
    testimonial: {
      quote: "\"Happiest has hosted two communities I've built. Each time, it's been important for the community to have flexibility, the ability to be customized, and create a seamless member experience.\"",
      name: "Reina Pomeroy",
      role: "Sr. Director of Community",
    },
  },
  events: {
    heading: "Host workshops, meetups, classes, and experiences with seamless booking management.",
    features: [
      "Virtual & in-person events",
      "RSVP & waitlist management",
      "Automated reminders",
      "Recording & replay access",
      "Calendar integrations",
    ],
    testimonial: {
      quote: "\"Our weekly events went from 20 attendees to 200+ after switching to Happiest's platform.\"",
      name: "Vikram Singh",
      role: "Events Lead",
    },
  },
  chats: {
    heading: "Keep members engaged through conversations, announcements, and interactive discussions.",
    features: [
      "1:1 and group messaging",
      "Threaded conversations",
      "File and media sharing",
      "Read receipts & typing indicators",
      "Push notifications",
    ],
    testimonial: {
      quote: "\"The messaging experience in Happiest feels native and instant. Our members love the seamless communication flow.\"",
      name: "Arjun Mehta",
      role: "Community Manager",
    },
  },
  memberships: {
    heading: "Offer free or paid memberships with flexible plans and exclusive access.",
    features: [
      "Cohort-based & self-paced",
      "Drip content scheduling",
      "Quizzes and assessments",
      "Completion certificates",
      "Integrated with discussions",
    ],
    testimonial: {
      quote: "\"We moved our entire course library to Happiest and saw a 3x improvement in completion rates.\"",
      name: "Sneha Kapoor",
      role: "Head of Education",
    },
  },
  payments: {
    heading: "Accept payments, manage wallets, and automate member transactions.",
    features: [
      "Points & XP system",
      "Custom badges & achievements",
      "Leaderboards",
      "Milestone rewards",
      "Automated recognition",
    ],
    testimonial: {
      quote: "\"Gamification increased our daily active users by 45%. Members actually compete to contribute.\"",
      name: "Kiran Patel",
      role: "Growth Lead",
    },
  },
  marketplace: {
    heading: "Sell products, merchandise, digital goods, or event tickets from your own community.",
    features: [
      "Searchable member directory",
      "Rich member profiles",
      "Tag-based filtering",
      "Location & interest matching",
      "Direct connect requests",
    ],
    testimonial: {
      quote: "\"The directory feature alone made Happiest worth it. Our members network 10x more than before.\"",
      name: "Rahul Joshi",
      role: "Founder",
    },
  },
};

/* --- Ease -------------------------------------- */
const ease = [0.22, 1, 0.36, 1] as [number,number,number,number];

/* ════════════════════════════════════════════════
   MAIN FEED SECTION — Dark Theme (Matched with WhatIsHappiest)
   ════════════════════════════════════════════════ */
export default function Feed() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Selected flow diagram step for modal explanation
  const [selectedStep, setSelectedStep] = useState<FlowStep | null>(null);
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});

  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleAutoClose = (delay = 3500) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setSelectedStep(null);
      setPopoverStyle({});
    }, delay);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearCloseTimer();
        setSelectedStep(null);
        setPopoverStyle({});
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Dismiss on scroll so it never sticks around
  useEffect(() => {
    const handleScroll = () => {
      if (selectedStep) {
        clearCloseTimer();
        setSelectedStep(null);
        setPopoverStyle({});
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedStep]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const openStep = (step: FlowStep, element: HTMLElement) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    const rect = element.getBoundingClientRect();
    const cardWidth = 275;
    const cardHeight = 185;
    const GAP = 14;
    let style: React.CSSProperties = { position: "fixed", zIndex: 9999 };

    if (window.innerWidth < 640) {
      style = {
        ...style,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "calc(100vw - 32px)",
      };
    } else if (step.anchor === "top") {
      // Opens Above step box
      const top = Math.max(16, rect.top - cardHeight - GAP);
      const left = Math.max(16, Math.min(rect.left + rect.width / 2 - cardWidth / 2, window.innerWidth - cardWidth - 16));
      style = { ...style, top, left };
    } else if (step.anchor === "bottom") {
      // Opens Below step box
      const top = rect.bottom + GAP;
      const left = Math.max(16, Math.min(rect.left + rect.width / 2 - cardWidth / 2, window.innerWidth - cardWidth - 16));
      style = { ...style, top, left };
    } else if (step.anchor === "right") {
      // Opens to the Right of step box
      const left = Math.min(rect.right + GAP, window.innerWidth - cardWidth - 16);
      const top = Math.max(16, Math.min(rect.top + rect.height / 2 - cardHeight / 2, window.innerHeight - cardHeight - 16));
      style = { ...style, top, left };
    } else if (step.anchor === "left") {
      // Opens to the Left of step box
      const left = Math.max(16, rect.left - cardWidth - GAP);
      const top = Math.max(16, Math.min(rect.top + rect.height / 2 - cardHeight / 2, window.innerHeight - cardHeight - 16));
      style = { ...style, top, left };
    } else {
      const left = Math.max(16, Math.min(rect.left + rect.width / 2 - cardWidth / 2, window.innerWidth - cardWidth - 16));
      const top = Math.max(16, rect.top - cardHeight - GAP);
      style = { ...style, top, left };
    }
    setPopoverStyle(style);
    setSelectedStep(step);
    scheduleAutoClose(4500);
  };

  return (
    <section
      id="feed"
      ref={containerRef}
      className="relative py-14 sm:py-24 md:py-32 z-20 font-sans overflow-hidden"
      style={{ background: "linear-gradient(160deg, #181735 0%, #0e1029 45%, #090d22 100%)" }}
    >
      {/* Subtle top ambient glow for smooth color harmony */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-12 lg:px-24">

        {/* -- Header -- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center space-y-3.5 mb-8 sm:mb-12"
        >
          {/* Top label pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10.5px] sm:text-xs font-bold tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            One Relationship Graph
          </div>

          <h2
            className="text-[26px] sm:text-[38px] md:text-[46px] font-black tracking-tight text-white leading-tight font-display px-2"
          >
            How Happiest.team Compounds Your Business
          </h2>

          {/* Highlight Tagline */}
          <p className="text-purple-300 text-sm sm:text-[17px] md:text-[18.5px] font-bold tracking-wide px-2">
            One member record. Every interaction. No silos.
          </p>

          {/* Subtitle Body Text */}
          <p className="text-slate-300 text-xs sm:text-[15.5px] font-normal max-w-2xl mx-auto leading-relaxed px-2"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Each capability feeds the next stage of the same loop. A visitor becomes a member, a member becomes a buyer, and a buyer comes back, without leaving your community or costing you ad spend.
          </p>

          {/* Desktop Only: Hint Badge */}
          <div className="hidden md:flex pt-2 items-center justify-center gap-2 text-purple-300 text-xs font-semibold bg-purple-500/10 border border-purple-500/20 px-4.5 py-2 rounded-full w-max mx-auto shadow-xs">
            <MousePointerClick className="w-4 h-4 text-purple-400 animate-bounce" />
            <span>Click any step to explore what&apos;s inside</span>
          </div>
        </motion.div>

      </div>{/* end content wrapper */}

      {/* -- Flow Diagram Showcase (full width, outside content wrapper) -- */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="w-full flex justify-center py-2 sm:py-4 px-2 sm:px-4"
      >
        <div className="relative w-full max-w-[980px] mx-auto flex items-center justify-center">

          {/* Layered Ambient Halos */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[720px] h-[320px] sm:h-[480px] bg-purple-700/20 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none z-0 animate-halo-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[500px] h-[240px] sm:h-[350px] bg-indigo-500/25 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none z-0" />

          {/* Main Diagram Container */}
          <div className="relative w-full z-10 animate-gentle-float">

            {/* Diagram Image */}
            <div className="relative w-full pointer-events-none">
              <Image
                src="/images/Flow-Diagram.png"
                alt="Features Flow Diagram"
                width={1680}
                height={1120}
                className="w-full h-auto object-contain block mx-auto"
                unoptimized
                priority
              />
            </div>

            {/* Desktop Only Clickable Hotspots (hidden on mobile so no popups open on phone) */}
            <div className="hidden md:block">
              {FLOW_STEPS.map((step) => {
                const isSelected = selectedStep?.id === step.id;
                return (
                  <button
                    key={step.id}
                    onMouseEnter={(e) => {
                      clearCloseTimer();
                      openStep(step, e.currentTarget);
                    }}
                    onMouseLeave={() => {
                      scheduleAutoClose(600);
                    }}
                    onClick={(e) => {
                      if (isSelected) {
                        clearCloseTimer();
                        setSelectedStep(null);
                        setPopoverStyle({});
                      } else {
                        openStep(step, e.currentTarget);
                      }
                    }}
                    style={{
                      top: step.position.top,
                      left: step.position.left,
                      width: step.position.width,
                      height: step.position.height,
                    }}
                    className="absolute z-30 cursor-pointer focus:outline-none bg-transparent border-none"
                    aria-label={`Explore ${step.title}`}
                  />
                );
              })}
            </div>

            {/* Subtle shimmer sweep */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-3xl">
              <div className="w-[35%] h-[250%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transform -rotate-45 animate-shimmer-sweep pointer-events-none" />
            </div>
          </div>

        </div>
      </motion.div>

      {/* Popover card — Desktop only */}
      <AnimatePresence mode="wait">
        {selectedStep && (
          <motion.div
            key={selectedStep.id}
            initial={{ opacity: 0, scale: 0.95, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 6 }}
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
            onMouseEnter={clearCloseTimer}
            onMouseLeave={() => scheduleAutoClose(800)}
            style={popoverStyle}
            className="hidden md:block w-[275px] bg-white text-slate-900 border border-slate-100 rounded-[22px] shadow-[0_20px_45px_-10px_rgba(15,10,40,0.2),0_4px_16px_rgba(0,0,0,0.06)] p-4 sm:p-4.5 font-sans pointer-events-auto"
          >
            {/* Top row: Icon + Step Badge & Close button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9.5 h-9.5 rounded-full bg-[#ECE8FD] flex items-center justify-center text-[#2D0C70] shrink-0">
                  {selectedStep.icon ? (
                    React.createElement(selectedStep.icon, { className: "w-4.5 h-4.5 stroke-[2.2]" })
                  ) : (
                    <Sparkles className="w-4.5 h-4.5 stroke-[2.2]" />
                  )}
                </div>
                <span className="text-[10.5px] font-extrabold tracking-wider uppercase bg-[#ECE8FD] text-[#2D0C70] px-2.5 py-1 rounded-full">
                  {selectedStep.stepNum || "STEP"}
                </span>
              </div>
              <button
                onClick={() => { setSelectedStep(null); setPopoverStyle({}); }}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 stroke-[2]" />
              </button>
            </div>

            {/* Title & Description Paragraph */}
            <div className="mt-3.5 space-y-1.5">
              <h3 className="text-lg sm:text-[20px] font-black text-[#0B0625] tracking-tight leading-tight">
                {selectedStep.title}
              </h3>
              <p className="text-[13.5px] text-slate-600 leading-relaxed font-normal">
                {selectedStep.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Global CSS Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes haloPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.75; }
        }
        @keyframes shimmerSweep {
          0% { transform: translate(-150%, -50%) rotate(-45deg); }
          30%, 100% { transform: translate(250%, -50%) rotate(-45deg); }
        }
        .animate-gentle-float {
          animation: gentleFloat 6.5s ease-in-out infinite;
        }
        .animate-halo-pulse {
          animation: haloPulse 5.5s ease-in-out infinite;
        }
        .animate-shimmer-sweep {
          animation: shimmerSweep 7s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
