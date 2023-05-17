import { Link } from '../../stories/Link';

import styles from './sidebar.module.scss';

export const SideBar = () => (
   <div className={styles.wrapper}>
      <div className={styles.title}>
         <div className={styles.title__icon}>
            <img src='' alt='' />
         </div>
         <p className={styles.title__text}>
            Dashboard
            <span className={styles.title__version}>v.01</span>
         </p>
      </div>
      <div className={styles.navMenu}>
         <Link label='product' />
         <Link label='customers' />
         <Link label='income' active />
         <Link label='promote' />
         <Link label='help' />
      </div>
      <div className={styles.profile}>
         <div className={styles.profile__picture}>
            <img src='' alt='' />
         </div>
         <div className={styles.profile__description}>
            <p className={styles.profile__name}>Evano</p>
            <p className={styles.profile__position}>Project Manager</p>
         </div>
      </div>
   </div>
);
