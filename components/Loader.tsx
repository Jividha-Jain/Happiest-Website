"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight-navy text-white select-none"
        >
          <div className="relative flex flex-col items-center space-y-6">
            {/* Logo Drawing */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-16 h-16 shadow-2xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full">
                <motion.rect
                  width="32"
                  height="32"
                  rx="6"
                  fill="hsl(222.2, 47.4%, 11.2%)"
                  stroke="#5B63FF"
                  strokeWidth="0.75"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                />
                <motion.text
                  x="50%"
                  y="55%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="hsl(210, 40%, 98%)"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontSize="16"
                  fontWeight="700"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                >
                  H
                </motion.text>
              </svg>
            </motion.div>

            {/* Brand text */}
            <div className="overflow-hidden flex items-center space-x-0.5">
              {["H", "a", "p", "p", "i", "e", "s", "t"].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 + index * 0.04,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="text-lg font-bold text-white tracking-tight"
                >
                  {char}
                </motion.span>
              ))}
              {["font-dot", "t", "e", "a", "m"].map((char, index) => {
                const charVal = char === "font-dot" ? "." : char;
                return (
                  <motion.span
                    key={index + 8}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.42 + index * 0.04,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="text-lg font-bold text-primary-blue tracking-tight"
                  >
                    {charVal}
                  </motion.span>
                );
              })}
            </div>

            {/* Elegant, thin loading line */}
            <div className="w-32 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary-blue"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
