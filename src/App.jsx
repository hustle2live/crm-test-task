import React from 'react';

import { CssButton } from './stories/CssButton';
import { SideBar } from './Components/Sidebar/SideBar';

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
