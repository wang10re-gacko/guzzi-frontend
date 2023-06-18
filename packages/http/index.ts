import axios from 'axios';
import { getApiBaseURL, withBaseURL } from './utils/baseUrl';

import { HttpClient } from './models/HttpClient';
import { withErrorHandler, withSuccessHandler } from './handlers';

const axiosInstance: HttpClient = axios.create({
  baseURL: getApiBaseURL(),
  withCredentials: true,
});

withErrorHandler(axiosInstance);
withSuccessHandler(axiosInstance);

export const http = axiosInstance;
