"use client";

import React, { useState } from "react";
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
      name: "Jay Shetty",
      role: "Podcast Host",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Tim Ferriss",
      role: "Entrepreneur",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dr. Becky",
      role: "Good Inside",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ali Abdaal",
      role: "Productivity",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Lara Acosta",
      role: "LinkedIn Creator",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Brendon Burchard",
      role: "Performance Coach",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  // Start at -90deg so first card is at the top
  const getPos = (index: number, total: number) => {
    const angle = (index * 360) / total - 90;
    const rad = (angle * Math.PI) / 180;
    const x = parseFloat((50 + 46 * Math.cos(rad)).toFixed(4));
    const y = parseFloat((50 + 46 * Math.sin(rad)).toFixed(4));
    return { top: `${y}%`, left: `${x}%`, transform: "translate(-50%, -50%)" };
  };

  const avatars = creatorCards.slice(0, 4);

  return (
    <section
      id="cta"
      className="relative w-full min-h-[700px] md:min-h-[780px] lg:min-h-[860px] flex items-center justify-center select-none py-24 md:py-32 overflow-hidden bg-[#04040c]"
    >
      {/* Deep radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(100,60,255,0.18),transparent_70%)] pointer-events-none" />

      {/* Concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] sm:w-[860px] sm:h-[860px] lg:w-[1020px] lg:h-[1020px] rounded-full border border-white/[0.06] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] sm:w-[580px] sm:h-[580px] lg:w-[700px] lg:h-[700px] rounded-full border border-purple-500/10 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full border border-indigo-500/10 pointer-events-none z-0" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-indigo-400/25 rounded-full blur-[60px] pointer-events-none z-0" />

      {/* Orbiting creator cards */}
      <div
        className="absolute top-1/2 left-1/2 w-[680px] h-[680px] sm:w-[860px] sm:h-[860px] lg:w-[1020px] lg:h-[1020px] rounded-full pointer-events-none z-10"
        style={{
          transform: "translate(-50%, -50%)",
          animation: "ctaPolaroidOrbit 55s linear infinite",
        }}
      >
        {creatorCards.map((creator, idx) => {
          const pos = getPos(idx, creatorCards.length);
          return (
            <div key={creator.name} className="absolute pointer-events-auto" style={pos}>
              <div
                className="w-[82px] sm:w-[96px] md:w-[108px] h-[104px] sm:h-[122px] md:h-[138px] rounded-[16px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_50px_rgba(124,92,255,0.45)]"
                style={{
                  animation: "ctaPolaroidCounterOrbit 55s linear infinite",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.75)",
                }}
              >
                <Image
                  src={creator.img}
                  alt={creator.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-x-0 bottom-0 pt-8 pb-2 px-2 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 text-center">
                  <p className="text-[9.5px] sm:text-[10.5px] font-bold text-white leading-tight tracking-tight">
                    {creator.name}
                  </p>
                  <p className="text-[7px] sm:text-[7.5px] text-slate-300/90 font-medium leading-tight mt-0.5">
                    {creator.role}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-[16px] ring-0 group-hover:ring-2 group-hover:ring-purple-400/50 transition-all duration-300 z-20 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Center content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-xl mx-auto gap-5 sm:gap-6">

        {/* Headline */}
        <h2 className="text-[26px] sm:text-[44px] lg:text-[54px] font-black text-white tracking-tight leading-[1.1]">
          Build your own community.{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
            Grow your business.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-slate-400 text-xs sm:text-base font-normal leading-relaxed max-w-sm">
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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ctaPolaroidOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes ctaPolaroidCounterOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}} />
    </section>
  );
}
