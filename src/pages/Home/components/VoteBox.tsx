import { Stack, Flex, Spacing } from '@toss/emotion-utils';
import { colors } from 'constants/colors';
import Button from 'components/Button';
import Txt from 'components/Txt';
import { Vote } from 'models/vote';
import { useMutation } from 'react-query';

export default function VoteItem({
  vote: { CONTENT, FIRST_ANSWER, SECOND_ANSWER, TOTAL_ANSWER_COUNT, CHK },
}: {
  vote: Vote;
}) {
  const handleVoteButtonClick = useMutation(async () => {
    return null;
  });

  return (
    <>
      <Stack.Horizontal gutter={12} align="center" css={{ justifyContent: 'space-between' }}></Stack.Horizontal>
      <Spacing size={12} />
      <Txt size="semi-big">{CONTENT}</Txt>
      <Spacing size={12} />
      <Button
        type={CHK === 'first' ? 'primary' : 'default'}
        disabled={CHK === 'first'}
        isLoading={handleVoteButtonClick.isLoading}
        onClick={() => {
          // api
        }}
        css={{ width: '100%' }}
      >
        {FIRST_ANSWER}
      </Button>
      <Spacing size={12} />
      <Button
        type={CHK === 'second' ? 'primary' : 'default'}
        disabled={CHK === 'second'}
        isLoading={handleVoteButtonClick.isLoading}
        onClick={() => {
          // api
        }}
        css={{ width: '100%' }}
      >
        {SECOND_ANSWER}
      </Button>
      <Spacing size={12} />
      <Txt size="semi-big" colors="grey200">
        {TOTAL_ANSWER_COUNT}명
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
