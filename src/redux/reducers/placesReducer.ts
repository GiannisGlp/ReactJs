import initialState from '../initialState';
import { Actions } from '../actions/placesActions/types';
import { StateIF } from '../initialState';

type Action = {
  type: Actions;
  payload: {
    message: string | null;
    places: [];
  };
};

export default function placesReducer(
  state = initialState.places,
  action: Action
): StateIF['places'] {
  const { type, payload } = action;
  switch (type) {
    case Actions.GET_ALL_PLACES_SUCCESS: {
      return {
        ...state,
        placesData: payload.places,
      };
    }
    case Actions.GET_ALL_PLACES_FAIL: {
      return {
        ...state,
        error: payload.message,
      };
    }
    case Actions.CREATE_PLACE_SUCCESS: {
      return {
        ...state,
        createdPlace: payload,
      };
    }
    case Actions.CREATE_PLACE_FAIL: {
      return {
        ...state,
        error: payload.message,
      };
    }
    default:
      return state;
  }
}

export const placesSelector = (state: StateIF) => {
  return state.places;
};
