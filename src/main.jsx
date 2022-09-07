import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InsertPage from './pages/insertPage/InsertPage';
import SearchPage from './pages/searchPage/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage/HomePage';
import store from './redux/store';
import UpdatePage from './pages/updatePage/UpdatePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/insert" element={<InsertPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
