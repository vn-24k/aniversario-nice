import React from 'react';

interface UivMessageInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
}

export function UivMessageInput({ value, onChange, placeholder = "Sua mensagem para Nice...", className = '' }: UivMessageInputProps) {
  return (
    <div className={`uiv_scoped_inp2 w-full ${className}`}>
      <textarea
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={placeholder}
        className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-white/15 text-white placeholder-purple-300/30 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition-all font-light resize-none"
      />
    </div>
  );
}
