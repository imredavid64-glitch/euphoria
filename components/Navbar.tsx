"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { BRAND_INFO } from "@/data/brandData";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "SHOP", href: "#shop" },
    { name: "LOOKBOOK", href: "#lookbook" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Name */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-extrabold text-2xl tracking-[0.2em] text-white group-hover:text-brand-highlight transition-colors">
            {BRAND_INFO.name}
          </span>
          <span className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-white/20 text-white/60 font-mono tracking-widest hidden sm:inline-block">
            HU
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-widest font-mono text-white/70 hover:text-white hover:tracking-[0.25em] transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-highlight hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center space-x-5">
          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-brand-highlight transition-colors hidden sm:block font-mono text-xs"
            aria-label="Instagram"
          >
            [IG]
          </a>

          {/* Cart trigger button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-white/90 hover:text-white transition-colors border border-white/10 rounded-full hover:border-brand-highlight/50 bg-white/5"
            aria-label="View Bag"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-brand-highlight text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-mono tracking-widest text-white/80 hover:text-brand-highlight transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-white/50">
            <span>{BRAND_INFO.tagline}</span>
          </div>
        </motion.div>
      )}
    </header>
  );
}
