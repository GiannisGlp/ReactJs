import React from 'react';
import SideNav from '../../../shared/sideNav/SideNav';
import { sideNavData } from '../components/SideNavData';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideNav data={sideNavData} />
      <div>
        <p>home</p>
        <p>home</p>
        <p>home</p>
      </div>
    </div>
  );
};

export default Home;
