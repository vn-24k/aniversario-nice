import React from 'react';

interface UivPromiseCheckbox2Props {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivPromiseCheckbox2({ className = '', onClick, ...props }: UivPromiseCheckbox2Props) {
  return (
    <div className={`uiv_scoped_chk2 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_chk2 .burger {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  transition: 300ms;
  border-radius: 10px;
}
.uiv_scoped_chk2 .burger input[type="checkbox"] {
  appearance: none;
  transition: 300ms;
}
.uiv_scoped_chk2 .burger::before, .uiv_scoped_chk2 .burger::after {
  content: "";
  transition: 300ms;
  transform-origin: center center;
}
.uiv_scoped_chk2 .burger::before {
  transform: translateY(8px);
}
.uiv_scoped_chk2 .burger::after {
  transform: translateY(-8px);
}
.uiv_scoped_chk2 .burger .line, .uiv_scoped_chk2 .burger::before, .uiv_scoped_chk2 .burger::after {
  width: 25px;
  height: 2.1px;
  display: block;
  background-color: black;
  border-radius: 5px;
  position: absolute;
}
.uiv_scoped_chk2 .burger .line:checked {
  width: 0;
  transition-delay: 100ms;
}
.uiv_scoped_chk2 .burger:has(.line:checked)::before {
  animation: animation1 400ms ease-out 0s 1 both;
}
.uiv_scoped_chk2 .burger:has(.line:checked)::after {
  animation: animation2 400ms ease-out 0s 1 both;
}
.uiv_scoped_chk2 .burger:hover {
  background: #aeaeae;
  border-radius: 50%;
}
.uiv_scoped_chk2 .burger:hover .line, .uiv_scoped_chk2 .burger:hover::before, .uiv_scoped_chk2 .burger:hover::after {
  background: #e8e8e8;
}
.uiv_scoped_chk2 .burger:active {
  scale: 0.95;
}
.uiv_scoped_chk2 }
@keyframes animation2 {
  0% {
    transform: translateY(-8px) rotate(0deg);
  }
  50% {
    transform: translateY(0px) rotate(0deg);
  }
  100% {
  transform: translateY(0px) rotate(-45deg);
}
      `}</style>
      <div className="burger-icon">
  <label className="burger" htmlFor="burger">
    <input className="line" type="checkbox" id="burger" />
  </label>
</div>
    </div>
  );
}
