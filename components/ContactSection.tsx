"use client";

import { useState } from "react";
import { BRAND_INFO } from "@/data/brandData";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-xs font-mono tracking-widest text-brand-highlight uppercase block mb-2">
          /// GET IN TOUCH
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          CONNECT WITH EUPHORIA
        </h2>
        <p className="text-xs font-mono text-white/50 mt-2">
          FOR CUSTOM ORDERS, COLLABORATIONS, & PRESS INQUIRIES
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-brand-card border border-white/10 rounded-xl p-8 sm:p-10 shadow-2xl relative">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-brand-highlight mx-auto animate-bounce" />
            <h3 className="text-xl font-bold font-mono text-white">MESSAGE SENT SUCCESSFULLY</h3>
            <p className="text-xs font-mono text-white/50">
              WE WILL get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase tracking-widest mb-2">
                  YOUR NAME / HANDLE
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="@yourhandle"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 font-mono text-xs text-white placeholder-white/20 focus:outline-none focus:border-brand-highlight"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase tracking-widest mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 font-mono text-xs text-white placeholder-white/20 focus:outline-none focus:border-brand-highlight"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-white/70 uppercase tracking-widest mb-2">
                MESSAGE / INQUIRY
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Inquire about 1-of-1 pieces, custom sizes, or general questions..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 font-mono text-xs text-white placeholder-white/20 focus:outline-none focus:border-brand-highlight resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-bold font-mono text-xs uppercase tracking-widest rounded hover:bg-brand-highlight hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              SEND MESSAGE <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-white/40 gap-4">
          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-brand-highlight transition-colors"
          >
            INSTAGRAM ({BRAND_INFO.handle})
          </a>
          <span>TIKTOK: tt:euphoria.clthng</span>
        </div>
      </div>
    </section>
  );
}
