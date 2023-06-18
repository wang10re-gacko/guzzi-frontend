import { match } from 'ts-pattern';

export const getEnv = () => {
  return process.env.NODE_ENV;
};

// ts-prune-ignore-next
export const isDevelopmentEnv = () => {
  return getEnv() === 'development';
};

// ts-prune-ignore-next
export const isProductionEnv = () => {
  return getEnv() === 'production';
};

// ts-prune-ignore-next
export const isTestEnv = () => {
  return getEnv() === 'test';
};

export const isServer = () => {
  return typeof window === 'undefined';
};

export const withBaseURL = (path: string = '') => {
  return match(getEnv())
    .with('development', () => `http://localhost:3000${path}`)
    .with('production', () => `http://localhost:3000${path}`)
    .with('test', () => `http://localhost:3000${path}`)
    .otherwise(() => `http://localhost:3000${path}`);
};
