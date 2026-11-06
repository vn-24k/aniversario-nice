import React from 'react';

interface UivNebulaSwitchProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivNebulaSwitch({ className = '', onClick, ...props }: UivNebulaSwitchProps) {
  return (
    <div className={`uiv_scoped_sw2 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_sw2 .toggle-switch {
  position: relative;
  width: 90px;
  height: 34px;
  margin: 20px;
}
.uiv_scoped_sw2 .toggle-switch input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}
.uiv_scoped_sw2 .toggle-switch-label {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  border-radius: 34px;
  cursor: pointer;
  transition: all 0.4s ease;
}
.uiv_scoped_sw2 .toggle-switch-label:before, .uiv_scoped_sw2 .toggle-switch-label:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
.uiv_scoped_sw2 .toggle-switch-label:before {
  left: 10px;
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
}
.uiv_scoped_sw2 .toggle-switch-label:after {
  left: 0;
  width: 46px;
  height: 34px;
  background-color: #fff;
  border-radius: 34px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
}
.uiv_scoped_sw2 .toggle-switch-checkbox:checked + .toggle-switch-label:before {
  transform: translateX(46px);
}
.uiv_scoped_sw2 .toggle-switch-checkbox:checked + .toggle-switch-label {
  background-color: #000000;
}
.uiv_scoped_sw2 .toggle-switch-checkbox:checked + .toggle-switch-label:after {
  transform: scale(0);
}
.uiv_scoped_sw2 .toggle-switch-text {
  position: absolute;
  top: 5px;
  left: 110px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 2px rgba(253, 251, 251, 0.2);
  transition: all 0.4s ease;
}
.uiv_scoped_sw2 .toggle-switch-checkbox:checked + .toggle-switch-label + .toggle-switch-text {
  color: rgb(255, 255, 255);
}
      `}</style>
      <div className="toggle-switch">
  <input id="toggle-switch" className="toggle-switch-checkbox" type="checkbox" />
  <label htmlFor="toggle-switch" className="toggle-switch-label">
    <span className="toggle-switch-inner"></span>
    <span className="toggle-switch-switch"></span>
  </label>
  <span className="toggle-switch-text"></span>
</div>
    </div>
  );
}
