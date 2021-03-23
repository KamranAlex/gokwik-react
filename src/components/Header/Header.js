import React from 'react';
import logo from '../../img/man-logo.png';
import emoji from '../../img/emojy.png';
import paytm from '../../img/paytm.png';
import art from '../../img/art.png';

const Header = () => {
  return (
    <div className='header-div'>
      <img src={logo} alt='' className='logo-main' />

      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-6 congrat-col px-4'>
            <p className='congrat-text'>Congratulations</p>
            <img src={emoji} alt='' />
          </div>
          <div className='col-md-6 card-col'>
            <img src={art} alt='' className='top-right' />
            <div className='gift-card my-auto'>
              <div>
                <img src={paytm} alt='' />
              </div>
              <div className='main-info d-flex justify-space-between'>
                <div className='main-text'>
                  Gift <p>card</p>
                </div>
                <p className='rupee mx-3'>
                  <span>&#8377;</span>
                  200
                </p>
              </div>
            </div>
            <img src={art} alt='' className='bottom-left' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
