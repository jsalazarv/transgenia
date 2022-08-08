import BaseService from "@/services/BaseService";
import { IPlainResponse } from "@/services/types";
import IOwner from "@/entities/owner";

export default class OwnerService extends BaseService {
  all(): IPlainResponse<Array<IOwner>> {
    return this.client.get("/bussiness_owner");
  }
}
