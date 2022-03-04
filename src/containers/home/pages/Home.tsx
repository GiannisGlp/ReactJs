import React from 'react';
import SideNav from '../../../shared/sideNav/SideNav';
import { sideNavData } from '../components/SideNavData';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideNav data={sideNavData} />
      <div
        style={{
          display: 'flex',
          marginLeft: '1rem',
          position: 'relative',
          backgroundColor: 'red',
          width: '83%',
          top: 0,
          bottom: 0,
          minHeight: '80vh',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      ></div>
    </div>
  );
};

export default Home;
