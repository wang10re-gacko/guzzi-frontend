import styled from '@emotion/styled';
import { CSSProperties, ElementType, HTMLAttributes } from 'react';
import { match } from 'ts-pattern';
import { colors } from 'constants/colors';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'medium' | 'semi-big' | 'big' | 'extra-big';
  colors?: keyof typeof colors;
  textAlign?: CSSProperties['textAlign'];
  weight?: CSSProperties['fontWeight'];
  as?: ElementType;
}

export default function Txt({ size = 'medium', colors = 'white', textAlign = 'center', ...props }: Props) {
  return <StyledTxt size={size} colors={colors} {...props} />;
}

const StyledTxt = styled.span<Props>`
  width: fit-content;
  font-size: ${props =>
    match(props.size)
      .with('small', () => '12px')
      .with('medium', () => '14px')
      .with('semi-big', () => '16px')
      .with('big', () => '20px')
      .with('extra-big', () => '28px')
      .otherwise(() => '14px')};
  font-weight: ${props => {
    return (
      props.weight ??
      match(props.size)
        .with('small', () => 'normal')
        .with('medium', () => 'normal')
        .with('semi-big', () => 'bold')
        .with('big', () => 'bold')
        .with('extra-big', () => 'bold')
        .otherwise(() => 'normal')
    );
  }};
  color: ${props => colors[props.colors!]};
  text-align: ${props => props.textAlign};
  line-height: ${props =>
    match(props.size)
      .with('small', () => '142x')
      .with('medium', () => '14px')
      .with('semi-big', () => '16px')
      .with('big', () => '20px')
      .with('extra-big', () => '28px')
      .otherwise(() => '14px')};
`;
