import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import MainApp from './MainApp';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <Child />,
//   <Navbar/>,
// document.getElementById('nav')
// );

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);
