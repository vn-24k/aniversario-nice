import React from 'react';
import { Heart, Quote, Sparkles } from 'lucide-react';

export function LetterSection() {
  return (
    <section id="carta" className="relative py-28 px-6 md:px-12 max-w-4xl mx-auto z-20">
      
      {/* Decorative Gold Leaf Accent */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-300/40" />
        <span className="font-editorial italic text-amber-200 text-sm">Do Fundo do Coração</span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-300/40" />
      </div>

      <h2 className="font-serif-luxury text-4xl sm:text-5xl text-center text-white mb-12 tracking-wide">
        Carta Aberta Para a Nossa Mãe
      </h2>

      {/* Main Letter Parchment Card */}
      <div className="relative p-8 sm:p-14 rounded-[36px] bg-[#140b1a]/90 border border-amber-300/25 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_60px_rgba(245,208,97,0.12)] backdrop-blur-2xl">
        
        {/* Soft Ambient Radial Light */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 text-stone-200/90 font-light text-base sm:text-lg leading-relaxed">
          <p className="font-editorial italic text-2xl text-amber-200 leading-snug">
            "Querida mãe Nice,"
          </p>
          
          <p>
            Palavras são pequenas para expressar a imensidão do que a senhora representa para todos nós. Ao longo de cada ano, a sua presença foi a âncora firme nas tempestades e o sol radiante nos momentos de alegria.
          </p>

          <p>
            A senhora nos ensinou o valor da honestidade, a força silenciosa de quem trabalha com amor e a beleza de nunca perder a doçura, mesmo quando o caminho era difícil. Cada oração sua antes de dormir foi o manto de proteção que nos trouxe até aqui.
          </p>

          <p>
            Se hoje sabemos o que é amar, perdoar e cuidar do próximo, é porque tivemos o privilégio sagrado de crescer sob o seu exemplo.
          </p>

          <div className="pt-6 border-t border-amber-200/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-serif-luxury text-lg text-white block">
                Com gratidão eterna e amor sem fim,
              </span>
              <span className="text-xs text-amber-300/70 font-light">
                Seus filhos, netos e toda a sua família.
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-200 text-xs">
              <Heart className="w-3.5 h-3.5 fill-rose-300 text-rose-300" />
              <span>Te Amamos Infinitamente</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
