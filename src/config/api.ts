import { IApi } from "@/config/types";

const api: IApi = {
  default: "api",
  // If this app run in another domain use full url schema for baseURL connections
  connections: {
    api: {
      baseURL: process.env.VUE_APP_API_HOST,
      timeout: 50000,
    },
  },
};

export default api;
