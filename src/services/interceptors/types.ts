import { AxiosRequestConfig, AxiosResponse } from "axios";

export type IRequestInterceptor = (
  config: AxiosRequestConfig
) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
export type IResponseInterceptor<T = AxiosResponse> = (
  response: AxiosResponse
) => T | Promise<T> | AxiosResponse | Promise<AxiosResponse>;
