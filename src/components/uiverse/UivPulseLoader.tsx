import React from 'react';

interface UivPulseLoaderProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivPulseLoader({ className = '', onClick, ...props }: UivPulseLoaderProps) {
  return (
    <div className={`uiv_scoped_load1 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_load1 .orwellian-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-family: "Arial Black", "Helvetica Neue", Arial, sans-serif;
  font-weight: 900;
}
.uiv_scoped_load1 .orwellian-container .orwellian-loader {
  width: 280px;
  height: 280px;
  background-color: #000;
  border: 10px solid #333;
  position: relative;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
}
.uiv_scoped_load1 .orwellian-container .eye {
  width: 160px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -60%);
  animation: pulse 2s infinite;
  overflow: hidden;
  z-index: 10;
}
.uiv_scoped_load1 .orwellian-container .pupil {
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: look-diagonal 4s infinite ease-in-out;
}
.uiv_scoped_load1 .orwellian-container .pupil::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, rgb(255, 0, 0) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
}
.uiv_scoped_load1 .orwellian-container .eyelid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  animation: blink 4s infinite;
}
.uiv_scoped_load1 .orwellian-container .spotlight {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 47px;
  height: 200px;
  background: linear-gradient(to bottom, rgba(255, 0, 0, 0.8), transparent);
  filter: blur(8px);
  transform-origin: top;
  animation: spotlight-sweep-diagonal 4s infinite ease-in-out;
}
.uiv_scoped_load1 .orwellian-container .text {
  position: absolute;
  bottom: 20px;
  left: 10px;
  right: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #f8d17c;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: glitch 1s infinite;
  z-index: 20;
}
.uiv_scoped_load1 .orwellian-container .scan-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.3) 50%
  );
  background-size: 100% 4px;
  animation: scan 10s linear infinite;
  z-index: 30;
  opacity: 0.3;
  pointer-events: none;
}
.uiv_scoped_load1 .orwellian-container .tv-effect {
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
.uiv_scoped_load1 .orwellian-container .orwellian-loader::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 40;
}
.uiv_scoped_load1 .orwellian-container .orwellian-loader::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    transparent 30%,
    rgba(0, 0, 0, 0.5) 90%
  );
  z-index: 35;
  pointer-events: none;
}
.uiv_scoped_load1 }

@keyframes spotlight-sweep-diagonal {
  0%,
  100% {
    transform: translateX(-50%) rotate(0deg);
  }
  25% {
    transform: translateX(-40%) rotate(-15deg);
  }
  75% {
  transform: translateX(-60%) rotate(15deg);
}
.uiv_scoped_load1 }

@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -60%) scale(1);
  }
  50% {
    transform: translate(-50%, -60%) scale(1.05);
  }
}

@keyframes glitch {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
  25% {
    transform: translate(-2px, 2px);
    opacity: 0.75;
  }
  50% {
  transform: translate(2px, -2px);
    opacity: 0.5;
}
.uiv_scoped_load1 75% {
  transform: translate(-2px, -2px);
    opacity: 0.75;
}
.uiv_scoped_load1 }

@keyframes blink {
  0%,
  90%,
  100% {
    height: 0;
  }
  95% {
    height: 100%;
  }
}

@keyframes scan {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}

@keyframes tv-flicker {
  0% {
    opacity: 0.27049;
  }
  5% {
    opacity: 0.34801;
  }
  10% {
  opacity: 0.23175;
}
.uiv_scoped_load1 15% {
  opacity: 0.40923;
}
.uiv_scoped_load1 20% {
  opacity: 0.29481;
}
.uiv_scoped_load1 25% {
  opacity: 0.38584;
}
.uiv_scoped_load1 30% {
  opacity: 0.24928;
}
.uiv_scoped_load1 35% {
  opacity: 0.32451;
}
.uiv_scoped_load1 40% {
  opacity: 0.37031;
}
.uiv_scoped_load1 45% {
  opacity: 0.26941;
}
.uiv_scoped_load1 50% {
  opacity: 0.35755;
}
.uiv_scoped_load1 55% {
  opacity: 0.29288;
}
.uiv_scoped_load1 60% {
  opacity: 0.31821;
}
.uiv_scoped_load1 65% {
  opacity: 0.39726;
}
.uiv_scoped_load1 70% {
  opacity: 0.25294;
}
.uiv_scoped_load1 75% {
  opacity: 0.36898;
}
.uiv_scoped_load1 80% {
  opacity: 0.28995;
}
.uiv_scoped_load1 85% {
  opacity: 0.3398;
}
.uiv_scoped_load1 90% {
  opacity: 0.38703;
}
.uiv_scoped_load1 95% {
  opacity: 0.24619;
}
.uiv_scoped_load1 100% {
  opacity: 0.35762;
}
.uiv_scoped_load1 }


.orwellian-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
}
@media (max-width: 480px) {
  .orwellian-container .orwellian-loader {
    width: 240px;
    height: 240px;
}
.uiv_scoped_load1 .orwellian-container .eye {
  width: 140px;
    height: 50px;
}
.uiv_scoped_load1 .orwellian-container .pupil {
  width: 40px;
    height: 40px;
}
.uiv_scoped_load1 .orwellian-container .spotlight {
  width: 40px;
    height: 160px;
}
.uiv_scoped_load1 .orwellian-container .text {
  font-size: 16px;
}
.uiv_scoped_load1 }


.orwellian-container .text {
  user-select: none;
}
.uiv_scoped_load1 .orwellian-container .orwellian-loader:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
.uiv_scoped_load1 .orwellian-container .orwellian-loader {
  animation: subtle-rotate 6s infinite ease-in-out;
}
.uiv_scoped_load1 .orwellian-container .tv-effect::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 80%
    ),
    repeating-radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px,
      transparent 4px
    );
  background-size: 100% 100%, 3px 3px;
  pointer-events: none;
}
.uiv_scoped_load1 .orwellian-container .text {
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.2);
}
.uiv_scoped_load1 .orwellian-container .spotlight::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at top,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 70%
  );
  filter: blur(5px);
}
      `}</style>
      <div className="orwellian-container">
  <div className="orwellian-loader">
    <div className="eye">
      <div className="pupil"></div>
      <div className="eyelid"></div>
    </div>
    <div className="spotlight"></div>
    <div className="text">BIG BROTHER IS LOADING</div>
    <div className="scan-lines"></div>
    <div className="tv-effect"></div>
  </div>
</div>
    </div>
  );
}
