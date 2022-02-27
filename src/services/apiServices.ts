import { axiosInstance } from "../axios";
import {AppDispatch} from "../redux/store"
import { AxiosResponse } from 'axios';
import { Method } from "axios";
import qs from "qs";

 
interface Data {
  url:string,
  params?:object,
  data?:object ,
  method:Method,
  SUCCESS:string,
  FAILURE:string
}


const apiServices = ({ url, params={},data={}, method, SUCCESS, FAILURE }:Data)=> {
  return async (dispatch:AppDispatch) => {
    let response:AxiosResponse;
    // axiosInstance.defaults.params = qs.stringify(params);
    axiosInstance.defaults.method = method
    console.log(qs.stringify(params))
    try {
      response = await axiosInstance(url,{data:qs.stringify(data), params:params});
      console.log(response)
      dispatch({
        type: SUCCESS,
        status: response.status,
        payload: response.data,
      });
    } catch (error:any) {
      const errorResponse = (({ response }) => ({
        
        response,
      }))(error);
      console.log(errorResponse)
      return dispatch({
        type: FAILURE,
        status: errorResponse?.response?.status,
        payload: errorResponse?.response?.data?.message,
      });
    }
  };
};

export default apiServices;