"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Compass, CreditCard } from "lucide-react";

interface MobileBottomNavProps {
  scrollTo?: (id: string) => void;
}

export default function MobileBottomNav({ scrollTo }: MobileBottomNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (id: string) => {
    if (id === "home") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
    } else if (id === "discover") {
      if (pathname === "/") {
        const element = document.getElementById("discover");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push("/#discover");
      }
    } else if (id === "pricing") {
      router.push("/pricing");
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/60 px-6 py-3 flex justify-around items-center shadow-lg">
      <button
        onClick={() => handleNavClick("home")}
        className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
          pathname === "/" ? "text-primary" : "text-slate-500 hover:text-primary"
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
      </button>

      <button
        onClick={() => handleNavClick("discover")}
        className={`flex flex-col items-center gap-1 cursor-pointer transition-colors text-slate-500 hover:text-primary`}
      >
        <Compass className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Explore</span>
      </button>

      <button
        onClick={() => handleNavClick("pricing")}
        className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
          pathname === "/pricing" ? "text-primary" : "text-slate-500 hover:text-primary"
        }`}
      >
        <CreditCard className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Pricing</span>
      </button>
    </div>
  );
}
