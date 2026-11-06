import React from 'react';
import { Heart, Sparkles, Sun, Shield, Utensils, Feather } from 'lucide-react';

export function VirtuesSection() {
  const virtues = [
    {
      title: "A Fortaleza Serena",
      subtitle: "Coragem & Proteção",
      description: "Diante de qualquer dificuldade, sua postura sempre foi de serenidade e firmeza. Saber que a senhora está por perto nos traz uma paz inabalável.",
      icon: Shield,
      accent: "text-amber-300",
      bgAccent: "bg-amber-400/10",
      borderAccent: "border-amber-400/30",
    },
    {
      title: "O Aconchego Que Cura",
      subtitle: "Ternura & Afeto",
      description: "Não existe cansaço que resista ao abraço de Dona Nice. Seu carinho sincero é o porto seguro onde o coração sempre encontra repouso.",
      icon: Heart,
      accent: "text-rose-300",
      bgAccent: "bg-rose-400/10",
      borderAccent: "border-rose-400/30",
    },
    {
      title: "A Sabedoria dos Dias",
      subtitle: "Conselhos de Ouro",
      description: "Uma sensibilidade rara para ouvir e a palavra exata para acalmar. Suas lições são bússolas que levamos para a vida inteira.",
      icon: Feather,
      accent: "text-amber-200",
      bgAccent: "bg-amber-400/10",
      borderAccent: "border-amber-400/30",
    },
    {
      title: "A Mesa Repleta de Amor",
      subtitle: "União & Tradição",
      description: "A casa cheia, os aromas inconfundíveis e o riso solto dos domingos. Cada prato feito com as mãos de Nice carrega a alma da nossa família.",
      icon: Utensils,
      accent: "text-rose-200",
      bgAccent: "bg-rose-400/10",
      borderAccent: "border-rose-400/30",
    },
  ];

  return (
    <section id="virtudes" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto z-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/20 text-amber-200 text-xs tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Pilares de Uma Vida Exemplar</span>
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-5xl text-white tracking-wide mb-4">
          As Virtudes de Dona Nice
        </h2>

        <p className="text-stone-300/80 font-light text-base leading-relaxed">
          Traços nobres de quem vive para amar, servir e semear o bem por onde passa.
        </p>
      </div>

      {/* 4 Virtues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {virtues.map((v, i) => {
          const Icon = v.icon;
          return (
            <div
              key={i}
              className="p-8 sm:p-10 rounded-[32px] bg-[#140b1a]/85 border border-amber-300/20 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl hover:border-amber-300/40 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl ${v.bgAccent} border ${v.borderAccent} flex items-center justify-center ${v.accent} mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>

              <span className="text-xs font-editorial italic text-amber-300/80 block mb-1">
                {v.subtitle}
              </span>

              <h3 className="font-serif-luxury text-2xl text-white mb-3">
                {v.title}
              </h3>

              <p className="text-sm text-stone-300/80 font-light leading-relaxed">
                {v.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
