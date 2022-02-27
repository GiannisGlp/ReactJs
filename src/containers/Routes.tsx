import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/pages/Home';
import Users from './users/pages/Users';
import Products from './products/pages/Products';
import Places from './places/pages/Places';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/places" element={<Places />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
