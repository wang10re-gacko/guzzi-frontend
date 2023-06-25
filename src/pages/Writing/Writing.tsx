import { ChangeEvent } from 'react';
import { Spacing } from '@toss/emotion-utils';
import { Route } from 'constants/Route';
import { useRouter } from 'next/router';
import { colors } from 'constants/colors';
import BottomSheet from 'components/BottomSheet';
import Button from 'components/Button';
import Input from 'components/Input';
import Txt from 'components/Txt';
import { useState } from 'react';

export default function Writing() {
  const router = useRouter();
  const [text, setText] = useState({
    title: '',
    question1: '',
    question2: '',
  });

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setText({ ...text, title });
  };
  const handleqQestion1 = (e: ChangeEvent<HTMLInputElement>) => {
    const question1 = e.target.value;
    setText({ ...text, question1 });
  };
  const handleqQestion2 = (e: ChangeEvent<HTMLInputElement>) => {
    const question2 = e.target.value;
    setText({ ...text, question2 });
  };

  return (
    <>
      <Spacing size={20} />
      <Txt size="medium">사람들에게 물어보세요</Txt>
      <Spacing size={12} />
      <Input placeholder="질문을 입력해주세요" onChange={handleTitle} />
      <Spacing size={32} />

      <Txt size="medium" colors="orange">
        이렇게 답변해 줄 거에요.
      </Txt>
      <Spacing size={12} />
      <Input type="primary" placeholder="질문1" onChange={handleqQestion1} />
      <Spacing size={12} />
      <Input type="primary" placeholder="질문2" onChange={handleqQestion2} />

      <BottomSheet>
        <Button
          type="primary"
          onClick={() => {
            router.push(Route.HOME());
          }}
          css={{ width: '100%', height: '48px', background: `${colors.orange}` }}
          isDisabled={text.title === '' || text.question1 === '' || text.question2 === ''}
        >
          올리기
        </Button>
      </BottomSheet>
    </>
  );
}
