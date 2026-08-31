import { BRAND_INFO } from "@/data/brandData";
import { Scissors, Sparkles, Flame, ShieldAlert } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column Text */}
        <div className="space-y-6">
          <span className="text-xs font-mono tracking-widest text-brand-highlight uppercase block">
            /// OUR ETHOS
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            NOT SLOP. <br />
            100% HANDMADE IN HUNGARY.
          </h2>
          <p className="text-sm font-mono text-white/70 leading-relaxed">
            Euphoria Clothing is an independent streetwear project rooted in Hungary.
            Every piece is designed, cut, distressed, and screen-printed by hand by our core creative team.
          </p>
          <p className="text-xs font-mono text-white/50 leading-relaxed">
            We reject mass-produced fast fashion slop. We focus on heavy, high-grammage fabrics,
            experimental cut-and-sew silhouettes, and unique 1-of-1 archival drops.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="flex items-start gap-3">
              <Scissors className="w-5 h-5 text-brand-highlight shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-xs font-bold text-white">CUSTOM CUTS</h4>
                <p className="font-mono text-[11px] text-white/40">Custom pattern designs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Flame className="w-5 h-5 text-brand-highlight shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-xs font-bold text-white">HAND DISTRESSED</h4>
                <p className="font-mono text-[11px] text-white/40">Raw artistic treatment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Team Showcase */}
        <div className="bg-brand-card border border-white/10 rounded-xl p-8 space-y-6">
          <h3 className="text-xl font-bold font-mono tracking-widest text-white border-b border-white/10 pb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-highlight" /> CREATIVE TEAM
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded border border-white/5">
              <span className="text-[10px] font-mono text-white/40 uppercase block">DESIGNERS & CRAFTSMEN</span>
              <div className="flex flex-wrap gap-4 mt-2 font-mono text-sm text-white">
                <div>
                  <span className="font-bold">Tino</span>{" "}
                  <a href={`https://instagram.com/${BRAND_INFO.designers[0].handle.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-brand-highlight hover:underline text-xs">
                    {BRAND_INFO.designers[0].handle}
                  </a>
                </div>
                <div>
                  <span className="font-bold">Frigyes Varga</span>{" "}
                  <a href={`https://instagram.com/${BRAND_INFO.designers[1].handle.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-brand-highlight hover:underline text-xs">
                    {BRAND_INFO.designers[1].handle}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded border border-white/5">
              <span className="text-[10px] font-mono text-white/40 uppercase block">CREATIVE MANAGEMENT</span>
              <div className="flex flex-wrap gap-4 mt-2 font-mono text-sm text-white">
                <div>
                  <span className="font-bold">Abel H</span>{" "}
                  <a href={`https://instagram.com/${BRAND_INFO.management[0].handle.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-brand-highlight hover:underline text-xs">
                    {BRAND_INFO.management[0].handle}
                  </a>
                </div>
                <div>
                  <span className="font-bold">Yuno Igore</span>{" "}
                  <a href={`https://instagram.com/${BRAND_INFO.management[1].handle.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-brand-highlight hover:underline text-xs">
                    {BRAND_INFO.management[1].handle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-white/40 pt-2">
            <ShieldAlert className="w-4 h-4 text-brand-highlight" />
            <span>LIMITED PRODUCTION RUNS PER RELEASE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
