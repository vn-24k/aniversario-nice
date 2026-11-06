import React from 'react';

interface UivGoldenFormProps {
  onSubmit?: (e: React.FormEvent) => void;
  children?: React.ReactNode;
  className?: string;
}

export function UivGoldenForm({ onSubmit, children, className = '' }: UivGoldenFormProps) {
  return (
    <form onSubmit={onSubmit} className={`uiv_scoped_form1 space-y-6 ${className}`}>
      {children}
    </form>
  );
}
