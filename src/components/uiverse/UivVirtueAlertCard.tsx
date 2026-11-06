import React from 'react';
import { Heart, Sparkles, Sun } from 'lucide-react';

export function UivVirtueAlertCard({ className = '' }: { className?: string }) {
  return (
    <div className={`uiv_scoped_card2 w-full ${className}`}>
      <style>{`
        .uiv_scoped_card2 .blessing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .uiv_scoped_card2 .blessing-card {
          padding: 16px 20px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }
        .uiv_scoped_card2 .blessing-card:hover {
          background: rgba(224, 86, 253, 0.08);
          border-color: rgba(224, 86, 253, 0.3);
          transform: translateY(-2px);
        }
      `}</style>
      <div className="blessing-grid">
        <div className="blessing-card">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-4 h-4 text-pink-400" />
            <h4 className="font-syne font-bold text-white text-sm">Amor Incondicional</h4>
          </div>
          <p className="text-xs text-purple-200/70 font-light leading-relaxed">
            Aquele carinho diário que nunca cobra nada em troca e sempre acolhe.
          </p>
        </div>

        <div className="blessing-card">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <h4 className="font-syne font-bold text-white text-sm">Luz & Serenidade</h4>
          </div>
          <p className="text-xs text-purple-200/70 font-light leading-relaxed">
            A presença suave de Nice que acalma qualquer momento de incerteza.
          </p>
        </div>

        <div className="blessing-card">
          <div className="flex items-center gap-3 mb-2">
            <Sun className="w-4 h-4 text-fuchsia-400" />
            <h4 className="font-syne font-bold text-white text-sm">Alegria & União</h4>
          </div>
          <p className="text-xs text-purple-200/70 font-light leading-relaxed">
            O riso contagiante que reúne toda a família em torno da mesma mesa.
          </p>
        </div>
      </div>
    </div>
  );
}
