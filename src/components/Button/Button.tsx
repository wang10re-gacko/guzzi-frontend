import { ComponentProps } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

type Props = ComponentProps<typeof ChakraButton>;

export default function Button(props: Props) {
  return <Button {...props} />;
}
