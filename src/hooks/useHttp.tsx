import {useApi} from "./useApi";
import {useAsync} from "./useAsync";
import {AxiosRequestConfig} from "axios";
import {useEffect} from "react";

type tUseHttp = {
  config?: AxiosRequestConfig;
  onMountCall?: boolean;
};

export type tUseHttpReturn = ReturnType<typeof useHttp>;

export const useHttp = (params?: tUseHttp) => {
  const {apiCall} = useApi();
  const {run, data, error, isError, isIdle, isLoading, isSuccess} = useAsync();

  const call = async (config: AxiosRequestConfig) => run(apiCall(config));

  useEffect(() => {
    params?.onMountCall && params?.config && call(params?.config);
  }, []); // eslint-disable-line

  return {call, data, error, isError, isIdle, isLoading, isSuccess};
};
