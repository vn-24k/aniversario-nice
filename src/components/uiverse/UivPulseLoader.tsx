import React from 'react';

export function UivPulseLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`uiv_scoped_load1 inline-flex items-center gap-2 ${className}`}>
      <style>{`
        .uiv_scoped_load1 .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e056fd;
          box-shadow: 0 0 10px #e056fd;
          animation: uivPulse 1.4s infinite ease-in-out;
        }
        @keyframes uivPulse {
          0%, 100% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
      <div className="pulse-dot" />
    </div>
  );
}
