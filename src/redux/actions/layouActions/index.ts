import { Actions } from './types';
import { ColorMode } from '../../initialState';

export const changeColorDark = (mode: ColorMode) => {
  return {
    type: Actions.CHANGE_COLOR_MODE,
    payload: mode,
  };
};
