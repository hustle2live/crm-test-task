/* eslint-disable jsx-quotes */
import React from 'react';
import PropTypes from 'prop-types';
import './link.scss';

/**
 * Primary UI component for user interaction
 */
export const Link = ({ active, backgroundColor, label, ...props }) => {
   const mode = active ? 'link--active' : '';
   return (
      <li
         type='li'
         className={['link', mode].join(' ')}
         style={backgroundColor && { backgroundColor }}
         {...props}
      >
         {label}
      </li>
   );
};

Link.propTypes = {
   active: PropTypes.bool,
   backgroundColor: PropTypes.string,
   label: PropTypes.string.isRequired,
   onClick: PropTypes.func
};

Link.defaultProps = {
   backgroundColor: null,
   active: false,
   onClick: undefined
};
