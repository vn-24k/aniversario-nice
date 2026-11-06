import React, { useState } from 'react';
import { Check } from 'lucide-react';

export function UivPromiseCheckbox3({ className = '' }: { className?: string }) {
  const [checked, setChecked] = useState(true);
  return (
    <div className={`uiv_scoped_chk3 inline-flex items-center gap-3 cursor-pointer ${className}`} onClick={() => setChecked(!checked)}>
      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${checked ? 'bg-fuchsia-600 border-fuchsia-400 text-white shadow-[0_0_12px_rgba(224,86,253,0.5)]' : 'bg-black/40 border-white/20'}`}>
        {checked && <Check className="w-3.5 h-3.5" />}
      </div>
      <span className="text-xs text-purple-200/90 font-light">Estar sempre por perto para comemorar cada vitória 🌸</span>
    </div>
  );
}
