"use client";

import React, { useState, useRef } from "react";
import { Sparkles, Check } from "lucide-react";

interface PricingProps {
  scrollTo: (id: string) => void;
}

interface PricingPlan {
  name: string;
  priceMonthly: string;
  priceAnnually: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
  color: string;
}

interface ComparisonRow {
  name: string;
  desc: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
}

interface ComparisonCategory {
  title: string;
  rows: ComparisonRow[];
}

const COMPARISON_DATA: ComparisonCategory[] = [
  {
    title: "Essential Features",
    rows: [
      { name: "Active Members Limit", desc: "Maximum number of registered members allowed", starter: "Up to 250", growth: "Up to 2,500", scale: "Unlimited" },
      { name: "Discussion Spaces & Forums", desc: "Channels for member posts, topics, and replies", starter: "2 Spaces", growth: "Unlimited", scale: "Unlimited" },
      { name: "Stripe Payment Gateway", desc: "Process credit card transactions directly", starter: true, growth: true, scale: true },
      { name: "Event RSVP & Calendars", desc: "Organize events, meetings, and track attendance", starter: true, growth: true, scale: true },
      { name: "Member Portal & Profile App", desc: "Self-serve dashboard for members to edit profile info", starter: true, growth: true, scale: true },
      { name: "Direct Messages & Group Chats", desc: "Real-time private texting and group chats", starter: false, growth: true, scale: true },
      { name: "HGPT Search Database Indexing", desc: "Search indexing depth of your community spaces", starter: "Standard", growth: "Deep Indexing", scale: "Custom Realtime" }
    ]
  },
  {
    title: "Financials & Commerce",
    rows: [
      { name: "Integrated Payments", desc: "Accept payments for subscriptions and tickets", starter: true, growth: true, scale: true },
      { name: "Custom Event Tickets", desc: "Sell paid tickets for digital or physical events", starter: false, growth: true, scale: true },
      { name: "Recurring Subscriptions", desc: "Bill members monthly or annually automatically", starter: false, growth: true, scale: true },
      { name: "Promotional Coupons & Codes", desc: "Generate custom discount codes for subscriptions", starter: false, growth: false, scale: true }
    ]
  },
  {
    title: "Premium & Customization",
    rows: [
      { name: "Electronic Waivers", desc: "Get member signatures on legal terms digitally", starter: false, growth: true, scale: true },
      { name: "Push Notifications & Text Alerts", desc: "Notify members instantly on mobile and SMS", starter: false, growth: true, scale: true },
      { name: "Custom Branded Domains", desc: "Point your custom URL directly to the community hub", starter: false, growth: false, scale: true },
      { name: "SSO Membership Sync", desc: "Single Sign-On connection for corporate members", starter: false, growth: false, scale: true }
    ]
  },
  {
    title: "Integrations & API",
    rows: [
      { name: "Zoom Meet Auto-generator", desc: "Create online meetings automatically on event creation", starter: false, growth: true, scale: true },
      { name: "Slack / Discord Auto-sync", desc: "Synchronize member roles with external chat apps", starter: false, growth: true, scale: true },
      { name: "Zapier Custom Automations", desc: "Connect data to 5,000+ apps on custom triggers", starter: false, growth: false, scale: true },
      { name: "API Webhook Log Access", desc: "Read and export developer webhook transaction logs", starter: false, growth: false, scale: true }
    ]
  },
  {
    title: "Support Tier",
    rows: [
      { name: "Customer Support Tier", desc: "Support ticketing and response SLA speed", starter: "Standard", growth: "Priority Help", scale: "Dedicated Assistant" }
    ]
  }
];

const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    priceMonthly: "$19",
    priceAnnually: "$15",
    desc: "Perfect for single interest clubs and local coordinate teams.",
    features: [
      "Up to 250 active members",
      "Stripe payment gateway Integration",
      "Event RSVP management",
      "Standard HGPT Search database indexing",
      "2 Spaces for discussions"
    ],
    cta: "Launch Starter Hub",
    popular: false,
    color: "bg-slate-800 text-white hover:bg-slate-700 shadow-xs border border-slate-700"
  },
  {
    name: "Growth",
    priceMonthly: "$49",
    priceAnnually: "$39",
    desc: "For growing communities seeking custom branding and metrics.",
    features: [
      "Up to 2,500 active members",
      "Direct messaging & high density chat",
      "Custom branding & typography controls",
      "Native Zoom & Slack automations",
      "Unlimited spaces & folders",
      "Advanced metric dashboard logs"
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "bg-[#2E1065] border border-purple-700/50 text-white hover:bg-[#3B137E] shadow-[0_0_25px_rgba(46,16,101,0.6)]"
  },
  {
    name: "Scale",
    priceMonthly: "$119",
    priceAnnually: "$95",
    desc: "For large enterprise coordinate teams managing heavy traffic.",
    features: [
      "Unlimited active members",
      "Automated e-learning course modules",
      "API webhook logs access",
      "Dedicated account success assistant",
      "Verified organizer safety badge",
      "Priority customer help center support"
    ],
    cta: "Connect Enterprise",
    popular: false,
    color: "bg-transparent text-white border border-slate-700 hover:bg-slate-800 shadow-xs"
  }
];

const renderValue = (val: string | boolean, planType: "starter" | "growth" | "scale") => {
  if (typeof val === "boolean") {
    if (val) {
      return <Check className="w-[22px] h-[22px] text-emerald-400 mx-auto" strokeWidth={3} />;
    } else {
      return <span className="text-slate-700/80 font-bold select-none text-[16px]">—</span>;
    }
  }
  
  let textColor = "text-slate-300";
  if (planType === "growth") textColor = "text-indigo-300 font-semibold";
  if (planType === "scale") textColor = "text-purple-300 font-semibold";
  
  return <span className={`text-[15px] tracking-wide font-medium ${textColor}`}>{val}</span>;
};

export default function Pricing({ scrollTo }: PricingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="py-12 md:py-16 bg-[#03050f] text-white relative z-20 overflow-hidden border-t border-slate-800/60 select-none text-center font-sans"
    >
      {/* Decorative Glows */}
      <div className="absolute top-[10%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-[30rem] h-[30rem] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10 relative z-10 flex flex-col items-center">
        
        {/* Title Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/50 border border-indigo-500/30 text-[10px] font-semibold uppercase tracking-wider text-indigo-400 shadow-xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Pricing Systems</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] font-display uppercase drop-shadow-sm">
            CHOOSE THE SCALE <br />
            OF YOUR HUB.
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed font-sans">
            Fully transparent tiers. Start launching your community spaces for free, and upgrade as your member count grows.
          </p>
        </div>

        {/* Toggle Switch — pill slider */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="relative flex items-center bg-[#080c18] border border-slate-800/80 p-1 rounded-full shadow-xl"
            style={{ boxShadow: "0 0 0 1px rgba(99,102,241,0.08), 0 8px 32px rgba(0,0,0,0.4)" }}
          >
            {/* Sliding pill indicator */}
            <span
              className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: billingCycle === "monthly" ? "4px" : "50%",
                right: billingCycle === "monthly" ? "50%" : "4px",
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                boxShadow: "0 0 16px rgba(99,102,241,0.45)",
              }}
            />

            {/* Monthly */}
            <button
              onClick={() => setBillingCycle("monthly")}
              className="relative z-10 px-6 py-2.5 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer min-w-[130px]"
              style={{ color: billingCycle === "monthly" ? "#ffffff" : "#64748b" }}
            >
              Monthly
            </button>

            {/* Annual */}
            <button
              onClick={() => setBillingCycle("annually")}
              className="relative z-10 px-6 py-2.5 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer min-w-[130px] flex items-center justify-center gap-2"
              style={{ color: billingCycle === "annually" ? "#ffffff" : "#64748b" }}
            >
              Annual
              <span
                className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full transition-all duration-200"
                style={{
                  background: billingCycle === "annually" ? "rgba(255,255,255,0.2)" : "rgba(99,102,241,0.15)",
                  color: billingCycle === "annually" ? "#ffffff" : "#818cf8",
                  border: billingCycle === "annually" ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgba(99,102,241,0.3)",
                }}
              >
                −20%
              </span>
            </button>
          </div>

          {/* Subtext */}
          <p className="text-[11px] text-slate-500 font-medium">
            {billingCycle === "annually"
              ? "🎉 You save up to $288/year with annual billing"
              : "Switch to annual and save up to 20%"}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl items-stretch">
          {PLANS.map((plan, idx) => {
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnually;
            return (
              <div
                key={idx}
                className={`bg-[#0A0E1A] rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative text-left backdrop-blur-xl ${
                  plan.popular
                    ? "border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/20 transform hover:-translate-y-1"
                    : "border-slate-800/80 shadow-lg hover:border-slate-700"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                )}

                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-bold text-white font-display uppercase tracking-wider">{plan.name}</h3>
                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed mt-1 font-sans">{plan.desc}</p>
                  </div>

                  <div className="flex items-baseline space-x-1 border-y border-slate-800/60 py-4">
                    <span className="text-4xl font-extrabold text-white font-display tracking-tight">{price}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">/ month</span>
                  </div>

                  {/* Feature Lists */}
                  <ul className="space-y-3.5 text-[11px] font-medium text-slate-300 font-sans pt-2">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => scrollTo("pricing")}
                    className={`w-full text-center py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer ${plan.color}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>        {/* Comparison Table Section */}
        {/* Comparison Table Section */}
        <div className="w-full max-w-7xl mt-24 pt-12 border-t border-slate-800/60">
          <div className="text-left mb-10 px-2 space-y-2.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[9.5px] font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full Capability Matrix</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-display">
              Compare plans
            </h3>
          </div>

          {/* Desktop/Tablet Table Wrapper */}
          <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-[#070b16] shadow-2xl relative overflow-visible">
            <table className="w-full text-left border-collapse min-w-[800px] font-sans">
              <thead className="bg-[#070b16] border-b border-slate-800">
                <tr>
                  <th className="py-6 px-6 text-[13px] font-black uppercase tracking-widest text-slate-400 w-2/5 font-display">
                    Features &amp; Modules
                  </th>
                  <th className="py-6 px-6 text-center w-1/5 bg-[#0d1226]/40">
                    <span className="text-[16px] font-black text-slate-200 uppercase tracking-widest font-display">Starter</span>
                  </th>
                  <th className="pt-3 pb-6 px-6 text-center w-1/5 bg-indigo-950/20">
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-md">Popular</span>
                      <span className="text-[16px] font-black text-indigo-400 uppercase tracking-widest font-display">Growth</span>
                    </div>
                  </th>
                  <th className="py-6 px-6 text-center w-1/5 bg-[#170e2b]/35">
                    <span className="text-[16px] font-black text-purple-400 uppercase tracking-widest font-display">Scale</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    {/* Category Title Row — numbered badge design */}
                    <tr className="border-y border-indigo-900/30" style={{ background: "rgba(79,70,229,0.08)" }}>
                      <td colSpan={4} className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          {/* Numbered badge */}
                          <span
                            className="inline-flex items-center justify-center w-6 h-6 rounded-lg text-[10px] font-black text-white shrink-0"
                            style={{
                              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                              boxShadow: "0 0 10px rgba(99,102,241,0.55)",
                            }}
                          >
                            {catIdx + 1}
                          </span>

                          {/* Gradient title */}
                          <span
                            className="text-[12px] font-black uppercase tracking-[0.14em] font-display"
                            style={{
                              background: "linear-gradient(90deg, #c7d2fe 0%, #a5b4fc 40%, #ddd6fe 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            {cat.title}
                          </span>

                          {/* Fade line */}
                          <div
                            className="flex-1 h-px opacity-25"
                            style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }}
                          />
                        </div>
                      </td>
                    </tr>
                    {/* Feature Rows */}
                    {cat.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="border-b border-slate-800/30 hover:bg-[#0c1224]/30 transition-colors duration-150 group/row">
                        <td className="py-4.5 px-6 group-hover/row:text-white transition-colors duration-150">
                          <div className="flex flex-col text-left">
                            <span className="text-[15px] font-bold text-slate-200 group-hover/row:text-white transition-colors">
                              {row.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4.5 px-6 text-center bg-[#0d1226]/20">
                          {renderValue(row.starter, "starter")}
                        </td>
                        <td className="py-4.5 px-6 text-center bg-indigo-500/[0.015]">
                          {renderValue(row.growth, "growth")}
                        </td>
                        <td className="py-4.5 px-6 text-center bg-purple-500/[0.01]">
                          {renderValue(row.scale, "scale")}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
