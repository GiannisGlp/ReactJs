import classes from './layout.module.css';
import { useSelector } from 'react-redux';
import { layoutSelector } from '../redux/reducers/layoutReducer';

export const LayoutText = (className?: any) => {
  const { colorMode } = useSelector(layoutSelector);
  if (colorMode === 'light') {
    return [className, classes.lightModeText].join(' ');
  } else {
    return [className, classes.darkModeText].join(' ');
  }
};

export const LayoutBackground = (className?: any) => {
  const { colorMode } = useSelector(layoutSelector);
  if (colorMode === 'light') {
    return [className, classes.lightModeBackgroundColor].join(' ');
  } else {
    return [className, classes.darkModeBackgroundColor].join(' ');
  }
};

export const LayoutInput = (className?: any) => {
  const { colorMode } = useSelector(layoutSelector);
  if (colorMode === 'light') {
    return [
      className,
      classes.lightModeBackgroundColor,
      classes.lightModeText,
    ].join(' ');
  } else {
    return [className, classes.darkModeInput, classes.darkModeText].join(' ');
  }
};
