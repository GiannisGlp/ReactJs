import initialState from "../initialState";
import {Actions} from "../actions/usersActions/types"
import { StateIF } from "../initialState";

type Action ={
    type:Actions,
    payload:{
      users:[],
      message:string | null
    }   
}


export default function usersReducer(state = initialState.users, action:Action):StateIF["users"] {
  const {type,payload} = action
  switch (type) {
    case Actions.GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        usersData: payload.users
      };
    }
     case Actions.GET_ALL_USERS_FAIL: {
      return {
        ...state,
        error: payload.message,
      };
    }
     case Actions.LOGIN_SUCCESS: {
      return {
        ...state,
       loggedIn: true,
      };
    }
     case Actions.LOGIN_FAIL: {
      return {
        ...state,
       loggedIn: false,
      };
    }
    default:
      return state;
  }
}

export const usersSelector = (state:StateIF) => {
  return state.users;
};