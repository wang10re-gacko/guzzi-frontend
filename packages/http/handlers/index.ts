import { AxiosError } from 'axios';
import { HttpClient } from '../models/HttpClient';
import { isServer } from '../utils/env';
import { withBaseURL } from '../utils/baseUrl';
import { match } from 'ts-pattern';
import { HTTP_STATUS_CODE } from '../constants';

const handleUnauthorized = (_: AxiosError) => {
  if (!isServer()) {
    const currentLocation = window.location.pathname + window.location.search;
    window.location.href = withBaseURL(`/login?redirectUrl=${currentLocation}`);
  }
};

const handleError = (error: AxiosError) => {
  return Promise.reject(error);
};

export const withSuccessHandler = (httpClient: HttpClient) => {
  httpClient.interceptors.response.use(response => response.data);
};

export const withErrorHandler = (httpClient: HttpClient) => {
  httpClient.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      match(error.response?.status)
        .with(HTTP_STATUS_CODE.UNAUTHORIZED, () => handleUnauthorized(error))
        .otherwise(() => handleError(error));
    },
  );
};
