import React, { useState } from 'react';
import './Main.css';
import PopUp from './PopUp';
import Suggestions from './Suggestions';

const Main = () => {
  const [details, setDetails] = useState({
    isFormValid: false,
    number: null,
    err: '',
    isFormSubmited: false,
    numberExists: false
  });

  const storedNumber = localStorage.getItem('newNumber');
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
        isFormSubmited: false,
        numberExists: false
      });
    } else if (/^[6-9]\d{9}$/.test(e.target.value)) {
      if (storedNumber !== e.target.value) {
        setDetails({
          isFormValid: true,
          number: e.target.value,
          err: '',
          isFormSubmited: false,
          numberExists: false
        });
      } else {
        openModal();
        setDetails({
          isFormValid: false,
          number: null,
          err: '',
          isFormSubmited: false,
          numberExists: true
        });
      }
    } else {
      setDetails({
        isFormValid: false,
        number: null,
        err: 'The Number is invalid !!! Enter a valid number..',
        isFormSubmited: false,
        numberExists: false
      });
    }
  };

  const handleFormSubmit = (e) => {
    localStorage.setItem('newNumber', details.number);
    setDetails({
      isFormValid: false,
      number: null,
      err: '',
      isFormSubmited: true,
      numberExists: false
    });
    openModal();
    e.target.reset();
    e.preventDefault();
  };
  console.log(details.isFormSubmited);
  return (
    <div className='main-div'>
      <PopUp
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        numberExists={details.numberExists}
      ></PopUp>
      {details.isFormSubmited || details.numberExists ? (
        <Suggestions></Suggestions>
      ) : (
        <div className='text-center'>
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
        </div>
      )}
    </div>
  );
};

export default Main;
