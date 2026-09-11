"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Video,
  Calendar, 
  CreditCard,
  FileText,
  Users,
  User, 
  GraduationCap, 
  ShoppingBag, 
  BarChart3,
  ArrowRight
} from "lucide-react";

interface ProblemProps {
  scrollTo?: (id: string) => void;
}

export default function Problem({ scrollTo }: ProblemProps) {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#faf9ff] border-b border-slate-100 overflow-hidden relative select-none">
      
      {/* Background Soft Purple Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-200/40 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/2" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* =========================================================
              LEFT SIDE: THE PROBLEM
          ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left relative"
          >
            {/* Eyebrow Pill Badge */}
            <span className="inline-block px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#ede5ff] text-[#7c3aed] text-[10.5px] sm:text-[11px] font-extrabold tracking-wider uppercase mb-3.5 sm:mb-5">
              THE PROBLEM
            </span>

            {/* Main Title */}
            <h2 className="text-[26px] sm:text-4xl md:text-[42px] font-extrabold text-[#0f172a] leading-[1.15] sm:leading-[1.12] tracking-tight font-display mb-3.5 sm:mb-4">
              Running a community <br />
              shouldn&apos;t mean using <br />
              <span className="text-[#7c3aed]">6 different tools.</span>
            </h2>

            {/* Subtext Paragraph */}
            <p className="text-xs sm:text-[15px] text-slate-500 leading-relaxed font-normal max-w-md sm:max-w-lg mb-6 sm:mb-8 px-1 sm:px-0">
              Creators and businesses waste time switching between apps to manage chats, events, payments, content and members — leading to confusion, missed opportunities and lost revenue.
            </p>

            {/* Row of 6 App Icon Squircles + Labels (All 6 Fit Crisp & Clean on Mobile) */}
            <div className="w-full max-w-[480px]">
              <div className="grid grid-cols-6 gap-1 sm:gap-2.5 items-center justify-items-center">
                
                {/* 1. Chat */}
                <div className="flex flex-col items-center gap-1 sm:gap-1.5 w-full">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#e6f7ed] flex items-center justify-center shadow-sm text-[#16a34a]">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <span className="text-[9.5px] sm:text-[11px] font-bold text-slate-600 truncate">Chat</span>
                </div>

                {/* 2. Meetings */}
                <div className="flex flex-col items-center gap-1 sm:gap-1.5 w-full">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#eaf3ff] flex items-center justify-center shadow-sm text-[#2563eb]">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <span className="text-[9.5px] sm:text-[11px] font-bold text-slate-600 truncate">Meetings</span>
                </div>

                {/* 3. Events */}
                <div className="flex flex-col items-center gap-1 sm:gap-1.5 w-full">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#fde8f0] flex items-center justify-center shadow-sm text-[#e11d48]">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <span className="text-[9.5px] sm:text-[11px] font-bold text-slate-600 truncate">Events</span>
                </div>

                {/* 4. Payments */}
                <div className="flex flex-col items-center gap-1 sm:gap-1.5 w-full">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#f1eaff] flex items-center justify-center shadow-sm text-[#7c3aed]">
                    <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <span className="text-[9.5px] sm:text-[11px] font-bold text-slate-600 truncate">Payments</span>
                </div>

                {/* 5. Content */}
                <div className="flex flex-col items-center gap-1 sm:gap-1.5 w-full">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#fff1e8] flex items-center justify-center shadow-sm text-[#f97316]">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <span className="text-[9.5px] sm:text-[11px] font-bold text-slate-600 truncate">Content</span>
                </div>

                {/* 6. Members */}
                <div className="flex flex-col items-center gap-1 sm:gap-1.5 w-full">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#e6f8f6] flex items-center justify-center shadow-sm text-[#0d9488]">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <span className="text-[9.5px] sm:text-[11px] font-bold text-slate-600 truncate">Members</span>
                </div>

              </div>

              {/* Hand-drawn Curly Underbrace SVG */}
              <div className="w-full flex justify-center mt-2.5 sm:mt-3">
                <svg className="w-[92%] sm:w-[85%] max-w-[340px] h-4 sm:h-5 text-slate-300" viewBox="0 0 340 24" fill="none">
                  <path 
                    d="M 12 4 Q 12 16, 80 16 L 155 16 Q 170 16, 170 22 Q 170 16, 185 16 L 260 16 Q 328 16, 328 4" 
                    stroke="#cbd5e1" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                </svg>
              </div>

              {/* Under-bracket Italic Subtext */}
              <div className="text-center text-[11px] sm:text-sm italic text-slate-500 font-sans space-y-0.5 mt-1 sm:mt-1.5">
                <p>Disconnected tools.</p>
                <p>Missed opportunities.</p>
                <p>Lost revenue.</p>
              </div>
            </div>

            {/* Playful Purple Curved Arrow Pointing to Solution Card (Desktop) */}
            <div className="hidden lg:block absolute -right-16 top-[65%] -translate-y-1/2 z-20 pointer-events-none">
              <svg className="w-24 h-20 text-[#8b5cf6]" viewBox="0 0 96 80" fill="none">
                <path 
                  d="M 6 65 C 30 75, 75 55, 88 18" 
                  stroke="#8b5cf6" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                <path 
                  d="M 75 22 L 90 15 L 87 31" 
                  stroke="#8b5cf6" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
              </svg>
            </div>
          </motion.div>


          {/* =========================================================
              RIGHT SIDE: THE SOLUTION CARD
          ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end relative mt-8 sm:mt-10 lg:mt-0"
          >
            {/* Top-Right Floating Handwritten Note + Rays + Arrow (Desktop only) */}
            <div className="hidden lg:flex absolute -top-16 right-6 z-20 flex-col items-end pointer-events-none">
              <div className="relative font-sans text-xs sm:text-sm font-bold italic text-[#7c3aed] space-y-0.5 leading-tight tracking-tight text-right pr-6">
                {/* 3 Ray Burst Lines */}
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b5cf6] absolute -right-1 -top-2.5 sm:-top-3" viewBox="0 0 24 24" fill="none">
                  <line x1="6" y1="18" x2="2" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="16" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="14" x2="23" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p>Simpler.</p>
                <p>Smarter.</p>
                <p>Happier.</p>
              </div>

              {/* Curved Arrow pointing down-left at top of card */}
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#8b5cf6] mr-8 mt-0.5" viewBox="0 0 40 40" fill="none">
                <path 
                  d="M 30 4 Q 12 12, 16 30" 
                  stroke="#8b5cf6" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                <path 
                  d="M 10 24 L 16 31 L 22 25" 
                  stroke="#8b5cf6" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
              </svg>
            </div>

            {/* Main Prominent Solution Card */}
            <div className="w-full max-w-[480px] bg-white rounded-[28px] sm:rounded-[36px] border border-purple-100/90 shadow-[0_16px_50px_rgba(124,58,237,0.06)] sm:shadow-[0_20px_60px_rgba(124,58,237,0.07)] p-6 sm:p-9 flex flex-col justify-between relative z-10">
              
              {/* Brand Header: Purple Squircle Logo + Brand Name */}
              <div className="flex items-center gap-3 mb-6 sm:mb-9">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[15px] sm:rounded-[18px] bg-gradient-to-tr from-[#7c3aed] to-[#8b5cf6] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(124,58,237,0.35)]">
                  <svg className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
                    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
                  </svg>
                </div>
                <span className="text-xl sm:text-[26px] font-extrabold text-[#0f172a] tracking-tight font-display">
                  Happiest.team
                </span>
              </div>

              {/* 6 Pastel Feature Badges Row (3x2 on mobile, 6x1 on desktop) */}
              <div className="pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-slate-100 grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-2 text-center">
                
                {/* 1. Chat (Green) */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] bg-[#e6f7ed] group-hover:bg-[#dcfce7] text-[#16a34a] flex items-center justify-center mb-1.5 sm:mb-2 transition-colors">
                    <MessageSquare className="w-4.5 h-4.5 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-[#0f172a]">Chat</span>
                </div>

                {/* 2. Events (Pink) */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] bg-[#fde8f0] group-hover:bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center mb-1.5 sm:mb-2 transition-colors">
                    <Calendar className="w-4.5 h-4.5 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-[#0f172a]">Events</span>
                </div>

                {/* 3. Members (Blue) */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] bg-[#eaf3ff] group-hover:bg-[#dbeafe] text-[#2563eb] flex items-center justify-center mb-1.5 sm:mb-2 transition-colors">
                    <User className="w-4.5 h-4.5 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-[#0f172a]">Members</span>
                </div>

                {/* 4. Content (Purple) */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] bg-[#f1eaff] group-hover:bg-[#ede9fe] text-[#7c3aed] flex items-center justify-center mb-1.5 sm:mb-2 transition-colors">
                    <GraduationCap className="w-4.5 h-4.5 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-[#0f172a]">Content</span>
                </div>

                {/* 5. Payments (Orange) */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] bg-[#fff1e8] group-hover:bg-[#ffedd5] text-[#f97316] flex items-center justify-center mb-1.5 sm:mb-2 transition-colors">
                    <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-[#0f172a]">Payments</span>
                </div>

                {/* 6. Growth (Teal) */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] bg-[#e6f8f6] group-hover:bg-[#ccfbf1] text-[#0d9488] flex items-center justify-center mb-1.5 sm:mb-2 transition-colors">
                    <BarChart3 className="w-4.5 h-4.5 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-[#0f172a]">Growth</span>
                </div>

              </div>

              {/* Catchphrase & Copy */}
              <div className="text-center space-y-1.5 sm:space-y-2 mb-6 sm:mb-7">
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#0f172a] tracking-tight font-display">
                  One platform. One member relationship.
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Everything you need to grow.
                </p>
              </div>

              {/* Vibrant Purple Pill CTA Button */}
              <button 
                onClick={() => scrollTo?.("discovery")}
                className="w-full py-3 sm:py-3.5 px-6 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(124,58,237,0.32)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer group"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
