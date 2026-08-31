"use client";

import { useState } from "react";
import { PRODUCTS, Product } from "@/data/brandData";
import ProductCard from "./ProductCard";

interface ShopSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ShopSection({ onQuickView, onAddToCart }: ShopSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "HOODIES", "TEES", "ACCESSORIES", "EXCLUSIVES"];

  const filteredProducts =
    activeCategory === "ALL"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono tracking-widest text-brand-highlight uppercase block mb-2">
            /// HANDMADE COLLECTION
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            AVAILABLE DROPS
          </h2>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-mono tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black font-bold shadow-lg shadow-white/10"
                  : "bg-white/5 text-white/60 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
