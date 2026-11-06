import React, { useState } from 'react';

export function UivVirtueRadio({ className = '' }: { className?: string }) {
  const [selected, setSelected] = useState('generosidade');
  const options = [
    { id: 'generosidade', label: '🌸 Generosidade Infinita' },
    { id: 'sabedoria', label: '✨ Sabedoria de Ouro' },
    { id: 'coragem', label: '🛡️ Coragem Serena' }
  ];

  return (
    <div className={`uiv_scoped_rad1 flex flex-wrap gap-2 ${className}`}>
      <style>{`
        .uiv_scoped_rad1 .radio-pill {
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.7);
        }
        .uiv_scoped_rad1 .radio-pill.active {
          background: rgba(224, 86, 253, 0.2);
          border-color: rgba(224, 86, 253, 0.6);
          color: #f3e8ff;
          box-shadow: 0 0 15px rgba(224, 86, 253, 0.3);
        }
      `}</style>
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => setSelected(opt.id)}
          className={`radio-pill ${selected === opt.id ? 'active' : ''}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
