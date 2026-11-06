import React from 'react';

interface UivAffectionTooltipProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

export function UivAffectionTooltip({ text = "Amor de Mãe", children, className = '' }: UivAffectionTooltipProps) {
  return (
    <div className={`uiv_scoped_tip1 relative inline-block group ${className}`}>
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-[#1e0e3d] border border-fuchsia-400/40 text-[11px] text-purple-100 font-mono-code whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg z-50">
        {text}
      </div>
    </div>
  );
}
