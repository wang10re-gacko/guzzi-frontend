import { QS } from '@toss/utils';

export const Route = {
  EXAMPLE: () => '/example',
  HOME: () => '/',
  WRITING: () => '/writing',
  LOGIN: (query: { redirectUrl?: string }) => `/login${QS.create(query)}`,
  SIGN_UP: (query: { redirectUrl?: string }) => `/signup${QS.create(query)}`,
};
