"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/data/brandData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-highlight/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-xs font-mono tracking-widest text-white/80"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-highlight animate-pulse" />
          <span>{BRAND_INFO.tagline}</span>
        </motion.div>

        {/* Big Glitch Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white mb-6 select-none relative"
        >
          <span className="block glow-pink drop-shadow-[0_0_50px_rgba(255,42,95,0.4)]">
            EUPHORIA
          </span>
          <span className="block text-stroke text-4xl sm:text-6xl md:text-7xl font-mono tracking-widest opacity-80 mt-[-10px]">
            CLTHNG
          </span>
        </motion.h1>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl text-sm sm:text-base font-mono text-white/60 mb-10 leading-relaxed uppercase tracking-wider"
        >
          Underground experimental streetwear. Raw aesthetics, custom cuts, and limited handmade drops from Hungary.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#shop"
            className="inline-flex items-center justify-center gap-3 bg-white text-black font-bold px-8 py-4 rounded font-mono text-sm tracking-widest hover:bg-brand-highlight hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-white/5"
          >
            EXPLORE COLLECTION <ArrowDownRight className="w-4 h-4" />
          </a>
          <a
            href="#lookbook"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded font-mono text-sm tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300"
          >
            VIEW LOOKBOOK
          </a>
        </motion.div>

        {/* Floating Designers Info Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-t border-white/10 pt-8 w-full max-w-4xl font-mono text-xs text-white/50"
        >
          <div>
            <span className="block text-white/30 text-[10px] uppercase">ORIGIN</span>
            <span className="text-white/80 font-bold">Budapest, HU</span>
          </div>
          <div>
            <span className="block text-white/30 text-[10px] uppercase">DESIGNERS</span>
            <span className="text-white/80">@tino_sk8z & @frigyes_varga</span>
          </div>
          <div>
            <span className="block text-white/30 text-[10px] uppercase">MANAGEMENT</span>
            <span className="text-white/80">@ab3l_h & @yunoigore</span>
          </div>
          <div>
            <span className="block text-white/30 text-[10px] uppercase">CRAFT</span>
            <span className="text-brand-highlight font-bold">100% HANDMADE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
