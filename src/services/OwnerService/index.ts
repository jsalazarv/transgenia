import BaseService from "@/services/BaseService";
import { IPlainResponse } from "@/services/types";
import { IBusinessQueryParams } from "@/services/OwnerService/types";
import IOwner from "@/entities/owner";
import IBusiness from "@/entities/business";

export default class OwnerService extends BaseService {
  all(): IPlainResponse<Array<IOwner>> {
    return this.client.get("/bussiness_owner");
  }

  getOwnerBusinesses(
    id: string,
    params: IBusinessQueryParams = {}
  ): IPlainResponse<Array<IBusiness>> {
    return this.client.get(`/bussiness_owner/${id}/business`, params);
  }
}
