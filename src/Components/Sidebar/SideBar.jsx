/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { ReactComponent as Arrow } from '../../Images/Icons/arrow.svg';
import { ReactComponent as ArrowActive } from '../../Images/Icons/arrow-white.svg';

import { ReactComponent as Logo } from '../../Images/Icons/dashboard-main.svg';
import { ReactComponent as IconDashboard } from '../../Images/Icons/dashboard.svg';
import { ReactComponent as IconCustomers } from '../../Images/Icons/customers.svg';
import { ReactComponent as IconHelp } from '../../Images/Icons/help.svg';
import { ReactComponent as IconIncome } from '../../Images/Icons/income.svg';
import { ReactComponent as IconProduct } from '../../Images/Icons/product.svg';
import { ReactComponent as IconPromote } from '../../Images/Icons/promote.svg';

import ProfileImg from '../../Images/profile-icon.jpg';
import ListElem from '../../stories/ListElement';

import styles from './sidebar.module.scss';

export const SideBar = () => (
   <>
      <div className={styles.wrapper}>
         <div className={styles.header}>
            <div className={styles.header__content}>
               <div className={styles.header__content_logo}>
                  <Logo />
               </div>
               <p className={styles.header__content_text}>
                  Dashboard{' '}
                  <span className={styles.header__content_version}>v.01</span>
               </p>
            </div>
         </div>
         <nav className={styles.navMenu}>
            <ul className={styles.navMenu__list}>
               <ListElem>
                  <IconDashboard />
                  <a className={styles.navMenu__text} href="#">
                     dashboard
                  </a>
                  <Arrow className={styles.navMenu__arrow} />
               </ListElem>
               <ListElem>
                  <IconProduct />
                  <a className={styles.navMenu__text} href="#">
                     product
                  </a>
                  <Arrow className={styles.navMenu__arrow} />
               </ListElem>
               <ListElem active>
                  <IconCustomers />
                  <a className={styles.navMenu__text} href="#">
                     customers
                  </a>
                  <ArrowActive className={styles.navMenu__arrow} />
               </ListElem>
               <ListElem>
                  <IconIncome />
                  <a className={styles.navMenu__text} href="#">
                     income
                  </a>
                  <Arrow className={styles.navMenu__arrow} />
               </ListElem>
               <ListElem>
                  <IconPromote />
                  <a className={styles.navMenu__text} href="#">
                     promote
                  </a>
                  <Arrow className={styles.navMenu__arrow} />
               </ListElem>
               <ListElem>
                  <IconHelp />
                  <a className={styles.navMenu__text} href="#">
                     help
                  </a>
                  <Arrow className={styles.navMenu__arrow} />
               </ListElem>
            </ul>
         </nav>
         <div className={styles.profile}>
            <div className={styles.profile__picture}>
               <img src={ProfileImg} alt="profile" />
            </div>
            <div className={styles.profile__description}>
               <p className={styles.profile__name}>Evano</p>
               <p className={styles.profile__position}>Project Manager</p>
            </div>
         </div>
      </div>
      <div className={styles.showButton}>
         <Logo />
      </div>
   </>
);
