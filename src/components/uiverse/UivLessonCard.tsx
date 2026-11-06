import React from 'react';
import { Sparkles } from 'lucide-react';

export function UivLessonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`uiv_scoped_card3 w-full ${className}`}>
      <style>{`
        .uiv_scoped_card3 .lesson-card {
          padding: 20px;
          border-radius: 20px;
          background: rgba(245, 208, 97, 0.05);
          border: 1px solid rgba(245, 208, 97, 0.15);
          display: flex;
          align-items: center;
          gap: 16px;
        }
      `}</style>
      <div className="lesson-card">
        <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-amber-300" />
        </div>
        <div>
          <span className="text-xs font-syne font-bold text-white block">Sabedoria de Vida</span>
          <span className="text-[11px] text-purple-200/70 font-light">Ensinamentos preciosos guardados para sempre.</span>
        </div>
      </div>
    </div>
  );
}
