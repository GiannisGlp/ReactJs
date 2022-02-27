import apiServices from '../../../services/apiServices'
import * as types from './types'
import {AppDispatch} from "../../store" 

export const getUsersData = () => {
  return async (dispatch:AppDispatch) =>
    await dispatch(
      apiServices({
        url: '/users',
        method:'get',
        SUCCESS: types.GET_ALL_USERS_SUCCESS,
        FAILURE: types.GET_ALL_USERS_FAIL,
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
        SUCCESS: types.SIGNUP_SUCCESS,
        FAILURE: types.SIGNUP_FAIL,
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
        SUCCESS: types.LOGIN_SUCCESS,
        FAILURE: types.LOGIN_FAIL,
      }),
    );
};
