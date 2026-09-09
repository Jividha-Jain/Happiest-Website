"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, LayoutDashboard, Users, CreditCard, Award, Plus, MessageSquare, BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";

interface OrganizersProps {
  scrollTo: (id: string) => void;
}

export default function Organizers({ scrollTo }: OrganizersProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "calendar">("overview");

  return (
    <section
      id="organizers"
      className="py-24 md:py-36 bg-warm-cream text-text-dark relative z-20 overflow-hidden border-t border-slate-200/40 select-none text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Large Desktop Dashboard Mockup */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-1 md:p-1.5 overflow-hidden"
            >
              {/* Browser chrome header */}
              <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-100 bg-slate-50 rounded-t-xl select-none">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                
                <div className="text-[9px] text-slate-400 font-bold tracking-wider font-mono">
                  admin.happiest.team/dashboard
                </div>
                <div className="w-8" />
              </div>

              {/* Dashboard Inner Grid */}
              <div className="grid grid-cols-12 bg-slate-50 min-h-[400px] md:min-h-[440px] text-left text-xs select-none">
                
                {/* Console Sidebar */}
                <aside className="col-span-3 border-r border-slate-200 bg-white p-3.5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block pl-1 font-display">Console</span>
                    
                    <nav className="space-y-1">
                      <button
                        type="button"
                        onClick={() => setActiveTab("overview")}
                        className={`w-full flex items-center space-x-2 p-2 rounded-lg text-left font-bold cursor-pointer transition-colors ${
                          activeTab === "overview" ? "bg-primary-blue/10 text-primary-blue" : "text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Overview</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setActiveTab("calendar")}
                        className={`w-full flex items-center space-x-2 p-2 rounded-lg text-left font-bold cursor-pointer transition-colors ${
                          activeTab === "calendar" ? "bg-primary-blue/10 text-primary-blue" : "text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Calendar</span>
                      </button>
                    </nav>
                  </div>
                  
                  <div className="flex items-center space-x-1.5 pl-1.5">
                    <div className="h-6 w-6 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center text-[10px]">C</div>
                    <span className="text-[9px] text-slate-500 font-bold hidden sm:inline">Austin RC</span>
                  </div>
                </aside>

                {/* Dashboard Main Workspace */}
                <main className="col-span-9 p-4 flex flex-col justify-between space-y-3.5 overflow-hidden bg-white">
                  
                  {/* Header / Community Overview */}
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-tight font-display">Austin Run Club</h3>
                      <span className="text-[8.5px] text-slate-450 block font-normal mt-0.5">Admin &bull; Dashboard</span>
                    </div>
                    
                    <button className="bg-slate-900 hover:bg-slate-800 text-white text-[8.5px] px-2.5 py-1.5 rounded-lg flex items-center gap-1 font-semibold cursor-pointer">
                      <Plus className="w-3 h-3 text-primary-blue" />
                      <span>Create Event</span>
                    </button>
                  </div>

                  {activeTab === "overview" ? (
                    <div className="space-y-3.5 flex-1 flex flex-col justify-between">
                      {/* Metric cards */}
                      <div className="grid grid-cols-4 gap-2">
                        
                        {/* Members count */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 text-left shadow-xs">
                          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider block">Members</span>
                          <span className="text-slate-900 font-extrabold text-[11px] block mt-1 font-display">1,248</span>
                        </div>
                        
                        {/* Bookings count */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 text-left shadow-xs">
                          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider block">Bookings</span>
                          <span className="text-slate-900 font-extrabold text-[11px] block mt-1 font-display">128</span>
                        </div>
                        
                        {/* Revenue ledger */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 text-left shadow-xs">
                          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider block">Revenue</span>
                          <span className="text-slate-900 font-extrabold text-[11px] block mt-1 font-display">$3,420</span>
                        </div>
                        
                        {/* Engagement score */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 text-left shadow-xs">
                          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider block">Engagement</span>
                          <span className="text-emerald-700 font-extrabold text-[11px] block mt-1 font-display">98%</span>
                        </div>

                      </div>

                      {/* Analytics Graph */}
                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex-1 flex flex-col justify-between shadow-xs">
                        <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Weekly RSVP Growth</span>
                        
                        <div className="relative h-16 w-full border-b border-l border-slate-200/70 flex items-end">
                          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 150 50" preserveAspectRatio="none">
                            <path
                              d="M 0,42 C 25,35 50,18 75,22 C 100,12 125,8 150,2"
                              fill="none"
                              stroke="#5A63F6"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Recent Activity Ledger */}
                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-1.5">
                        <span className="text-[7px] font-bold text-slate-450 uppercase tracking-wider block">Recent Activity</span>
                        <div className="flex items-center justify-between text-[8px] text-slate-600 font-semibold border-b border-slate-200/40 pb-1.5">
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-primary-blue inline-block" />
                            Meera Shah joined Sunday Run Club
                          </span>
                          <span className="text-slate-400 font-medium">Just now</span>
                        </div>
                        <div className="flex items-center justify-between text-[8px] text-slate-600 font-semibold">
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-primary-blue inline-block" />
                            Rohan Patel created Zilker morning run event
                          </span>
                          <span className="text-slate-400 font-medium">1h ago</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Calendar Tab
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex-1 space-y-2 shadow-xs">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Calendar & Schedule</span>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-white border border-slate-150 rounded-lg shadow-xs">
                          <div>
                            <span className="font-extrabold text-[9.5px] block text-slate-800">Sunday Morning Run & Coffee</span>
                            <span className="text-[8px] text-slate-400 block mt-0.5">June 28 &bull; Zilker Park Lawn</span>
                          </div>
                          <span className="text-[7.5px] bg-[#E6F5ED] text-emerald-800 px-2 py-0.5 rounded-full font-bold">6 slots left</span>
                        </div>
                      </div>
                    </div>
                  )}

                </main>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Heading & Feature List */}
          <div className="lg:col-span-5 text-left space-y-8 lg:pl-4">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-primary-blue uppercase tracking-widest block font-display">
                CREATE CLUB
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-display">
                Turn your passion into a club people love.
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Create your club, invite members, host events, share updates, sell passes, and grow your community from one dashboard.
              </p>
            </div>

            {/* Feature list with thin divider lines */}
            <div className="border-t border-slate-200 select-none">
              {[
                { name: "Create your club", desc: "Define your club vibe, customize branding, and launch channels." },
                { name: "Invite members", desc: "Easily broadcast invite links, approve applications, and assign badges." },
                { name: "Host events", desc: "Publish workshop sessions, schedule meetups, and track calendar RSVPs." },
                { name: "Manage bookings", desc: "Automate passes, restrict ticket volumes, and handle attendee lists." },
                { name: "Sell products", desc: "Charge monthly pass memberships, sell digital files, or trade tote bags." },
                { name: "Track growth", desc: "Review revenue ledger statements, engagement levels, and growth metrics." },
              ].map((item) => (
                <div
                  key={item.name}
                  className="border-b border-slate-200 py-3 flex items-start justify-between gap-4 text-xs font-semibold"
                >
                  <span className="text-slate-900 font-extrabold font-display shrink-0 w-32">{item.name}</span>
                  <span className="text-slate-500 font-normal leading-normal text-left flex-1">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* Bottom CTA Button */}
            <button
              onClick={() => scrollTo("community-economy")}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all cursor-pointer text-sm font-display inline-block"
            >
              Start Your Club
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
