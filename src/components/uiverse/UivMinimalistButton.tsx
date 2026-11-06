import React from 'react';

interface UivMinimalistButtonProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivMinimalistButton({ className = '', onClick, ...props }: UivMinimalistButtonProps) {
  return (
    <div className={`uiv_scoped_btn4 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_btn4 .brutalist-button {
  display: flex;
  align-items: center;
  width: 169px;
  height: 60px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-weight: bold;
  border: 3px solid #fff;
  outline: 3px solid #000;
  box-shadow: 6px 6px 0 #00a4ef;
  transition: all 0.1s ease-out;
  padding: 0 15px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.uiv_scoped_btn4 .brutalist-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  z-index: 1;
  transition: none;
  
  opacity: 0;
}
.uiv_scoped_btn4 .brutalist-button:hover {
  transform: translate(-4px, -4px);
  box-shadow: 10px 10px 0 #000;
  background-color: #000;
  color: #fff;
}
.uiv_scoped_btn4 .ms-logo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  width: 26px;
  height: 26px;
  margin-right: 8px;
  flex-shrink: 0;
  transition: transform 0.2s ease-out;
  position: relative;
  z-index: 1;
}
.uiv_scoped_btn4 .brutalist-button:hover .ms-logo {
  transform: rotate(-10deg) scale(1.1);
}
.uiv_scoped_btn4 .brutalist-button:active .ms-logo {
  transform: rotate(10deg) scale(0.9);
}
.uiv_scoped_btn4 .ms-logo-square {
  width: 100%;
  height: 100%;
}
.uiv_scoped_btn4 .ms-logo-square:nth-child(1) {
  background-color: #f25022;
}
.uiv_scoped_btn4 .ms-logo-square:nth-child(2) {
  background-color: #7fba00;
}
.uiv_scoped_btn4 .ms-logo-square:nth-child(3) {
  background-color: #00a4ef;
}
.uiv_scoped_btn4 .ms-logo-square:nth-child(4) {
  background-color: #ffb900;
}
.uiv_scoped_btn4 .button-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  transition: transform 0.2s ease-out;
  position: relative;
  z-index: 1;
}
.uiv_scoped_btn4 .brutalist-button:hover .button-text {
  transform: skew(-5deg);
}
.uiv_scoped_btn4 .brutalist-button:active .button-text {
  transform: skew(5deg);
}
.uiv_scoped_btn4 .button-text span:first-child {
  font-size: 11px;
  text-transform: uppercase;
}
.uiv_scoped_btn4 .button-text span:last-child {
  font-size: 16px;
  text-transform: uppercase;
}
      `}</style>
      <a className="brutalist-button" href="/">
  <div className="ms-logo">
    <div className="ms-logo-square"></div>
    <div className="ms-logo-square"></div>
    <div className="ms-logo-square"></div>
    <div className="ms-logo-square"></div>
  </div>
  <div className="button-text">
    <span>Get it from</span>
    <span>Microsoft</span>
  </div>
</a>
    </div>
  );
}
