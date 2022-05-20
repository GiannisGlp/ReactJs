import apiServices from '../../../services/apiServices';
import { Actions } from './types';
import { AppDispatch } from '../../store';

export interface CreatePlaceData {
  address: string;
  title: string;
  description: string;
  creator: string;
}

type GetPlaceByUserID = {
  uid: string;
};
export type DeletePlace = {
  pid: string;
};
export interface UpdatePlaceData {
  description: string;
  title: string;
}

export const getPlacesByUserId = (params: GetPlaceByUserID) => {
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

export const createPlace = (data: CreatePlaceData) => {
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

export const deletePlace = (params: DeletePlace) => {
  return async (dispatch: AppDispatch) =>
    await dispatch(
      apiServices({
        url: '/places/deletePlace',
        method: 'delete',
        params: params,
        SUCCESS: Actions.DELETE_PLACE_SUCCESS,
        FAILURE: Actions.DELETE_PLACE_FAIL,
      })
    );
};

export const updatePlace = (params: DeletePlace, data: UpdatePlaceData) => {
  return async (dispatch: AppDispatch) =>
    await dispatch(
      apiServices({
        url: '/places/updatePlace',
        method: 'patch',
        params: params,
        data: data,
        SUCCESS: Actions.UPDATE_PLACE_SUCCESS,
        FAILURE: Actions.UPDATE_PLACE_FAIL,
      })
    );
};
