import { AxiosRequestConfig } from "axios";

import config from "../config";
import HttpClient from "@/http/HttpClient";

class ClientFactory {
  /**
   * Default axios configuration
   * @type {AxiosRequestConfig}
   */
  static defaultConfig: AxiosRequestConfig =
    config.api.connections[config.api.default];

  /**
   * Build a new Instance of HttpClient
   * @param options {AxiosRequestConfig}
   * @returns {HttpClient}
   */
  static build(options: AxiosRequestConfig = {}): HttpClient {
    return new HttpClient({ ...ClientFactory.defaultConfig, ...options });
  }

  /**
   * Build a new Instance of HttpClient
   * @param name string
   * @param options AxiosRequestConfig
   * @returns {HttpClient}
   */
  static buildByName(name: string, options?: AxiosRequestConfig): HttpClient {
    const selectedConfig = config.api.connections[name];

    if (!selectedConfig) {
      throw new Error(`Config not found for: ${name}`);
    }

    return new HttpClient({ ...selectedConfig, ...options });
  }
}

export default ClientFactory;
