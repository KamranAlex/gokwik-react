import React from 'react';
import Modal from 'react-modal';
import './Main.css';
import error from '../../img/error.png';
import success from '../../img/success.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
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

const msgDiv = {
  margin: '10px 20px'
};
Modal.setAppElement('#root');
const PopUp = ({ modalIsOpen, closeModal, numberExists }) => {
  return (
    <div className='pop-modal'>
      {numberExists ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <button style={butonStyle} onClick={closeModal}>
            X
          </button>
          <div style={msgDiv}>
            <h2>The Number Exists already</h2>
            <img src={error} alt='' style={{ height: '30px' }} />
          </div>
        </Modal>
      ) : (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <button style={butonStyle} onClick={closeModal}>
            X
          </button>
          <div style={msgDiv}>
            <h2>The Number Added</h2>
            <img src={success} alt='' style={{ height: '30px' }} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PopUp;
