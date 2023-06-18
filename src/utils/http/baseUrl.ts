import { match } from 'ts-pattern';
import { getEnv } from 'utils/env';

export const getApiBaseURL = () => {
  return match(getEnv())
    .with('development', () => 'http://localhost:8080')
    .with('production', () => 'http://localhost:8080')
    .with('test', () => 'http://localhost:8080')
    .otherwise(() => 'http://localhost:8080');
};
