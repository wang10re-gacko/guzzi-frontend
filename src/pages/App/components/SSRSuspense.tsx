import { useIsMounted } from '@toss/react';
import { ComponentProps, Suspense } from 'react';

export default function SSRSuspense(props: ComponentProps<typeof Suspense>) {
  const isMounted = useIsMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }

  return <>{props.fallback}</>;
}
