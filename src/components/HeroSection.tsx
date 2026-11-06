import React from 'react';
import { Heart, Sparkles, ArrowDown, Gift } from 'lucide-react';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onCelebrateClick: () => void;
  onExploreClick: () => void;
}

export function HeroSection({ onCelebrateClick, onExploreClick }: HeroSectionProps) {
  const handleCelebrate = () => {
    audioEngine.start();
    audioEngine.playHarpChime();

    // Warm golden and rose petal celebration
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#f5d061', '#f472b6', '#fae8b2', '#ffffff', '#e11d48'],
    });

    onCelebrateClick();
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto z-20 text-center">
      
      {/* Warm Ambient Background Halo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-b from-amber-500/15 via-rose-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Top Tribute Tag */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-400/10 border border-amber-300/20 text-amber-200 text-xs tracking-widest uppercase mx-auto mb-8 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Homenagem Especial de Aniversário</span>
      </div>

      {/* Editorial Headline */}
      <div className="space-y-4 max-w-3xl mx-auto">
        <h2 className="font-editorial italic text-2xl sm:text-3xl text-amber-200/90 font-normal">
          Para a mulher que nos deu a vida e ilumina cada um dos nossos passos
        </h2>
        
        <h1 className="font-serif-luxury text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300/80 tracking-wide font-normal drop-shadow-[0_4px_24px_rgba(245,208,97,0.25)]">
          Dona Nice
        </h1>

        <p className="text-base sm:text-lg text-stone-300/85 font-light leading-relaxed max-w-2xl mx-auto pt-2">
          Celebramos hoje a sua força serena, o seu coração generoso e o abraço acolhedor onde sempre encontramos paz. Que o seu novo ano venha repleto de saúde, risos e bênçãos infinitas.
        </p>
      </div>

      {/* Centerpiece Portrait / Memory Frame */}
      <div className="relative my-10 max-w-sm mx-auto">
        <div className="relative p-2 rounded-[36px] bg-gradient-to-b from-amber-400/30 via-rose-500/20 to-transparent border border-amber-300/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(245,208,97,0.2)] backdrop-blur-xl">
          <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden bg-[#160c1c] flex items-center justify-center">
            <img
              src="/images/story-portrait.jpg"
              alt="Dona Nice"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle light vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08050a] via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="font-serif-luxury text-lg text-amber-100 block">
                Nossa Eterna Rainha
              </span>
              <span className="text-[11px] text-amber-200/60 font-light">
                Com todo o amor da sua família
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Celebratory Interaction CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <button
          onClick={handleCelebrate}
          className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500 text-stone-950 font-serif-luxury text-base tracking-wider uppercase font-semibold shadow-[0_0_35px_rgba(245,208,97,0.4)] hover:shadow-[0_0_50px_rgba(245,208,97,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-amber-200/50"
        >
          <Sparkles className="w-4 h-4 text-stone-950 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Celebrar Nice com Carinho</span>
          <Heart className="w-4 h-4 fill-stone-950 text-stone-950" />
        </button>

        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 text-xs tracking-wider uppercase transition-colors cursor-pointer"
        >
          <span>Ler Carta dos Filhos</span>
          <ArrowDown className="w-3.5 h-3.5 text-amber-300" />
        </button>
      </div>

      {/* 3 Pillars of Respect below hero */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mt-16 border-t border-amber-200/10 text-center">
        <div className="p-4">
          <Heart className="w-5 h-5 text-rose-400 mx-auto mb-2" />
          <h4 className="font-serif-luxury text-base text-amber-100">Amor Incondicional</h4>
          <p className="text-xs text-stone-400 font-light mt-1">Um carinho que acolhe e protege em qualquer circunstância.</p>
        </div>

        <div className="p-4 border-y sm:border-y-0 sm:border-x border-white/5">
          <Sparkles className="w-5 h-5 text-amber-300 mx-auto mb-2" />
          <h4 className="font-serif-luxury text-base text-amber-100">Sabedoria & Força</h4>
          <p className="text-xs text-stone-400 font-light mt-1">O exemplo de fé, dignidade e trabalho que nos orgulha todos os dias.</p>
        </div>

        <div className="p-4">
          <Gift className="w-5 h-5 text-amber-400 mx-auto mb-2" />
          <h4 className="font-serif-luxury text-base text-amber-100">O Melhor Aconchego</h4>
          <p className="text-xs text-stone-400 font-light mt-1">Onde Nice está, a casa fica cheia de vida, afeto e alegria.</p>
        </div>
      </div>

    </section>
  );
}
