import { useEffect, useRef, useState } from "react";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from "axios";

export const configuredAxios = (removeBaseUrl?: boolean): AxiosInstance => {
  const http = axios.create({
    timeout: 20000,
    baseURL: removeBaseUrl ? undefined : process.env.apiUrl || "",
  });

  http?.interceptors.request.use(
    (config: any) => {
      if (!config.headers) return;

      !config.headers["api_key"] &&
        (config.headers["api_key"] = process.env.api_key);
      !config.headers["access_token"] &&
        (config.headers["access_token"] = process.env.access_token);
      !config.headers["branch"] &&
        (config.headers["branch"] = process.env.branch);

      return config;
    },
    (error: any) => Promise.reject(error)
  );

  return http;
};

export interface iUseApi {
  apiCall: (configObj: AxiosRequestConfig) => Promise<AxiosResponse>;
}

/**
 * Makes api requests
 * @param removeBaseUrl makes api request without base url
 * @returns {iUseApi} iUseApi
 */
export const useApi = (removeBaseUrl?: boolean): iUseApi => {
  const [http] = useState<AxiosInstance>(() => configuredAxios(removeBaseUrl));
  const activeRequest = useRef<CancelTokenSource | null>(null);

  // useEffect(() => () => { activeRequest.current && activeRequest.current.cancel() }, []);

  const apiCall = (configObj: AxiosRequestConfig): Promise<AxiosResponse> => {
    let cancelSource = axios.CancelToken.source();

    activeRequest.current = cancelSource;

    return http
      ?.request({
        ...configObj,
        cancelToken: cancelSource.token,
      })
      .finally(() => (activeRequest.current = null));
  };

  return { apiCall };
};
