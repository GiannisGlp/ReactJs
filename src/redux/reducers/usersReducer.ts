import initialState from "../initialState";
import * as types from "../actions/usersActions/types"


export default function usersReducer(state = initialState.users, action:{payload:any; type:string}) {
  switch (action.type) {
    case types.GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        usersData: action.payload.users,
      };
    }
     case types.GET_ALL_USERS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
     case types.LOGIN_SUCCESS: {
      return {
        ...state,
       loggedIn: true,
      };
    }
     case types.LOGIN_FAIL: {
      return {
        ...state,
       loggedIn: false,
      };
    }
    default:
      return state;
  }
}

export const usersSelector = (state:any) => {
  return state.users;
};