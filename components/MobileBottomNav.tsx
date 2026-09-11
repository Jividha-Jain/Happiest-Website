"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Compass, CreditCard } from "lucide-react";

interface MobileBottomNavProps {
  scrollTo?: (id: string) => void;
}

export default function MobileBottomNav({ scrollTo }: MobileBottomNavProps) {
  return null;
}
