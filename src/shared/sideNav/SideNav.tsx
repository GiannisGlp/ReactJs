import React, { useState } from 'react';
import classes from './SideNav.module.css';
import { Tooltip } from '@material-ui/core';
import { DoubleArrow } from '@material-ui/icons';
import { JsxElement } from 'typescript';

interface Data {
  name: string;
  icon: JsxElement;
}
const SideNav = (props: any) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div style={{ display: 'flex' }}>
      <div className={showMenu ? classes.navUlAnim : classes.navUl}>
        <Tooltip
          title={showMenu ? 'Close List' : 'Show List'}
          placement="right"
        >
          <div
            onClick={() => setShowMenu((c) => !c)}
            className={showMenu ? classes.arrowDown : classes.arrowRight}
          >
            <DoubleArrow style={{ color: 'red' }} />
          </div>
        </Tooltip>

        {props.data.map((item: Data) => {
          return (
            <Tooltip title={showMenu ? '' : item.name} placement="right">
              <div
                className={showMenu ? classes.rowWrapper : classes.zeroWidth}
              >
                {item.icon}
                <p className={showMenu ? classes.showTitle : classes.noTitle}>
                  {item.name}
                </p>
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};
export default SideNav;
