"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "How does payment processing and Stripe payouts work?",
    a: "Happiest.team integrates directly with Stripe Connect. You link your existing or new Stripe account, choose subscription intervals or ticket values, and the payouts are transferred directly to your bank account with a minimal platform fee."
  },
  {
    q: "Can I host both in-person meetups and virtual livestream events?",
    a: "Absolutely. Our events engine supports setting physical geographic locations (mapping local RSVPs) or automatic link generation for virtual events via integrations with Zoom, Discord Stage, and Google Meet."
  },
  {
    q: "How does the HGPT AI recommendation assistant search for my club?",
    a: "When you launch a club, you provide tags and descriptions. HGPT continuously indexes this content into a vector database, allowing members asking conversational queries like 'Where can I meet developers this weekend in LA' to match with you."
  },
  {
    q: "Is there a limit to how many spaces or folders I can create?",
    a: "On the Starter tier you can initialize up to 2 spaces. Our Growth and Scale plans support unlimited organized folders and spaces, allowing you to build separate chat threads, resources, galleries, and announcement boards."
  },
  {
    q: "What is the verified host badge and how do I receive it?",
    a: "Safety is our core priority. Organizers can submit structural verification documents (business license or identity check). Once approved, your profile and spaces display a verified shield, which improves match and RSVP conversion."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="py-14 sm:py-24 md:py-32 bg-gradient-to-b from-[#fbfaff] to-white text-slate-800 relative z-20 overflow-hidden border-t border-purple-100/40 select-none text-left font-sans"
    >
      {/* Soft Background Glows */}
      <div className="absolute top-[-30%] left-[-10%] w-[45rem] h-[45rem] rounded-full bg-purple-100/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[45rem] h-[45rem] rounded-full bg-indigo-100/20 blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100/80 text-[10px] font-bold uppercase tracking-widest text-[#7c3aed]">
            <HelpCircle className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span>Faq Center</span>
          </div>
          
          <h2 className="text-2xl sm:text-[34px] md:text-[40px] font-black text-slate-900 tracking-tight leading-tight px-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed px-2">
            Everything you need to know about setting up and running your premium spaces.
          </p>
        </div>

        {/* Minimalist Accordion List with line separators */}
        <div className="divide-y divide-purple-100/80 border-t border-b border-purple-100/80">
          {FAQS.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="py-4 sm:py-5 transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between text-left cursor-pointer select-none focus:outline-none group py-1 gap-3"
                >
                  <span className={`text-sm sm:text-[16px] font-bold leading-snug transition-colors duration-200 ${
                    isOpen ? "text-[#7c3aed]" : "text-slate-800 group-hover:text-slate-950"
                  }`}>
                    {item.q}
                  </span>
                  
                  {/* Dynamic Plus/Minus Icon */}
                  <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                    <div className={`absolute w-3.5 sm:w-4 h-[2px] rounded-full transition-transform duration-300 bg-[#7c3aed] ${isOpen ? "rotate-90" : ""}`} />
                    <div className="absolute w-[2px] h-3.5 sm:h-4 rounded-full transition-transform duration-300 bg-[#7c3aed]" style={{ transform: isOpen ? "rotate(90deg) scale(0)" : "none" }} />
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal pt-2.5 pb-2 pr-4 sm:pr-6">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
