"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Dynamic imports to break cyclic dependency with page.tsx
const Discovery = dynamic(() => import("./Discovery"), { ssr: false });
const AppPromo = dynamic(() => import("./AppPromo"), { ssr: false });
const Feed = dynamic(() => import("./Feed"), { ssr: false });
const Hgpt = dynamic(() => import("./Hgpt"), { ssr: false });

export default function FeaturesSlider() {
  return (
    <section className="relative w-full bg-[#0a0e1a] z-20">
      
      {/* Slider Container */}
      <div className="w-full h-full relative pb-12">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          mousewheel={{ forceToAxis: true }}
          keyboard={{ enabled: true }}
          speed={800}
          effect="slide"
          className="w-full h-full features-swiper"
        >
          {/* Slide 1: Discovery */}
          <SwiperSlide>
            <div className="w-full h-full">
              <Discovery />
            </div>
          </SwiperSlide>

          {/* Slide 2: App Promo (Events) */}
          <SwiperSlide>
            <div className="w-full h-full">
              <AppPromo />
            </div>
          </SwiperSlide>

          {/* Slide 3: Feed (Community Chat) */}
          <SwiperSlide>
            <div className="w-full h-full">
              <Feed />
            </div>
          </SwiperSlide>

          {/* Slide 4: HGPT (AI) */}
          <SwiperSlide>
            <div className="w-full h-full">
              <Hgpt />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Global CSS overrides for the Swiper pagination and arrows to fit the dark theme */}
      <style dangerouslySetInnerHTML={{ __html: `
        .features-swiper .swiper-button-next,
        .features-swiper .swiper-button-prev {
          color: rgba(255, 255, 255, 0.6) !important;
          background: rgba(0, 0, 0, 0.4);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .features-swiper .swiper-button-next:hover,
        .features-swiper .swiper-button-prev:hover {
          color: #ffffff !important;
          background: rgba(99, 102, 241, 0.6);
          transform: scale(1.1);
        }
        .features-swiper .swiper-button-next::after,
        .features-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
        .features-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .features-swiper .swiper-pagination-bullet-active {
          background: #6366f1; /* Indigo 500 */
          width: 24px;
          border-radius: 6px;
        }
      `}} />
    </section>
  );
}
