import { match } from 'ts-pattern';
import { getEnv } from '../utils/env';

export const withBaseURL = (path: string = '') => {
  return match(getEnv())
    .with('development', () => `http://localhost:3000${path}`)
    .with('production', () => `http://localhost:3000${path}`)
    .with('test', () => `http://localhost:3000${path}`)
    .otherwise(() => `http://localhost:3000${path}`);
};

export const getApiBaseURL = () => {
  return match(getEnv())
    .with('development', () => 'http://localhost:8080')
    .with('production', () => 'http://localhost:8080')
    .with('test', () => 'http://localhost:8080')
    .otherwise(() => 'http://localhost:8080');
};
