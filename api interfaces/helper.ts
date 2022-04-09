import axios from "axios";
import helper from "../pages/api/api helper"

export interface ApiResult<T> {
  isSuccess: boolean;
  data: T;
  error: string;
}

const apiSuccess = <T>(data:T) => { return {isSuccess: true, data} as ApiResult<T> }
const apiFailure = <T>(error:any) => { return {isSuccess: false, error:helper.getErrorString(error) } as ApiResult<T> }

const get = <T>(url:string) => axios.get(url)
  .then(response => apiSuccess(response.data as T))
  .catch(error => apiFailure<T>(error))

const post = <T>(url:string, data:T) => axios.post(url, data)
  .then(response => apiSuccess(response.data as T))
  .catch(error => apiFailure<T>(error))

export {get, post, apiSuccess, apiFailure}