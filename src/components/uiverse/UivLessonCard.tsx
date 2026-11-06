import React from 'react';

interface UivLessonCardProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivLessonCard({ className = '', onClick, ...props }: UivLessonCardProps) {
  return (
    <div className={`uiv_scoped_card3 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_card3 .card {
  width: 320px;
  padding: 30px;
  background: #fff;
  border: 8px solid #000;
  box-shadow: 15px 15px 0 #000;
  transform: rotate(-2deg);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.uiv_scoped_card3 .card:active {
  animation: shake 0.5s ease-in-out;
}
.uiv_scoped_card3 .card:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: 20px 20px 0 #000;
}
.uiv_scoped_card3 .banner {
  position: absolute;
  top: 3px;
  right: -95px;
  background: #000;
  color: #fff;
  padding: 15px;
  width: 350px;
  text-align: center;
  transform: rotate(45deg);
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  overflow: hidden;
  transition: background 0.5s ease;
}
.uiv_scoped_card3 .banner-text {
  display: inline-block;
  transition: opacity 0.5s ease, transform 0.5s ease;
  width: 100%;
  position: absolute;
  left: 13%;
  top: 50%;
  transform: translateY(-50%);
}
.uiv_scoped_card3 .banner:hover .banner-text:first-child {
  opacity: 0;
  transform: translateY(-100%);
}
.uiv_scoped_card3 .banner:hover .banner-text:last-child {
  opacity: 1;
  transform: translateY(-40%);
}
.uiv_scoped_card3 .banner-text:last-child {
  opacity: 0;
  transform: translateY(60%);
}
.uiv_scoped_card3 .banner:hover {
  background: red;
}
.uiv_scoped_card3 .card__title {
  font-size: 24px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
  border-bottom: 2px solid #000;
  width: 50%;
}
.uiv_scoped_card3 .card__subtitle {
  font-size: 16px;
  line-height: 1.4;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.uiv_scoped_card3 .card__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.uiv_scoped_card3 .card__form input {
  padding: 12px;
  border: 4px solid #000;
  font-size: 16px;
  font-family: "Proxima Nova", sans-serif;
  transition: all 0.3s ease;
  background-color: #fff;
}
.uiv_scoped_card3 .card__form input:focus {
  outline: none;
  transform: scale(1.05);
}
.uiv_scoped_card3 .sign-up {
  border: 4px solid #000;
  background: #000;
  color: #fff;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}
.uiv_scoped_card3 .sign-up:hover {
  background: #fff;
  color: #000;
  transform: translateY(-5px);
  box-shadow: 0 5px 0 #000;
}
.uiv_scoped_card3 .sign-up:active {
  animation: shake 0.5s ease-in-out;
  transform: translateY(0);
  box-shadow: none;
}
.uiv_scoped_card3 75% {
  transform: translateX(-5px);
}
.uiv_scoped_card3 100% {
  transform: translateX(0);
}
      `}</style>
      <div className="card">
  <div className="banner">
    <span className="banner-text">SUBSCRIBE</span>
    <span className="banner-text">JOIN US</span>
  </div>
  <span className="card__title">Nihilism</span>
  <p className="card__subtitle">Get fresh void to your inbox every week.</p>
  <form className="card__form">
    <input placeholder="Your Email" type="email" required="" />
    <button className="sign-up">Sign up</button>
  </form>
</div>
    </div>
  );
}
