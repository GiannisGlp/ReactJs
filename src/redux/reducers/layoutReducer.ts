import initialState from '../initialState';
import { Actions } from '../actions/layouActions/types';
import { StateIF, ColorMode } from '../initialState';

type Action = {
  type: Actions;
  payload: ColorMode;
};

export default function layoutReducer(
  state = initialState.layout,
  action: Action
): StateIF['layout'] {
  const { type, payload } = action;

  switch (type) {
    case Actions.CHANGE_COLOR_MODE: {
      return {
        ...state,
        colorMode: payload,
      };
    }

    default:
      return state;
  }
}

export const layoutSelector = (state: StateIF) => {
  return state.layout;
};
