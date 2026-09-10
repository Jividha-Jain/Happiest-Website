"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

interface ProductShowcaseProps {
  scrollTo: (id: string) => void;
}

export default function ProductShowcase({ scrollTo }: ProductShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
            // When leaving screen, pause and reset to start so Play button is ready
            video.pause();
            video.currentTime = 0;
            setIsPlaying(false);
          }
        });
      },
      { threshold: [0, 0.15, 0.3] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handlePlayToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="product-showcase"
      className="relative bg-white py-14 sm:py-20 md:py-28 overflow-hidden select-none"
    >
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-100 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12">

        {/* ── TOP: Text Content ── */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4 sm:gap-5">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-black tracking-[0.18em] text-[#2E1065] uppercase">
            <span className="w-4 sm:w-5 h-px bg-[#2E1065]" />
            See it in action
            <span className="w-4 sm:w-5 h-px bg-[#2E1065]" />
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-black text-[#2E1065] tracking-tight leading-[1.15]">
            Everything your community needs,{" "}
            <span className="bg-gradient-to-r from-[#2E1065] via-[#4C1D95] to-[#7C3AED] bg-clip-text text-transparent">
              in one place.
            </span>
          </h2>

          <p className="text-slate-500 text-xs sm:text-base font-normal leading-relaxed max-w-lg">
            From bookings and events to member feeds and loyalty — Happiest Team gives you a fully branded home for your community.
          </p>

          <button
            onClick={() => scrollTo("pricing")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E1065] via-[#3B137E] to-[#4C1D95] hover:from-[#1e0a45] hover:to-[#3B137E] border border-purple-800/30 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-[0_6px_25px_rgba(46,16,101,0.35)] cursor-pointer"
          >
            Get started free
            <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
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
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900 group/vid">
              <video
                ref={videoRef}
                src="/images/Video/Final-HT.mp4"
                poster="/images/Product.png"
                muted
                playsInline
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setIsPlaying(false);
                }}
                className="w-full h-full object-cover cursor-pointer"
                onClick={handlePlayToggle}
              />

              {/* Play button overlay when paused / stopped */}
              {!isPlaying && (
                <div
                  onClick={handlePlayToggle}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all duration-300 z-20 group/overlay"
                  aria-label="Play Video"
                >
                  <div className="relative flex items-center justify-center group/play transition-transform duration-300 group-hover/overlay:scale-105">
                    {/* Glowing pulse ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-purple-500/30 animate-ping pointer-events-none" />
                    
                    {/* Clean Large Play button badge */}
                    <button
                      type="button"
                      className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-[#6D4AFF] via-[#4C1D95] to-[#2E1065] border-2 border-purple-300/60 text-white shadow-[0_0_40px_rgba(109,74,255,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white text-white ml-1.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom shadow glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-purple-200/60 blur-[40px] pointer-events-none" />
        </div>

      </div>
    </section>
  );
}

