import { ComponentProps } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

type Props = ComponentProps<typeof ChakraInput>;

// ts-prune-ignore-next
export default function Input(props: Props) {
  return <ChakraInput {...props} />;
}
