import React from 'react';
import { Calendar } from 'lucide-react';

export function UivCapsuleCard({ className = '' }: { className?: string }) {
  return (
    <div className={`uiv_scoped_card5 w-full ${className}`}>
      <style>{`
        .uiv_scoped_card5 .capsule-box {
          padding: 20px;
          border-radius: 20px;
          background: rgba(147, 51, 234, 0.06);
          border: 1px solid rgba(147, 51, 234, 0.2);
          display: flex;
          align-items: center;
          gap: 16px;
        }
      `}</style>
      <div className="capsule-box">
        <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
          <Calendar className="w-5 h-5 text-purple-300" />
        </div>
        <div>
          <span className="text-xs font-syne font-bold text-white block">Cápsula 2026</span>
          <span className="text-[11px] text-purple-200/70 font-light">Mais um ano lindo celebrado com amor e saúde.</span>
        </div>
      </div>
    </div>
  );
}
