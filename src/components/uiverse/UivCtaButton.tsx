import React from 'react';

interface UivCtaButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function UivCtaButton({ label = "Deixar Mensagem de Amor", onClick, className = '' }: UivCtaButtonProps) {
  return (
    <div className={`uiv_scoped_btn1 inline-block ${className}`}>
      <style>{`
        .uiv_scoped_btn1 .uiv-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          background: linear-gradient(135deg, rgba(224, 86, 253, 0.15) 0%, rgba(147, 51, 234, 0.25) 100%);
          border: 1px solid rgba(224, 86, 253, 0.4);
          border-radius: 9999px;
          color: #f3e8ff;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          backdrop-filter: blur(16px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 25px rgba(224, 86, 253, 0.2);
        }
        .uiv_scoped_btn1 .uiv-cta:hover {
          background: linear-gradient(135deg, rgba(224, 86, 253, 0.35) 0%, rgba(147, 51, 234, 0.5) 100%);
          border-color: rgba(245, 208, 97, 0.8);
          box-shadow: 0 0 40px rgba(224, 86, 253, 0.45);
          transform: translateY(-2px) scale(1.02);
          color: #ffffff;
        }
        .uiv_scoped_btn1 .uiv-cta-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          transition: transform 0.3s ease;
        }
        .uiv_scoped_btn1 .uiv-cta:hover .uiv-cta-arrow {
          transform: translateX(4px);
          background: rgba(245, 208, 97, 0.3);
        }
      `}</style>
      <button className="uiv-cta" onClick={onClick} type="button">
        <span>{label}</span>
        <span className="uiv-cta-arrow">→</span>
      </button>
    </div>
  );
}
