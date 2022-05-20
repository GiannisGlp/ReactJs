import React from 'react';
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
        <p>There's nothing here!</p>
      </main>
    ),
  },
];

const MainRoutes = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          {navLinksData.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={item.element}
              ></Route>
            );
          })}
        </Routes>
      </div>
      <div style={{}}>
        <Footer />
      </div>
    </div>
  );
};

export default MainRoutes;
