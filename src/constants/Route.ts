import { QS } from '@toss/utils';

export const Route = {
  HOME: () => '/',
  LOGIN: (query: { redirectUrl: string }) => `/login${QS.create(query)}`,
};
