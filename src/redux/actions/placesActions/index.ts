import apiServices from '../../../services/apiServices';
import { Actions } from './types';
import { AppDispatch } from '../../store';

export const getPlacesByUserId = (params: object) => {
  return async (dispatch: AppDispatch) =>
    await dispatch(
      apiServices({
        url: '/places/getPlacesByUserId',
        method: 'get',
        params: params,
        SUCCESS: Actions.GET_ALL_PLACES_SUCCESS,
        FAILURE: Actions.GET_ALL_PLACES_FAIL,
      })
    );
};

export const createPlace = (data: object) => {
  return async (dispatch: AppDispatch) =>
    await dispatch(
      apiServices({
        url: '/places/createPlace',
        method: 'post',
        data: data,
        SUCCESS: Actions.CREATE_PLACE_SUCCESS,
        FAILURE: Actions.CREATE_PLACE_FAIL,
      })
    );
};
