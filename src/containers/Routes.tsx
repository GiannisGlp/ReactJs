import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/pages/Home';
import Users from './users/pages/Users';
import Products from './products/pages/Products';
import Places from './places/pages/Places';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';

export const navLinksData = [
  { path: 'home', name: 'home', element: <Home /> },
  { path: 'users', name: 'users', element: <Users /> },
  { path: 'places', name: 'places', element: <Places /> },
  { path: 'sports', name: 'sports', element: <Home /> },
  { path: 'products', name: 'products', element: <Products /> },
  { path: 'products', name: 'stocks', element: <Products /> },
  {
    path: '*',
    element: (
      <main style={{ padding: '1rem' }}>
        <p style={{ color: 'white' }}>There's nothing here!</p>
      </main>
    ),
  },
];

const MainRoutes = (): ReactElement => {
  return (
    <div
      style={{
        minHeight: '100vh',
        overflow: 'auto',
      }}
    >
      <Navbar />

      <Routes>
        {navLinksData.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={item.element}></Route>
          );
        })}
      </Routes>

      <Footer />
    </div>
  );
};

export default MainRoutes;
