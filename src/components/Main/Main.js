import React, { useState } from 'react';
import './Main.css';
import PopUp from './PopUp';
import Suggestions from './Suggestions';

const Main = () => {
  const [details, setDetails] = useState({
    isFormValid: false,
    number: null,
    err: '',
    isFormSubmited: false
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    console.log(e.target.value);

    if (e.target.value.length < 1) {
      setDetails({
        isFormValid: false,
        number: null,
        err: 'Mobile Number Cannot Be empty',
        isFormSubmited: false
      });
    } else if (/^[6-9]\d{9}$/.test(e.target.value)) {
      setDetails({
        isFormValid: true,
        number: e.target.value,
        err: '',
        isFormSubmited: false
      });
    } else {
      setDetails({
        isFormValid: false,
        number: null,
        err: 'The Number is invalid !!! Enter a valid number..',
        isFormSubmited: false
      });
    }
  };

  const handleFormSubmit = (e) => {
    console.log(details.number);
    setDetails({
      isFormValid: false,
      number: null,
      err: '',
      isFormSubmited: true
    });
    e.target.reset();
    e.preventDefault();
  };
  console.log(details.isFormSubmited);
  return (
    <div className='main-div'>
      {/* <div className='text-center'>
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
              onChange={handleChange}
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
        <PopUp modalIsOpen={modalIsOpen} closeModal={closeModal}></PopUp>
      </div> */}
      <Suggestions></Suggestions>
    </div>
  );
};

export default Main;
