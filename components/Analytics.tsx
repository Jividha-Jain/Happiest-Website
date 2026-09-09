"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, DollarSign, Percent, Award, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Analytics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const points = [
    { x: 30, y: 180, label: "Jan", val: "1.2k" },
    { x: 130, y: 140, label: "Feb", val: "2.4k" },
    { x: 230, y: 160, label: "Mar", val: "3.8k" },
    { x: 330, y: 90, label: "Apr", val: "5.9k" },
    { x: 430, y: 110, label: "May", val: "8.2k" },
    { x: 530, y: 40, label: "Jun", val: "12.4k" }
  ];

  const getBezierPath = () => {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cpX1 = curr.x + 50;
      const cpY1 = curr.y;
      const cpX2 = next.x - 50;
      const cpY2 = next.y;
      d += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${next.y}`;
    }
    return d;
  };

  return (
    <section
      ref={containerRef}
      id="analytics"
      className="py-24 md:py-32 bg-slate-50 text-slate-900 border-t border-slate-200/60 z-20 relative select-none text-left font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <span>Product Showcase</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-display uppercase">
            GROWTH UNDERSTANDABLE <br />
            AT A GLANCE.
          </h2>
        </div>

        {/* Alternating Layout: Visual Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Clean Mockup Dashboard Frame */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            
            {/* Stat Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block font-display">Active Hubs</span>
                <span className="text-lg font-bold text-slate-900">624</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block font-display">Recurring MRR</span>
                <span className="text-lg font-bold text-slate-900">$24,840</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block font-display">Retention</span>
                <span className="text-lg font-bold text-slate-900">98.4%</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block font-display">RSVPs Rate</span>
                <span className="text-lg font-bold text-slate-900">92.1%</span>
              </div>
            </div>

            {/* Line Chart */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] text-slate-450 font-bold font-mono">
                <span>MEMBERSHIP GROWTH TREND</span>
                <span>JAN - JUN 2026</span>
              </div>
              
              <div className="relative h-48 w-full bg-slate-50 border border-slate-150 rounded-xl p-3">
                <svg className="w-full h-full" viewBox="0 0 600 220" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  {[0, 1, 2, 3].map((g) => (
                    <line
                      key={g}
                      x1="10"
                      y1={40 + g * 50}
                      x2="590"
                      y2={40 + g * 50}
                      stroke="rgba(15, 23, 42, 0.03)"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Bezier Path */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    d={getBezierPath()}
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  
                  {/* Interactive Circles */}
                  {points.map((pt, idx) => (
                    <circle
                      key={idx}
                      cx={pt.x}
                      cy={pt.y}
                      r={hoveredPoint === idx ? 7 : 4}
                      fill={hoveredPoint === idx ? "#8B5CF6" : "#4F46E5"}
                      stroke="white"
                      strokeWidth="1.5"
                      onMouseEnter={() => setHoveredPoint(idx)}
                      onMouseLeave={() => setHoveredPoint(null)}
                      className="cursor-pointer transition-all duration-200"
                    />
                  ))}
                </svg>
              </div>
            </div>

          </div>

          {/* RIGHT: Descriptive Content */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-905 font-display">Advanced Curation Metrics</h3>
              <p className="text-slate-505 text-sm sm:text-base leading-relaxed font-sans font-normal">
                Understand retention curves, monthly active discussions, revenue payouts, and referral loops in a single customizable workspace dashboard.
              </p>
            </div>

            {/* Flat features list */}
            <div className="space-y-3.5">
              <div className="flex items-start space-x-3 text-xs text-slate-600 font-sans font-semibold">
                <Users className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <span>Keep community members engaged with automatic calendar syncing.</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-slate-600 font-sans font-semibold">
                <DollarSign className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct payout integrations with native Stripe receipt generation.</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-slate-600 font-sans font-semibold">
                <Percent className="w-4.5 h-4.5 text-secondary shrink-0 mt-0.5" />
                <span>Monitor hub retention rates and active discussion ratios easily.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
