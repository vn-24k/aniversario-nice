import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';
import { audioEngine } from '../audio/audioEngine';

interface NavbarProps {
  onCelebrarClick: () => void;
}

export function Navbar({ onCelebrarClick }: NavbarProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = () => {
    const active = audioEngine.toggle();
    setIsPlaying(active);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 pointer-events-none max-w-7xl mx-auto">
      {/* Left Navigation Pill */}
      <nav className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-4 py-2 rounded-full bg-[#120a26]/75 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <button
          onClick={() => scrollToSection('hero')}
          className="px-3.5 py-1 text-xs sm:text-sm font-medium text-white/90 hover:text-white rounded-full transition-colors hover:bg-white/10 cursor-pointer"
        >
          Início
        </button>
        <button
          onClick={() => scrollToSection('legado')}
          className="px-3.5 py-1 text-xs sm:text-sm font-medium text-white/70 hover:text-white rounded-full transition-colors hover:bg-white/10 cursor-pointer"
        >
          História
        </button>
        <button
          onClick={() => scrollToSection('virtudes')}
          className="px-3.5 py-1 text-xs sm:text-sm font-medium text-white/70 hover:text-white rounded-full transition-colors hover:bg-white/10 cursor-pointer hidden md:inline-block"
        >
          Virtudes
        </button>
        <button
          onClick={() => scrollToSection('memorias')}
          className="px-3.5 py-1 text-xs sm:text-sm font-medium text-white/70 hover:text-white rounded-full transition-colors hover:bg-white/10 cursor-pointer hidden sm:inline-block"
        >
          Memórias
        </button>
        <button
          onClick={() => scrollToSection('mensagens')}
          className="px-3.5 py-1 text-xs sm:text-sm font-medium text-white/70 hover:text-white rounded-full transition-colors hover:bg-white/10 cursor-pointer"
        >
          Recados
        </button>
      </nav>

      {/* Right Action Pills */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* Audio Toggle Pill */}
        <button
          onClick={handleToggleAudio}
          className={`group flex items-center gap-2 px-3.5 py-2 rounded-full border transition-all duration-300 cursor-pointer backdrop-blur-xl text-xs font-mono-code ${
            isPlaying
              ? 'bg-fuchsia-950/70 border-fuchsia-500/50 text-fuchsia-200 shadow-[0_0_20px_rgba(224,86,253,0.3)]'
              : 'bg-[#120a26]/75 border-white/10 text-white/70 hover:text-white hover:border-white/20'
          }`}
          title={isPlaying ? "Pausar trilha sonora" : "Tocar sinfonia celestial"}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
              <span className="hidden sm:inline">Música Ativa</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-white/60" />
              <span className="hidden sm:inline">Tocar Trilha</span>
            </>
          )}
        </button>

        {/* CTA Button */}
        <button
          onClick={onCelebrarClick}
          className="group relative flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white font-medium text-xs sm:text-sm shadow-[0_0_30px_rgba(217,70,239,0.45)] hover:shadow-[0_0_45px_rgba(217,70,239,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/25 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          <Heart className="w-3.5 h-3.5 text-pink-200 fill-pink-200 animate-pulse" />
          <span>Celebrar Nice</span>
        </button>
      </div>
    </header>
  );
}
