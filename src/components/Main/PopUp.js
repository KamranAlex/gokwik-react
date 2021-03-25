import React from 'react';
import Modal from 'react-modal';
import './Main.css';

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
Modal.setAppElement('#root');
const PopUp = ({ modalIsOpen, closeModal }) => {
  return (
    <div className='pop-modal'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <button style={butonStyle} onClick={closeModal}>
          X
        </button>
        <h2>Done</h2>
      </Modal>
    </div>
  );
};

export default PopUp;
