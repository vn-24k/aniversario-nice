import React from 'react';
import { Heart, Sparkles, Sun, Shield, Coffee, Smile } from 'lucide-react';
import {
  UivHeartCard,
  UivVirtueAlertCard,
  UivLessonCard,
  UivSecretGlowCard,
  UivCapsuleCard
} from './uiverse';

export function VirtuesSection() {
  return (
    <section id="virtudes" className="relative min-h-screen py-28 px-6 md:px-12 max-w-7xl mx-auto z-20">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header matching template style */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-code text-fuchsia-400 font-bold text-sm tracking-widest px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
            02
          </span>
          <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-purple-300/60">
            Constelação de Virtudes
          </span>
        </div>

        <div className="flex items-start gap-4">
          <span className="font-syne text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-amber-200 leading-none">
            A
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white leading-tight uppercase">
            creditamos Que O Amor De Mãe
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-300 to-amber-200">
              Não Conhece Fronteiras.
            </span>
          </h2>
        </div>

        <p className="text-base sm:text-lg text-purple-100/70 font-light mt-6 max-w-2xl leading-relaxed pl-14">
          Cada virtude de Nice é uma estrela que ilumina os caminhos da nossa família. Conheça os pilares que tornam esta mulher tão singular e preciosa.
        </p>
      </div>

      {/* Grid of Virtues & Uiverse Scoped Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        
        {/* Card 1: A Fortaleza Serena */}
        <div className="p-8 rounded-[32px] bg-[#140a2a]/80 border border-fuchsia-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:border-fuchsia-500/40 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/15 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-300 mb-6 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="font-syne text-2xl font-bold text-white mb-3">
            A Fortaleza Serena
          </h3>
          <p className="text-sm text-purple-100/70 font-light leading-relaxed mb-6">
            Diante dos desafios da vida, sua resposta sempre foi a coragem tranquila e a certeza de que tudo se ajeitaria. Um refúgio seguro onde todos nós encontramos paz.
          </p>
          <div className="pt-4 border-t border-white/10 flex justify-center">
            <UivHeartCard />
          </div>
        </div>

        {/* Card 2: O Abraço Que Acolhe */}
        <div className="p-8 rounded-[32px] bg-[#140a2a]/80 border border-fuchsia-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:border-fuchsia-500/40 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-2xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-300 mb-6 group-hover:scale-110 transition-transform">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-syne text-2xl font-bold text-white mb-3">
            O Abraço Que Cura
          </h3>
          <p className="text-sm text-purple-100/70 font-light leading-relaxed mb-6">
            Não existe remédio melhor do que chegar em casa e sentir o afeto sincero de Nice. Suas palavras restauram energias e dissipam qualquer angústia.
          </p>
          <div className="pt-4 border-t border-white/10 flex justify-center">
            <UivLessonCard />
          </div>
        </div>

        {/* Card 3: A Sabedoria dos Conselhos */}
        <div className="p-8 rounded-[32px] bg-[#140a2a]/80 border border-fuchsia-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:border-fuchsia-500/40 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-6 group-hover:scale-110 transition-transform">
            <Sun className="w-6 h-6" />
          </div>
          <h3 className="font-syne text-2xl font-bold text-white mb-3">
            Aconselhadora de Ouro
          </h3>
          <p className="text-sm text-purple-100/70 font-light leading-relaxed mb-6">
            Uma intuição afiada e cheia de bondade. Quando Nice diz "vai dar certo", o universo parece conspirar a favor. Suas palavras guiam os passos dos filhos e netos.
          </p>
          <div className="pt-4 border-t border-white/10 flex justify-center">
            <UivCapsuleCard />
          </div>
        </div>

        {/* Card 4: Alerta de Bênçãos */}
        <div className="lg:col-span-2 p-8 rounded-[32px] bg-[#140a2a]/80 border border-fuchsia-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <h3 className="font-syne text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>Mensagens & Elogios Espontâneos</span>
          </h3>
          <div className="w-full">
            <UivVirtueAlertCard />
          </div>
        </div>

        {/* Card 5: Segredo do Amor */}
        <div className="p-8 rounded-[32px] bg-[#140a2a]/80 border border-fuchsia-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col justify-between">
          <div>
            <h3 className="font-syne text-xl font-bold text-white mb-2">
              Amor em Cada Detalhe
            </h3>
            <p className="text-xs text-purple-200/60 mb-6">
              O amor materno de Nice revelado em cartão holográfico.
            </p>
          </div>
          <div className="flex justify-center">
            <UivSecretGlowCard />
          </div>
        </div>

      </div>

    </section>
  );
}
