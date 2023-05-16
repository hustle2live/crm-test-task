import React from 'react';

const SideBar = () => (
   <>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
      <li>item 6</li>
      <li>item 7</li>
   </>
);

const Content = () => <div>Some Content</div>;

const App = () => {
   return (
      <>
         <SideBar />
         <Content />
      </>
   );
};

export default App;
