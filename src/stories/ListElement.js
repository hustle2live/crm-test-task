import React from 'react';

import styles from './ListElement.module.scss';

const ListElement = (props) => {
   const isActive = props.active ? `${styles.active}` : '';
   return <li className={`${styles.liElement} ${isActive}`}>{props.children}</li>;
};

export default ListElement;
