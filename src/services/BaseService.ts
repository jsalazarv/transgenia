import AbstractService from "@/http/AbstractService";
import DataResponseInterceptor from "@/services/interceptors/response/DataResponseInterceptor";

export default class BaseService extends AbstractService {
  static DEFAULT_CONNECTION = "api";

  constructor(
    protected requestInterceptors = [],
    protected responseInterceptors = [DataResponseInterceptor]
  ) {
    super(
      BaseService.DEFAULT_CONNECTION,
      requestInterceptors,
      responseInterceptors
    );
  }
}
