import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ApiContext {
  axios?: AxiosInstance;
  apiState: Record<string, AxiosResponse>;
  request: (request: ApiRequest) => void;
}

const apiContext = createContext<ApiContext>({
  apiState: {},
  request: () => {},
});

interface ApiProviderProps {
  children: ReactNode;
}

export interface ApiRequest<TResponse = any> {
  path: string;
  method?: 'get' | 'post';
  baseURL?: string;
}

const ApiProvider: FC<ApiProviderProps> = ({ children }) => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [apiState, setApiState] = useState<Record<string, AxiosResponse>>({});

  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: baseURL,
    });
  }, [baseURL]);

  async function request<TResponse = any>(request: ApiRequest<TResponse>) {
    const method = request.method || 'get';
    const url = request.path;
    const response = await axiosInstance.request<TResponse>({
      method,
      url,
    });

    setApiState(apiState => ({
      ...apiState,
      [toApiKey(request)]: response,
    }));

    return response;
  }

  return (
    <apiContext.Provider value={{ axios: axiosInstance, apiState, request }}>
      {children}
    </apiContext.Provider>
  );
};

function toApiKey(request: ApiRequest) {
  return `${request.method} ${request.path}`;
}

export function useApi<TResponse = any>(
  props: ApiRequest<TResponse>
): AxiosResponse<TResponse> | undefined {
  const context = useContext(apiContext);

  useEffect(() => {
    console.log('test', props.path);
  }, []);

  useEffect(() => {
    console.log(toApiKey(props));
    context.request(props);
  }, [toApiKey(props)]);

  return context.apiState[toApiKey(props)];
}

export async function getServerSideApi<TResponse = any>(
  request: ApiRequest<TResponse>
): Promise<AxiosResponse<TResponse>> {
  const response = await axios.request({
    headers: {
      Accept: 'application/json;charset=UTF-8',
    },
    baseURL: request.baseURL || process.env.NEXT_PUBLIC_API_BASE_URL,
    method: request.method,
    url: request.path,
  });
  return response;
}

export default ApiProvider;
