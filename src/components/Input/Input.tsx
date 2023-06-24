import { ButtonHTMLAttributes, ComponentProps, forwardRef } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';
import { match } from 'ts-pattern';
import { colors } from 'constants/colors';
import { css } from '@emotion/react';

type Props = Omit<ComponentProps<typeof ChakraInput>, 'type'> & {
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  type?: 'primary' | 'default';
};

const Input = forwardRef(function Input({ type = 'default', ...props }: Props, forwardedRef) {
  return (
    <ChakraInput
      {...props}
      focusBorderColor={colors.orange}
      borderColor={colors.grey200}
      color={colors.white}
      variant="flushed"
      spellCheck={false}
      _placeholder={{ opacity: 1, color: colors.grey200 }}
      backgroundColor={match(type)
        .with('primary', () => colors.grey400)
        .with('default', () => 'transparent')
        .exhaustive()}
      borderBottomColor={match(type)
        .with('primary', () => 'transparent')
        .with('default', () => colors.grey200)
        .exhaustive()}
      borderRadius={match(type)
        .with('primary', () => '10px')
        .with('default', () => 0)
        .exhaustive()}
      css={css`
        height: 48px;
        padding: 0 16px;
      `}
      ref={forwardedRef}
    />
  );
});

export default Input;
