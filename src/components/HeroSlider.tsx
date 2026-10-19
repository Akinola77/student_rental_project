"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroSlides } from "@/lib/data";
import ParticleCanvas from "./ParticleCanvas";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/motionvideos/cloudheight.mp4"
        />
        <ParticleCanvas />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/90 via-black/40 to-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-[1.1] text-white font-display">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-lg font-light drop-shadow-lg">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={slide.href}
                  className="px-6 py-3.5 bg-ocu-cyan text-white rounded-lg font-bold shadow-[0_0_15px_rgba(47,111,237,0.3)] hover:shadow-[0_0_25px_rgba(47,111,237,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group w-fit text-sm md:text-base min-h-[44px]"
                >
                  {slide.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                {slide.secondary && (
                  <Link
                    href={slide.secondary.href}
                    className="px-6 py-3.5 bg-white/5 text-white border border-white/10 rounded-lg font-bold hover:bg-white/10 transition-all backdrop-blur-md text-sm md:text-base min-h-[44px] flex items-center justify-center"
                  >
                    {slide.secondary.label}
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.image}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center mt-6 lg:mt-0"
            >
              <div className="group relative w-full max-w-md mx-auto h-[220px] md:h-[350px] rounded-lg overflow-hidden">
                <img
                  alt={slide.imageAlt}
                  src={slide.image}
                  className="rounded-lg shadow-2xl object-contain absolute inset-0 h-full w-full"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-ocu-cyan w-8" : "w-3 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
