"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface NavbarProps {
  scrollTo: (id: string) => void;
}

export default function Navbar({ scrollTo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAction = (id: string) => {
    if (id === "pricing") {
      router.push("/pricing");
    } else {
      scrollTo(id);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <header
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? "bg-[#0b0a1a]/85 backdrop-blur-xl border border-purple-500/20 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_25px_rgba(46,16,101,0.25)] py-2 sm:py-2.5 px-3.5 sm:px-5"
            : "bg-[#0c091d]/70 backdrop-blur-lg border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.35)] py-2.5 sm:py-3 px-4 sm:px-6"
        }`}
      >
        {/* ── Left: Brand Logo ── */}
        <div
          className="flex items-center space-x-2.5 cursor-pointer group"
          onClick={() => handleAction("hero")}
        >
          {/* Logo Badge */}
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-xl bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#6D28D9] border border-purple-400/30 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(109,40,217,0.45)] transition-transform duration-300 group-hover:scale-105">
              H
            </div>
            <div className="absolute -inset-0.5 rounded-xl bg-purple-500/20 blur-[6px] -z-10 group-hover:bg-purple-500/40 transition-all" />
          </div>

          {/* Brand Typography */}
          <div className="text-[15px] sm:text-base font-extrabold tracking-tight text-white flex items-center gap-0.5 leading-none">
            <span>happiest</span>
            <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent font-black">
              .team
            </span>
          </div>
        </div>

        {/* ── Right: Action Buttons ── */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={() => handleAction("pricing")}
            className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full hover:bg-white/[0.06] transition-all cursor-pointer"
          >
            Log in
          </button>

          <button
            onClick={() => handleAction("pricing")}
            className="group relative bg-gradient-to-r from-[#2E1065] via-[#3B137E] to-[#581C87] hover:from-[#3B137E] hover:to-[#6D28D9] border border-purple-400/30 text-white font-bold text-xs px-4 sm:px-5 py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-[0_4px_20px_rgba(46,16,101,0.55)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.45)] hover:scale-[1.03]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </header>
    </div>
  );
}
