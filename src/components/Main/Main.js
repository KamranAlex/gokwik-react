import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [details, setDetails] = useState({
    isFormValid: false,
    number: 0,
    err: ''
  });
  const handleBlur = (e) => {
    console.log(e.target.value);

    if (e.target.value.length < 1) {
      setDetails({
        isFormValid: false,
        number: 0,
        err: 'Mobile Number Cannot Be empty'
      });
    } else if (/^[6-9]\d{9}$/.test(e.target.value)) {
      setDetails({
        isFormValid: true,
        number: e.target.value,
        err: ''
      });
    } else {
      setDetails({
        isFormValid: false,
        number: 0,
        err: 'The Mobile Number is Invalid !!! Please enter a valid Number..'
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='text-center main-div'>
      <div className='info-text text-center w-auto'>
        <p>
          You have WON Paytm Gift Card of Rs 200 for
          <span> placing the order on Man Matters</span>
        </p>
      </div>

      <div className='form-div my-4'>
        <form action='' onSubmit={handleFormSubmit}>
          <input
            type='number'
            placeholder='Enter Mobile Number Here'
            onBlur={handleBlur}
          />
          <small className='d-block text-danger'>{details.err}</small>

          {details.isFormValid === true ? (
            <button
              type='submit'
              className='btn-primary btn-enabled  d-block my-4'
            >
              Wow! Get my Paytm Gift Card &gt;
            </button>
          ) : (
            <button
              type='submit'
              className='btn-secondary btn-disabled d-block my-4'
              disabled
            >
              Wow! Get my Paytm Gift Card &gt;
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Main;
