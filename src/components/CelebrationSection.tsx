import React, { useState } from 'react';
import { Heart, Sparkles, Send, Share2, Star } from 'lucide-react';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

interface Message {
  name: string;
  relation: string;
  text: string;
  date: string;
}

export function CelebrationSection() {
  const [starCount, setStarCount] = useState<number>(54);
  const [authorName, setAuthorName] = useState<string>('');
  const [authorText, setAuthorText] = useState<string>('');
  const [blessingText, setBlessingText] = useState<string>(
    '✨ "Que a sua vida seja sempre cercada de flores, saúde e o carinho incondicional de quem te ama."'
  );

  const [messages, setMessages] = useState<Message[]>([
    {
      name: "Seus Filhos",
      relation: "Filhos",
      text: "Mãe, você é o nosso maior tesouro, o nosso alicerce e a pessoa mais generosa deste mundo. Feliz Aniversário! Te amamos mais do que as palavras podem expressar. ❤️",
      date: "Hoje, 09:30"
    },
    {
      name: "Toda a Família",
      relation: "Família Reunida",
      text: "Dona Nice querida, que Deus derrame bênçãos infinitas sobre a sua vida. Seu sorriso ilumina qualquer ambiente e nos dá forças para seguir sempre em frente!",
      date: "Hoje, 08:15"
    }
  ]);

  const handleLightStar = () => {
    setStarCount(prev => prev + 1);
    audioEngine.playHarpChime();

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#f5d061', '#f472b6', '#fae8b2', '#ffffff'],
    });

    const blessings = [
      '🌟 "Mais uma bênção acesa no céu para a melhor mãe de todas!"',
      '✨ "Que a senhora colha infinitos sorrisos, saúde plena e paz no coração."',
      '💖 "O amor de mãe é o laço sagrado que nos une em qualquer distância."',
      '🌸 "Gratidão eterna por cada conselho carinhoso e cada oração."',
    ];
    setBlessingText(blessings[Math.floor(Math.random() * blessings.length)]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorText.trim()) return;

    audioEngine.playHarpChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.75 },
    });

    const newMsg: Message = {
      name: authorName.trim() || "Alguém da Família",
      relation: "Familiar / Amigo",
      text: authorText.trim(),
      date: "Agora mesmo"
    };

    setMessages([newMsg, ...messages]);
    setAuthorName('');
    setAuthorText('');
  };

  const whatsappMessage = encodeURIComponent(
    `Mãe Nice, feliz aniversário! Que o seu dia seja repleto de amor, saúde e alegrias. Eu te amo muito e tenho muito orgulho da senhora! ❤️✨`
  );

  const handleShareWhatsapp = () => {
    audioEngine.playSoftClick();
    window.open(`https://api.whatsapp.com/send?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="bencaos" className="relative py-28 px-6 md:px-12 max-w-5xl mx-auto z-20">
      
      {/* Altar Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/20 text-amber-200 text-xs tracking-widest uppercase mb-4">
          <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>Altar de Bênçãos & Recados</span>
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-5xl text-white tracking-wide mb-4">
          Livro de Ouro de Dona Nice
        </h2>

        <p className="text-stone-300/80 font-light text-base leading-relaxed">
          Deixe gravado o seu carinho e envie sua mensagem de aniversário diretamente para ela.
        </p>

        {/* Light Star Action Button */}
        <div className="mt-8 flex flex-col items-center">
          <button
            onClick={handleLightStar}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500 text-stone-950 font-serif-luxury text-base font-semibold tracking-wider uppercase shadow-[0_0_35px_rgba(245,208,97,0.35)] hover:shadow-[0_0_50px_rgba(245,208,97,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-200/50"
          >
            <Sparkles className="w-4 h-4 text-stone-950" />
            <span>Acender Estrela de Amor para Nice</span>
            <Heart className="w-4 h-4 fill-stone-950 text-stone-950" />
          </button>

          <div className="mt-4 flex items-center gap-2 text-xs text-amber-200/70">
            <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span><strong>{starCount}</strong> bênçãos acesas para Dona Nice</span>
          </div>

          <p className="text-sm font-editorial italic text-amber-200/90 mt-2">
            {blessingText}
          </p>
        </div>
      </div>

      {/* Guestbook Form */}
      <div className="p-8 sm:p-12 rounded-[36px] bg-[#140b1a]/90 border border-amber-300/25 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl mb-12">
        <h3 className="font-serif-luxury text-2xl text-white mb-6 flex items-center gap-2">
          <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
          <span>Escrever uma Mensagem de Aniversário</span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-amber-200/70 mb-2">
              Seu Nome ou Grau de Parentesco
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Ex: Seu filho querido, Sobrinha, Amiga de infância..."
              className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-amber-300/20 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-300 transition-all font-light"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-amber-200/70 mb-2">
              Sua Mensagem do Coração
            </label>
            <textarea
              value={authorText}
              onChange={(e) => setAuthorText(e.target.value)}
              rows={4}
              placeholder="Escreva suas palavras de afeto e parabéns para Dona Nice..."
              className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-amber-300/20 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-300 transition-all font-light resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 text-stone-950 font-serif-luxury text-sm font-semibold tracking-wider uppercase shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Gravar Mensagem no Livro de Ouro</span>
            </button>

            <button
              type="button"
              onClick={handleShareWhatsapp}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-sm font-medium transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-emerald-300" />
              <span>Enviar Parabéns no WhatsApp</span>
            </button>
          </div>
        </form>

        {/* Live Messages Feed */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="font-serif-luxury text-xl text-amber-100 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Mensagens Gravadas com Carinho ({messages.length})</span>
          </h4>

          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-black/30 border border-amber-300/15"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif-luxury text-amber-100 font-medium text-base">
                    {m.name}
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {m.date}
                  </span>
                </div>
                <p className="text-sm text-stone-300/85 font-light leading-relaxed">
                  "{m.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
