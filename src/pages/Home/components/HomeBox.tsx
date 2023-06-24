import { Stack, Flex } from '@toss/emotion-utils';
import { Spacing } from '@toss/emotion-utils';
import { colors } from 'constants/colors';
import Button from 'components/Button';
import Txt from 'components/Txt';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  writeId: number;
  time: string;
  contents: string;
  mine: boolean;
  btn1: string;
  btn2: string;
  clickCnt: number;
}

export default function HomeBox({ ...props }: Props) {
  return (
    <>
      <Stack.Horizontal gutter={12} align="center" css={{ justifyContent: 'space-between' }}>
        <Txt size="semi-big" colors="grey300">
          {props.time}
        </Txt>
        {props.mine ? <Button onClick={() => {}}>삭제</Button> : <Button onClick={() => {}}>세팅</Button>}
      </Stack.Horizontal>
      <Spacing size={12} />

      <Txt size="semi-big">{props.contents}</Txt>
      <Spacing size={12} />

      <Button onClick={() => {}} css={{ width: '100%' }}>
        {props.btn1}
      </Button>
      <Spacing size={12} />
      <Button onClick={() => {}} css={{ width: '100%' }}>
        {props.btn2}
      </Button>
      <Spacing size={12} />

      <Txt size="semi-big" colors="grey200">
        {props.clickCnt}명
      </Txt>
      <Txt size="semi-big" colors="grey300">
        이 눌렀어요
      </Txt>
      <Spacing size={12} />

      <Spacing size={20} />
      <Flex css={{ borderBottom: `1px solid ${colors.grey400}` }} />
      <Spacing size={32} />
    </>
  );
}
