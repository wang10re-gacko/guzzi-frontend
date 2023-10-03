import { ErrorBoundary } from '@toss/error-boundary';
import { isAxiosError } from 'axios';
import { Route } from 'constants/Route';
import { ReactNode } from 'react';
import { withBaseURL } from 'utils/env';
import { HTTP_STATUS_CODE } from 'utils/http/constants';

export default function AuthErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      ignoreError={error => {
        const isAuthError = isAxiosError(error) && error.response?.status === HTTP_STATUS_CODE.UNAUTHORIZED;
        return !isAuthError;
      }}
      renderFallback={() => null}
      onError={() => {
        const currentLocation = window.location.pathname + window.location.search;
        window.location.href = withBaseURL(Route.LOGIN({ redirectUrl: currentLocation }));
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
