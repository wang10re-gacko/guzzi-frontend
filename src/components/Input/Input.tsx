import { ComponentProps, forwardRef } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';
import { colors } from 'constants/colors';

type Props = ComponentProps<typeof ChakraInput>;

const Input = forwardRef(function Input(props: Props, forwardedRef) {
  return (
    <ChakraInput
      {...props}
      focusBorderColor={colors.orange}
      borderColor={colors.grey200}
      color={colors.white}
      variant="flushed"
      spellCheck={false}
      _placeholder={{ opacity: 1, color: colors.grey200 }}
      ref={forwardedRef}
    />
  );
});

export default Input;
