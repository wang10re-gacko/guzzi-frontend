import { ButtonHTMLAttributes, ComponentProps } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { match } from 'ts-pattern';
import { colors } from 'constants/colors';
import { css } from '@emotion/react';

type Props = Omit<ComponentProps<typeof ChakraButton>, 'type'> & {
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  type?: 'primary' | 'default';
};

export default function Button({ children, htmlType, type = 'default', ...props }: Props) {
  return (
    <ChakraButton
      {...props}
      loadingText={children}
      type={htmlType}
      backgroundColor={match(type)
        .with('primary', () => colors.orange)
        .with('default', () => colors.grey300)
        .exhaustive()}
      color={match(type)
        .with('primary', () => colors.white)
        .with('default', () => colors.grey100)
        .exhaustive()}
      css={css`
        &:hover {
          background-color: ${match(type)
            .with('primary', () => brighten(colors.orange))
            .with('default', () => brighten(colors.grey100))
            .exhaustive()};
        }
      `}
    >
      {children}
    </ChakraButton>
  );
}

const brighten = (color: string) => {
  return `${color}90`;
};
