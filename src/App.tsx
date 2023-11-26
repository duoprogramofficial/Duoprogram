import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import "./App.css";
import Learn from "./main/learn"
function App() {

  function Button() {
  
  };
  
  return (

    <div className="container">
     <h1>Welcome to duoprogram</h1>
     <h2>Welcome to duoprogram it's a fan made of duolingo to learn programming language</h2>
     <h2>Have fun learning!!</h2>
     <button><Link to="/learn">Learn now</Link></button>
     </div>
  );



}

export default App;

