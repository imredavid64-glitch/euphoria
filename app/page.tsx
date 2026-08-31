"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShopSection from "@/components/ShopSection";
import LookbookSection from "@/components/LookbookSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuickViewModal from "@/components/QuickViewModal";
import { Product } from "@/data/brandData";

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<{ product: Product; size: string }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product: Product, size: string = "M") => {
    setCartItems((prev) => [...prev, { product, size }]);
  };

  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-highlight selection:text-white">
      {/* Navbar */}
      <Navbar cartCount={cartItems.length} onOpenCart={() => setCartOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Shop Collection */}
      <ShopSection
        onQuickView={(product) => setQuickViewProduct(product)}
        onAddToCart={(product) => handleAddToCart(product)}
      />

      {/* Lookbook Gallery */}
      <LookbookSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(product, size) => handleAddToCart(product, size)}
      />

      {/* Simple Cart Drawer */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex justify-end"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="w-full max-w-md bg-brand-card border-l border-white/10 p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="font-mono font-bold text-lg text-white">YOUR BAG ({cartItems.length})</h3>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-xs font-mono text-white/50 hover:text-white"
                >
                  CLOSE [X]
                </button>
              </div>

              <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto">
                {cartItems.length === 0 ? (
                  <p className="text-xs font-mono text-white/40 py-8 text-center">
                    YOUR BAG IS EMPTY
                  </p>
                ) : (
                  cartItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 font-mono text-xs"
                    >
                      <div>
                        <div className="font-bold text-white">{item.product.name}</div>
                        <div className="text-white/40 text-[10px]">
                          SIZE: {item.size} • {item.product.price}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          setCartItems((prev) => prev.filter((_, i) => i !== idx))
                        }
                        className="text-brand-highlight hover:underline text-[10px]"
                      >
                        REMOVE
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex justify-between font-mono text-sm font-bold text-white">
                <span>ESTIMATED TOTAL</span>
                <span>
                  €
                  {cartItems.reduce(
                    (acc, item) => acc + parseInt(item.product.price.replace("€", "")),
                    0
                  )}
                </span>
              </div>
              <button
                onClick={() => alert("Checkout integration placeholder — Ready for Stripe / Shopify")}
                disabled={cartItems.length === 0}
                className="w-full py-4 bg-brand-highlight text-white font-mono font-bold text-xs uppercase tracking-widest rounded hover:bg-white hover:text-black transition-all disabled:opacity-40"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
