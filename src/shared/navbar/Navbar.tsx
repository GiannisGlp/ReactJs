import React, { useEffect, useState } from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { navLinksData } from '../../containers/Routes';
import { useSelector, useDispatch } from 'react-redux';
import { layoutSelector } from '../../redux/reducers/layoutReducer';
import { changeColorDark } from '../../redux/actions/layouActions';
import { ColorMode } from '../../redux/initialState';
import Toggle from '../toggle/Toggle';

const Navbar = () => {
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const [updateColorMode, setUpdateColorMode] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { colorMode } = useSelector(layoutSelector);
  let oposColorMode: ColorMode = colorMode === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    console.log('hi');
    const color: any = localStorage.getItem('colorMode');
    if (color) {
      dispatch(changeColorDark(color));
    } else {
      localStorage.setItem('colorMode', colorMode);
    }
  }, [dispatch]);

  useEffect(() => {
    if (updateColorMode) {
      localStorage.setItem('colorMode', oposColorMode);
      dispatch(changeColorDark(oposColorMode));
      setUpdateColorMode(false);
    }
  }, [updateColorMode, dispatch]);

  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>
        <h4>OMNIA</h4>
      </div>
      <ul
        className={
          showBurger
            ? [classes.navLinks, classes.navActive].join(' ')
            : [classes.navLinks, classes.displayNone].join(' ')
        }
      >
        {navLinksData?.map((item, index) => {
          if (index !== navLinksData.length - 1) {
            return (
              <NavLink
                onClick={() => setShowBurger(false)}
                key={item.name}
                to={item.path}
                className={showBurger ? classes.linksBurger : classes.link}
                style={({ isActive }) => {
                  return {
                    // color: isActive ? 'rgb(255, 83, 73)' : '',
                    borderBottom: isActive ? '2px solid rgb(57, 255, 20)' : '',
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
      <Toggle onClick={() => setUpdateColorMode(true)} title={colorMode} />
    </nav>
  );
};
export default Navbar;
