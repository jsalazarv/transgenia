import { IAuth } from "@/config/types";

const auth: IAuth = {
  refresh: {
    timeInterval: 20, // minutes
    timeOffset: 10, // minutes
    maxAttempts: 3,
  },
};

export default auth;
