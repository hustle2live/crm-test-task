/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from '../../stories/Link';
// import { NavLink } from 'react-router-dom';

import React from 'react';

import ListElem from '../../stories/ListElement';

import IconDashboard from '../../Images/Icons/dashboard-main.svg';
import IconProfile from '../../Images/Icons/dashboard-main.svg';

import styles from './sidebar.module.scss';

export const SideBar = () => (
   <div className={styles.wrapper}>
      <div className={styles.header}>
         <div className={styles.header__content}>
            <div className={styles.header__content_icon}>
               <img src={IconDashboard} alt="logo" />
            </div>
            <p className={styles.header__content_text}>
               Dashboard{' '}
               <span className={styles.header__content_version}>v.01</span>
            </p>
         </div>
      </div>
      <nav className={styles.navMenu}>
         <ul>
            <ListElem>
               <div className={styles.icon}>
                  <img src="" alt="" />
               </div>
               <a href="#">product</a>
               <div className={styles.arrow}>
                  <img src="" alt="" />
               </div>
            </ListElem>
            <ListElem>
               <div className={styles.icon}>
                  <img src="" alt="" />
               </div>
               <a href="#">customers</a>
               <div className={styles.arrow}>
                  <img src="" alt="" />
               </div>
            </ListElem>
            <ListElem active>
               <div className={styles.icon}>
                  <img src="" alt="" />
               </div>
               <a href="#">income</a>
               <div className={styles.arrow}>
                  <img src="" alt="" />
               </div>
            </ListElem>
            <ListElem>
               <div className={styles.icon}>
                  <img src="" alt="" />
               </div>
               <a href="#">promote</a>
               <div className={styles.arrow}>
                  <img src="" alt="" />
               </div>
            </ListElem>
            <ListElem>
               <div className={styles.icon}>
                  <img src="" alt="" />
               </div>
               <a href="#">help</a>
               <div className={styles.arrow}>
                  <img src="" alt="" />
               </div>
            </ListElem>
         </ul>
      </nav>
      <div className={styles.profile}>
         <div className={styles.profile__picture}>
            <img src={IconProfile} alt="profile" />
         </div>
         <div className={styles.profile__description}>
            <p className={styles.profile__name}>Evano</p>
            <p className={styles.profile__position}>Project Manager</p>
         </div>
      </div>
   </div>
);
