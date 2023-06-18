import axios from 'axios';
import { getApiBaseURL } from './baseUrl';

import { HttpClient } from './models';
import { withErrorHandler, withSuccessHandler } from './interceptors';

const axiosInstance: HttpClient = axios.create({
  baseURL: getApiBaseURL(),
  withCredentials: true,
});

withSuccessHandler(axiosInstance);
withErrorHandler(axiosInstance);

// ts-prune-ignore-next
export const http = axiosInstance;
