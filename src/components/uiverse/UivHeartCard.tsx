import React from 'react';
import { Heart } from 'lucide-react';

export function UivHeartCard({ className = '' }: { className?: string }) {
  return (
    <div className={`uiv_scoped_card1 w-full ${className}`}>
      <style>{`
        .uiv_scoped_card1 .inner-card {
          padding: 20px;
          border-radius: 20px;
          background: rgba(224, 86, 253, 0.05);
          border: 1px solid rgba(224, 86, 253, 0.15);
          display: flex;
          align-items: center;
          gap: 16px;
        }
      `}</style>
      <div className="inner-card">
        <div className="w-10 h-10 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/40 flex items-center justify-center shrink-0">
          <Heart className="w-5 h-5 text-pink-300 fill-pink-300/40" />
        </div>
        <div>
          <span className="text-xs font-syne font-bold text-white block">Coração Generoso</span>
          <span className="text-[11px] text-purple-200/70 font-light">Sempre pronto para estender a mão a quem precisa.</span>
        </div>
      </div>
    </div>
  );
}
