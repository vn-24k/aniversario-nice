import React from 'react';
import { Share2 } from 'lucide-react';

interface UivSocialShareButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function UivSocialShareButton({ label = "Enviar no WhatsApp de Nice", onClick, className = '' }: UivSocialShareButtonProps) {
  return (
    <div className={`uiv_scoped_btn5 inline-block ${className}`}>
      <style>{`
        .uiv_scoped_btn5 .wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 24px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.25));
          border: 1px solid rgba(34, 197, 94, 0.4);
          border-radius: 9999px;
          color: #bbf7d0;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
          box-shadow: 0 0 25px rgba(34, 197, 94, 0.2);
        }
        .uiv_scoped_btn5 .wa-btn:hover {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.35), rgba(16, 185, 129, 0.45));
          border-color: rgba(34, 197, 94, 0.8);
          box-shadow: 0 0 35px rgba(34, 197, 94, 0.4);
          transform: translateY(-1px);
          color: #ffffff;
        }
      `}</style>
      <button className="wa-btn" onClick={onClick} type="button">
        <Share2 className="w-4 h-4 text-emerald-400" />
        <span>{label}</span>
      </button>
    </div>
  );
}
