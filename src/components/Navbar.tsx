import React, { useState } from 'react';
import { Volume2, VolumeX, Heart, Sparkles } from 'lucide-react';
import { audioEngine } from '../audio/audioEngine';

interface NavbarProps {
  onMessageClick: () => void;
}

export function Navbar({ onMessageClick }: NavbarProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = () => {
    const active = audioEngine.toggle();
    setIsPlaying(active);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 pointer-events-none max-w-6xl mx-auto">
      
      {/* Brand Title Pill */}
      <div className="pointer-events-auto flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#140b1a]/85 backdrop-blur-xl border border-amber-300/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span className="font-serif-luxury text-lg tracking-wider text-white">
          NICE
        </span>
        <span className="hidden sm:inline text-xs text-amber-200/70 border-l border-white/10 pl-3">
          Celebração de Aniversário
        </span>
      </div>

      {/* Center Nav Links */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-4 py-2 rounded-full bg-[#140b1a]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        <button
          onClick={() => scrollTo('hero')}
          className="px-4 py-1.5 text-xs text-stone-200 hover:text-white rounded-full transition-colors hover:bg-white/5 cursor-pointer"
        >
          Início
        </button>
        <button
          onClick={() => scrollTo('carta')}
          className="px-4 py-1.5 text-xs text-stone-300 hover:text-white rounded-full transition-colors hover:bg-white/5 cursor-pointer"
        >
          Carta Aberta
        </button>
        <button
          onClick={() => scrollTo('virtudes')}
          className="px-4 py-1.5 text-xs text-stone-300 hover:text-white rounded-full transition-colors hover:bg-white/5 cursor-pointer"
        >
          Virtudes
        </button>
        <button
          onClick={() => scrollTo('memorias')}
          className="px-4 py-1.5 text-xs text-stone-300 hover:text-white rounded-full transition-colors hover:bg-white/5 cursor-pointer"
        >
          Memórias
        </button>
        <button
          onClick={() => scrollTo('bencaos')}
          className="px-4 py-1.5 text-xs text-stone-300 hover:text-white rounded-full transition-colors hover:bg-white/5 cursor-pointer"
        >
          Felicitações
        </button>
      </nav>

      {/* Right Action Buttons */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* Soft Audio Toggle */}
        <button
          onClick={handleToggleAudio}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer backdrop-blur-xl text-xs ${
            isPlaying
              ? 'bg-amber-950/60 border-amber-400/50 text-amber-200 shadow-[0_0_20px_rgba(245,208,97,0.3)]'
              : 'bg-[#140b1a]/85 border-white/10 text-stone-300 hover:text-white'
          }`}
          title={isPlaying ? "Pausar música" : "Tocar melodia suave"}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span className="hidden sm:inline">Melodia Ativa</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-stone-400" />
              <span className="hidden sm:inline">Tocar Melodia</span>
            </>
          )}
        </button>

        {/* CTA Deixar Mensagem */}
        <button
          onClick={onMessageClick}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 text-stone-900 font-medium text-xs sm:text-sm shadow-[0_0_25px_rgba(245,208,97,0.35)] hover:shadow-[0_0_35px_rgba(245,208,97,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-amber-200/40"
        >
          <Heart className="w-3.5 h-3.5 fill-stone-900 text-stone-900" />
          <span>Homenagear Nice</span>
        </button>
      </div>

    </header>
  );
}
