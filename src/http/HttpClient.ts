import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  IRequestInterceptor,
  IResponseInterceptor,
} from "@/services/interceptors/types";

class HttpClient {
  protected http: AxiosInstance;

  /**
   * @param config {AxiosRequestConfig}
   */
  constructor(config = {}) {
    this.http = axios.create(config);
  }

  /**
   * Return axios config for current instance
   */
  get config(): AxiosRequestConfig {
    return this.http.defaults;
  }

  /**
   * Apply an interceptor before send request
   * @param interceptor
   */
  applyInterceptorRequest(interceptor: IRequestInterceptor): void {
    this.http.interceptors.request.use(interceptor);
  }

  /**
   * Apply an interceptor after endpoint response
   * @param interceptor
   */
  applyInterceptorResponse(interceptor: IResponseInterceptor): void {
    this.http.interceptors.response.use(interceptor);
  }

  /**
   * Make a generic request
   * @param config: {AxiosRequestConfig}
   */
  request<T = unknown, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  /**
   * Make a GET request
   * @param url
   * @param params
   * @param conf {AxiosRequestConfig}
   * @returns {Promise<AxiosResponse<T> | never>}
   */
  get<T = unknown, R = AxiosResponse<T>>(
    url: string,
    params: Record<string, unknown> = {},
    conf: AxiosRequestConfig = {}
  ): Promise<R> {
    return this.http.get(url, { ...conf, params });
  }

  /**
   * Make a POST request
   * @param url
   * @param data
   * @param conf {AxiosRequestConfig}
   * @returns {Promise<AxiosResponse<T> | never>}
   */
  post<T = unknown, R = AxiosResponse<T>>(
    url: string,
    data: unknown | Record<string, unknown> = {},
    conf: AxiosRequestConfig = {}
  ): Promise<R> {
    return this.http.post(url, data, conf);
  }

  /**
   * Make a PUT request
   * @param url
   * @param data
   * @param conf {AxiosRequestConfig}
   * @returns {Promise<AxiosResponse<T> | never>}
   */
  put<T = unknown, R = AxiosResponse<T>>(
    url: string,
    data: unknown | Record<string, unknown> = {},
    conf: AxiosRequestConfig = {}
  ): Promise<R> {
    return this.http.put(url, data, conf);
  }

  /**
   * Make a PATCH request
   * @param url
   * @param data
   * @param conf {AxiosRequestConfig}
   * @returns {Promise<AxiosResponse<T> | never>}
   */
  patch<T = unknown, R = AxiosResponse<T>>(
    url: string,
    data: unknown | Record<string, unknown> = {},
    conf: AxiosRequestConfig = {}
  ): Promise<R> {
    return this.http.patch(url, data, conf);
  }

  /**
   * Make a DELETE request
   * @param url
   * @param conf {AxiosRequestConfig}
   * @returns {Promise<AxiosResponse<T> | never>}
   */
  delete<T = unknown, R = AxiosResponse<T>>(
    url: string,
    conf: AxiosRequestConfig = {}
  ): Promise<R> {
    return this.http.delete(url, conf);
  }

  /**
   * Make a HEAD request
   * @param url
   * @param conf {AxiosRequestConfig}
   * @returns {Promise<AxiosResponse<T> | never>}
   */
  head<T = unknown, R = AxiosResponse<T>>(
    url: string,
    conf: AxiosRequestConfig = {}
  ): Promise<R> {
    return this.http.head(url, conf);
  }

  /**
   * Make a OPTIONS request
   * @param url
   * @param conf {AxiosRequestConfig}
   * @returns {Promise<T | never>}
   */
  options<T = unknown, R = AxiosResponse<T>>(
    url: string,
    conf: AxiosRequestConfig = {}
  ): Promise<R> {
    return this.http.options(url, conf);
  }
}

export default HttpClient;
