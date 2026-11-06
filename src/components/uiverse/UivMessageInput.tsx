import React from 'react';

interface UivMessageInputProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivMessageInput({ className = '', onClick, ...props }: UivMessageInputProps) {
  return (
    <div className={`uiv_scoped_inp2 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_inp2 .input {
  width: 100%;
  max-width: 270px;
  height: 60px;
  padding: 12px;
  font-size: 18px;
  font-family: "Courier New", monospace;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  border-radius: 0;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 8px 8px 0 #000;
}
.uiv_scoped_inp2 .input::placeholder {
  color: #888;
}
.uiv_scoped_inp2 .input:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 #000;
}
.uiv_scoped_inp2 .input:focus {
  background-color: #000;
  color: #fff;
  border-color: #ffffff;
}
.uiv_scoped_inp2 .input:focus::placeholder {
  color: #fff;
}
.uiv_scoped_inp2 .input:valid {
  animation: typing 2s steps(30, end);
}
.uiv_scoped_inp2 .input-container {
  position: relative;
  width: 100%;
  max-width: 270px;
}
.uiv_scoped_inp2 .input {
  width: 100%;
  height: 60px;
  padding: 12px;
  font-size: 18px;
  font-family: "Courier New", monospace;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  border-radius: 0;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 8px 8px 0 #000;
}
.uiv_scoped_inp2 .input::placeholder {
  color: #888;
}
.uiv_scoped_inp2 .input:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 #000;
}
.uiv_scoped_inp2 .input:focus {
  background-color: #010101;
  color: #fff;
  border-color: #d6d9dd;
}
.uiv_scoped_inp2 .input:focus::placeholder {
  color: #fff;
}
.uiv_scoped_inp2 75% {
  transform: translateX(-5px) rotate(-5deg);
}
.uiv_scoped_inp2 100% {
  transform: translateX(0);
}
.uiv_scoped_inp2 }

.input:focus {
  animation: shake 0.5s ease-in-out;
}
.uiv_scoped_inp2 27% {
  transform: none;
    opacity: 1;
}
.uiv_scoped_inp2 30% {
  transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
}
.uiv_scoped_inp2 35% {
  transform: none;
    opacity: 1;
}
.uiv_scoped_inp2 52% {
  transform: none;
    opacity: 1;
}
.uiv_scoped_inp2 55% {
  transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
}
.uiv_scoped_inp2 50% {
  transform: none;
    opacity: 1;
}
.uiv_scoped_inp2 72% {
  transform: none;
    opacity: 1;
}
.uiv_scoped_inp2 75% {
  transform: skew(0.4deg, 1deg);
    opacity: 0.75;
}
.uiv_scoped_inp2 80% {
  transform: none;
    opacity: 1;
}
.uiv_scoped_inp2 100% {
  transform: none;
    opacity: 1;
}
.uiv_scoped_inp2 }

.input:not(:placeholder-shown) {
  animation: glitch 1s linear infinite;
}
.uiv_scoped_inp2 .input-container::after {
  content: "|";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
  animation: blink 0.7s step-end infinite;
}
.uiv_scoped_inp2 .input:not(:placeholder-shown) {
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0px 0px 0 #000;
}
      `}</style>
      <div className="input-container">
  <input
    className="input"
    name="text"
    type="text"
    placeholder="Search the internet..."
  />
</div>
    </div>
  );
}
