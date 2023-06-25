import { ButtonHTMLAttributes, ComponentProps, forwardRef } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { match } from 'ts-pattern';
import { colors } from 'constants/colors';
import { css } from '@emotion/react';

type Props = Omit<ComponentProps<typeof ChakraButton>, 'type'> & {
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  type?: 'primary' | 'default';
  isSelected?: boolean;
};

const Button = forwardRef(function Button(
  { children, htmlType, type = 'default', isSelected = false, ...props }: Props,
  forwardedRef,
) {
  return (
    <ChakraButton
      {...props}
      loadingText={children}
      type={htmlType}
      backgroundColor={
        isSelected
          ? colors.grey400
          : match(type)
              .with('primary', () => colors.orange)
              .with('default', () => colors.grey300)
              .exhaustive()
      }
      color={
        isSelected
          ? colors.grey200
          : match(type)
              .with('primary', () => colors.white)
              .with('default', () => colors.grey100)
              .exhaustive()
      }
      css={css`
        &:hover {
          background-color: ${match(type)
            .with('primary', () => brighten(colors.orange))
            .with('default', () => brighten(colors.grey100))
            .exhaustive()};
        }
      `}
      selected={true}
      isDisabled={props.isDisabled}
      ref={forwardedRef}
    >
      {children}
    </ChakraButton>
  );
});

export default Button;

const brighten = (color: string) => {
  return `${color}90`;
};
