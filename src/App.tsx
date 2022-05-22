import React from 'react';
import './App.css';
import MainRoutes from './containers/Routes';
import { LayoutBackground } from './utilities/layout';

const App = () => {
  return (
    <div className={LayoutBackground()}>
      <MainRoutes />
    </div>
  );
};

export default App;
