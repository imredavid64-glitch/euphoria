"use client";

import { Product } from "@/data/brandData";
import { Eye, Plus } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative bg-brand-card border border-white/5 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-brand-highlight/5">
      {/* Badge Tags */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.isNew && (
          <span className="bg-brand-highlight text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded tracking-widest uppercase">
            NEW DROP
          </span>
        )}
        <span className="bg-black/80 backdrop-blur-md text-white/80 text-[9px] font-mono px-2 py-0.5 rounded tracking-widest border border-white/10 uppercase">
          HANDMADE
        </span>
      </div>

      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-neutral-900 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay hover actions */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => onQuickView(product)}
            className="p-3 bg-white text-black rounded-full hover:bg-brand-highlight hover:text-white transition-colors duration-200 transform hover:scale-110"
            aria-label="Quick View"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="p-3 bg-white/10 text-white rounded-full hover:bg-white hover:text-black transition-colors duration-200 backdrop-blur-md transform hover:scale-110 border border-white/20"
            aria-label="Add to Bag"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-brand-highlight uppercase block mb-1">
            {product.category}
          </span>
          <h3 className="font-bold text-base text-white group-hover:text-brand-highlight transition-colors tracking-wide">
            {product.name}
          </h3>
          <p className="text-xs font-mono text-white/50 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <span className="font-mono font-bold text-lg text-white">
            {product.price}
          </span>
          <button
            onClick={() => onQuickView(product)}
            className="text-xs font-mono tracking-wider text-white/60 group-hover:text-white transition-colors flex items-center gap-1"
          >
            DETAILS →
          </button>
        </div>
      </div>
    </div>
  );
}
