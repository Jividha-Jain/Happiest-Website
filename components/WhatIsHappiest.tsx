"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Calendar,
  Package,
  BookOpen,
  Heart,
  Search,
  Bell,
  Plus,
  MoreVertical,
  Lock,
  ChevronRight,
  ChevronDown,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Cloud,
  Activity,
  Flag,
  Award,
  Shirt,
  FileText,
  Check,
  Sun,
  Moon,
} from "lucide-react";

interface WhatIsHappiestProps {
  scrollTo: (id: string) => void;
}

export default function WhatIsHappiest({ scrollTo }: WhatIsHappiestProps) {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
  const [activeNav, setActiveNav] = useState<string>("Members");
  const [activeSubTab, setActiveSubTab] = useState<string>("All Members");
  const [memberSearchQuery, setMemberSearchQuery] = useState<string>("");
  const [cartItems, setCartItems] = useState<Record<string, boolean>>({});
  const [likes, setLikes] = useState(34);
  const [hasLiked, setHasLiked] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState<number>(1);

  const navItems = [
    { name: "Feed", icon: Home },
    { name: "Members", icon: Users },
    { name: "Events", icon: Calendar },
    { name: "Products", icon: Package },
    { name: "Courses", icon: BookOpen },
    { name: "Loyalty", icon: Heart },
  ];

interface MemberItem {
  name: string;
  joined: string;
  bio: string;
  role: string;
  category: string;
  badgeStyle: string;
  avatar?: string;
  initials?: string;
  initialsBg?: string;
}

  const membersList: MemberItem[] = [
    {
      name: "Priya Nair",
      joined: "Joined Jan 2026",
      bio: "Loves morning runs and good coffee ☕",
      role: "Pacer",
      category: "Admins",
      badgeStyle: "bg-[#6329be] text-purple-100 font-semibold",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Rahul Menon",
      joined: "Joined Mar 2026",
      bio: "Marathon enthusiast | Believes in progress",
      role: "Volunteer",
      category: "Volunteers",
      badgeStyle: "bg-[#48b97b] text-[#061e11] font-bold",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Aisha Khan",
      joined: "Joined last week",
      bio: "Running towards a healthier me ✨",
      role: "New",
      category: "New This Week",
      badgeStyle: "bg-[#e5af4b] text-[#281800] font-bold",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Dev Sharma",
      joined: "Joined Feb 2026",
      bio: "Runs for the stories 💼",
      role: "Member",
      category: "Members",
      badgeStyle: "bg-[#2a2b4b] text-purple-200 font-medium",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
  ];

  const eventsList = [
    {
      title: "Saturday Long Run",
      meta: "12 Oct · 6:00 AM · Lalbagh",
      badge: "24 going",
      badgeStyle: "bg-[#1da282] text-white border border-emerald-400/30",
    },
    {
      title: "Form & Drills Clinic",
      meta: "Paid session · ₹300",
      badge: "8 seats left",
      badgeStyle: "bg-[#d99b38] text-[#241300] font-bold border border-amber-300/40",
    },
    {
      title: "10K Time Trial",
      meta: "26 Oct · Kanteerava Stadium",
      badge: "RSVP open",
      badgeStyle: "bg-[#4a2e80] text-purple-200 border border-purple-400/30",
    },
  ];

  const productsList = [
    {
      id: "singlet",
      title: "Club Singlet",
      subtitle: "Apparel · ships via Shiprocket",
      price: "₹899",
      meta: "42 sold",
      actionType: "add_to_cart",
      actionText: "Add to Cart",
      Icon: Shirt,
      iconBg: "bg-indigo-600/30 text-indigo-400 border border-indigo-500/30",
    },
    {
      id: "plan",
      title: "Training Plan · 8 weeks",
      subtitle: "Digital download",
      price: "₹1,499",
      meta: "Instant Access",
      actionType: "buy_now",
      actionText: "Buy Now",
      Icon: FileText,
      iconBg: "bg-emerald-600/30 text-emerald-400 border border-emerald-500/30",
    },
    {
      id: "pack",
      title: "Race Day Pack",
      subtitle: "Bundle · 0 left",
      price: "₹2,200",
      meta: "Out of stock",
      actionType: "out_of_stock",
      actionText: "Out of Stock",
      Icon: Package,
      iconBg: "bg-rose-600/20 text-rose-400 border border-rose-500/30",
    },
  ];

  const coursesModules = [
    {
      title: "Module 1 · Base building",
      status: "completed",
      Icon: Cloud,
      iconBg: "bg-sky-500/20 text-sky-400 border border-sky-500/30",
    },
    {
      title: "Module 2 · Tempo & threshold",
      status: "completed",
      Icon: Activity,
      iconBg: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
    },
    {
      title: "Module 3 · Race prep",
      status: "active",
      Icon: Flag,
      iconBg: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    },
    {
      title: "Module 4 · Taper & race day",
      status: "locked",
      Icon: Award,
      iconBg: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    },
  ];

  const loyaltyLeaderboard = [
    {
      rank: "#1",
      name: "Priya Nair",
      points: "2,140 pts",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      cardStyle: "bg-amber-950/30 border-amber-500/40 text-amber-300",
      ptsColor: "text-amber-400 font-extrabold",
    },
    {
      rank: "#2",
      name: "Rahul Menon",
      points: "1,880 pts",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      cardStyle: "bg-[#120a28]/80 border-white/[0.08] text-slate-300",
      ptsColor: "text-slate-200 font-bold",
    },
    {
      rank: "#3",
      name: "Aisha Khan",
      points: "1,610 pts",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      cardStyle: "bg-purple-950/30 border-purple-500/40 text-purple-300",
      ptsColor: "text-purple-400 font-extrabold",
    },
    {
      rank: "#4",
      name: "Dev Sharma",
      points: "1,240 pts",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      cardStyle: "bg-[#120a28]/80 border-white/[0.08] text-slate-300",
      ptsColor: "text-slate-200 font-bold",
    },
  ];

  const pollOptions = [
    { label: "5 Oct · Cubbon Park", percent: 24 },
    { label: "12 Oct · Lalbagh", percent: 58 },
    { label: "19 Oct · ORR loop", percent: 18 },
  ];

  const handleLikeToggle = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <section
      id="what-is-happiest"
      className="relative z-20 font-sans pt-12 pb-16 md:pt-16 md:pb-24 bg-[#050311] overflow-hidden select-none"
    >
      {/* ── Glowing Top Section Separator Line ── */}
      <div className="absolute top-0 left-0 right-0 w-full flex items-center justify-center pointer-events-none z-30">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-[#7C5CFF]/70 to-transparent shadow-[0_0_18px_rgba(124,92,255,0.8)]" />
      </div>

      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* ══════════ MAC DASHBOARD MOCKUP WINDOW (LIGHT / DARK THEME) ══════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`w-full rounded-[24px] overflow-hidden transition-colors duration-300 ${
            isLightTheme
              ? "bg-[#fcfbfe] border border-purple-200/70 shadow-[0_20px_60px_rgba(40,20,80,0.14)] text-[#1e1239]"
              : "bg-[#0c0620] border border-white/[0.12] shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(99,102,241,0.18)] text-white"
          }`}
        >
          {/* Top Chrome Header Bar */}
          <div
            className={`flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b transition-colors duration-300 ${
              isLightTheme
                ? "bg-white border-purple-100"
                : "bg-[#080417] border-white/[0.08]"
            }`}
          >
            {/* Left: Official happiest.team Brand Logo */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm shadow-[0_0_12px_rgba(99,102,241,0.4)] border border-indigo-400/30 shrink-0">
                H
              </div>
              <span
                className={`font-extrabold text-base tracking-tight font-display ${
                  isLightTheme ? "text-[#1e1239]" : "text-white"
                }`}
              >
                happiest<span className="text-purple-600 font-bold">.team</span>
              </span>
            </div>

            {/* Middle: Top Global Search Bar */}
            <div
              className={`hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-xs min-w-[240px] md:min-w-[290px] border transition-colors ${
                isLightTheme
                  ? "bg-[#f3effa] border-purple-100 text-[#2d214c] placeholder:text-[#8274a5]"
                  : "bg-[#120a2a] border-white/10 text-slate-400"
              }`}
            >
              <Search className="w-3.5 h-3.5 shrink-0 opacity-70 text-purple-600" />
              <span className="text-xs opacity-90 whitespace-nowrap">
                Search members, posts, events...
              </span>
            </div>

            {/* Right: Theme Toggle + Notifications & User Profile */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Theme Toggle Button (Light / Dark Switcher) */}
              <button
                onClick={() => setIsLightTheme(!isLightTheme)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                  isLightTheme
                    ? "bg-purple-100/90 text-purple-900 border-purple-300/80 hover:bg-purple-200/90 shadow-xs"
                    : "bg-white/10 text-slate-200 border-white/15 hover:bg-white/20"
                }`}
                title="Toggle Light / Dark Mode"
              >
                {isLightTheme ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    <span>Light Theme</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-purple-300 fill-purple-300" />
                    <span>Dark Theme</span>
                  </>
                )}
              </button>

              <div className="relative">
                <button
                  className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                    isLightTheme
                      ? "hover:bg-purple-100/70 text-purple-700"
                      : "hover:bg-white/10 text-slate-300"
                  }`}
                >
                  <Bell className="w-4 h-4 text-purple-600" />
                </button>
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-600 ring-2 ring-white" />
              </div>

              <div className="flex items-center gap-1.5 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="User avatar"
                  className="w-7 h-7 rounded-full border border-purple-400/40 object-cover"
                />
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-colors ${
                    isLightTheme
                      ? "text-slate-500 group-hover:text-purple-900"
                      : "text-slate-400 group-hover:text-white"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Window Body Grid (Left Sidebar + Right Dashboard Pane) */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
            {/* LEFT SIDEBAR (LIGHT / DARK THEME) */}
            <div
              className={`md:col-span-4 lg:col-span-4 p-5 sm:p-6 border-r flex flex-col justify-between transition-colors duration-300 ${
                isLightTheme
                  ? "bg-[#f4f0f9] border-purple-100"
                  : "bg-[#0a051b] border-white/[0.08]"
              }`}
            >
              <div>
                {/* Brand Header Box */}
                <div className="flex items-center gap-3.5 mb-8 text-left p-0.5">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#5430f8] via-[#7c44ff] to-[#a253ff] flex items-center justify-center text-white shrink-0 transition-all duration-300 ${
                      isLightTheme
                        ? "ring-4 ring-purple-200/70 shadow-md"
                        : "ring-4 ring-purple-500/30 shadow-[0_0_20px_rgba(124,68,255,0.5)]"
                    }`}
                  >
                    <span className="text-xl sm:text-2xl leading-none select-none">🏃</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-xs sm:text-sm font-extrabold tracking-tight leading-snug font-display ${
                        isLightTheme ? "text-[#1e1239]" : "text-white"
                      }`}
                    >
                      SUNDAY RUNNERS<br />CLUB
                    </h3>
                    <p
                      className={`text-xs font-semibold mt-1 tracking-wide ${
                        isLightTheme ? "text-[#675b83]" : "text-slate-300"
                      }`}
                    >
                      Run · Connect · Grow
                    </p>
                  </div>
                </div>

                {/* Sidebar Navigation */}
                <div className="space-y-1.5 text-left">
                  {navItems.map((item) => {
                    const IconComp = item.icon;
                    const isActive = activeNav === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveNav(item.name)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? isLightTheme
                              ? "bg-[#6b25c2] text-white shadow-md font-bold"
                              : "bg-[#281559] text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-purple-500/40 font-bold"
                            : isLightTheme
                            ? "text-[#4a3b6e] hover:text-[#1e1239] hover:bg-purple-100/70"
                            : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComp
                            className={`w-4 h-4 ${
                              isActive
                                ? "text-white"
                                : isLightTheme
                                ? "text-[#675b83]"
                                : "text-slate-300"
                            }`}
                          />
                          <span>{item.name}</span>
                        </div>
                        {isActive && (
                          <ChevronRight
                            className={`w-4 h-4 ${
                              isLightTheme ? "text-purple-200" : "text-purple-300"
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT MAIN CONTENT PANEL */}
            <div
              className={`md:col-span-8 lg:col-span-8 p-5 sm:p-7 flex flex-col gap-5 text-left transition-colors duration-300 ${
                isLightTheme ? "bg-white" : "bg-[#070314]"
              }`}
            >
              {/* Dynamic View Switcher */}
              <AnimatePresence mode="wait">
                {/* 1. MEMBERS VIEW */}
                {activeNav === "Members" && (
                  <motion.div
                    key="members-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5 w-full"
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h2
                          className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                            isLightTheme ? "text-[#1e1239]" : "text-white"
                          }`}
                        >
                          Members
                        </h2>
                        <p
                          className={`text-xs font-semibold mt-1 ${
                            isLightTheme ? "text-[#675b83]" : "text-slate-400"
                          }`}
                        >
                          128 members · 12 new this week
                        </p>
                      </div>

                      <button className="bg-[#6b25c2] hover:bg-[#7b32d6] text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md flex items-center gap-1.5 transition-all cursor-pointer self-start sm:self-center shrink-0">
                        <Plus className="w-4 h-4 stroke-[3]" />
                        <span>Invite Members</span>
                      </button>
                    </div>

                    {/* Sub-Filter Tabs & Search */}
                    <div
                      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 ${
                        isLightTheme ? "border-purple-100" : "border-white/[0.08]"
                      }`}
                    >
                      {/* Sub-tabs */}
                      <div className="flex items-center gap-5 sm:gap-6 text-xs font-semibold flex-wrap">
                        {["All Members", "Admins", "Volunteers", "New This Week"].map((subTab) => {
                          const isSubActive = activeSubTab === subTab;
                          return (
                            <button
                              key={subTab}
                              onClick={() => setActiveSubTab(subTab)}
                              className={`relative pb-2 transition-colors cursor-pointer ${
                                isSubActive
                                  ? isLightTheme
                                    ? "text-purple-900 font-extrabold"
                                    : "text-white font-bold"
                                  : isLightTheme
                                  ? "text-[#675b83] hover:text-[#1e1239]"
                                  : "text-slate-400 hover:text-slate-200"
                              }`}
                            >
                              <span>{subTab}</span>
                              {isSubActive && (
                                <motion.div
                                  layoutId="subTabUnderline"
                                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full"
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Right Search Box */}
                      <div
                        className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs min-w-[190px] border ${
                          isLightTheme
                            ? "bg-[#f5f2fa] border-purple-100 text-[#1e1239]"
                            : "bg-[#120a2a] border-white/10 text-white"
                        }`}
                      >
                        <Search className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                        <input
                          type="text"
                          placeholder="Search members..."
                          value={memberSearchQuery}
                          onChange={(e) => setMemberSearchQuery(e.target.value)}
                          className="bg-transparent text-xs outline-none w-full placeholder:text-[#8274a5]"
                        />
                      </div>
                    </div>

                    {/* Members List Container */}
                    <div
                      className={`rounded-2xl border overflow-hidden divide-y ${
                        isLightTheme
                          ? "bg-white border-purple-200/80 divide-purple-100 shadow-[0_4px_20px_rgba(124,58,237,0.04)]"
                          : "bg-[#0e0724] border-white/[0.08] divide-white/[0.04]"
                      }`}
                    >
                      {membersList
                        .filter((m) => {
                          if (activeSubTab === "Admins") return m.category === "Admins" || m.role === "Pacer";
                          if (activeSubTab === "Volunteers") return m.role === "Volunteer";
                          if (activeSubTab === "New This Week") return m.role === "New";
                          return true;
                        })
                        .filter((m) =>
                          m.name.toLowerCase().includes(memberSearchQuery.toLowerCase())
                        )
                        .map((member) => {
                          let roleBadgeClass = "";
                          if (member.role === "Pacer") {
                            roleBadgeClass = isLightTheme
                              ? "bg-purple-100/90 text-purple-700 border border-purple-200/90 font-extrabold"
                              : "bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold";
                          } else if (member.role === "Volunteer") {
                            roleBadgeClass = isLightTheme
                              ? "bg-emerald-100/90 text-emerald-800 border border-emerald-200/90 font-extrabold"
                              : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold";
                          } else if (member.role === "New") {
                            roleBadgeClass = isLightTheme
                              ? "bg-amber-100/90 text-amber-800 border border-amber-200/90 font-extrabold"
                              : "bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold";
                          } else {
                            roleBadgeClass = isLightTheme
                              ? "bg-slate-100 text-slate-700 border border-slate-200/80 font-semibold"
                              : "bg-slate-800/80 text-slate-300 border border-slate-700/60 font-semibold";
                          }

                          return (
                            <div
                              key={member.name}
                              className={`px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-4 transition-colors ${
                                isLightTheme ? "hover:bg-purple-50/40" : "hover:bg-white/[0.02]"
                              }`}
                            >
                              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                                {member.avatar ? (
                                  <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-10 h-10 rounded-full object-cover border border-purple-200/60 shrink-0 shadow-xs"
                                  />
                                ) : (
                                  <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 text-purple-800 font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                                    {member.initials}
                                  </div>
                                )}
                                <div className="min-w-0">
                                  <h4
                                    className={`text-sm font-bold leading-snug ${
                                      isLightTheme ? "text-[#1a0c36]" : "text-white"
                                    }`}
                                  >
                                    {member.name}
                                  </h4>
                                  <p
                                    className={`text-xs font-medium ${
                                      isLightTheme ? "text-[#675b83]" : "text-slate-400"
                                    }`}
                                  >
                                    {member.joined}
                                  </p>
                                </div>
                              </div>

                              {/* Role Badge & Action Dots */}
                              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                                <span
                                  className={`text-[11px] sm:text-xs px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full shadow-xs ${roleBadgeClass}`}
                                >
                                  {member.role}
                                </span>
                                <button
                                  className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                                    isLightTheme
                                      ? "text-slate-400 hover:text-purple-900 hover:bg-purple-100/60"
                                      : "text-slate-400 hover:text-white hover:bg-white/10"
                                  }`}
                                >
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </motion.div>
                )}

                {/* 2. FEED VIEW */}
                {activeNav === "Feed" && (
                  <motion.div
                    key="feed-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 w-full"
                  >
                    <div
                      className={`rounded-2xl p-5 border text-left space-y-4 ${
                        isLightTheme
                          ? "bg-[#fcfbfe] border-purple-100 text-[#1e1239] shadow-xs"
                          : "bg-[#120a28]/90 border-white/[0.08] text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                          alt="Priya Nair"
                          className="w-10 h-10 rounded-full object-cover border border-purple-400/40"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4
                              className={`text-sm font-bold ${
                                isLightTheme ? "text-[#1e1239]" : "text-white"
                              }`}
                            >
                              Priya Nair
                            </h4>
                            <span
                              className={`text-xs ${
                                isLightTheme ? "text-[#675b83]" : "text-slate-400"
                              }`}
                            >
                              · 2h
                            </span>
                          </div>
                          <p
                            className={`text-[11px] font-medium ${
                              isLightTheme ? "text-[#675b83]" : "text-slate-400"
                            }`}
                          >
                            Member since Jan 2026
                          </p>
                        </div>
                      </div>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed font-normal ${
                          isLightTheme ? "text-[#342754]" : "text-slate-300"
                        }`}
                      >
                        Just hit a 5K personal best this morning. Thank you to everyone who turned up for the Tuesday tempo run, the pacing group made all the difference.
                      </p>

                      <div className="flex items-center gap-4 text-xs font-semibold pt-1">
                        <button
                          onClick={handleLikeToggle}
                          className={`flex items-center gap-1.5 cursor-pointer transition-colors ${
                            hasLiked ? "text-rose-500" : isLightTheme ? "text-[#675b83] hover:text-rose-500" : "text-slate-400 hover:text-rose-400"
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${hasLiked ? "fill-rose-500 text-rose-500" : ""}`} />
                          <span>{likes}</span>
                        </button>

                        <div className="flex items-center gap-1.5 text-slate-500">
                          <MessageCircle className="w-4 h-4" />
                          <span>6</span>
                        </div>
                      </div>

                      <div
                        className={`border rounded-xl p-3.5 flex items-start gap-3 mt-2 ${
                          isLightTheme
                            ? "bg-white border-purple-100 text-[#1e1239]"
                            : "bg-[#0b051b] border-white/10 text-slate-200"
                        }`}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                          alt="Rahul Menon"
                          className="w-7 h-7 rounded-full object-cover border border-emerald-400/40"
                        />
                        <div className="text-xs">
                          <span
                            className={`font-bold mr-1.5 ${
                              isLightTheme ? "text-[#1e1239]" : "text-white"
                            }`}
                          >
                            Rahul Menon
                          </span>
                          <span className={isLightTheme ? "text-[#4a3b6e]" : "text-slate-300"}>
                            Huge! That negative split is paying off. See you Saturday.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`rounded-2xl p-5 border text-left space-y-3.5 ${
                        isLightTheme
                          ? "bg-[#fcfbfe] border-purple-100 shadow-xs"
                          : "bg-[#120a28]/90 border-white/[0.08]"
                      }`}
                    >
                      <h4
                        className={`text-sm font-extrabold ${
                          isLightTheme ? "text-[#1e1239]" : "text-white"
                        }`}
                      >
                        Which Saturday works for the next meetup?
                      </h4>

                      <div className="space-y-2.5">
                        {pollOptions.map((opt, idx) => {
                          const isSelected = selectedPoll === idx;
                          return (
                            <div
                              key={opt.label}
                              onClick={() => setSelectedPoll(idx)}
                              className="cursor-pointer space-y-1 group"
                            >
                              <div className="flex items-center justify-between text-xs font-semibold">
                                <span
                                  className={
                                    isSelected
                                      ? isLightTheme
                                        ? "text-purple-900 font-extrabold"
                                        : "text-white font-bold"
                                      : isLightTheme
                                      ? "text-[#4a3b6e]"
                                      : "text-slate-300"
                                  }
                                >
                                  {opt.label}
                                </span>
                                <span
                                  className={
                                    isSelected
                                      ? "text-purple-600 font-extrabold"
                                      : "text-slate-500"
                                  }
                                >
                                  {opt.percent}%
                                </span>
                              </div>

                              <div
                                className={`w-full h-2.5 rounded-full overflow-hidden relative border ${
                                  isLightTheme ? "bg-purple-100/70 border-purple-200/50" : "bg-[#0a051b] border-white/5"
                                }`}
                              >
                                <div
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    isSelected
                                      ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                                      : "bg-purple-300/50"
                                  }`}
                                  style={{ width: `${opt.percent}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div
                        className={`flex items-center justify-between text-[11px] font-medium pt-1 ${
                          isLightTheme ? "text-[#675b83]" : "text-slate-400"
                        }`}
                      >
                        <span>83 votes · Closes Friday</span>
                        <span className="text-purple-600 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Interactive Demo
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. EVENTS VIEW */}
                {activeNav === "Events" && (
                  <motion.div
                    key="events-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3.5 w-full"
                  >
                    {eventsList.map((evt) => (
                      <div
                        key={evt.title}
                        className={`rounded-2xl p-4 sm:p-5 border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-transform duration-200 hover:scale-[1.01] ${
                          isLightTheme
                            ? "bg-[#fcfbfe] border-purple-100 shadow-xs"
                            : "bg-[#120a28]/90 border-white/[0.08]"
                        }`}
                      >
                        <div className="space-y-1.5">
                          <h4
                            className={`text-sm font-bold leading-snug ${
                              isLightTheme ? "text-[#1e1239]" : "text-white"
                            }`}
                          >
                            {evt.title}
                          </h4>
                          <p
                            className={`text-xs font-medium ${
                              isLightTheme ? "text-[#675b83]" : "text-slate-400"
                            }`}
                          >
                            {evt.meta}
                          </p>

                          <div className="flex items-center -space-x-1.5 pt-1">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="" />
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="" />
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="" />
                          </div>
                        </div>

                        <span
                          className={`text-xs px-3.5 py-1 rounded-full border self-start sm:self-center ${
                            evt.badge.includes("going")
                              ? isLightTheme
                                ? "bg-emerald-100/90 text-emerald-800 border-emerald-200/90 font-extrabold"
                                : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 font-bold"
                              : evt.badge.includes("seats")
                              ? isLightTheme
                                ? "bg-amber-100/90 text-amber-800 border-amber-200/90 font-extrabold"
                                : "bg-amber-500/20 text-amber-300 border-amber-500/30 font-bold"
                              : isLightTheme
                              ? "bg-purple-100/90 text-purple-800 border-purple-200/90 font-extrabold"
                              : "bg-purple-500/20 text-purple-300 border-purple-500/30 font-bold"
                          }`}
                        >
                          {evt.badge}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* 4. PRODUCTS VIEW */}
                {activeNav === "Products" && (
                  <motion.div
                    key="products-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3.5 w-full"
                  >
                    {productsList.map((prod) => {
                      const IconComponent = prod.Icon;
                      const isAdded = cartItems[prod.id];
                      return (
                        <div
                          key={prod.title}
                          className={`rounded-2xl p-4 sm:p-5 border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 ${
                            isLightTheme
                              ? "bg-white border-purple-100 shadow-xs hover:border-purple-200 hover:shadow-md"
                              : "bg-[#120a28]/90 border-white/[0.08] hover:border-purple-500/40 hover:bg-[#160d32]"
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <div
                              className={`w-11 h-11 rounded-xl ${prod.iconBg} flex items-center justify-center shrink-0 shadow-sm`}
                            >
                              <IconComponent className="w-5 h-5 stroke-[2]" />
                            </div>
                            <div>
                              <h4
                                className={`text-sm font-bold leading-snug ${
                                  isLightTheme ? "text-[#1e1239]" : "text-white"
                                }`}
                              >
                                {prod.title}
                              </h4>
                              <p
                                className={`text-xs font-medium ${
                                  isLightTheme ? "text-[#675b83]" : "text-slate-400"
                                }`}
                              >
                                {prod.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                            <div className="text-left sm:text-right">
                              <span
                                className={`text-sm sm:text-base font-extrabold block ${
                                  isLightTheme ? "text-[#1e1239]" : "text-white"
                                }`}
                              >
                                {prod.price}
                              </span>
                              <span
                                className={`text-[11px] font-medium block whitespace-nowrap ${
                                  isLightTheme ? "text-[#675b83]" : "text-slate-400"
                                }`}
                              >
                                {prod.meta}
                              </span>
                            </div>

                            {/* Action CTA Buttons */}
                            {prod.actionType === "add_to_cart" && (
                              <button
                                onClick={() =>
                                  setCartItems((prev) => ({
                                    ...prev,
                                    [prod.id]: !prev[prod.id],
                                  }))
                                }
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm border whitespace-nowrap ${
                                  isAdded
                                    ? "bg-emerald-600 text-white border-emerald-400/40"
                                    : "bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400/30"
                                }`}
                              >
                                {isAdded ? "✓ Added to Cart" : "Add to Cart"}
                              </button>
                            )}

                            {prod.actionType === "buy_now" && (
                              <button
                                onClick={() =>
                                  setCartItems((prev) => ({
                                    ...prev,
                                    [prod.id]: !prev[prod.id],
                                  }))
                                }
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm border whitespace-nowrap ${
                                  isAdded
                                    ? "bg-purple-600 text-white border-purple-400/40"
                                    : "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400/30"
                                }`}
                              >
                                {isAdded ? "✓ Purchased!" : "Buy Now"}
                              </button>
                            )}

                            {prod.actionType === "out_of_stock" && (
                              <span
                                className={`px-4 py-2 rounded-full text-xs font-bold border cursor-not-allowed whitespace-nowrap ${
                                  isLightTheme
                                    ? "bg-rose-100 text-rose-800 border-rose-200"
                                    : "bg-rose-500/15 text-rose-300 border-rose-500/30"
                                }`}
                              >
                                Out of Stock
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}

                {/* 5. COURSES VIEW */}
                {activeNav === "Courses" && (
                  <motion.div
                    key="courses-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3.5 w-full"
                  >
                    {/* Course Modules List */}
                    <div className="space-y-2.5">
                      {coursesModules.map((mod) => {
                        const IconComponent = mod.Icon;
                        return (
                          <div
                            key={mod.title}
                            className={`rounded-2xl p-4 border flex items-center justify-between gap-3 transition-all duration-200 hover:scale-[1.005] ${
                              isLightTheme
                                ? "bg-white border-purple-100 shadow-xs hover:border-purple-200 hover:shadow-md"
                                : "bg-[#120a28]/90 border-white/[0.08] hover:border-purple-500/30"
                            }`}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div
                                className={`w-10 h-10 rounded-xl ${
                                  isLightTheme && mod.status === "locked"
                                    ? "bg-slate-100 text-slate-400 border border-slate-200"
                                    : mod.iconBg
                                } flex items-center justify-center shrink-0 shadow-sm`}
                              >
                                <IconComponent className="w-5 h-5 stroke-[2]" />
                              </div>
                              <h4
                                className={`text-xs sm:text-sm font-bold truncate ${
                                  mod.status === "locked"
                                    ? isLightTheme
                                      ? "text-slate-400 font-medium"
                                      : "text-slate-500 font-medium"
                                    : isLightTheme
                                    ? "text-[#1a0c36]"
                                    : "text-white"
                                }`}
                              >
                                {mod.title}
                              </h4>
                            </div>

                            <div className="shrink-0">
                              {mod.status === "completed" && (
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/40">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" /> Completed
                                </span>
                              )}
                              {mod.status === "active" && (
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-950/50 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800/40">
                                  In Progress <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                                </span>
                              )}
                              {mod.status === "locked" && (
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-100/80 dark:bg-slate-800/40 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700/50">
                                  <Lock className="w-3.5 h-3.5 stroke-[2]" /> Locked
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* 6. LOYALTY VIEW */}
                {activeNav === "Loyalty" && (
                  <motion.div
                    key="loyalty-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3.5 w-full"
                  >
                    <div className="space-y-3">
                      {loyaltyLeaderboard.map((item) => (
                        <div
                          key={item.name}
                          className={`rounded-2xl p-4 border flex items-center justify-between transition-all duration-200 hover:scale-[1.005] ${
                            isLightTheme
                              ? "bg-white border-purple-100 text-[#1a0c36] shadow-xs hover:shadow-md"
                              : item.cardStyle
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-sm sm:text-base font-black w-6 text-center">
                              {item.rank}
                            </span>
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="w-10 h-10 rounded-full object-cover border border-purple-100 shrink-0"
                            />
                            <h4
                              className={`text-sm font-bold leading-snug ${
                                isLightTheme ? "text-[#1e1239]" : "text-white"
                              }`}
                            >
                              {item.name}
                            </h4>
                          </div>

                          <span
                            className={`text-xs sm:text-sm font-extrabold ${
                              isLightTheme ? "text-purple-700" : item.ptsColor
                            }`}
                          >
                            {item.points}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p
                      className={`text-[11px] font-medium pt-1 px-1 ${
                        isLightTheme ? "text-[#675b83]" : "text-slate-400"
                      }`}
                    >
                      Points for attending, posting and referring, not just purchases.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full flex items-center justify-center pointer-events-none z-30">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>
    </section>
  );
}
