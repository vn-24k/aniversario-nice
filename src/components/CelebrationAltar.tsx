import React, { useState } from 'react';
import { Sparkles, Heart, Star, Send, CheckCircle2 } from 'lucide-react';
import {
  UivBrutalistInput,
  UivMessageInput,
  UivVirtueRadio,
  UivPromiseCheckbox1,
  UivPromiseCheckbox2,
  UivPromiseCheckbox3,
  UivSocialShareButton,
  UivGlowPillButton
} from './uiverse';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

interface Message {
  name: string;
  relation: string;
  text: string;
  date: string;
}

export function CelebrationAltar() {
  const [starCount, setStarCount] = useState<number>(47);
  const [blessingMessage, setBlessingMessage] = useState<string>(
    '✨ "Uma constelação de bênçãos brilha sobre Dona Nice neste dia tão especial."'
  );

  const [authorName, setAuthorName] = useState<string>('');
  const [authorText, setAuthorText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      name: "Com todo amor dos seus filhos",
      relation: "Filhos",
      text: "Mãe, você é o nosso porto seguro, o nosso maior exemplo de força e ternura. Feliz Aniversário! Que Deus continue iluminando seus passos todos os dias. Te amamos além das palavras! ❤️",
      date: "Hoje, 09:30"
    },
    {
      name: "Toda a Família",
      relation: "Família Reunida",
      text: "Dona Nice, celebrar sua vida é celebrar o amor, a generosidade e a alegria que unem a nossa casa. Você merece o mundo e todas as bênçãos dos céus!",
      date: "Hoje, 08:45"
    }
  ]);

  const handleLightStar = () => {
    setStarCount(prev => prev + 1);
    audioEngine.playHarpChime();

    // Golden confetti shower
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f5d061', '#ffd166', '#e056fd', '#ffffff', '#ff7ce8'],
    });

    const blessings = [
      '🌟 "Mais uma luz no céu dedicada à mulher que é a própria luz das nossas vidas!"',
      '✨ "Que a sua saúde, paz e sorrisos se multipliquem em infinitas primaveras."',
      '💖 "O amor de mãe é o elo sagrado que sustenta nossa família. Viva Dona Nice!"',
      '🌸 "Gratidão por cada oração, cada abraço e cada conselho sábio."',
    ];
    setBlessingMessage(blessings[Math.floor(Math.random() * blessings.length)]);
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorText.trim()) return;

    audioEngine.playHarpChime();
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.75 },
    });

    const newMsg: Message = {
      name: authorName.trim() || "Alguém que te ama muito",
      relation: "Familiar / Amigo",
      text: authorText.trim(),
      date: "Agora mesmo"
    };

    setMessages([newMsg, ...messages]);
    setAuthorName('');
    setAuthorText('');
  };

  const whatsappText = encodeURIComponent(
    `Mãe Nice, parabéns pelo seu aniversário! Que seu dia seja tão radiante e especial quanto você é para todos nós. Eu te amo muito! ❤️✨`
  );

  const handleShareWhatsapp = () => {
    audioEngine.playSoftClick();
    window.open(`https://api.whatsapp.com/send?text=${whatsappText}`, '_blank');
  };

  return (
    <section id="mensagens" className="relative min-h-screen py-28 px-6 md:px-12 max-w-7xl mx-auto z-20">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-fuchsia-600/15 via-purple-600/10 to-transparent rounded-full blur-[180px] pointer-events-none" />

      {/* Altar Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-mono-code uppercase tracking-widest text-fuchsia-300 mb-6">
          <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>Altar Cósmico de Celebração</span>
        </div>

        <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight">
          Acenda Uma Estrela
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-300 to-amber-200">
            No Céu De Nice
          </span>
        </h2>

        <p className="text-base sm:text-lg text-purple-100/75 font-light mt-6 max-w-xl mx-auto leading-relaxed">
          Cada estrela simboliza um agradecimento, uma oração e um desejo de saúde e felicidade plena para a nossa homenageada.
        </p>

        {/* Grand Star Lighting Button */}
        <div className="mt-10 flex flex-col items-center">
          <button
            onClick={handleLightStar}
            className="group relative px-8 py-5 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-fuchsia-600 text-white font-syne text-base sm:text-lg font-bold tracking-wider uppercase shadow-[0_0_50px_rgba(245,208,97,0.4)] hover:shadow-[0_0_70px_rgba(245,208,97,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/30"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-200 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Acender Estrela de Amor</span>
              <Heart className="w-5 h-5 text-pink-200 fill-pink-200 animate-pulse" />
            </div>
          </button>

          {/* Star Counter Pill */}
          <div className="mt-6 flex items-center gap-2 px-5 py-2 rounded-full bg-[#1b0d36]/80 border border-amber-400/30 text-amber-200 text-xs font-mono-code shadow-lg backdrop-blur-md">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span><strong>{starCount}</strong> estrelas brilhando no firmamento de Nice</span>
          </div>

          <p className="mt-4 text-sm text-pink-200/90 font-light italic max-w-lg">
            {blessingMessage}
          </p>
        </div>
      </div>

      {/* Two Column Grid: Guestbook Form & Promises */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
        
        {/* Left Column: Guestbook Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-[36px] bg-[#14082c]/85 border border-fuchsia-500/25 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
          
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div>
              <h3 className="font-syne text-2xl font-bold text-white mb-1">
                Livro de Ouro de Nice
              </h3>
              <p className="text-xs text-purple-200/70 font-light">
                Deixe gravada sua mensagem de carinho e afeto.
              </p>
            </div>
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
          </div>

          {/* Message Form */}
          <form onSubmit={handleSubmitMessage} className="space-y-6">
            
            <div>
              <label className="block text-xs font-mono-code uppercase tracking-wider text-purple-300/80 mb-2">
                Seu Nome ou Grau de Parentesco
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Ex: Seu filho querido, Sobrinha, Amiga..."
                className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-white/15 text-white placeholder-purple-300/30 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition-all font-light"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-code uppercase tracking-wider text-purple-300/80 mb-2">
                Sua Mensagem ou Bênção de Aniversário
              </label>
              <textarea
                value={authorText}
                onChange={(e) => setAuthorText(e.target.value)}
                rows={4}
                placeholder="Escreva suas palavras do coração para Dona Nice..."
                className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-white/15 text-white placeholder-purple-300/30 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition-all font-light resize-none"
              />
            </div>

            {/* Virtues selector radio */}
            <div>
              <label className="block text-xs font-mono-code uppercase tracking-wider text-purple-300/80 mb-2">
                Qual virtude você mais admira em Nice?
              </label>
              <div className="p-2 rounded-2xl bg-black/30 border border-white/10">
                <UivVirtueRadio />
              </div>
            </div>

            {/* Actions: Submit & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-syne text-sm font-bold tracking-wider uppercase shadow-[0_0_30px_rgba(217,70,239,0.4)] hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Gravar no Livro de Ouro</span>
              </button>

              <div className="w-full sm:w-auto">
                <UivSocialShareButton onClick={handleShareWhatsapp} />
              </div>
            </div>

          </form>

          {/* Live Messages Feed */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="font-syne text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Mensagens Gravadas com Amor ({messages.length})</span>
            </h4>

            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-black/30 border border-white/10 hover:border-fuchsia-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-syne font-bold text-white text-sm">
                      {msg.name}
                    </span>
                    <span className="text-[10px] font-mono-code text-purple-300/50">
                      {msg.date}
                    </span>
                  </div>
                  <p className="text-xs text-purple-100/80 font-light leading-relaxed">
                    "{msg.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Promises of Love & Scoped Uiverse Checkboxes */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Card: Promessas para a Mãe */}
          <div className="p-8 rounded-[36px] bg-[#14082c]/85 border border-fuchsia-500/25 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-fuchsia-400" />
              <div>
                <h3 className="font-syne text-xl font-bold text-white">
                  Promessas de Amor
                </h3>
                <p className="text-xs text-purple-200/70">
                  Compromissos do coração para Dona Nice.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              <div className="p-4 rounded-2xl bg-black/30 border border-white/10 flex flex-col gap-2">
                <span className="text-xs text-purple-200 font-medium">1. Ligar para saber como ela está toda semana:</span>
                <UivPromiseCheckbox1 />
              </div>

              <div className="p-4 rounded-2xl bg-black/30 border border-white/10 flex flex-col gap-2">
                <span className="text-xs text-purple-200 font-medium">2. Sempre ouvir seus conselhos sábios com paciência:</span>
                <UivPromiseCheckbox2 />
              </div>

              <div className="p-4 rounded-2xl bg-black/30 border border-white/10 flex flex-col gap-2">
                <span className="text-xs text-purple-200 font-medium">3. Celebrar a vida ao lado dela em cada oportunidade:</span>
                <UivPromiseCheckbox3 />
              </div>
            </div>
          </div>

          {/* Interactive Celestial Button */}
          <div className="p-8 rounded-[36px] bg-gradient-to-br from-[#1e0e3d]/85 to-[#120724]/90 border border-fuchsia-500/25 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl text-center">
            <h4 className="font-syne text-lg font-bold text-white mb-2">
              Toque de Felicitação
            </h4>
            <p className="text-xs text-purple-200/70 mb-6">
              Toque a melodia sagrada de parabéns em homenagem a Dona Nice.
            </p>
            <div className="flex justify-center">
              <UivGlowPillButton onClick={() => audioEngine.playHarpChime()} />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
