import React from 'react';

interface UivBrutalistInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export function UivBrutalistInput({ value, onChange, placeholder = "Seu Nome", className = '' }: UivBrutalistInputProps) {
  return (
    <div className={`uiv_scoped_inp1 w-full ${className}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-white/15 text-white placeholder-purple-300/30 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition-all font-light"
      />
    </div>
  );
}
