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

      {/* Concentric rings - (Desktop: 100% untouched: hidden md:block) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[800px] md:h-[800px] lg:w-[1080px] lg:h-[1080px] rounded-full border border-purple-500/15 pointer-events-none z-0 shadow-[0_0_80px_rgba(124,92,255,0.08)]" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[600px] md:h-[600px] lg:w-[840px] lg:h-[840px] rounded-full border border-white/[0.06] pointer-events-none z-0" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[400px] md:h-[400px] lg:w-[540px] lg:h-[540px] rounded-full border border-indigo-500/10 pointer-events-none z-0" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[520px] md:h-[520px] bg-purple-600/20 rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[240px] md:h-[240px] bg-indigo-400/25 rounded-full blur-[60px] md:blur-[70px] pointer-events-none z-0" />

      {/* Orbiting creator cards (DESKTOP ONLY: hidden md:block - 100% untouched original) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[800px] md:h-[800px] lg:w-[1080px] lg:h-[1080px] rounded-full pointer-events-none z-10">
        {creatorCards.map((creator, idx) => {
          const angle = (orbitAngle + (idx * 360) / creatorCards.length - 90) % 360;
          const rad = (angle * Math.PI) / 180;
          const radius = 37.5; // Original radius
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

      {/* ═══════════════ DESKTOP ONLY VIEW ═══════════════ */}
      <div className="hidden md:flex relative z-20 flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto gap-6">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          YOUR COMMUNITY. YOUR GROWTH.
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-black tracking-tight leading-[1.18] font-display max-w-2xl sm:max-w-3xl mx-auto">
          <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Your audience is already here.
          </span>
          <span className="block mt-1.5 bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#818cf8] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(167,139,250,0.35)]">
            Give them somewhere to belong.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-slate-300/90 text-base font-normal leading-relaxed max-w-md">
          Join thousands of creators and businesses already growing with Happiest.team.
        </p>

        {/* Email form */}
        <div className="w-full max-w-md space-y-4">
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
              className="bg-gradient-to-r from-[#7C5CFF] via-[#6B4AFF] to-[#5B36F5] hover:from-[#6B4AFF] hover:to-[#4C26E5] border border-purple-500/30 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 shrink-0 cursor-pointer hover:scale-[1.02] shadow-[0_4px_20px_rgba(109,74,255,0.4)] flex items-center gap-1.5"
            >
              <span>Start Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {submitted && (
            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>You&apos;re on the list! Welcome to Happiest.team.</span>
            </div>
          )}
        </div>
      </div>

      {/* ═══════════════ MOBILE ONLY VIEW (< md) ═══════════════ */}
      <div className="flex md:hidden relative z-20 flex-col items-center justify-center text-center px-4 max-w-sm mx-auto gap-4 w-full">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-400/25 text-purple-300 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          YOUR COMMUNITY. YOUR GROWTH.
        </div>

        {/* Headline */}
        <div className="space-y-1 max-w-xs mx-auto">
          <h2 className="text-[25px] sm:text-[28px] font-black tracking-tight leading-[1.15] font-display text-white">
            Your audience is already here.
          </h2>
          <h2 className="text-[25px] sm:text-[28px] font-black tracking-tight leading-[1.15] font-display bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent">
            Give them somewhere to belong.
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-slate-300/90 text-xs font-normal leading-relaxed max-w-xs pt-1">
          Join thousands of creators and businesses already growing with Happiest.team.
        </p>

        {/* Creator Avatars Row */}
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
              <div className="w-10 h-10 rounded-full bg-[#4a1c8c] text-white font-black text-[11px] flex items-center justify-center border-2 border-[#04040c] shadow-md relative shrink-0">
                +10K
              </div>
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
              className="w-full bg-gradient-to-r from-[#6D4AFF] via-[#5B36F5] to-[#4C26E5] hover:from-[#5B36F5] hover:to-[#3B17C5] text-white font-extrabold text-xs py-3 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(109,74,255,0.4)]"
            >
              <span>Start Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {submitted && (
            <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-emerald-600 font-semibold py-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>You&apos;re on the list! Welcome to Happiest.team.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
