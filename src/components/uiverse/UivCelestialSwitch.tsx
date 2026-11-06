import React, { useState } from 'react';
import { Music } from 'lucide-react';
import { audioEngine } from '../../audio/audioEngine';

export function UivCelestialSwitch({ className = '' }: { className?: string }) {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    const res = audioEngine.toggle();
    setActive(res);
  };
  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`uiv_scoped_sw1 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono-code transition-all cursor-pointer ${
        active
          ? 'bg-fuchsia-950/80 border-fuchsia-400/60 text-fuchsia-200 shadow-[0_0_15px_rgba(224,86,253,0.3)]'
          : 'bg-black/40 border-white/10 text-white/60 hover:text-white'
      } ${className}`}
    >
      <Music className={`w-3.5 h-3.5 ${active ? 'text-fuchsia-300 animate-bounce' : 'text-white/40'}`} />
      <span>{active ? 'Ativa' : 'Muda'}</span>
    </button>
  );
}
