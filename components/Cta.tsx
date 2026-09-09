"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

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
      className="relative w-full min-h-[750px] sm:min-h-[860px] lg:min-h-[920px] flex items-center justify-center select-none py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#04040c]"
    >
      {/* Deep radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(100,60,255,0.18),transparent_70%)] pointer-events-none" />

      {/* Concentric rings - Outer ring encloses all cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] sm:w-[920px] sm:h-[920px] lg:w-[1080px] lg:h-[1080px] rounded-full border border-purple-500/15 pointer-events-none z-0 shadow-[0_0_80px_rgba(124,92,255,0.08)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] sm:w-[700px] sm:h-[700px] lg:w-[840px] lg:h-[840px] rounded-full border border-white/[0.06] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[540px] lg:h-[540px] rounded-full border border-indigo-500/10 pointer-events-none z-0" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-indigo-400/25 rounded-full blur-[70px] pointer-events-none z-0" />

      {/* Orbiting creator cards (always 100% upright/straight with ZERO tilt) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] sm:w-[920px] sm:h-[920px] lg:w-[1080px] lg:h-[1080px] rounded-full pointer-events-none z-10">
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
                className="w-[82px] sm:w-[96px] md:w-[108px] h-[104px] sm:h-[122px] md:h-[138px] rounded-[18px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_50px_rgba(124,92,255,0.5)] bg-slate-900"
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

      {/* Center content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-3xl mx-auto gap-4 sm:gap-6">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Ready to launch?
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.15] font-display">
          <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Build your own community.
          </span>
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#818cf8] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(167,139,250,0.35)]">
            Grow your business.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-slate-300/90 text-xs sm:text-base font-normal leading-relaxed max-w-md">
          Join thousands of creators and businesses already growing with Happiest Team.
        </p>

        {/* Email form */}
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-full p-2 sm:p-1.5 shadow-[0_8px_40px_rgba(46,16,101,0.28)] border border-white/20 gap-2 sm:gap-0"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-4 sm:px-5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-medium outline-none text-center sm:text-left"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#2E1065] via-[#3B137E] to-[#4C1D95] hover:from-[#1e0a45] hover:to-[#3B137E] border border-purple-700/50 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-2.5 rounded-xl sm:rounded-full transition-all duration-200 shrink-0 cursor-pointer hover:scale-[1.02] shadow-[0_4px_20px_rgba(46,16,101,0.5)]"
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
    </section>
  );
}
