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

  const h1 = ["Build", "Communities", "That", "People", "Love."];
  const h2 = ["Manage.", "Engage.", "Grow."];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-animated-bg relative min-h-screen flex flex-col items-center justify-center
        select-none text-center overflow-hidden
        px-5 pt-32 pb-24"
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
            aria-label="Discover Happiest AI"
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
              ✨ Meet Happiest AI — Communities, Events & Members
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
          className="max-w-[620px] text-[17px] sm:text-[18.5px] leading-[1.8] font-medium text-slate-400 mt-8 tracking-wide drop-shadow-xs"
          style={{ color: "#94a3b8" }}
        >
          Create thriving communities with built-in events, bookings, memberships, chats, payments, and commerce —{" "}
          <span className="text-slate-200 font-[500]">all from one platform.</span>
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
            <span>Sign Up</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0 group-hover:translate-x-0.5 transition-transform duration-300" />
          </motion.button>
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
