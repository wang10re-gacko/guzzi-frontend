export const getEnv = () => {
  return process.env.NODE_ENV;
};

export const isDevelopmentEnv = () => {
  return getEnv() === 'development';
};

export const isProductionEnv = () => {
  return getEnv() === 'production';
};

export const isTestEnv = () => {
  return getEnv() === 'test';
};

export const isServer = () => {
  return typeof window === 'undefined';
};
