import React, { useState } from 'react';
import { Sun } from 'lucide-react';

export function UivStarlightSwitch({ className = '' }: { className?: string }) {
  const [active, setActive] = useState(true);
  return (
    <button
      type="button"
      onClick={() => setActive(!active)}
      className={`uiv_scoped_sw3 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono-code transition-all cursor-pointer ${
        active
          ? 'bg-amber-950/80 border-amber-400/60 text-amber-200 shadow-[0_0_15px_rgba(245,208,97,0.3)]'
          : 'bg-black/40 border-white/10 text-white/60 hover:text-white'
      } ${className}`}
    >
      <Sun className="w-3.5 h-3.5 text-amber-300" />
      <span>{active ? 'Estrelas' : 'Calmo'}</span>
    </button>
  );
}
