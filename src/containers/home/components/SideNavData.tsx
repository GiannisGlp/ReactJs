import React from 'react';
import {
  SportsBasketball,
  SportsSoccer,
  SportsTennis,
  GolfCourse,
  SportsFootballOutlined,
} from '@material-ui/icons';

export const sideNavData = [
  {
    name: 'Basketball',
    icon: <SportsBasketball style={{ color: 'orange' }} />,
  },
  {
    name: 'Soccer',
    icon: <SportsSoccer style={{ color: 'white' }} />,
  },
  {
    name: 'Tennis',
    icon: <SportsTennis style={{ color: 'blue' }} />,
  },
  {
    name: 'Golf',
    icon: <GolfCourse style={{ color: 'green' }} />,
  },
  {
    name: 'Football',
    icon: <SportsFootballOutlined style={{ color: 'orange' }} />,
  },
];
