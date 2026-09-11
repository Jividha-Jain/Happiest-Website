"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  scrollTo: (id: string) => void;
}

/* --- Staggered floating dots --- */
const DOTS = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  size: 1.5 + (i % 3) * 1.0,
  left: 5 + (i * 5.9) % 90,
  bottom: 6 + (i * 3.7) % 52,
  duration: 8 + (i * 1.2) % 9,
  delay: (i * 0.7) % 9,
  color:
    i % 3 === 0 ? "rgba(99,102,241,0.65)" :
    i % 3 === 1 ? "rgba(139,92,246,0.55)" :
                  "rgba(167,139,250,0.45)",
}));

/* --- Shared easing --- */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* Fade-up preset (for non-headline elements) */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28, filter: "blur(8px)" },
  animate:    { opacity: 1, y: 0,  filter: "blur(0px)" },
  transition: { duration: 0.85, delay, ease },
});

/* Per-word 3D reveal */
const wordVar = {
  hidden:  { opacity: 0, y: 48, rotateX: -18, filter: "blur(5px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
    transition: { duration: 0.80, delay: 0.30 + i * 0.075, ease },
  }),
};

export default function Hero({ scrollTo }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const rawX    = useMotionValue(0.5);
  const rawY    = useMotionValue(0.5);
  const sX = useSpring(rawX, { stiffness: 38, damping: 26 });
  const sY = useSpring(rawY, { stiffness: 38, damping: 26 });
  const orbX = useTransform(sX, [0, 1], [-40, 40]);
  const orbY = useTransform(sY, [0, 1], [-22, 22]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const fn = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      rawX.set((e.clientX - r.left) / r.width);
      rawY.set((e.clientY - r.top)  / r.height);
    };
    el.addEventListener("mousemove", fn);
    return () => el.removeEventListener("mousemove", fn);
  }, [rawX, rawY]);

  const h1 = ["Turn", "Your", "Community"];
  const h2 = ["Into", "a", "Growing", "Business."];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-animated-bg relative min-h-screen flex flex-col items-center justify-center
        select-none text-center overflow-hidden
        px-5 py-20 sm:py-24"
    >
      {/* -- BG orbs -- */}
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />
      <div className="hero-orb-3" />
      <div className="hero-orb-4" />

      {/* Mouse-tracked parallax bloom */}
      <motion.div
        aria-hidden
        style={{ x: orbX, y: orbY }}
        className="absolute top-[28%] left-1/2 -translate-x-1/2
          w-[520px] h-[340px] rounded-full pointer-events-none z-[2]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.14) 0%, rgba(139,92,246,0.04) 55%, transparent 75%)",
            filter: "blur(28px)",
          }}
        />
      </motion.div>

      <div className="hero-grid" />
      <div className="hero-vignette" />
      <div className="hero-top-line" />

      {/* Floating dots */}
      {DOTS.map((d) => (
        <div
          key={d.id}
          className="hero-dot"
          style={{
            width: d.size, height: d.size,
            left: `${d.left}%`, bottom: `${d.bottom}%`,
            background: d.color,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}

      {/* ══════════ CONTENT ══════════ */}
      <div className="relative z-10 max-w-[920px] mx-auto w-full flex flex-col items-center gap-8">

        {/* ① BADGE */}
        <motion.div {...fadeUp(0)}>
          <button
            onClick={() => scrollTo("hgpt")}
            className="badge-glow group inline-flex items-center gap-2.5
              pl-1.5 pr-4 py-1.5 rounded-full cursor-pointer
              border border-white/[0.10] bg-white/[0.035] backdrop-blur-sm
              hover:border-indigo-400/35 hover:bg-white/[0.065]
              transition-all duration-300"
            aria-label="For Creators, Clubs & Community-Led Businesses"
          >
            {/* Icon pill */}
            <span
              className="flex items-center justify-center w-[26px] h-[26px] rounded-full shrink-0"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 14px rgba(99,102,241,0.55)",
              }}
            >
              <Sparkles className="w-[13px] h-[13px] text-white" />
            </span>
            <span className="text-[11.5px] font-semibold text-slate-300
              group-hover:text-white transition-colors duration-300 tracking-[0.025em]">
              For Creators, Clubs &amp; Community-Led Businesses
            </span>
            <ArrowRight
              className="w-3.5 h-3.5 text-indigo-400 shrink-0
                group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </button>
        </motion.div>

        {/* ② HEADLINE */}
        <div className="space-y-1.5" style={{ perspective: "1200px" }}>

          {/* Line 1 — white with glow */}
          <div className="hero-headline-row overflow-visible">
            {h1.map((w, i) => (
              <motion.span
                key={w}
                custom={i}
                variants={wordVar}
                initial="hidden"
                animate="visible"
                className="hero-h1 inline-block font-extrabold font-display
                  tracking-[-0.038em] leading-[1.25] py-2 -my-2"
                style={{ fontSize: "clamp(1.85rem, 5.2vw, 4rem)" }}
              >
                {w}
              </motion.span>
            ))}
          </div>

          {/* Line 2 — animated shimmer gradient */}
          <div className="hero-headline-row overflow-visible">
            {h2.map((w, i) => (
              <motion.span
                key={w}
                custom={h1.length + i}
                variants={wordVar}
                initial="hidden"
                animate="visible"
                className="gradient-text inline-block font-extrabold font-display
                  tracking-[-0.038em] leading-[1.25] py-2 -my-2"
                style={{ fontSize: "clamp(1.85rem, 5.2vw, 4rem)" }}
              >
                {w}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ③ ELEGANT DIVIDER */}
        <motion.div
          {...fadeUp(0.52)}
          className="flex items-center gap-4 w-full max-w-[360px]"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-500/35 to-indigo-500/35" />
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-purple-500/40" />
            <div
              className="w-[7px] h-[7px] rounded-full bg-indigo-500"
              style={{ boxShadow: "0 0 8px rgba(99,102,241,1), 0 0 18px rgba(99,102,241,0.4)" }}
            />
            <div className="w-1 h-1 rounded-full bg-purple-500/40" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500/35 to-purple-500/35" />
        </motion.div>

        {/* ④ SUBHEADING */}
        <motion.p
          {...fadeUp(0.66)}
          className="max-w-[620px] text-[17px] sm:text-[18.5px] leading-[1.8] font-medium text-slate-400 tracking-wide drop-shadow-xs"
          style={{ color: "#94a3b8" }}
        >
          Build, engage, and monetize your community from one platform —{" "}
          <span className="text-slate-200 font-[500]">with memberships, events, bookings, content, payments and commerce built in.</span>
        </motion.p>

        {/* ⑤ CTA ROW */}
        <motion.div
          {...fadeUp(0.72)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[500px]"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("pricing")}
            className="btn-shine group flex items-center justify-center gap-2.5 cursor-pointer
              text-white text-[15px] font-extrabold tracking-wide
              px-9 py-3.5 rounded-full border border-purple-800/40
              transition-all duration-300 w-full sm:w-auto hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #2E1065, #4C1D95)",
              boxShadow: "0 6px 26px rgba(46,16,101,0.60), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0 group-hover:translate-x-0.5 transition-transform duration-300" />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("product-showcase")}
            className="group flex items-center justify-center gap-2.5 cursor-pointer
              text-slate-200 text-[15px] font-bold tracking-wide
              px-8 py-3.5 rounded-full border border-white/[0.12] bg-white/[0.04]
              hover:bg-white/[0.08] hover:border-white/[0.22]
              transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 border border-white/20">
              <svg className="w-2.5 h-2.5 text-white fill-white ml-0.5" viewBox="0 0 8 10"><path d="M1 1l6 4-6 4V1z"/></svg>
            </span>
            <span>See How It Works</span>
          </motion.button>
        </motion.div>

        {/* ⑥ TRUST SIGNALS */}
        <motion.div
          {...fadeUp(0.82)}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-1"
        >
          {["No credit card required", "Set up in minutes", "All-in-one platform"].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-[12.5px] text-slate-400 font-medium">
              <svg className="w-3.5 h-3.5 text-indigo-400 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {item}
            </span>
          ))}
        </motion.div>

        {/* ⑦ SOCIAL PROOF */}
        <motion.div
          {...fadeUp(0.9)}
          className="flex items-center gap-3 mt-2"
        >
          <div className="flex -space-x-2.5">
            {[
              "/images/creator-custom.png",
              "/images/creator-custom-2.png",
              "/images/creator-custom-3.png",
              "/images/creator-custom-4.png",
            ].map((src, i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0f1124] overflow-hidden relative bg-slate-800" style={{ zIndex: 4 - i }}>
                <Image src={src} alt="Creator" fill className="object-cover" unoptimized />
              </div>
            ))}
            <div className="w-9 h-9 rounded-full bg-[#4a1c8c] text-white font-black text-[10px] flex items-center justify-center border-2 border-[#0f1124] shrink-0">
              +10K
            </div>
          </div>
          <p className="text-[13px] text-slate-400 font-medium">
            Join <span className="text-white font-bold">12,000+</span> creators and businesses already growing with Happiest.team
          </p>
        </motion.div>
      </div>

      {/* Bottom fade to rest of page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-[8]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(3,5,15,0.92) 100%)",
        }}
      />
    </section>
  );
}
