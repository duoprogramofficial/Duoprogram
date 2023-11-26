import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import "./styles.css";

function App() {

  function gotolearn() {
    alert("test");
  }
  
  return (
    <div className="container">
      <h1>Choose your programming languages</h1>
      <Link to="/py/pyindex"><button>Python</button></Link>    
      </div>
  );
  

}
export default App;

