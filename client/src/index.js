import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Decide from './routes/Decide';
import Result from './routes/Result';
import Switch from './routes/Switch';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/decide" element={<Decide />} />
        <Route path="/result" element={<Result />} />
        <Route path="/switch" element={<Switch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
