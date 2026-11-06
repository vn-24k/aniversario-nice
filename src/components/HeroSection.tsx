import React from 'react';
import { ArrowDown, Heart, Sparkles, MessageCircle, Share2 } from 'lucide-react';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onTributeClick: () => void;
  onExploreClick: () => void;
}

export function HeroSection({ onTributeClick, onExploreClick }: HeroSectionProps) {
  const handleCentralButtonClick = () => {
    audioEngine.start();
    audioEngine.playHarpChime();

    // Golden and magenta stardust celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.55 },
      colors: ['#e056fd', '#f5d061', '#c084fc', '#ffffff', '#ff7ce8'],
    });

    onTributeClick();
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 max-w-7xl mx-auto z-20">
      
      {/* Top Editorial & Monolithic Hero Block */}
      <div className="relative w-full pt-8 sm:pt-14">
        
        {/* Top Split: Left Editorial Text & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-4 relative z-20">
          
          {/* Editorial Paragraph with Drop Cap */}
          <div className="max-w-md">
            <div className="flex items-start gap-3">
              <span className="font-syne text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 via-pink-300 to-amber-200 leading-none">
                N
              </span>
              <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed font-light pt-1">
                <span className="text-white font-medium">ice:</span> onde o amor mais puro encontra a eternidade. Celebrando hoje a mulher que é o coração, a luz e o orgulho infinito da nossa família.
              </p>
            </div>

            {/* Quick affection links */}
            <div className="flex items-center gap-4 mt-6 text-purple-300/60 text-xs font-mono-code">
              <span className="flex items-center gap-1.5 hover:text-pink-300 transition-colors cursor-pointer">
                <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/40" />
                Mãe Eterna
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors cursor-pointer">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Aniversário 2026
              </span>
            </div>
          </div>

          {/* Right Scroll Indicator */}
          <div className="hidden md:flex flex-col items-end gap-2 text-purple-200/60 hover:text-white transition-colors cursor-pointer" onClick={onExploreClick}>
            <span className="text-xs uppercase tracking-[0.25em] font-mono-code">Rolar para Vivenciar</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-fuchsia-400" />
          </div>
        </div>

        {/* Monolithic Avant-Garde Futuristic Title "NICE" matching template */}
        <div className="relative text-center my-4 sm:my-8 select-none">
          <div className="relative inline-block">
            {/* Ambient Nebula Glow Behind Title */}
            <div className="absolute -inset-16 bg-gradient-to-r from-fuchsia-600/30 via-purple-600/30 to-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <h1 className="font-syne text-[18vw] sm:text-[16vw] lg:text-[14vw] font-black tracking-[-0.04em] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100/90 to-purple-400/30 drop-shadow-[0_10px_35px_rgba(224,86,253,0.35)] uppercase relative z-10">
              N<span className="inline-block relative">I<span className="absolute top-[18%] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-pink-400 to-amber-300 shadow-[0_0_15px_#f472b6]" /></span>CE
            </h1>
          </div>
        </div>

        {/* Central Luminous Interaction Gateway */}
        <div className="relative flex items-center justify-center -mt-8 sm:-mt-16 mb-8 z-30">
          
          {/* Subtle Silhouette Background Frame */}
          <div className="relative w-72 sm:w-96 h-72 sm:h-96 rounded-full flex items-center justify-center">
            {/* Glowing Nebula Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-600/20 via-purple-500/30 to-pink-500/20 blur-2xl animate-pulse" />
            <div className="absolute inset-4 rounded-full border border-fuchsia-400/25 animate-spin" style={{ animationDuration: '24s' }} />
            <div className="absolute inset-10 rounded-full border border-purple-400/20 border-dashed animate-spin" style={{ animationDuration: '36s', animationDirection: 'reverse' }} />

            {/* Central Circular Focal Button matching template "Sign Up" circle */}
            <button
              onClick={handleCentralButtonClick}
              className="group relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#1b0d36]/80 hover:bg-[#281350]/90 border border-fuchsia-400/40 hover:border-fuchsia-300 shadow-[0_0_50px_rgba(224,86,253,0.45)] hover:shadow-[0_0_70px_rgba(224,86,253,0.7)] flex flex-col items-center justify-center p-4 transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <div className="absolute inset-0 rounded-full bg-radial from-fuchsia-500/30 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <Sparkles className="w-5 h-5 text-amber-300 mb-1 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-syne text-xs sm:text-sm font-bold tracking-widest text-white uppercase text-center leading-tight">
                Cantar
                <br />
                <span className="text-fuchsia-300 text-[11px] sm:text-xs">Parabéns</span>
              </span>
              <span className="text-[10px] text-pink-200/60 font-mono-code mt-1">Toque Aqui ✨</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Architectural 3-Column Bar matching template */}
      <div className="w-full pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-20">
        
        {/* Column 1: Monolithic Heading */}
        <div>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-none">
            Quem É
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Nice?</span>
          </h2>
          <p className="text-xs font-mono-code text-purple-300/60 mt-2 uppercase tracking-widest">
            A Nossa Rainha & Matriarca
          </p>
        </div>

        {/* Column 2: Statement Paragraph */}
        <div className="md:border-l md:border-white/10 md:pl-8">
          <div className="flex items-start gap-2">
            <span className="font-syne text-2xl font-bold text-fuchsia-400 leading-none">R</span>
            <p className="text-sm text-purple-100/75 leading-relaxed font-light">
              edefine todos os dias os padrões de carinho, dedicação infinita e acolhimento. Uma mulher de garra serena, sorriso contagiante e mãos que abençoam cada capítulo da nossa história.
            </p>
          </div>
        </div>

        {/* Column 3: Celebration CTA Pill Input */}
        <div className="md:border-l md:border-white/10 md:pl-8 flex flex-col justify-between">
          <div>
            <h3 className="font-syne text-lg font-bold text-white mb-1">
              Faça Parte Desta Celebração
            </h3>
            <p className="text-xs text-purple-200/60 mb-3">
              Deixe sua dedicatória gravada no Livro de Ouro de Nice.
            </p>
          </div>

          <button
            onClick={onTributeClick}
            className="flex items-center justify-between px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-fuchsia-400/30 hover:border-fuchsia-400/60 text-white transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(224,86,253,0.15)] group"
          >
            <span className="text-xs font-medium tracking-wide text-purple-200 group-hover:text-white">
              Escrever Mensagem Especial
            </span>
            <span className="w-7 h-7 rounded-full bg-fuchsia-500/20 group-hover:bg-fuchsia-500/40 flex items-center justify-center text-fuchsia-300 transition-colors">
              →
            </span>
          </button>
        </div>

      </div>

    </section>
  );
}
