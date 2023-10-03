import { ReactNode, useEffect } from 'react';

export default function CookieProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.cookie = 'crossCookie=bar; SameSite=None; Secure';
  }, []);
  return children;
}
