import { ChakraProvider } from '@chakra-ui/react';
import { OverlayProvider } from '@toss/use-overlay';
import { ReactNode } from 'react';

export default function UIProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </ChakraProvider>
  );
}
