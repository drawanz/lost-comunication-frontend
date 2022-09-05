import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InsertPage from './pages/insertPage/insertPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage/homePage';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/insert" element={<InsertPage />} />
        <Route path="/insertt" element={<InsertPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
