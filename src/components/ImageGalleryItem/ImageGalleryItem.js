/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt, openModal, modalImage }) => {
  return (
    <div>
      <li onClick={() => openModal(modalImage)}>
        <img src={url} alt={alt} />
      </li>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
