import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/pages/Home';
import Users from './users/pages/Users';
import Products from './products/pages/Products';
import Places from './places/pages/Places';
import Navbar from './navbar/Navbar';

export const navLinksData = [
  { path: 'home', name: 'home', element: <Home /> },
  { path: 'users', name: 'users', element: <Users /> },
  { path: 'places', name: 'places', element: <Places /> },
  { path: 'products', name: 'products', element: <Products /> },
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
    <>
      <Navbar />
      <Routes>
        {navLinksData.map((item) => {
          return <Route path={item.path} element={item.element}></Route>;
        })}
      </Routes>
    </>
  );
};

export default MainRoutes;
