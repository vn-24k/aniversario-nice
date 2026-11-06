import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 md:px-12 border-t border-amber-300/10 z-20 max-w-5xl mx-auto text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        
        <div className="w-10 h-10 rounded-full bg-rose-500/15 border border-rose-400/30 flex items-center justify-center text-rose-300 shadow-[0_0_20px_rgba(244,114,182,0.25)]">
          <Heart className="w-5 h-5 fill-rose-300 text-rose-300" />
        </div>

        <h3 className="font-serif-luxury text-2xl text-white">
          Dona Nice — Nossa Inspiração de Vida
        </h3>

        <p className="text-xs text-stone-400 font-light max-w-md mx-auto leading-relaxed">
          Homenagem de aniversário criada com todo o carinho e admiração pelos seus filhos, netos e toda a sua família.
        </p>

        <button
          onClick={scrollToTop}
          className="mt-6 flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-300 hover:text-white transition-all cursor-pointer"
        >
          <span>Voltar ao Topo</span>
          <ArrowUp className="w-3 h-3 text-amber-300" />
        </button>

        <div className="pt-8 text-[11px] text-stone-500">
          © 2026 Celebração de Aniversário de Dona Nice. Feito com amor em família.
        </div>

      </div>
    </footer>
  );
}
