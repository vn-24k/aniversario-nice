import React, { useState } from 'react';
import { Calendar, Heart, Camera, Sparkles, Music, Sun } from 'lucide-react';
import {
  UivCelestialSwitch,
  UivNebulaSwitch,
  UivStarlightSwitch,
  UivMinimalistButton,
  UivLoveHeartButton
} from './uiverse';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

export function GallerySection() {
  const [activeMemory, setActiveMemory] = useState<number>(0);
  const [hugCount, setHugCount] = useState<number>(128);

  const memories = [
    {
      title: "As Raízes de Generosidade",
      period: "O Começo de Tudo",
      description: "Desde jovem, Nice sempre se destacou pela alegria contagiante, pela fé inquebrantável e pelo desejo de ver todos ao seu redor felizes.",
      icon: Sparkles,
      color: "from-amber-400 to-pink-500",
    },
    {
      title: "O Nascimento dos Filhos",
      period: "O Amor Multiplicado",
      description: "Noites dedicadas, mãos estendidas em cada passo e o orgulho incontido nos olhos a cada conquista de cada filho.",
      icon: Heart,
      color: "from-pink-500 to-fuchsia-600",
    },
    {
      title: "Os Almoços de Domingo & Risadas",
      period: "Tradição & Calor",
      description: "A mesa farta, a comida feita com amor que ninguém esquece e o som de uma casa cheia de vida e união.",
      icon: Sun,
      color: "from-fuchsia-600 to-purple-600",
    },
    {
      title: "A Nossa Rainha Hoje",
      period: "Aniversário 2026",
      description: "Hoje celebramos a mulher sábia, bonita, admirada e profundamente amada que ilumina os nossos dias.",
      icon: Calendar,
      color: "from-purple-600 to-indigo-600",
    },
  ];

  const handleSendHug = () => {
    setHugCount(prev => prev + 1);
    audioEngine.playHarpChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff7ce8', '#f5d061', '#e056fd'],
    });
  };

  return (
    <section id="memorias" className="relative min-h-screen py-28 px-6 md:px-12 max-w-7xl mx-auto z-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-code text-fuchsia-400 font-bold text-sm tracking-widest px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
              03
            </span>
            <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-purple-300/60">
              Cápsula de Memórias
            </span>
          </div>

          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white leading-tight uppercase">
            Capítulos De Uma
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-300 to-amber-200">
              História Inesquecível
            </span>
          </h2>
        </div>

        {/* Ambient Controls Pill */}
        <div className="flex flex-wrap items-center gap-4 p-4 rounded-3xl bg-[#140a2a]/90 border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono-code text-purple-300/70 mb-2">Sinfonia</span>
            <UivCelestialSwitch />
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono-code text-purple-300/70 mb-2">Nebulosa</span>
            <UivNebulaSwitch />
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono-code text-purple-300/70 mb-2">Estrelas</span>
            <UivStarlightSwitch />
          </div>
        </div>
      </div>

      {/* Memory Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {memories.map((m, idx) => {
          const Icon = m.icon;
          const isSelected = activeMemory === idx;
          return (
            <div
              key={idx}
              onClick={() => {
                setActiveMemory(idx);
                audioEngine.playSoftClick();
              }}
              className={`p-6 rounded-[28px] border transition-all duration-300 cursor-pointer backdrop-blur-xl flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#1e0e3d]/90 border-fuchsia-400 shadow-[0_15px_40px_rgba(224,86,253,0.3)] scale-[1.02]'
                  : 'bg-[#120724]/70 border-white/10 hover:border-white/20 hover:bg-[#190a33]/80'
              }`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${m.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono-code text-fuchsia-300 font-bold block mb-1">
                  {m.period}
                </span>
                <h3 className="font-syne text-lg font-bold text-white mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-purple-200/70 font-light leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code">
                <span className={isSelected ? 'text-pink-300 font-bold' : 'text-purple-300/50'}>
                  {isSelected ? '✓ Visualizando' : 'Toque para abrir'}
                </span>
                <Heart className={`w-3.5 h-3.5 ${isSelected ? 'text-pink-400 fill-pink-400' : 'text-white/20'}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Virtual Hug Interaction Bar */}
      <div className="p-8 rounded-[36px] bg-gradient-to-r from-[#1e0e3d]/90 via-[#150a2b]/90 to-[#0e061c]/90 border border-fuchsia-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono-code text-amber-300 uppercase tracking-widest block mb-1">
            Gesto de Carinho em Tempo Real
          </span>
          <h3 className="font-syne text-2xl font-bold text-white mb-1">
            Já foram enviados <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">{hugCount}</span> abraços para Nice!
          </h3>
          <p className="text-xs text-purple-200/70">
            Clique no botão ao lado para enviar o seu abraço com chuva de bênçãos.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <UivLoveHeartButton onClick={handleSendHug} />
        </div>
      </div>

    </section>
  );
}
