import React from 'react';
import 'assets/css/style.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/common/Main';
import Layout from './components/Layout';
import MoviesListPage from './pages/movies/ListPage';
import SledgeListPage from './pages/sledge/ListPage';
import reportWebVitals from './reportWebVitals';
import ValidatorFrame from 'pages/validator/ValidatorFrame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/" element={<Layout />}>
          <Route path="/validator" element={<ValidatorFrame />} />
          <Route path="/movies" element={<MoviesListPage />} />
          <Route path="/sledge" element={<SledgeListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
