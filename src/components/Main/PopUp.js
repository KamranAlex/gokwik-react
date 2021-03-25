import React from 'react';
import Modal from 'react-modal';
import './Main.css';
import error from '../../img/error.png';
import success from '../../img/success.png';

const customStyles1 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: '1px solid #03a747',
    boxShadow: '0 0 20px 10px lightgrey',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)'
  }
};
const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: '1px solid #fec008',
    boxShadow: '0 0 20px 10px lightgrey',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)'
  }
};

const msgDiv = {
  textAlign: 'center',
  margin: '20px 10px',
  padding: '40px 20px'
};
const butonStyle = {
  border: 'none',
  position: 'absolute',
  top: '5px',
  right: '5px',
  padding: '0px 8px 2px 8px',
  color: 'white',
  background: 'crimson',
  fontWeight: '600'
};

Modal.setAppElement('#root');
const PopUp = ({ modalIsOpen, closeModal, numberExists }) => {
  return (
    <div className='pop-modal'>
      {numberExists ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles2}
          contentLabel='Example Modal'
        >
          <button style={butonStyle} onClick={closeModal}>
            X
          </button>
          <div style={msgDiv}>
            <h2
              style={{
                fontFamily: "'Exo', sans-serif",
                fontWeight: '600',
                color: '#fec008'
              }}
            >
              Not Eligible !!!
            </h2>
            <h3
              style={{
                fontFamily: "'Exo', sans-serif",
                fontWeight: '500',
                color: '#fec008'
              }}
            >
              The number already availed this offer.
            </h3>
            <img
              src={error}
              alt=''
              style={{ height: '60px', marginTop: '10px' }}
            />
          </div>
        </Modal>
      ) : (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles1}
          contentLabel='Example Modal'
        >
          <button style={butonStyle} onClick={closeModal}>
            X
          </button>
          <div style={msgDiv}>
            <h2
              style={{
                fontFamily: "'Courgette', cursive",
                fontWeight: '600',
                color: '#03a747'
              }}
            >
              Mobile Number Submitted Successfully !
            </h2>
            <img
              src={success}
              alt=''
              style={{ height: '60px', marginTop: '10px' }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PopUp;
