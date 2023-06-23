import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { OverlayProvider } from '@toss/use-overlay';
import { ReactNode } from 'react';

export default function UIProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading: 'Pretendard',
          body: 'Pretendard',
          mono: 'Pretendard',
        },
      })}
    >
      <OverlayProvider>{children}</OverlayProvider>
    </ChakraProvider>
  );
}
