import React, { useState } from 'react';
import { Heart, Sparkles, Award, Star, Compass } from 'lucide-react';
import { UivCtaButton, UivPulseLoader, UivAffectionTooltip } from './uiverse';
import { audioEngine } from '../audio/audioEngine';

interface LegacySectionProps {
  onTributeClick: () => void;
}

export function LegacySection({ onTributeClick }: LegacySectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCtaClick = () => {
    audioEngine.playSoftClick();
    onTributeClick();
  };

  return (
    <section id="legado" className="relative min-h-screen py-28 px-6 md:px-12 max-w-7xl mx-auto z-20 flex items-center">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Monolithic Narrative (Matching template section 01) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          
          <div>
            {/* Section Index 01 */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-code text-fuchsia-400 font-bold text-sm tracking-widest px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
                01
              </span>
              <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-purple-300/60">
                Trajetória & Legado
              </span>
            </div>

            {/* Majestic Title */}
            <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.05] tracking-tight mb-6">
              Não É Apenas Um
              <br />
              Aniversário, É O
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-300 to-amber-200">
                Legado De Uma Vida
              </span>
            </h2>

            {/* Horizontal Magenta Accent Bar */}
            <div className="w-32 h-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full mb-8" />

            {/* Emotional Narrative Paragraphs */}
            <div className="space-y-5 text-purple-100/80 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                Dona Nice é aquela presença rara que transforma qualquer tempestade em dia de sol. Ao longo de todos estes anos, sua dedicação inabalável, seu olhar atencioso e sua capacidade de acolher o próximo construíram uma história que nos enche de orgulho profundo.
              </p>
              <p>
                Cada lição ensinada à mesa, cada conselho dito com ternura no momento certo e a firmeza serena com que sempre conduziu sua vida são as maiores heranças que poderíamos receber.
              </p>
            </div>

            {/* Interactive Pulse & Affection Badge */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <UivPulseLoader />
                <span className="text-xs font-mono-code text-purple-300/70">
                  Coração Materno Batendo Forte
                </span>
              </div>

              <UivAffectionTooltip text="O abraço mais quente do mundo">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-xs text-pink-200 cursor-help">
                  <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/40" />
                  <span>Amor Inestimável</span>
                </div>
              </UivAffectionTooltip>
            </div>

            {/* Scoped Uiverse CTA */}
            <div className="mt-8">
              <UivCtaButton onClick={handleCtaClick} />
            </div>

          </div>

        </div>

        {/* Right Column: Purple Glowing Cosmic Portrait Card matching template card */}
        <div className="lg:col-span-5 flex justify-center">
          
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full max-w-md aspect-[4/5] rounded-[36px] p-4 bg-gradient-to-b from-[#1c0d38]/90 via-[#120824]/90 to-[#090414]/95 border border-fuchsia-500/30 shadow-[0_25px_80px_rgba(0,0,0,0.8),0_0_60px_rgba(224,86,253,0.25)] backdrop-blur-2xl transition-all duration-500 hover:scale-[1.02] flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-fuchsia-500/30 rounded-full blur-3xl pointer-events-none group-hover:bg-fuchsia-500/45 transition-colors" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

            {/* Card Header Badge */}
            <div className="relative z-10 flex items-center justify-between p-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs text-purple-200 font-mono-code">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>Edição Comemorativa</span>
              </div>
              <span className="text-xs font-mono-code text-fuchsia-400 font-bold">
                2026
              </span>
            </div>

            {/* Central Visual Capsule */}
            <div className="relative z-10 flex-1 my-4 rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-purple-950/60 to-black/80 flex flex-col items-center justify-center p-6 text-center group-hover:border-fuchsia-400/50 transition-colors">
              
              {/* Ethereal Glow Image or Silhouette */}
              <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-fuchsia-500 via-purple-400 to-amber-300 shadow-[0_0_40px_rgba(224,86,253,0.5)] mb-5">
                <div className="w-full h-full rounded-full bg-[#120624] overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/story-portrait.jpg"
                    alt="Nice - Celebração"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />
                </div>
              </div>

              <h3 className="font-syne text-2xl font-bold text-white mb-2">
                Dona Nice
              </h3>
              <p className="text-xs text-pink-200/80 font-mono-code max-w-xs leading-relaxed">
                "Onde há amor, a vida floresce sem limites."
              </p>

              {/* Decorative Audio Wave Bars */}
              <div className="flex items-center gap-1 mt-6">
                {[16, 24, 38, 18, 30, 42, 22, 14, 28, 36, 20].map((h, idx) => (
                  <div
                    key={idx}
                    className="w-1 bg-gradient-to-t from-fuchsia-500 to-pink-300 rounded-full animate-pulse"
                    style={{
                      height: `${h}px`,
                      animationDuration: `${0.8 + (idx % 4) * 0.25}s`,
                      animationDelay: `${idx * 0.08}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Card Footer Tribute Quote */}
            <div className="relative z-10 p-3 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-between text-xs text-purple-300/80">
              <span className="font-mono-code">Amada por todos nós</span>
              <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
