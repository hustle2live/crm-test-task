import React from 'react';

import { Content } from './Components/Content/Content';
import { SideBar } from './Components/Sidebar/SideBar';

import './styles.scss';

const App = () => {
   return (
      <div className="mainContainer">
         <SideBar />
         <Content />
      </div>
   );
};

export default App;
