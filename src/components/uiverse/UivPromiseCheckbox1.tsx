import React from 'react';

interface UivPromiseCheckbox1Props {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivPromiseCheckbox1({ className = '', onClick, ...props }: UivPromiseCheckbox1Props) {
  return (
    <div className={`uiv_scoped_chk1 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_chk1 .radio-input {
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
}
.uiv_scoped_chk1 .radio-input input[type="radio"] {
  display: none;
}
.uiv_scoped_chk1 .radio-input input[type="radio"] + label {
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 14px;
}
.uiv_scoped_chk1 .radio-input input[type="radio"] + label span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  line-height: 44px;
  transition: background-color 0.3s ease;
}
.uiv_scoped_chk1 .radio-input input[type="radio"] + label span svg {
  opacity: 0;
  transition: all 0.3s ease;
}
.uiv_scoped_chk1 .radio-input input[type="radio"]#color-1 + label span {
  background-color: #b0b0b0;
}
.uiv_scoped_chk1 .radio-input input[type="radio"]#color-2 + label span {
  background-color: #b0b0b0;
}
.uiv_scoped_chk1 .radio-input input[type="radio"]#color-3 + label span {
  background-color: #b0b0b0;
}
.uiv_scoped_chk1 .radio-input input[type="radio"]:checked + label span {
  background-color: #ff4500;
}
.uiv_scoped_chk1 .radio-input input[type="radio"]:checked + label span svg {
  opacity: 1;
}
.uiv_scoped_chk1 .radio-input input[type="radio"]#color-1:checked ~ label[for="color-2"] span, .uiv_scoped_chk1 .radio-input input[type="radio"]#color-1:checked ~ label[for="color-3"] span {
  background-color: #b0b0b0;
}
.uiv_scoped_chk1 .radio-input input[type="radio"]#color-2:checked ~ label[for="color-1"] span, .uiv_scoped_chk1 .radio-input input[type="radio"]#color-2:checked ~ label[for="color-3"] span {
  background-color: #b0b0b0;
}
.uiv_scoped_chk1 .radio-input input[type="radio"]#color-3:checked ~ label[for="color-1"] span, .uiv_scoped_chk1 .radio-input input[type="radio"]#color-3:checked ~ label[for="color-2"] span {
  background-color: #b0b0b0;
}
      `}</style>
      <div className="radio-input">
  <input defaultChecked={true} value="color-1" name="color" id="color-1" type="radio" />
  <label htmlFor="color-1">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g id="Interface / Check">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#ffffff"
              d="M6 12L10.2426 16.2426L18.727 7.75732"
              id="Vector"
            ></path>
          </g>
        </g>
      </svg>
    </span>
  </label>

  <input value="color-2" name="color" id="color-2" type="radio" />
  <label htmlFor="color-2">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g id="Interface / Check">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#ffffff"
              d="M6 12L10.2426 16.2426L18.727 7.75732"
              id="Vector"
            ></path>
          </g>
        </g>
      </svg>
    </span>
  </label>

  <input value="color-3" name="color" id="color-3" type="radio" />
  <label htmlFor="color-3">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g id="Interface / Check">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#ffffff"
              d="M6 12L10.2426 16.2426L18.727 7.75732"
              id="Vector"
            ></path>
          </g>
        </g>
      </svg>
    </span>
  </label>
</div>
    </div>
  );
}
