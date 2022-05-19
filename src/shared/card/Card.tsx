import React, { ReactNode } from 'react';
import classes from './Card.module.css';

type Children = {
  children: ReactNode;
};

const Card = ({ children }: Children) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
