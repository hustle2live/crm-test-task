import React from 'react';

import { Customers } from '../Customers/Customers';

import styles from './content.module.scss';

export const Content = () => (
   <div className={styles.wrapper}>
      <div className={styles.header}>
         <p className={styles.header__title}>Hello Evano 👋🏼,</p>
      </div>
      <div className={styles.content}>
         <Customers />
      </div>
   </div>
);
