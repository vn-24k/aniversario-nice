import React, { useState } from 'react';
import { Sparkles, Calendar, Heart, Sun } from 'lucide-react';
import { audioEngine } from '../audio/audioEngine';

export function GallerySection() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const chapters = [
    {
      title: "As Raízes & A Juventude",
      period: "O Início da Jornada",
      description: "Uma história erguida com honestidade, fé inquebrantável e a pureza de um coração que sempre acreditou na beleza da vida.",
      quote: "A dignidade e a alegria como maiores riquezas desde o primeiro passo.",
      icon: Sparkles,
    },
    {
      title: "O Dom da Maternidade",
      period: "A Chegada dos Filhos",
      description: "Noites dedicadas, mãos estendidas em cada fase e o olhar de orgulho que nos acompanhou em cada vitória alcançada.",
      quote: "O amor de mãe é o único que se multiplica a cada novo abraço.",
      icon: Heart,
    },
    {
      title: "Tradição & Casa Cheia",
      period: "Os Melhores Domingos",
      description: "As gargalhadas em volta da mesa, o café fresco feito com carinho e o aconchego que só a casa de mãe é capaz de oferecer.",
      quote: "Onde Nice está, a família inteira se sente em casa.",
      icon: Sun,
    },
    {
      title: "Nossa Rainha Hoje",
      period: "Aniversário Especial 2026",
      description: "Uma mulher admirada, forte, bonita e infinitamente abençoada. Celebrar a sua vida é a nossa maior alegria.",
      quote: "Que a senhora colha em dobro todo o amor que semeou ao longo da vida.",
      icon: Calendar,
    },
  ];

  return (
    <section id="memorias" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto z-20">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/20 text-amber-200 text-xs tracking-widest uppercase mb-4">
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Álbum Afetivo</span>
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-5xl text-white tracking-wide mb-4">
          Capítulos de Uma Vida Iluminada
        </h2>

        <p className="text-stone-300/80 font-light text-base leading-relaxed">
          Momentos preciosos que contam a história da mulher mais importante de nossas vidas.
        </p>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {chapters.map((ch, i) => {
          const Icon = ch.icon;
          const isSelected = selectedIdx === i;
          return (
            <div
              key={i}
              onClick={() => {
                setSelectedIdx(i);
                audioEngine.playSoftClick();
              }}
              className={`p-7 rounded-[30px] border transition-all duration-300 cursor-pointer backdrop-blur-xl flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#1e1026]/95 border-amber-300/70 shadow-[0_15px_40px_rgba(245,208,97,0.25)] scale-[1.02]'
                  : 'bg-[#120818]/75 border-white/10 hover:border-amber-300/30 hover:bg-[#180c20]/80'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-300/30 flex items-center justify-center text-amber-300 mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <span className="text-[11px] font-editorial italic text-amber-300/80 block mb-1">
                  {ch.period}
                </span>

                <h3 className="font-serif-luxury text-xl text-white mb-2 leading-snug">
                  {ch.title}
                </h3>

                <p className="text-xs text-stone-300/75 font-light leading-relaxed">
                  {ch.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-amber-200/60">
                <span>{isSelected ? '✓ Selecionado' : 'Toque para ver'}</span>
                <Heart className={`w-3.5 h-3.5 ${isSelected ? 'fill-rose-400 text-rose-400' : 'text-stone-500'}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Chapter Quote Banner */}
      <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-r from-[#180c20]/95 via-[#130718]/95 to-[#0b040e]/95 border border-amber-300/25 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl text-center max-w-3xl mx-auto">
        <Sparkles className="w-5 h-5 text-amber-300 mx-auto mb-3" />
        <h3 className="font-editorial italic text-2xl sm:text-3xl text-amber-100 mb-3 leading-relaxed">
          "{chapters[selectedIdx].quote}"
        </h3>
        <p className="text-xs text-stone-400 tracking-wider uppercase font-serif-luxury">
          {chapters[selectedIdx].title} • {chapters[selectedIdx].period}
        </p>
      </div>

    </section>
  );
}
