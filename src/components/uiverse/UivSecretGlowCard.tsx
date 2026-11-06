import React from 'react';
import { Star } from 'lucide-react';

export function UivSecretGlowCard({ className = '' }: { className?: string }) {
  return (
    <div className={`uiv_scoped_card4 w-full ${className}`}>
      <style>{`
        .uiv_scoped_card4 .glow-card {
          padding: 20px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(236, 72, 153, 0.08));
          border: 1px solid rgba(217, 70, 239, 0.2);
          display: flex;
          align-items: center;
          gap: 16px;
        }
      `}</style>
      <div className="glow-card">
        <div className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center shrink-0">
          <Star className="w-5 h-5 text-pink-300 fill-pink-300/40" />
        </div>
        <div>
          <span className="text-xs font-syne font-bold text-white block">Amor Inabalável</span>
          <span className="text-[11px] text-purple-200/70 font-light">Um vínculo eterno que ultrapassa o tempo.</span>
        </div>
      </div>
    </div>
  );
}
