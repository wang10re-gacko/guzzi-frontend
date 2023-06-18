import { useRouter } from 'next/router';

interface Options<T> {
  parser?: (val: string) => T;
  suspense?: boolean;
  required?: boolean;
}

export function useQueryParam<T = string>(name: string): T | undefined;
export function useQueryParam<T = string>(name: string, options: Options<T> & { required: true }): T;
export function useQueryParam<T = string>(name: string, options: Options<T>): T | undefined;
export function useQueryParam<T = string>(name: string, options?: Options<T>) {
  const router = useNextRouter({ suspense: options?.suspense });

  const value = router.query[name] as string | undefined;

  if (options?.required === true && value == null) {
    throw new Error(`${name} is required`);
  }

  if (options?.parser != null && value != null) {
    return options.parser(value);
  }

  return value;
}

function useNextRouter<T = string>(options: Options<T> = { suspense: true }) {
  const router = useRouter();

  if (options.suspense && !router.isReady) {
    throw waitForRouterReady();
  }

  return router;
}

function waitForRouterReady() {
  const router = useRouter();

  return new Promise<void>(resolve => {
    if (router.isReady) {
      resolve();
    }
  });
}
