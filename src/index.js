import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/scss/rishit-fruits.scss';
import './assets/scss/custom.scss';
import { store } from './store/store';
import { IndexRouter } from './router/indexRouter';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop/BackToTop';
import Loader from './components/common/Loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    if (route.children) {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={index} index={route.index} path={route.path} element={route.element} />;
  });
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Loader />
      <BackToTop />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {renderRoutes(IndexRouter)}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();