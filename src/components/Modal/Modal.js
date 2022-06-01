import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modalImage, closeModal }) => {
  return (
    <div onClick={closeModal}>
      <div>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
