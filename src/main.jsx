import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InsertPage from './pages/insertPage/insertPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage/homePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/insert" element={< InsertPage/>} />
    </Routes>
  </BrowserRouter>
);
