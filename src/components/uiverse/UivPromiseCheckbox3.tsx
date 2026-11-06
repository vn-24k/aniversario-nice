import React from 'react';

interface UivPromiseCheckbox3Props {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivPromiseCheckbox3({ className = '', onClick, ...props }: UivPromiseCheckbox3Props) {
  return (
    <div className={`uiv_scoped_chk3 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_chk3 .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.uiv_scoped_chk3 .container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 25px;
  user-select: none;
}
.uiv_scoped_chk3 .checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background: black;
  border-radius: 50px;
  transition: all 0.7s;
  --spread: 20px;
}
.uiv_scoped_chk3 .container input:checked ~ .checkmark {
  background: black;
  box-shadow: -10px -10px var(--spread) 0px #FFD700, 0 -10px var(--spread) 0px #FFD700, 10px -10px var(--spread) 0px #FFD700, 10px 0 var(--spread) 0px #FFD700, 10px 10px var(--spread) 0px #FFD700, 0 10px var(--spread) 0px #FFD700, -10px 10px var(--spread) 0px #FFD700;
}
.uiv_scoped_chk3 .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.uiv_scoped_chk3 .container input:checked ~ .checkmark:after {
  display: block;
  animation: checkmark 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}
.uiv_scoped_chk3 .container .checkmark:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border: solid #FFD700;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}
      `}</style>
      <label className="container">
		<input type="checkbox" checked="checked" />
		<div className="checkmark"></div>
	</label>
    </div>
  );
}
