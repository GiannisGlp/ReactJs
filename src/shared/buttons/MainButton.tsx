import React from 'react';
import classes from './MainButton.module.css';

interface IMainButton {
  onClick: () => void;
  title: React.ReactNode;
}

const MainButton = ({ onClick, title }: IMainButton) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default MainButton;
