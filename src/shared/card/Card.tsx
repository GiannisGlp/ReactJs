import React, { ReactNode } from 'react';
import classes from './Card.module.css';
import { LayoutBackground } from '../../utilities/layout';

type Children = {
  children: ReactNode;
};

const Card = ({ children }: Children) => {
  return <div className={LayoutBackground(classes.card)}>{children}</div>;
};

export default Card;
