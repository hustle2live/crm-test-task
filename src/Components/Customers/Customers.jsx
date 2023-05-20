import React from 'react';

import { mockData } from '../../mockdata/data.js';

import { CssButton } from '../../stories/CssButton.jsx';

import { ReactComponent as ChevronLeft } from '../../Images/Icons/chevron_left.svg';
import { ReactComponent as ChevronRight } from '../../Images/Icons/chevron_right.svg';
import { ReactComponent as SearchIcon } from '../../Images/Icons/search.svg';

import styles from './customers.module.scss';

const SearchBar = () => {
   return (
      <section className={styles.searchBar}>
         <div>
            <h3>All Customers</h3>
            <p>Active Members</p>
         </div>
         <div className={styles.searchBar__inputDivElement}>
            <SearchIcon className={styles.searchBar__icon} />
            <input
               type="text"
               className={styles.searchBar__input}
               placeholder="Search"
            />
         </div>
      </section>
   );
};

const CustomersTable = () => {
   return (
      <section>
         <table className={styles.customersTable}>
            <thead>
               <tr className={styles.customersTable__headRow}>
                  <th>Customer Name</th>
                  <th>Company</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
               </tr>
            </thead>
            <tbody>
               {mockData.map(
                  ({ Name, Company, Phone, Email, Country, Status, id }) => (
                     <tr key={id} className={styles.customersTable__tableRow}>
                        <td>{Name}</td>
                        <td>{Company}</td>
                        <td>{Phone}</td>
                        <td>{Email}</td>
                        <td>{Country}</td>
                        <td>
                           <CssButton
                              active={Status === 'active' ? true : false}
                              label={Status}
                           />{' '}
                        </td>
                     </tr>
                  ),
               )}
            </tbody>
         </table>
      </section>
   );
};

const Pagination = () => {
   return (
      <section className={styles.paginationSection}>
         <p>Showing data 1 to 8 of 256K entries</p>
         <div className={styles.paginationSection__pagination}>
            <div className={styles.paginationSection__number}>
               <ChevronLeft />
            </div>
            <div
               className={`${styles.paginationSection__number} ${styles.select}`}
            >
               1
            </div>
            <div className={styles.paginationSection__number}>2</div>
            <div className={styles.paginationSection__number}>3</div>
            <div className={styles.paginationSection__number}>4</div>
            <div className={styles.paginationSection__number}>
               <span>...</span>
            </div>
            <div className={styles.paginationSection__number}>40</div>
            <div className={styles.paginationSection__number}>
               <ChevronRight />
            </div>
         </div>
      </section>
   );
};

export const Customers = () => (
   <>
      <SearchBar />
      <CustomersTable />
      <Pagination />
   </>
);
