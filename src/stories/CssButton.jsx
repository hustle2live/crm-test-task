/* eslint-disable jsx-quotes */
import React from 'react';
import PropTypes from 'prop-types';
import './cssbutton.scss';

/**
 * Primary UI component for user interaction
 */
export const CssButton = ({ active, backgroundColor, size, label, ...props }) => {
   const mode = active ? 'css-button--active' : '';
   return (
      <button
         type='button'
         className={['css-button', `css-button--${size}`, mode].join(' ')}
         style={backgroundColor && { backgroundColor }}
         {...props}
      >
         {label}
      </button>
   );
};

CssButton.propTypes = {
   active: PropTypes.bool,
   backgroundColor: PropTypes.string,
   size: PropTypes.oneOf(['small', 'medium', 'large']),
   label: PropTypes.string.isRequired,
   onClick: PropTypes.func
};

CssButton.defaultProps = {
   backgroundColor: null,
   active: false,
   size: 'medium',
   label: 'CssButton',
   onClick: undefined
};
