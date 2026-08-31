"use client";

import { useState } from "react";
import { LOOKBOOK_IMAGES } from "@/data/brandData";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";

export default function LookbookSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="lookbook" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-12">
        <span className="text-xs font-mono tracking-widest text-brand-highlight uppercase block mb-2">
          /// EDITORIAL ARCHIVE
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          LOOKBOOK
        </h2>
        <p className="text-xs font-mono text-white/50 mt-2">
          RAW VISUALS FROM HUNGARY & BEYOND
        </p>
      </div>

      {/* Grid gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOOKBOOK_IMAGES.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveImage(img.url)}
            className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer shadow-xl hover:border-brand-highlight/40 transition-all duration-500"
          >
            <Image
              src={img.url}
              alt={img.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="font-bold text-lg text-white font-mono tracking-wide">
                  {img.title}
                </h3>
                <p className="text-xs font-mono text-white/60">{img.subtitle}</p>
              </div>
              <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white group-hover:bg-brand-highlight transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 text-white bg-white/10 rounded-full hover:bg-brand-highlight transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={activeImage}
              alt="Lookbook expanded"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
