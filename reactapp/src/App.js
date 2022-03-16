import React from 'react';
import ReactDOM  from 'react';
import './login.css';

function App() {
  function toggleSignup(){
    document.getElementById("signinLink").style.backgroundColor = "#fff";
    document.getElementById("signinLink").style.color = "#222";
    document.getElementById("signinLink").style.backgroundColor = "#57b846";
    document.getElementById("signinLink").style.color = "#fff";
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("signupBox").style.display = "block";
  }

  function toggleLogin(){
    document.getElementById("signinLink").style.backgroundColor = "#57B846";
    document.getElementById("signinLink").style.color = "#fff";
    document.getElementById("signinLink").style.backgroundColor = "#fff";
    document.getElementById("signinLink").style.color = "#222";
    document.getElementById("signupBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
  }
  return(
    <div>
      <div className="form-modal">
      <div className="form-toggle">
      <button id="signinLink" onClick={ toggleLogin }> log in </button>
      <button id="signinLink" onClick={ togglesignup }> sign up</button>
    
    </div>
    <div id="loginBox">
      <form>
        <input type="text" id="email" placeholder="Enter email"/>
        <input type="password" id="password" placeholder="Enter password"/>
        <button type="button" id="submitButton" className="btn login"> login </button>
      </form>
    </div>
    <div id="signupBox">
      <form>
        <input type="email" id="email" placeholder="Enter email"/>
        <input type="text" id="username" placeholder="Enter username"/>
        <input type="text" id="mobilenumber" placeholder="Mobile number"/>
        <input type="password" id="password" placeholder="password"/>
        <input type="password" id="confirmpassword" placeholder="confirm password"/>
        <button type="button" id="submitButton" className="btn signup"> create account </button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default App
