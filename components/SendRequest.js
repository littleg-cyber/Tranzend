import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const InputAmount = ({ onNext }) => {
  const [amount, setAmount] = useState('');

  const handleNumberClick = (number) => {
    setAmount((prevAmount) => prevAmount + number);
  };

  const handleBackspace = () => {
    setAmount((prevAmount) => prevAmount.slice(0, -1));
  };

  const handleSubmit = () => {
    onNext(amount);
  };

  return (
    <div className="lg-calculator-container">
      <div className="calculator">
        <div className="input-section">
          <span className="dollar-sign">$</span>
          <input type="text" value={amount} readOnly />
        </div>
        <div className="numbers">
          <div className="group1113">
            <button type="button" onClick={() => handleNumberClick('1')}>1</button>
            <button type="button" onClick={() => handleNumberClick('2')}>2</button>
            <button type="button" onClick={() => handleNumberClick('3')}>3</button>
          </div>
          <div className="group1113">
            <button type="button" onClick={() => handleNumberClick('4')}>4</button>
            <button type="button" onClick={() => handleNumberClick('5')}>5</button>
            <button type="button" onClick={() => handleNumberClick('6')}>6</button>
          </div>
          <div className="group1113">
            <button type="button" onClick={() => handleNumberClick('7')}>7</button>
            <button type="button" onClick={() => handleNumberClick('8')}>8</button>
            <button type="button" onClick={() => handleNumberClick('9')}>9</button>
          </div>
          <div className="group1113">
            <button className="dotButton" type="button" onClick={() => handleNumberClick('.')}>.</button>
            <button type="button" onClick={() => handleNumberClick('0')}>0</button>
            <button className="deleteButton" type="button" onClick={() => handleBackspace()}>←</button>
          </div>
        </div>
        <br />
        <div className="send-request">
          <Link href={`/choosecontact?amount=${amount}&sent=false`} passHref>
            <button className="request-button" type="button" onClick={() => handleSubmit()}>Request</button>
          </Link>
          <Link href={`/choosecontact?amount=${amount}&sent=true`} passHref>
            <button className="send-button" type="button" onClick={() => handleSubmit()}>Send</button>
          </Link>
        </div>

      </div>

    </div>
  );
};

InputAmount.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default InputAmount;
