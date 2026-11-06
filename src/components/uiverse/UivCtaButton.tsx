import React from 'react';

interface UivCtaButtonProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivCtaButton({ className = '', onClick, ...props }: UivCtaButtonProps) {
  return (
    <div className={`uiv_scoped_btn1 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_btn1 .cta {
  position: relative;
  margin: auto;
  padding: 11.5px 18px;
  transition: all 0.2s ease;
  border: 3px solid #552da8;
  border-radius: 50px;
  background: #552da8;
  cursor: pointer;
}
.uiv_scoped_btn1 .cta:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  border-radius: 50px;
  background: white;
  width: 45px;
  height: 45px;
  transition: all 0.8s ease;
}
.uiv_scoped_btn1 .cta span {
  position: relative;
  font-family: Montserrat;
  font-size: 18px;
  color: white;
  font-weight: 400;
  letter-spacing: 0.05em;
}
.uiv_scoped_btn1 .cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: white;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.5s ease;
}
.uiv_scoped_btn1 .cta:hover:before {
  width: 100%;
  background: #1c1c1c;
}
.uiv_scoped_btn1 .cta:hover svg {
  transform: translateX(0);
  transition: all 2s ease;
}
.uiv_scoped_btn1 .cta:active {
  transform: scale(0.95);
  transition: all 2s ease;
}
      `}</style>
      <button className="cta">
  <span>Contact Us &nbsp;</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
    </div>
  );
}
