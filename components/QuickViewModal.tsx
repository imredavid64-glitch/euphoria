"use client";

import { useState } from "react";
import { Product } from "@/data/brandData";
import { X, Check, ShoppingBag, ShieldCheck } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function QuickViewModal({ product, onClose, onAddToCart }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const sizes = ["S", "M", "L", "XL"];

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAdded(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ff2a5f", "#ffffff", "#8e8e93"]
    });
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-3xl bg-brand-card border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white bg-black/50 rounded-full backdrop-blur-md border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto min-h-[300px] bg-neutral-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-widest text-brand-highlight uppercase">
                {product.category}
              </span>
              <span className="text-xs font-mono text-white/40">•</span>
              <span className="text-xs font-mono text-white/40">ID: {product.id}</span>
            </div>

            <h2 className="text-2xl font-bold text-white tracking-wide">{product.name}</h2>
            <div className="text-xl font-mono font-bold text-white mt-2">{product.price}</div>

            <p className="text-xs font-mono text-white/60 mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mt-6">
              <label className="block text-xs font-mono text-white/70 uppercase tracking-widest mb-2">
                SELECT SIZE
              </label>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded font-mono text-xs font-bold transition-all ${
                      selectedSize === size
                        ? "bg-brand-highlight text-white border-brand-highlight"
                        : "bg-white/5 text-white/70 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Item Features */}
            <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
              {product.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-white/50">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-highlight shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full py-4 rounded font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all ${
              added
                ? "bg-green-600 text-white"
                : "bg-white text-black hover:bg-brand-highlight hover:text-white"
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" /> ADDED TO BAG
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" /> ADD TO BAG ({selectedSize})
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
