import React from 'react';
import './Footer.css';
import goKwik from '../../img/goKwik.png';

const Footer = () => {
  return (
    <div className='footer mt-5 mb-3 d-flex justify-content-center'>
      <p className='text-muted mr-3'>Powerd by</p>
      <img src={goKwik} alt='' />
      <p className='text-go ml-1'> GoKwik</p>
    </div>
  );
};

export default Footer;
