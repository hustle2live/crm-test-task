import React from 'react';

import { CssButton } from './stories/CssButton';
import { Link } from './stories/Link';

const SideBar = () => (
   <>
      <Link label="product" />
      <Link label="customers" />
      <Link label="income" active/>
      <Link label="promote" />
      <Link label="help" />
   </>
);

const Content = () => <div>Some Content</div>;

const App = () => {
   return (
      <>
         <SideBar />
         <Content />
         <CssButton />
         <CssButton active />
      </>
   );
};

export default App;
