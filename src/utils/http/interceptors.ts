import { AxiosError } from 'axios';

import { match } from 'ts-pattern';
import { HTTP_STATUS_CODE } from './constants';
import { isServer, withBaseURL } from 'utils/env';
import { HttpClient } from './models';
import { Route } from 'constants/Route';

export const withSuccessHandler = (httpClient: HttpClient) => {
  httpClient.interceptors.response.use(response => response.data);
};

const handleUnauthorized = (_: AxiosError) => {
  if (!isServer()) {
    const currentLocation = window.location.pathname + window.location.search;
    window.location.href = withBaseURL(Route.LOGIN({ redirectUrl: currentLocation }));
  }
};

const handleError = (error: AxiosError) => {
  return Promise.reject(error);
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
