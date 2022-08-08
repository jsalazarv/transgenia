import { AxiosResponse } from "axios";

export type IPlainResponse<T> = Promise<T>;

export type INoContentResponse = Promise<AxiosResponse<void>>;

export interface IQueryParams extends Record<string, unknown> {
  query?: string;
}
