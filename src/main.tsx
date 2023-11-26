import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Learn from './main/learn';
import Pythonindex from './main/python/pythonindex'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/py/pyindex" element={<Pythonindex />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
