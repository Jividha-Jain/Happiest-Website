"use client";

import React from "react";
import { Sparkles, Compass, CreditCard, ShieldCheck } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Hgpt() {
  const STEPS: StepItem[] = [
    {
      number: "01",
      title: "Initialize Your Hub",
      desc: "Launch your club by describing your group and adding tags. Our AI matches members' conversational queries with your space instantly.",
      icon: <Compass className="w-6 h-6 text-indigo-600" />
    },
    {
      number: "02",
      title: "Set Spaces & Events",
      desc: "Host in-person meets or virtual livestreams. Set subscription tiers or ticket coordinates, and receive payouts directly to your bank account.",
      icon: <CreditCard className="w-6 h-6 text-indigo-600" />
    },
    {
      number: "03",
      title: "Connect & Grow",
      desc: "Get verified, manage RSVPs, chat in messaging spaces, and access resources in one unified workspace.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <section
      id="hgpt"
      className="py-24 md:py-32 bg-white text-slate-900 border-t border-slate-100 z-20 relative select-none font-sans"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Title Block - Centered and Clean */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-semibold uppercase tracking-wider text-indigo-600 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>How It Works</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight uppercase">
            BUILD YOUR SPACE IN THREE SIMPLE STEPS
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
            Get your community up and running in minutes with our clean, straightforward setup process.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8">
          {STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="space-y-4 pt-6 border-t-2 border-indigo-100 hover:border-indigo-500 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-indigo-600 font-display">
                  {step.number}
                </span>
                <div className="p-2 bg-indigo-50 rounded-lg">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
