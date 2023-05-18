import React from 'react';

import { CssButton } from './stories/CssButton';
import { SideBar } from './Components/Sidebar/SideBar';

import './styles.scss';

const Content = () => (
   <div>
      Some Content
      <CssButton />
      <CssButton active />
   </div>
);

const App = () => {
   return (
      <div className="mainContainer">
         <SideBar className="bar" />
         <Content className="content" />
      </div>
   );
};

export default App;
