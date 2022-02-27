import initialState from "../initialState";
import * as types from "../actions/placesActions/types"


export default function placesReducer(state = initialState.places, action:{payload:any; type:string}) {
  switch (action.type) {
    case types.GET_ALL_PLACES_SUCCESS: {
      return {
        ...state,
        placesData: action.payload.places,
      };
    }
     case types.GET_ALL_PLACES_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export const placesSelector = (state:any) => {
  return state.places;
};