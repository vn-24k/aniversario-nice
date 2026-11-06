import React from 'react';
import { Sparkles } from 'lucide-react';

interface UivGlowPillButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function UivGlowPillButton({ label = "Tocar Harpa de Parabéns", onClick, className = '' }: UivGlowPillButtonProps) {
  return (
    <div className={`uiv_scoped_btn3 inline-block ${className}`}>
      <style>{`
        .uiv_scoped_btn3 .glow-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, rgba(245, 208, 97, 0.2), rgba(224, 86, 253, 0.2));
          border: 1px solid rgba(245, 208, 97, 0.5);
          border-radius: 9999px;
          color: #fef08a;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          backdrop-filter: blur(16px);
          transition: all 0.3s ease;
          box-shadow: 0 0 30px rgba(245, 208, 97, 0.25);
        }
        .uiv_scoped_btn3 .glow-btn:hover {
          background: linear-gradient(135deg, rgba(245, 208, 97, 0.35), rgba(224, 86, 253, 0.4));
          border-color: rgba(245, 208, 97, 0.9);
          box-shadow: 0 0 45px rgba(245, 208, 97, 0.5);
          transform: translateY(-2px) scale(1.03);
          color: #ffffff;
        }
      `}</style>
      <button className="glow-btn" onClick={onClick} type="button">
        <Sparkles className="w-4 h-4 text-amber-300" />
        <span>{label}</span>
      </button>
    </div>
  );
}
