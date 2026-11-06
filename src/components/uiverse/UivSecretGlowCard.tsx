import React from 'react';

interface UivSecretGlowCardProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivSecretGlowCard({ className = '', onClick, ...props }: UivSecretGlowCardProps) {
  return (
    <div className={`uiv_scoped_card4 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_card4 .card {
  background-color: #222;
  border: 10px solid rgb(161, 156, 116);
  padding: 30px;
  width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 9px 11px 1px rgb(0, 0, 0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}
.uiv_scoped_card4 .card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px,
    transparent 2px
  );

  opacity: 0.3;
  pointer-events: none;
  z-index: 2;
  animation: tv-static 0.2s infinite linear alternate;
}
.uiv_scoped_card4 .card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  background-size: 100% 2px, 3px 100%;
  animation: tv-flicker 0.15s infinite;
  z-index: 35;
  pointer-events: none;
  opacity: 0.5;
}
.uiv_scoped_card4 .triangle {
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-bottom: 190px solid rgb(198, 181, 113);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.3s ease;
}
.uiv_scoped_card4 .card:hover .triangle {
  transform: scale(1.05);
}
.uiv_scoped_card4 .eye {
  width: 90px;
  height: 50px;
  background: radial-gradient(circle at 30% 30%, #fff, #e6e6e6);
  border-radius: 50%;
  position: absolute;
  top: 90px;
  left: 65px;
  overflow: hidden;
  box-shadow: 0 0 0 10px rgb(115, 112, 92), 15px 15px 0 #000,
    inset -5px -5px 10px rgba(0, 0, 0, 0.2),
    inset 5px 5px 10px rgba(255, 255, 255, 0.3);
  z-index: 2;
  animation: blink 6s infinite cubic-bezier(0.76, 0, 0.24, 1);
}
.uiv_scoped_card4 .pupil {
  width: 16px;
  height: 16px;
  background: rgb(207, 19, 19);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, #000, #444);
  border: 2px solid #fff;
  position: absolute;
  top: 14px;
  left: 14px;
  box-shadow: inset 0 0 10px rgba(203, 4, 4, 0.2), 0 0 10px rgba(0, 0, 0, 0.5);
}
.uiv_scoped_card4 75% {
  transform: translate(20px, 10px) scale(1.1);
}
.uiv_scoped_card4 }

.triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}
.uiv_scoped_card4 .title::before, .uiv_scoped_card4 .title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.uiv_scoped_card4 .title::before {
  left: 2px;
  text-shadow: -1px 0 red;
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}
.uiv_scoped_card4 .title::after {
  left: -2px;
  text-shadow: -1px 0 blue;
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}
.uiv_scoped_card4 .glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.uiv_scoped_card4 .glitch-text::before, .uiv_scoped_card4 .glitch-text::after {
  content: "The Eye of Providence";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.uiv_scoped_card4 .glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.uiv_scoped_card4 .glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.uiv_scoped_card4 15% {
  clip: rect(75px, 9999px, 4px, 0);
}
.uiv_scoped_card4 20% {
  clip: rect(6px, 9999px, 87px, 0);
}
.uiv_scoped_card4 25% {
  clip: rect(45px, 9999px, 98px, 0);
}
.uiv_scoped_card4 30% {
  clip: rect(39px, 9999px, 57px, 0);
}
.uiv_scoped_card4 35% {
  clip: rect(90px, 9999px, 65px, 0);
}
.uiv_scoped_card4 40% {
  clip: rect(7px, 9999px, 90px, 0);
}
.uiv_scoped_card4 45% {
  clip: rect(30px, 9999px, 88px, 0);
}
.uiv_scoped_card4 50% {
  clip: rect(76px, 9999px, 23px, 0);
}
.uiv_scoped_card4 55% {
  clip: rect(57px, 9999px, 35px, 0);
}
.uiv_scoped_card4 60% {
  clip: rect(85px, 9999px, 87px, 0);
}
.uiv_scoped_card4 65% {
  clip: rect(54px, 9999px, 12px, 0);
}
.uiv_scoped_card4 70% {
  clip: rect(32px, 9999px, 56px, 0);
}
.uiv_scoped_card4 75% {
  clip: rect(36px, 9999px, 98px, 0);
}
.uiv_scoped_card4 80% {
  clip: rect(12px, 9999px, 43px, 0);
}
.uiv_scoped_card4 85% {
  clip: rect(54px, 9999px, 76px, 0);
}
.uiv_scoped_card4 90% {
  clip: rect(43px, 9999px, 23px, 0);
}
.uiv_scoped_card4 95% {
  clip: rect(76px, 9999px, 87px, 0);
}
.uiv_scoped_card4 }

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(75, 68, 68, 0.5);
  animation: scan 2.5s linear infinite;
  z-index: 4;
}
.uiv_scoped_card4 .glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.uiv_scoped_card4 .glitch-text::before, .uiv_scoped_card4 .glitch-text::after {
  content: "The Eye of Providence";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.uiv_scoped_card4 .glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.uiv_scoped_card4 .glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.uiv_scoped_card4 15% {
  clip: rect(75px, 9999px, 4px, 0);
}
.uiv_scoped_card4 20% {
  clip: rect(6px, 9999px, 87px, 0);
}
.uiv_scoped_card4 25% {
  clip: rect(45px, 9999px, 98px, 0);
}
.uiv_scoped_card4 30% {
  clip: rect(39px, 9999px, 57px, 0);
}
.uiv_scoped_card4 35% {
  clip: rect(90px, 9999px, 65px, 0);
}
.uiv_scoped_card4 40% {
  clip: rect(7px, 9999px, 90px, 0);
}
.uiv_scoped_card4 45% {
  clip: rect(30px, 9999px, 88px, 0);
}
.uiv_scoped_card4 50% {
  clip: rect(76px, 9999px, 23px, 0);
}
.uiv_scoped_card4 55% {
  clip: rect(57px, 9999px, 35px, 0);
}
.uiv_scoped_card4 60% {
  clip: rect(85px, 9999px, 87px, 0);
}
.uiv_scoped_card4 65% {
  clip: rect(54px, 9999px, 12px, 0);
}
.uiv_scoped_card4 70% {
  clip: rect(32px, 9999px, 56px, 0);
}
.uiv_scoped_card4 75% {
  clip: rect(36px, 9999px, 98px, 0);
}
.uiv_scoped_card4 80% {
  clip: rect(12px, 9999px, 43px, 0);
}
.uiv_scoped_card4 85% {
  clip: rect(54px, 9999px, 76px, 0);
}
.uiv_scoped_card4 90% {
  clip: rect(43px, 9999px, 23px, 0);
}
.uiv_scoped_card4 95% {
  clip: rect(76px, 9999px, 87px, 0);
}
.uiv_scoped_card4 }

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(75, 68, 68, 0.5);
  animation: scan 2.5s linear infinite;
  z-index: 4;
}
.uiv_scoped_card4 .glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.uiv_scoped_card4 .glitch-text::before, .uiv_scoped_card4 .glitch-text::after {
  content: "Always Watching";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.uiv_scoped_card4 .glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.uiv_scoped_card4 .glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.uiv_scoped_card4 .footer-text {
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  position: relative;
  z-index: 3;
}
.uiv_scoped_card4 .footer-text::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  width: 50px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateX(-50%);
}
      `}</style>
      <div className="card">
  <div data-text="The Eye of Providence" className="title">
    The Eye of Providence
  </div>
  <div className="eye-of-providence">
    <div className="triangle"></div>
    <div className="eye">
      <div className="eyelid"></div>
      <div className="iris">
        <div className="pupil"></div>
      </div>
    </div>
  </div>
  <div className="spotlight"></div>
  <div className="scan-line"></div>
  <div className="glitch-text">Always Watching</div>
  <div className="footer-text">Obey. Trust. Consume</div>
</div>
    </div>
  );
}
