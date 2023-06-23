import { ComponentProps } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';
import { colors } from 'constants/colors';
import { css } from '@emotion/react';

type Props = ComponentProps<typeof ChakraInput>;

// ts-prune-ignore-next
export default function Input(props: Props) {
  return (
    <ChakraInput
      {...props}
      focusBorderColor={colors.orange}
      borderColor={colors.grey200}
      color={colors.white}
      variant="flushed"
      spellCheck={false}
      _placeholder={{ opacity: 1, color: colors.grey200 }}
    />
  );
}
