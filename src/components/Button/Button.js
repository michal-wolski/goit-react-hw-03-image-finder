import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ changePage }) => (
  <button onClick={changePage} type="button">
    Load More
  </button>
);

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;
