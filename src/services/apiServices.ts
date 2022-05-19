import { axiosInstance } from '../utilities/axios';
import { AppDispatch } from '../redux/store';
import { AxiosResponse } from 'axios';
import { Method } from 'axios';
import qs from 'qs';

interface Data {
  url: string;
  params?: object;
  data?: object;
  method: Method;
  SUCCESS: string;
  FAILURE: string;
}

const apiServices = ({
  url,
  params = {},
  data = {},
  method,
  SUCCESS,
  FAILURE,
}: Data) => {
  return async (dispatch: AppDispatch) => {
    let response: AxiosResponse;
    // axiosInstance.defaults.params = qs.stringify(params);
    axiosInstance.defaults.method = method;
    try {
      response = await axiosInstance(url, {
        data: qs.stringify(data),
        params: params,
      });
      dispatch({
        type: SUCCESS,
        status: response.status,
        payload: response.data,
      });
    } catch (error: any) {
      const errorResponse = (({ response }) => ({
        response,
      }))(error);
      return dispatch({
        type: FAILURE,
        status: errorResponse?.response?.status,
        payload: errorResponse?.response?.data,
      });
    }
  };
};

export default apiServices;
