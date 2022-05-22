import React from 'react';
import './Toggle.css';
import { LayoutText } from '../../utilities/layout';

interface Props {
  onClick: () => void;
  title: string;
}

const Toggle = ({ title, onClick }: Props) => {
  return (
    <div className="switchWrapper">
      <label className="switch">
        <input
          onChange={onClick}
          type="checkbox"
          checked={title === 'dark' ? true : false}
        />
        <span className="slider round"></span>
      </label>
      <p className="switchTitle">{title}</p>
    </div>
  );
};

export default Toggle;
