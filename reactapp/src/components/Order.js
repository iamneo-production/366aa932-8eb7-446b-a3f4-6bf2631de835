import React from 'react'
import './view.css';


const App = () => {
  return (
    <>
    <div className="app-container">
      <table align="center" id="adminOrderBody">
        <thead>
          <tr id="trow">
            <th id="thead">Order ID</th>
            <th id="thead">User ID</th>
            <th id="thead">Dress Name</th>
            <th id="thead">Price</th>
            <th id="thead">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr id="trow">
             <td id="tdata">5252501</td>
             <td id="tdata">user</td>
             <td id="tdata">Blue jeans</td>
             <td id="tdata">599</td>
             <td id="tdata">1</td>
          </tr>
          <tr id="trow">
             <td id="tdata">5252502</td>
             <td id="tdata">user</td>
             <td id="tdata">Yellow shirt</td>
             <td id="tdata">1999</td>
             <td id="tdata">1</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default App;
