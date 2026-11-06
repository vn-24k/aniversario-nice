import React from 'react';

interface UivStarlightSwitchProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivStarlightSwitch({ className = '', onClick, ...props }: UivStarlightSwitchProps) {
  return (
    <div className={`uiv_scoped_sw3 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_sw3 .switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}
.uiv_scoped_sw3 .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.uiv_scoped_sw3 .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 30px;
}
.uiv_scoped_sw3 .slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  transition: .3s cubic-bezier(0,2.18,.64,.69);
}
.uiv_scoped_sw3 input:checked + .slider {
  background-color: #3bd826;
}
.uiv_scoped_sw3 input:focus + .slider {
  box-shadow: 0 0 1px #3bd826;
}
.uiv_scoped_sw3 input:checked + .slider:before {
  transform: translateX(1.5em);
}
      `}</style>
      <label className="switch">
  <input type="checkbox" />
  <span className="slider"></span>
</label>
    </div>
  );
}
