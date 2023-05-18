/* eslint-disable jsx-quotes */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './cssbutton.module.scss';

/**
 * Primary UI component for user interaction
 */
export const CssButton = ({
   active,
   backgroundColor,
   size,
   label,
   ...props
}) => {
   const mode = active ? `${styles['css-button--active']}` : '';
   const sizeClass = `${styles[`css-button--${size}`]}`;
   return (
      <button
         type="button"
         className={`${styles['css-button']} ${sizeClass} ${mode}`}
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
   onClick: PropTypes.func,
};

CssButton.defaultProps = {
   backgroundColor: null,
   active: false,
   size: 'medium',
   label: 'CssButton',
   onClick: undefined,
};
