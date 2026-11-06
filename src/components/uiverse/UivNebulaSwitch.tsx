import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export function UivNebulaSwitch({ className = '' }: { className?: string }) {
  const [active, setActive] = useState(true);
  return (
    <button
      type="button"
      onClick={() => setActive(!active)}
      className={`uiv_scoped_sw2 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono-code transition-all cursor-pointer ${
        active
          ? 'bg-purple-950/80 border-purple-400/60 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
          : 'bg-black/40 border-white/10 text-white/60 hover:text-white'
      } ${className}`}
    >
      <Sparkles className="w-3.5 h-3.5 text-purple-300" />
      <span>{active ? 'Brilho On' : 'Fosco'}</span>
    </button>
  );
}
