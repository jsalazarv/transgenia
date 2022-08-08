import { IQueryParams } from "@/services/types";

export interface IBusinessQueryParams extends IQueryParams {
  pet_friendly?: boolean;
  accept_cards?: boolean;
}
