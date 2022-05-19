import initialState from '../initialState';
import { Actions } from '../actions/placesActions/types';
import { StateIF, PlacesIF } from '../initialState';

type Action = {
  type: Actions;
  payload: {
    message: string | null;
    places: [];
    place: PlacesIF;
    placeId: string;
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
      const arr: PlacesIF[] = Object.assign([], state.placesData);
      arr.push(payload.place);
      return {
        ...state,
        placesData: arr,
      };
    }
    case Actions.CREATE_PLACE_FAIL: {
      return {
        ...state,
        error: payload.message,
      };
    }
    case Actions.DELETE_PLACE_SUCCESS: {
      const arr: PlacesIF[] = Object.assign([], state.placesData);
      const index = state.placesData.findIndex((x) => x.id === payload.placeId);

      arr.splice(index, 1);
      return {
        ...state,
        placesData: arr,
      };
    }
    case Actions.DELETE_PLACE_FAIL: {
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
