import { ComponentProps } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

type Props = ComponentProps<typeof ChakraInput>;

export default function Input(props: Props) {
  return <ChakraInput {...props} />;
}
