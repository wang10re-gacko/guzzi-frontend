import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

export default function useToaster() {
  const openToast = useToast();

  const successToast = useCallback(
    (message: string) =>
      openToast({
        description: message,
        status: 'success',
        duration: 1500,
        position: 'top',
        isClosable: true,
      }),
    [],
  );

  const errorToast = useCallback(
    (message: string) =>
      openToast({
        description: message,
        status: 'error',
        duration: 1500,
        position: 'top',
        isClosable: true,
      }),
    [],
  );

  return {
    successToast,
    errorToast,
  };
}
