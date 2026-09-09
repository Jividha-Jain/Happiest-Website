"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Check, ShieldCheck, ShoppingBag, Tag } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
  image: string;
  desc: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Creator Space Pass",
    price: 29,
    type: "Membership",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=150&q=80",
    desc: "Monthly full access pass to events & feed.",
  },
  {
    id: 2,
    name: "Sunday Run & Coffee Ticket",
    price: 15,
    type: "Event Ticket",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=150&q=80",
    desc: "Single slot reservation + breakfast coffee.",
  },
  {
    id: 3,
    name: "Happiest Canvas Tote",
    price: 25,
    type: "Merchandise",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=150&q=80",
    desc: "Organic cotton branded social club tote bag.",
  },
  {
    id: 4,
    name: "Endurance Training Guide",
    price: 12,
    type: "Digital Resource",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=150&q=80",
    desc: "PDF workbook detailing running pacing plans.",
  },
];

export default function CommunityEconomy() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    setIsPurchasing(true);
    setTimeout(() => {
      setIsPurchasing(false);
      setPurchased(true);
    }, 1500);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setPurchased(false); // Reset confirmation state if switching items
  };

  return (
    <section
      id="community-economy"
      className="py-24 md:py-36 bg-muted-sage text-text-dark relative z-20 overflow-hidden border-t border-slate-200/40 select-none text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Text Information */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-[10px] font-bold text-primary-blue uppercase tracking-widest block font-display">
              PRODUCTS
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-display font-display">
              Everything your club offers, in one place.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Sell memberships, event passes, digital guides, merchandise, and exclusive community products.
            </p>

            {/* Small Navigation Feature Labels */}
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-450 select-none pt-4 border-t border-slate-200/50">
              {["Memberships", "Event passes", "Merchandise", "Digital files", "Secure checkout"].map((label) => (
                <span
                  key={label}
                  className="pr-3 last:pr-0 border-r border-slate-350 last:border-0 hover:text-slate-800 transition-colors cursor-default"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Checkout & Marketplace Mockup */}
          <div className="lg:col-span-7 relative">
            
            {/* Desktop Mockup Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-1 overflow-hidden w-full relative z-10"
            >
              {/* Chrome Headers */}
              <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-100 bg-slate-50 rounded-t-xl select-none">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-200" />
                  <span className="w-2 h-2 rounded-full bg-slate-200" />
                  <span className="w-2 h-2 rounded-full bg-slate-200" />
                </div>
                <div className="text-[9px] text-slate-400 font-bold tracking-wider font-mono">
                  marketplace.happiest.team/shop
                </div>
                <div className="w-10" />
              </div>

              {/* Checkout Canvas: Grid splits into product catalog & order preview */}
              <div className="grid grid-cols-1 md:grid-cols-12 bg-white min-h-[380px] md:min-h-[440px]">
                
                {/* Left Side: Product Catalog List (col-span-7) */}
                <div className="md:col-span-7 p-4 border-r border-slate-100 space-y-3 max-h-[440px] overflow-y-auto no-scrollbar">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Club Offerings</span>
                  
                  <div className="space-y-2">
                    {PRODUCTS.map((prod) => (
                      <button
                        key={prod.id}
                        type="button"
                        onClick={() => handleSelectProduct(prod)}
                        className={`w-full p-2.5 rounded-xl border text-left flex gap-3 transition-all cursor-pointer select-none ${
                          selectedProduct.id === prod.id
                            ? "border-primary-blue bg-primary-blue/5 shadow-xs"
                            : "border-slate-150 hover:bg-slate-50"
                        }`}
                      >
                        <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200/50 shrink-0">
                          <Image
                            src={prod.image}
                            alt={prod.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1 flex flex-col justify-between py-0.5 leading-tight">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-bold text-slate-900 truncate font-display">{prod.name}</span>
                              <span className="text-[9.5px] font-extrabold text-slate-900 font-display">${prod.price}</span>
                            </div>
                            <span className="text-[8px] text-slate-400 font-semibold block mt-0.5">{prod.type}</span>
                          </div>
                          <span className="text-[8.5px] text-slate-500 font-normal line-clamp-1 mt-1 leading-normal">{prod.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side: Order Preview & Form (col-span-5) */}
                <div className="md:col-span-5 p-4 bg-slate-50/50 flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {!purchased ? (
                      <motion.div
                        key="checkout-preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4 h-full flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Checkout Preview</span>

                          {/* Selected Item Recap */}
                          <div className="bg-white border border-slate-200 p-2.5 rounded-xl flex items-center space-x-2.5">
                            <Tag className="w-3.5 h-3.5 text-primary-blue shrink-0" />
                            <div className="min-w-0 text-xs">
                              <span className="font-extrabold text-slate-800 block truncate font-display">{selectedProduct.name}</span>
                              <span className="text-[9.5px] text-slate-450 block font-semibold mt-0.5">${selectedProduct.price} &bull; qty: 1</span>
                            </div>
                          </div>

                          {/* Card input */}
                          <div className="space-y-2">
                            <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wide block">Payment Detail</span>
                            <div className="bg-white border border-slate-200 rounded-lg p-2 flex items-center space-x-1.5">
                              <CreditCard className="w-3 h-3 text-slate-400" />
                              <input
                                type="text"
                                disabled
                                value="•••• •••• •••• 4242"
                                className="bg-transparent border-none outline-none text-[10px] text-slate-700 flex-1 font-mono font-medium"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
                              <div className="bg-white border border-slate-200 rounded-lg p-2 text-center text-slate-500 font-semibold">06 / 29</div>
                              <div className="bg-white border border-slate-200 rounded-lg p-2 text-center text-slate-500 font-semibold">123</div>
                            </div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="button"
                          onClick={handlePurchase}
                          disabled={isPurchasing}
                          className="w-full bg-slate-900 hover:bg-slate-800 text-white text-[9.5px] font-bold py-2.5 rounded-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 mt-4"
                        >
                          {isPurchasing ? (
                            <div className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              <Check className="w-3.5 h-3.5 text-primary-blue shrink-0" />
                              <span>Purchase &mdash; ${selectedProduct.price}</span>
                            </>
                          )}
                        </button>
                      </motion.div>
                    ) : (
                      // Confirmation UI
                      <motion.div
                        key="purchase-confirmed"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-6 space-y-4 h-full flex flex-col justify-center items-center"
                      >
                        <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-xs">
                          <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 font-display leading-tight">Order Confirmed!</h4>
                          <p className="text-[10px] text-slate-500 max-w-xs leading-normal font-normal">
                            Receipt and access links for **{selectedProduct.name}** have been generated.
                          </p>
                        </div>
                        
                        {/* Fake Order ticket block */}
                        <div className="bg-white border border-slate-200 rounded-lg p-2 text-left text-[8px] w-full mt-2">
                          <span className="text-slate-400 font-bold block uppercase tracking-wider text-[7px]">Order pass</span>
                          <span className="font-bold text-slate-800 truncate block mt-0.5">{selectedProduct.name}</span>
                          <span className="text-slate-500 block">ID: #OR-592815</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setPurchased(false)}
                          className="text-[8.5px] font-bold text-primary-blue hover:underline bg-transparent mt-2"
                        >
                          Buy another item
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
