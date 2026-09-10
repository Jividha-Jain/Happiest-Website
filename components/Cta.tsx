"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";

interface CtaProps {
  scrollTo: (id: string) => void;
}

export default function Cta({ scrollTo }: CtaProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  const creatorCards = [
    {
      name: "Creator",
      role: "Community Founder",
      img: "/images/creator-custom.png",
    },
    {
      name: "Creator 2",
      role: "Community Leader",
      img: "/images/creator-custom-2.png",
    },
    {
      name: "Creator 3",
      role: "Creator",
      img: "/images/creator-custom-3.png",
    },
    {
      name: "Creator 4",
      role: "Creator",
      img: "/images/creator-custom-4.png",
    },
    {
      name: "Creator 5",
      role: "Creator",
      img: "/images/creator-custom-5.jpg",
    },
    {
      name: "Creator 6",
      role: "Creator",
      img: "/images/creator-custom-6.jpg",
    },
    {
      name: "Creator 7",
      role: "Creator",
      img: "/images/creator-custom-7.jpg",
    },
  ];

  const [orbitAngle, setOrbitAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isHovered) {
        // Smooth 360-degree continuous revolution in 50 seconds (7.2 deg/sec)
        setOrbitAngle((prev) => (prev + delta * 7.2) % 360);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  return (
    <section
      id="cta"
      className="relative w-full min-h-[640px] sm:min-h-[860px] lg:min-h-[920px] flex items-center justify-center select-none py-16 sm:py-28 lg:py-36 overflow-hidden bg-[#04040c]"
    >
      {/* Deep radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(100,60,255,0.18),transparent_70%)] pointer-events-none" />

      {/* Concentric rings - (Desktop: 100% untouched) */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[800px] sm:h-[800px] lg:w-[1080px] lg:h-[1080px] rounded-full border border-purple-500/15 pointer-events-none z-0 shadow-[0_0_80px_rgba(124,92,255,0.08)]" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[600px] sm:h-[600px] lg:w-[840px] lg:h-[840px] rounded-full border border-white/[0.06] pointer-events-none z-0" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[400px] sm:h-[400px] lg:w-[540px] lg:h-[540px] rounded-full border border-indigo-500/10 pointer-events-none z-0" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] bg-purple-600/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] bg-indigo-400/25 rounded-full blur-[60px] sm:blur-[70px] pointer-events-none z-0" />

      {/* Orbiting creator cards (DESKTOP ONLY: 100% untouched original) */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[800px] sm:h-[800px] lg:w-[1080px] lg:h-[1080px] rounded-full pointer-events-none z-10">
        {creatorCards.map((creator, idx) => {
          const angle = (orbitAngle + (idx * 360) / creatorCards.length - 90) % 360;
          const rad = (angle * Math.PI) / 180;
          const radius = 37.5; // Positions all cards completely inside the outer circle
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);

          return (
            <div
              key={creator.name}
              className="absolute pointer-events-auto"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="w-[92px] md:w-[108px] h-[116px] md:h-[138px] rounded-[18px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_50px_rgba(124,92,255,0.5)] bg-slate-900"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 10px 35px rgba(0,0,0,0.8)",
                }}
              >
                <Image
                  src={creator.img}
                  alt={creator.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 rounded-[18px] ring-0 group-hover:ring-2 group-hover:ring-purple-400/60 transition-all duration-300 z-20 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ═══════════════ DESKTOP ONLY VIEW (100% UNTOUCHED ORIGINAL) ═══════════════ */}
      <div className="hidden sm:flex relative z-20 flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto gap-6">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Ready to launch?
        </div>

        {/* Headline */}
        <h2 className="text-5xl lg:text-[56px] font-black tracking-tight leading-[1.15] font-display">
          <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Build your own community.
          </span>
          <span className="block mt-2 bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#818cf8] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(167,139,250,0.35)]">
            Grow your business.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-slate-300/90 text-base font-normal leading-relaxed max-w-md">
          Join thousands of creators and businesses already growing with Happiest Team.
        </p>

        {/* Email form */}
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white rounded-full p-1.5 shadow-[0_8px_40px_rgba(46,16,101,0.28)] border border-white/20"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 font-medium outline-none text-left"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#2E1065] via-[#3B137E] to-[#4C1D95] hover:from-[#1e0a45] hover:to-[#3B137E] border border-purple-700/50 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 shrink-0 cursor-pointer hover:scale-[1.02] shadow-[0_4px_20px_rgba(46,16,101,0.5)]"
            >
              Start for free
            </button>
          </form>

          {submitted && (
            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>You&apos;re on the list! Welcome to Happiest Team.</span>
            </div>
          )}
        </div>
      </div>

      {/* ═══════════════ MOBILE ONLY VIEW (< sm) ═══════════════ */}
      <div className="flex sm:hidden relative z-20 flex-col items-center justify-center text-center px-4 max-w-sm mx-auto gap-4 w-full">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-400/25 text-purple-300 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          READY TO LAUNCH?
        </div>

        {/* Headline */}
        <div className="space-y-1">
          <h2 className="text-[30px] font-black tracking-tight leading-[1.12] font-display text-white">
            Build your own community.
          </h2>
          <div className="relative inline-block">
            <h2 className="text-[30px] font-black tracking-tight leading-[1.12] font-display bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent">
              Grow your business.
            </h2>
            {/* Underline swoosh */}
            <svg
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-44 h-2.5 text-[#a855f7]/70 pointer-events-none"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-slate-300/90 text-xs font-normal leading-relaxed max-w-xs pt-1">
          Join thousands of creators and businesses already growing with Happiest Team.
        </p>

        {/* Creator Avatars Row (Uses same web images) */}
        <div className="flex flex-col items-center justify-center gap-1.5 py-1">
          <div className="relative flex items-center justify-center">
            <div className="flex items-center -space-x-2.5">
              {creatorCards.slice(0, 4).map((c, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#04040c] shadow-md relative bg-slate-800"
                >
                  <Image src={c.img} alt={c.name} fill className="object-cover" unoptimized />
                </div>
              ))}
              {/* +10K Bubble */}
              <div className="w-10 h-10 rounded-full bg-[#4a1c8c] text-white font-black text-[11px] flex items-center justify-center border-2 border-[#04040c] shadow-md relative shrink-0">
                +10K
              </div>
            </div>

            {/* Sparkle decorative lines next to +10K */}
            <div className="absolute -right-5 -top-2 flex flex-col items-center pointer-events-none text-purple-300 opacity-90">
              <span className="text-xs font-bold leading-none select-none">✨</span>
            </div>
          </div>

          <p className="text-[11px] font-medium text-slate-400 tracking-wide">
            Creators · Founders · Businesses · Communities
          </p>
        </div>

        {/* Mobile Form Box Card */}
        <div className="w-full max-w-[340px] bg-white rounded-[24px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(124,92,255,0.2)] border border-white/20 mt-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {/* Input Row */}
            <div className="flex items-center bg-[#f7f5fd] border border-purple-100/90 rounded-2xl px-3 py-2 text-left">
              <div className="w-7 h-7 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mr-2.5">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-xs text-slate-900 placeholder:text-slate-400 font-medium outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4C1D95] via-[#5B21B6] to-[#6D28D9] hover:from-[#3B137E] hover:to-[#5B21B6] text-white font-extrabold text-xs py-3 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(91,33,182,0.4)] hover:scale-[1.01]"
            >
              <span>Start for free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {submitted && (
            <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-emerald-600 font-semibold py-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>You&apos;re on the list! Welcome to Happiest Team.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
