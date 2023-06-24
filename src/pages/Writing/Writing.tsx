import { Spacing } from '@toss/emotion-utils';
import { Route } from 'constants/Route';
import { useRouter } from 'next/router';
import { colors } from 'constants/colors';
import BottomSheet from 'components/BottomSheet';
import Button from 'components/Button';
import Input from 'components/Input';
import Txt from 'components/Txt';

export default function Writing() {
  const router = useRouter();

  return (
    <>
      <Spacing size={20} />
      <Txt size="medium">사람들에게 물어보세요</Txt>
      <Spacing size={12} />
      <Input placeholder="질문을 입력해주세요" />
      <Spacing size={32} />

      <Txt size="medium" colors="orange">
        이렇게 답변해 줄 거에요.
      </Txt>
      <Spacing size={12} />
      <Input type="primary" placeholder="질문1" />
      <Spacing size={12} />
      <Input type={'primary'} placeholder="질문2" />

      <BottomSheet>
        <Button
          type={'primary'}
          onClick={() => {
            router.push(Route.HOME());
          }}
          css={{ width: '100%', height: '48px', background: `${colors.orange}` }}
        >
          올리기
        </Button>
      </BottomSheet>
    </>
  );
}
