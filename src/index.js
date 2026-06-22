import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AllProjects from './AllProjects';
import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
