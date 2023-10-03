import { match } from 'ts-pattern';
import { getEnv } from 'utils/env';

export const getApiBaseURL = () => {
  return match(getEnv())
    .with('development', () => 'http://15.164.163.84:8080')
    .with('production', () => 'http://15.164.163.84:8080')
    .with('test', () => 'http://15.164.163.84:8080')
    .otherwise(() => 'http://15.164.163.84:8080');
};

