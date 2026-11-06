import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 md:px-12 border-t border-white/10 z-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand / Tribute Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-syne text-2xl font-black tracking-tight text-white uppercase">
              N<span className="text-fuchsia-400">I</span>CE
            </span>
            <span className="text-xs font-mono-code text-purple-300/60 uppercase tracking-widest">
              • 2026
            </span>
          </div>
          <p className="text-xs text-purple-200/60 font-light max-w-md">
            Homenagem de aniversário dedicada à mãe mais extraordinária, inspiradora e amada de todas. Que a sua luz continue guiando cada passo nosso.
          </p>
        </div>

        {/* Central Love Heart */}
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-fuchsia-500/15 border border-fuchsia-500/30 flex items-center justify-center text-pink-400 mb-2 shadow-[0_0_20px_rgba(224,86,253,0.3)]">
            <Heart className="w-5 h-5 fill-pink-400" />
          </div>
          <span className="text-xs font-mono-code text-purple-300/80">
            Criado com todo o amor do mundo
          </span>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-white/80 hover:text-white transition-all cursor-pointer group"
          >
            <span>Voltar ao Início</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-fuchsia-400" />
          </button>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-white/5 text-center text-[11px] font-mono-code text-purple-300/40">
        © 2026 Nice — Celebração Exclusiva & Autoral. Todos os direitos reservados.
      </div>
    </footer>
  );
}
