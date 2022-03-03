import React, { useState } from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { navLinksData } from '../Routes';

function Navbar() {
  const [showBurger, setShowBurger] = useState<boolean>(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <h4>OMNIA</h4>
      </div>
      <ul
        className={
          showBurger
            ? [classes.navLinks, classes.navActive].join(' ')
            : classes.navLinks
        }
      >
        {navLinksData.map((item, index) => {
          if (index !== navLinksData.length - 1) {
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={showBurger ? classes.linksBurger : classes.link}
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'rgb(255, 83, 73)' : '',
                    animationDuration: `${(index + 1) / 3}s`,
                  };
                }}
              >
                {item.name}
              </NavLink>
            );
          }
        })}
      </ul>
      <div className={classes.burger} onClick={() => setShowBurger((c) => !c)}>
        <div className={showBurger ? classes.lineX1 : classes.line1}></div>
        <div className={showBurger ? classes.lineX2 : classes.line2}></div>
        <div className={showBurger ? classes.lineX3 : classes.line3}></div>
      </div>
    </nav>
  );
}
export default Navbar;
