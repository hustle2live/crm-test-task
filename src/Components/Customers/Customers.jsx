import React from 'react';

import { mockData } from '../../mockdata/data.js';

import { CssButton } from '../../stories/CssButton.jsx';

import styles from './customers.module.scss';

const SearchBar = () => {
   return (
      <section className={styles.searchBar}>
         <div>
            <h3>All Customers</h3>
            <p>Active Members</p>
         </div>
         <div>
            <img src="" alt="" />
            <input type="text" />
         </div>
      </section>
   );
};
const CustomersTable = () => {
   return (
      <section className={styles.customersTable}>
         <table>
            <thead>
               <tr>
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
                     <tr key={id}>
                        <td>{Name}</td>
                        <td>{Company}</td>
                        <td>{Phone}</td>
                        <td>{Email}</td>
                        <td>{Country}</td>
                        <td>
                           <CssButton
                              active={Status === 'active' ? true : false}
                              label = {Status}
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
   return <section className={styles.paginationSection}></section>;
};

export const Customers = () => (
   <>
      <SearchBar />
      <CustomersTable />
      <Pagination />
   </>
);
