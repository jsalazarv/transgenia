import { AxiosRequestConfig } from "axios";

export interface IApp {
  name: string;
}

export interface IApiConnections {
  api: AxiosRequestConfig;
  [name: string]: AxiosRequestConfig;
}

export interface IApi {
  default: string;
  connections: IApiConnections;
}

export interface IAuthRefresh {
  timeInterval: number;
  timeOffset: number;
  maxAttempts: number;
}

export interface IAuth {
  refresh: IAuthRefresh;
}

export interface IConfig {
  app: IApp;
  api: IApi;
  auth: IAuth;
}
