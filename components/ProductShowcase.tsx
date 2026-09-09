"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ProductShowcaseProps {
  scrollTo: (id: string) => void;
}

export default function ProductShowcase({ scrollTo }: ProductShowcaseProps) {

  return (
    <section
      id="product-showcase"
      className="relative bg-white py-20 md:py-28 overflow-hidden select-none"
    >
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-100 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">

        {/* ── TOP: Text Content ── */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.18em] text-[#2E1065] uppercase">
            <span className="w-5 h-px bg-[#2E1065]" />
            See it in action
            <span className="w-5 h-px bg-[#2E1065]" />
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-black text-[#2E1065] tracking-tight leading-[1.1]">
            Everything your community needs,{" "}
            <span className="bg-gradient-to-r from-[#2E1065] via-[#4C1D95] to-[#7C3AED] bg-clip-text text-transparent">
              in one place.
            </span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-lg">
            From bookings and events to member feeds and loyalty — Happiest Team gives you a fully branded home for your community.
          </p>

          <button
            onClick={() => scrollTo("pricing")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E1065] via-[#3B137E] to-[#4C1D95] hover:from-[#1e0a45] hover:to-[#3B137E] border border-purple-800/30 text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-[0_6px_25px_rgba(46,16,101,0.35)] cursor-pointer"
          >
            Get started free
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── BOTTOM: Product Mockup ── */}
        <div className="relative w-full group">
          {/* Outer border frame */}
          <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-b from-purple-200 via-purple-100 to-slate-100 pointer-events-none" />

          {/* Main mockup container */}
          <div className="relative rounded-[24px] overflow-hidden bg-white border border-purple-100 shadow-[0_20px_60px_rgba(100,60,220,0.12)]">

            {/* Fake browser top bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-slate-50 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-4 bg-white border border-slate-200 rounded-full px-4 py-1 text-[11px] text-slate-500 font-medium text-center">
                app.happiest.team
              </div>
              <div className="w-16" />
            </div>

            {/* Dashboard video */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
              <video
                src="/images/Video/Final-V1.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom shadow glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-purple-200/60 blur-[40px] pointer-events-none" />
        </div>



      </div>
    </section>
  );
}
