"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Users, MessageCircle, BarChart3, ArrowRight } from "lucide-react";

export default function Setup() {
  const steps = [
    {
      id: "step-1",
      number: "1",
      icon: <UserPlus className="w-5 h-5 text-[#7c3aed]" strokeWidth={2} />,
      numStyle: "bg-[#f0eaff] text-[#7c3aed]",
      boxStyle: "bg-[#f0eaff] border border-purple-100/50",
      cardBg: "bg-gradient-to-b from-[#fcf8ff] via-white to-[#f5eaff]/40",
      cardBorder: "border-purple-100/80 shadow-[0_4px_20px_rgba(124,58,237,0.04)]",
      pillStyle: "bg-[#f0eaff] text-[#7c3aed]",
      pill: "Quick & Easy",
      title: "Create your space",
      desc: "Set up your community in minutes — no technical skills needed.",
    },
    {
      id: "step-2",
      number: "2",
      icon: <Users className="w-5 h-5 text-[#16a34a]" strokeWidth={2} />,
      numStyle: "bg-[#e6f4ea] text-[#16a34a]",
      boxStyle: "bg-[#e6f4ea] border border-emerald-100/50",
      cardBg: "bg-gradient-to-b from-[#f4fbf6] via-white to-[#e6f4ea]/40",
      cardBorder: "border-emerald-100/80 shadow-[0_4px_20px_rgba(22,163,74,0.04)]",
      pillStyle: "bg-[#e6f4ea] text-[#16a34a]",
      pill: "Grow Your Network",
      title: "Invite your audience",
      desc: "Bring in your existing members from anywhere with easy invite options.",
    },
    {
      id: "step-3",
      number: "3",
      icon: <MessageCircle className="w-5 h-5 text-[#2563eb]" strokeWidth={2} />,
      numStyle: "bg-[#e8f2ff] text-[#2563eb]",
      boxStyle: "bg-[#e8f2ff] border border-blue-100/50",
      cardBg: "bg-gradient-to-b from-[#f4f8fe] via-white to-[#e8f2ff]/40",
      cardBorder: "border-blue-100/80 shadow-[0_4px_20px_rgba(37,99,235,0.04)]",
      pillStyle: "bg-[#e8f2ff] text-[#2563eb]",
      pill: "Keep Members Active",
      title: "Build engagement",
      desc: "Host events, share content and start meaningful conversations.",
    },
    {
      id: "step-4",
      number: "4",
      icon: <BarChart3 className="w-5 h-5 text-[#e11d48]" strokeWidth={2} />,
      numStyle: "bg-[#fde8f2] text-[#e11d48]",
      boxStyle: "bg-[#fde8f2] border border-pink-100/50",
      cardBg: "bg-gradient-to-b from-[#fff5f9] via-white to-[#fde8f2]/40",
      cardBorder: "border-pink-100/80 shadow-[0_4px_20px_rgba(225,29,72,0.04)]",
      pillStyle: "bg-[#fde8f2] text-[#e11d48]",
      pill: "Scale Your Community",
      title: "Start growing",
      desc: "Turn engagement into revenue with memberships, events, products and more.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-left"
        >
          {/* Tag Pill */}
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#f0eaff] text-[#7c3aed] text-[11px] font-bold tracking-wider uppercase mb-3.5">
            Get Started in Minutes
          </span>

          {/* Main Title */}
          <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight text-[#0f172a] font-display leading-tight mb-2.5">
            From setup to growth — it&apos;s simple.
          </h2>

          {/* Subheading */}
          <p className="text-[15px] sm:text-[16.5px] text-slate-500 font-normal max-w-2xl leading-relaxed">
            Launch, invite, engage and grow your community in just a few simple steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                className={`relative ${step.cardBg} rounded-[24px] border ${step.cardBorder} p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between min-h-[270px] hover:-translate-y-1 hover:shadow-md`}
              >

                {/* Top Row: Step Number Left, Icon Square Right */}
                <div className="flex items-center justify-between mb-6">
                  {/* Step Number Circle */}
                  <div className={`w-10 h-10 rounded-full font-bold text-[16px] flex items-center justify-center ${step.numStyle}`}>
                    {step.number}
                  </div>

                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center ${step.boxStyle}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex-1 mb-6">
                  <h3 className="text-[18px] font-bold text-[#0f172a] leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Pill Badge */}
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${step.pillStyle}`}>
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




