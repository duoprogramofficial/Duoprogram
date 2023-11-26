import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import "./styles.css";

function App() {

  function gotolearn() {
    alert("test");
  }
  
  return (
    <div className="container">
      <h1>Welcome to duoprogram</h1>
      <h3>you choosed to program in python, 
      that's a good choice to learn as a starter, it can do many things such as math and physics!
      even making games!</h3>
      <h2>if you want to learn that you need to download an IDE like VScode and install python</h2>
       
      <Link to="/py/ex1"><button>L'ets learn!</button></Link>
      </div>
  );
  

}
export default App;

