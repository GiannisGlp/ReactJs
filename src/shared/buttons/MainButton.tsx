import React from 'react';
import classes from './MainButton.module.css';
import { LayoutText } from '../../utilities/layout';

interface IMainButton {
  onClick: () => void;
  title: React.ReactNode;
  fontSize?: string;
}

const MainButton = ({ onClick, title, fontSize = '1em' }: IMainButton) => {
  return (
    <button className={classes.button} style={{ fontSize }} onClick={onClick}>
      {title}
    </button>
  );
};

export default MainButton;
