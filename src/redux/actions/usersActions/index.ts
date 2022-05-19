import apiServices from '../../../services/apiServices'
import {Actions} from './types'
import {AppDispatch} from "../../store" 

export const getUsersData = () => {
  return async (dispatch:AppDispatch) =>
    await dispatch(
      apiServices({
        url: '/users',
        method:'get',
        SUCCESS: Actions.GET_ALL_USERS_SUCCESS,
        FAILURE: Actions.GET_ALL_USERS_FAIL,
      }),
    );
};

export const signup = (data:object) => {
  return async (dispatch:AppDispatch) =>
    await dispatch(
      apiServices({
        url: '/users/signup',
        method:'post',
        data:data,
        SUCCESS: Actions.SIGNUP_SUCCESS,
        FAILURE: Actions.SIGNUP_FAIL,
      }),
    );
};


export const login = (data:object) => {
  return async (dispatch:AppDispatch) =>
    await dispatch(
      apiServices({
        url: '/users/login',
        method:'post',
        data:data,
        SUCCESS: Actions.LOGIN_SUCCESS,
        FAILURE: Actions.LOGIN_FAIL,
      }),
    );
};
