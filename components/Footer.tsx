import { BRAND_INFO } from "@/data/brandData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Col 1: Brand Info */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-3xl font-extrabold tracking-widest text-white">
            {BRAND_INFO.name}
          </h3>
          <p className="text-sm font-mono text-white/50 tracking-wider max-w-md">
            {BRAND_INFO.tagline}
          </p>
          <p className="text-xs text-white/40 font-mono">
            Underground streetwear hand-crafted with obsession in {BRAND_INFO.location}.
          </p>
        </div>

        {/* Col 2: Credits */}
        <div className="space-y-3 font-mono text-xs">
          <h4 className="text-white/80 font-bold uppercase tracking-widest mb-2 border-b border-white/10 pb-1">
            DESIGNED & HANDMADE BY
          </h4>
          {BRAND_INFO.designers.map((d) => (
            <p key={d.handle} className="text-white/60">
              {d.name} <span className="text-brand-highlight">{d.handle}</span>
            </p>
          ))}
          <h4 className="text-white/80 font-bold uppercase tracking-widest pt-3 mb-2 border-b border-white/10 pb-1">
            CREATIVE MANAGEMENT
          </h4>
          {BRAND_INFO.management.map((m) => (
            <p key={m.handle} className="text-white/60">
              {m.name} <span className="text-brand-highlight">{m.handle}</span>
            </p>
          ))}
        </div>

        {/* Col 3: Socials & Back to Top */}
        <div className="space-y-4 font-mono text-xs">
          <h4 className="text-white/80 font-bold uppercase tracking-widest mb-2 border-b border-white/10 pb-1">
            CONNECT
          </h4>
          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-brand-highlight transition-colors"
          >
            Instagram ({BRAND_INFO.handle})
          </a>
          <a
            href={BRAND_INFO.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-brand-highlight transition-colors"
          >
            TikTok ({BRAND_INFO.handle})
          </a>

          <div className="pt-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors border border-white/10 px-3 py-2 rounded"
            >
              BACK TO TOP <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/30">
        <p>© 2026 {BRAND_INFO.name}. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 sm:mt-0">BUDAPEST STREETWEAR CULTURE</p>
      </div>
    </footer>
  );
}
