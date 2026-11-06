import React from 'react';

interface UivGoldenFormProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function UivGoldenForm({ className = '', onClick, ...props }: UivGoldenFormProps) {
  return (
    <div className={`uiv_scoped_form1 inline-block ${className}`} onClick={onClick}>
      
      <style>{`
.uiv_scoped_form1 .form {
  background: #0c0f14;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
    0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  position: relative;
  border-radius: 25px;
}
.uiv_scoped_form1 .form .label {
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: -moz-fit-content;
  height: fit-content;
}
.uiv_scoped_form1 .form .label:has(input:focus) .title {
  top: 0;
  left: 0;
  color: #d17842;
}
.uiv_scoped_form1 .form .label .title {
  padding: 0 10px;
  transition: all 300ms;
  font-size: 12px;
  color: #8b8e98;
  font-weight: 600;
  width: -moz-fit-content;
  width: fit-content;
  top: 14px;
  position: relative;
  left: 15px;
  background: #0c0f14;
}
.uiv_scoped_form1 .form .input-field {
  width: auto;
  height: 50px;
  text-indent: 15px;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  border: 1px solid #21262e;
  transition: all 0.3s;
  caret-color: #d17842;
  color: #aeaeae;
}
.uiv_scoped_form1 .form .input-field:hover {
  border-color: rgba(209, 121, 66, 0.5);
}
.uiv_scoped_form1 .form .input-field:focus {
  border-color: #d17842;
}
.uiv_scoped_form1 .form .split {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
}
.uiv_scoped_form1 .form .split label {
  width: 130px;
}
.uiv_scoped_form1 .form .checkout-btn {
  margin-top: 20px;
  padding: 20px 0;
  border-radius: 25px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  fill: #fff;
  color: #fff;
  border: 2px solid transparent;
  background: #d17842;
  transition: all 200ms;
}
.uiv_scoped_form1 .form .checkout-btn:active {
  scale: 0.95;
}
.uiv_scoped_form1 .form .checkout-btn:hover {
  color: #d17842;
  border: 2px solid #d17842;
  background: transparent;
}
      `}</style>
      <section className="add-card page">
  <form className="form">
    <label htmlFor="name" className="label">
      <span className="title">Card holder full name</span>
      <input
        className="input-field"
        type="text"
        name="input-name"
        title="Input title"
        placeholder="Enter your full name"
      />
    </label>
    <label htmlFor="serialCardNumber" className="label">
      <span className="title">Card Number</span>
      <input
        id="serialCardNumber"
        className="input-field"
        type="number"
        name="input-name"
        title="Input title"
        placeholder="0000 0000 0000 0000"
      />
    </label>
    <div className="split">
      <label htmlFor="ExDate" className="label">
        <span className="title">Expiry Date</span>
        <input
          id="ExDate"
          className="input-field"
          type="text"
          name="input-name"
          title="Expiry Date"
          placeholder="01/23"
        />
      </label>
      <label htmlFor="cvv" className="label">
        <span className="title"> CVV</span>
        <input
          id="cvv"
          className="input-field"
          type="number"
          name="cvv"
          title="CVV"
          placeholder="CVV"
        />
      </label>
    </div>
    <input className="checkout-btn" type="button" value="Checkout" />
  </form>
</section>
    </div>
  );
}
