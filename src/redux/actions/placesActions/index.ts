import apiServices from '../../../services/apiServices'
import * as types from './types'
import {AppDispatch} from "../../store" 

export const getPlacesByUserId = (params:object) => {
  return async (dispatch:AppDispatch) =>
    await dispatch(
      apiServices({
        url: '/places/getPlacesByUserId',
        method:'get',
        params:params,
        SUCCESS: types.GET_ALL_PLACES_SUCCESS,
        FAILURE: types.GET_ALL_PLACES_FAIL,
      }),
    );
};


