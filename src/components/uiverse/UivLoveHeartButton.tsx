import React from 'react';
import { Heart } from 'lucide-react';

interface UivLoveHeartButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function UivLoveHeartButton({ label = "Enviar Abraço de Amor", onClick, className = '' }: UivLoveHeartButtonProps) {
  return (
    <div className={`uiv_scoped_btn2 inline-block ${className}`}>
      <style>{`
        .uiv_scoped_btn2 .love-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(244, 114, 182, 0.2), rgba(224, 86, 253, 0.25));
          border: 1px solid rgba(244, 114, 182, 0.4);
          border-radius: 9999px;
          color: #fce7f3;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(244, 114, 182, 0.2);
        }
        .uiv_scoped_btn2 .love-btn:hover {
          background: linear-gradient(135deg, rgba(244, 114, 182, 0.4), rgba(224, 86, 253, 0.45));
          border-color: rgba(244, 114, 182, 0.8);
          box-shadow: 0 0 35px rgba(244, 114, 182, 0.4);
          transform: scale(1.04);
          color: #ffffff;
        }
      `}</style>
      <button className="love-btn" onClick={onClick} type="button">
        <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
        <span>{label}</span>
      </button>
    </div>
  );
}
