import React from 'react';

interface UivMinimalistButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function UivMinimalistButton({ label = "Ver Memórias", onClick, className = '' }: UivMinimalistButtonProps) {
  return (
    <div className={`uiv_scoped_btn4 inline-block ${className}`}>
      <style>{`
        .uiv_scoped_btn4 .min-btn {
          padding: 8px 18px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .uiv_scoped_btn4 .min-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          border-color: rgba(224, 86, 253, 0.5);
        }
      `}</style>
      <button className="min-btn" onClick={onClick} type="button">
        {label}
      </button>
    </div>
  );
}
