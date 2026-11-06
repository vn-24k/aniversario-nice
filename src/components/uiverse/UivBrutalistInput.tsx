import React from 'react';

interface UivBrutalistInputProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivBrutalistInput({ className = '', onClick, ...props }: UivBrutalistInputProps) {
  return (
    <div className={`uiv_scoped_inp1 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_inp1 .brutalist-container {
  position: relative;
  width: 250px;
  font-family: monospace;
}
.uiv_scoped_inp1 .brutalist-input {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  outline: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;
}
.uiv_scoped_inp1 60% {
  transform: translate(2px, 2px);
}
.uiv_scoped_inp1 80% {
  transform: translate(2px, -2px);
}
.uiv_scoped_inp1 100% {
  transform: translate(0);
}
.uiv_scoped_inp1 }

.brutalist-input:focus {
  animation: focus-pulse 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite,
    glitch 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
}
.uiv_scoped_inp1 .brutalist-input:focus::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: white;
  z-index: -1;
}
.uiv_scoped_inp1 .brutalist-input:focus::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: -2;
  clip-path: inset(0 100% 0 0);
  animation: glitch-slice 4s steps(2, end) infinite;
}
.uiv_scoped_inp1 30% {
  clip-path: inset(0 10% 0 0);
}
.uiv_scoped_inp1 40% {
  clip-path: inset(0 50% 0 0);
}
.uiv_scoped_inp1 50% {
  clip-path: inset(0 30% 0 0);
}
.uiv_scoped_inp1 60% {
  clip-path: inset(0 70% 0 0);
}
.uiv_scoped_inp1 70% {
  clip-path: inset(0 15% 0 0);
}
.uiv_scoped_inp1 80% {
  clip-path: inset(0 90% 0 0);
}
.uiv_scoped_inp1 90% {
  clip-path: inset(0 5% 0 0);
}
.uiv_scoped_inp1 100% {
  clip-path: inset(0 100% 0 0);
}
.uiv_scoped_inp1 }

.brutalist-label {
  position: absolute;
  left: -3px;
  top: -35px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  padding: 5px 10px;
  transform: rotate(-1deg);
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.uiv_scoped_inp1 .brutalist-input:focus + .brutalist-label {
  transform: rotate(0deg) scale(1.05);
  background-color: #4a90e2;
}
.uiv_scoped_inp1 .smooth-type {
  position: relative;
  overflow: hidden;
}
.uiv_scoped_inp1 .smooth-type::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.uiv_scoped_inp1 .smooth-type:focus::before {
  opacity: 1;
  animation: type-gradient 2s linear infinite;
}
.uiv_scoped_inp1 .brutalist-input:focus::placeholder {
  color: transparent;
}
.uiv_scoped_inp1 .brutalist-input:focus {
  animation: focus-pulse 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
}
      `}</style>
      <div className="brutalist-container">
  <input
    placeholder="TYPE HERE"
    className="brutalist-input smooth-type"
    type="text"
  />
  <label className="brutalist-label">SMOOTH BRUTALIST</label>
</div>
    </div>
  );
}
