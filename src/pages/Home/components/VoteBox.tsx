import { Stack, Flex, Spacing } from '@toss/emotion-utils';
import { colors } from 'constants/colors';
import Button from 'components/Button';
import Txt from 'components/Txt';
import { Vote } from 'models/vote';

export default function VoteBox(props: Vote) {
  return (
    <>
      <Stack.Horizontal gutter={12} align="center" css={{ justifyContent: 'space-between' }}>
        <Txt size="semi-big" colors="grey300">
          {props.time}
        </Txt>
        {props.mine ? (
          <Button onClick={() => {}} css={{ width: '40px', height: '40px' }}>
            삭제
          </Button>
        ) : (
          <Spacing size={40} />
        )}
      </Stack.Horizontal>
      <Spacing size={12} />

      <Txt size="semi-big">{props.title}</Txt>
      <Spacing size={12} />

      <Button
        // type={props.myClick === 0 ? 'primary' : 'default'}
        isSelected={props.myClick === 0}
        onClick={() => {
          // api
        }}
        css={{ width: '100%' }}
      >
        {props.question1}
      </Button>
      <Spacing size={12} />
      <Button
        // type={props.myClick === 1 ? 'primary' : 'default'}
        isSelected={props.myClick === 1}
        onClick={() => {
          // api
        }}
        css={{ width: '100%' }}
      >
        {props.question2}
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
