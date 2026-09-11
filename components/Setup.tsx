"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Users, MessageCircle, BarChart3, ArrowRight, Sparkles } from "lucide-react";

export default function Setup() {
  const steps = [
    {
      id: "step-1",
      number: "01",
      icon: <UserPlus className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#7c3aed]" strokeWidth={2.2} />,
      numStyle: "bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20",
      boxStyle: "bg-[#7c3aed]/10 border border-[#7c3aed]/20",
      cardBg: "bg-white",
      cardBorder: "border-purple-100/90 shadow-[0_8px_30px_rgba(124,58,237,0.06)]",
      pillStyle: "bg-[#f0eaff] text-[#7c3aed] border border-purple-200/60",
      pill: "Quick & Easy",
      title: "Create your space",
      desc: "Set up your community in minutes — no technical skills needed.",
    },
    {
      id: "step-2",
      number: "02",
      icon: <Users className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#16a34a]" strokeWidth={2.2} />,
      numStyle: "bg-[#16a34a]/10 text-[#16a34a] border border-[#16a34a]/20",
      boxStyle: "bg-[#16a34a]/10 border border-[#16a34a]/20",
      cardBg: "bg-white",
      cardBorder: "border-emerald-100/90 shadow-[0_8px_30px_rgba(22,163,74,0.06)]",
      pillStyle: "bg-[#e6f4ea] text-[#16a34a] border border-emerald-200/60",
      pill: "Grow Your Network",
      title: "Invite your audience",
      desc: "Bring in your existing members from anywhere with easy invite options.",
    },
    {
      id: "step-3",
      number: "03",
      icon: <MessageCircle className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#2563eb]" strokeWidth={2.2} />,
      numStyle: "bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/20",
      boxStyle: "bg-[#2563eb]/10 border border-[#2563eb]/20",
      cardBg: "bg-white",
      cardBorder: "border-blue-100/90 shadow-[0_8px_30px_rgba(37,99,235,0.06)]",
      pillStyle: "bg-[#e8f2ff] text-[#2563eb] border border-blue-200/60",
      pill: "Keep Members Active",
      title: "Build engagement",
      desc: "Host events, share content and start meaningful conversations.",
    },
    {
      id: "step-4",
      number: "04",
      icon: <BarChart3 className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#e11d48]" strokeWidth={2.2} />,
      numStyle: "bg-[#e11d48]/10 text-[#e11d48] border border-[#e11d48]/20",
      boxStyle: "bg-[#e11d48]/10 border border-[#e11d48]/20",
      cardBg: "bg-white",
      cardBorder: "border-pink-100/90 shadow-[0_8px_30px_rgba(225,29,72,0.06)]",
      pillStyle: "bg-[#fde8f2] text-[#e11d48] border border-pink-200/60",
      pill: "Scale Your Community",
      title: "Start growing",
      desc: "Turn engagement into revenue with memberships, events, products and more.",
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#faf9ff] border-b border-slate-100/80 overflow-hidden relative select-none">
      
      {/* Background Soft Purple Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-200/30 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14 text-center sm:text-left flex flex-col items-center sm:items-start"
        >
          {/* Tag Pill */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede5ff] text-[#7c3aed] text-[10.5px] sm:text-[11px] font-extrabold tracking-wider uppercase mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7c3aed]" />
            GET STARTED IN MINUTES
          </span>

          {/* Main Title */}
          <h2 className="text-[26px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight text-[#0f172a] font-display leading-[1.18] sm:leading-tight mb-3">
            From setup to growth — <span className="text-[#7c3aed]">it&apos;s simple.</span>
          </h2>

          {/* Subheading */}
          <p className="text-xs sm:text-[16.5px] text-slate-500 font-normal max-w-2xl leading-relaxed">
            Launch, invite, engage and grow your community in just a few simple steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative items-stretch">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                className={`relative ${step.cardBg} rounded-[22px] sm:rounded-[26px] border ${step.cardBorder} p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[270px] hover:-translate-y-1 hover:shadow-lg`}
              >

                {/* Top Row: Step Number Left, Icon Square Right */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  {/* Step Number Badge */}
                  <div className={`px-3 py-1 rounded-full font-extrabold text-[12px] sm:text-[13px] tracking-wide flex items-center gap-1 ${step.numStyle}`}>
                    <span className="text-[10px] opacity-75 uppercase">STEP</span>
                    <span>{step.number}</span>
                  </div>

                  {/* Icon Box */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] flex items-center justify-center ${step.boxStyle}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex-1 mb-4 sm:mb-6">
                  <h3 className="text-[17px] sm:text-[19px] font-extrabold text-[#0f172a] leading-snug mb-1.5 font-display">
                    {step.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Pill Badge */}
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-bold tracking-wide ${step.pillStyle}`}>
                    {step.pill}
                  </span>
                </div>

                {/* Connecting Gray Arrow attached to card's right edge */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden lg:flex items-center justify-center absolute left-[calc(100%+12px)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none text-slate-400"
                  >
                    <ArrowRight className="w-5 h-5 text-slate-400/80" strokeWidth={1.75} />
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}





