import { IResponseInterceptor } from "@/services/interceptors/types";

/**
 * @param response
 * @constructor
 */
const DataResponseInterceptor: IResponseInterceptor = (response) => {
  const isBlob = response.data instanceof Blob;
  return isBlob ? response : response.data;
};

export default DataResponseInterceptor;
