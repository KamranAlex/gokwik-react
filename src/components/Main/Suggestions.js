import React from 'react';
import whatsappIcon from '../../img/whatsapp.png';
import giftCard from '../../img/gift-card.png';
import closeIcon from '../../img/close.png';

const Suggestions = () => {
  return (
    <div className='suggest-div py-3'>
      <div className='mb-3'>
        <div className='d-flex justify-content-center'>
          <div className='suggest-img mr-3'>
            <img
              src={whatsappIcon}
              alt=''
              style={{ height: '44px', marginTop: '30px' }}
            />
          </div>
          <div className='suggest-text'>
            <h5>Where will I get the gift card?</h5>
            <p>
              You will receive it on Whatsapp/SMS on your mobile. Enter the same
              number used on Man Matters
            </p>
          </div>
        </div>
      </div>
      <div className='mb-4'>
        <div className='d-flex justify-content-center'>
          <div className='suggest-img mr-3'>
            <img
              src={giftCard}
              alt=''
              style={{ height: '44px', marginTop: '30px' }}
            />
          </div>
          <div className='suggest-text'>
            <h5>When will I receive the gift card?</h5>
            <p>Within 48 hours, when your Man Matters order is delivered.</p>
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <div className='d-flex justify-content-center'>
          <div className='suggest-img mr-3'>
            <img
              src={closeIcon}
              alt=''
              style={{ height: '38px', marginTop: '30px' }}
            />
          </div>
          <div className='suggest-text'>
            <h5>What if I cancel the order?</h5>
            <p>The voucher will not delivered if you cancel the order.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
