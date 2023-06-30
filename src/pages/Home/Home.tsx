import { Spacing } from '@toss/emotion-utils';
import { Route } from 'constants/Route';
import { colors } from 'constants/colors';
import { useRouter } from 'next/router';
import BottomSheet from 'components/BottomSheet';
import Input from 'components/Input';
import Heading from 'components/Heading';
import VoteBox from './components/VoteBox';
import { Vote } from 'models/vote';

const HomeData = [
  {
    writeId: 1,
    time: '방금 전',
    mine: false,
    title: '워킹홀리데이 가는데 300을 가서 정착금으로 쓸까 합니다. 정착금 500이 나을까요?',
    question1: '정착금 300',
    question2: '정착금 500',
    clickCnt: 2,
    myClick: 1,
  },
  {
    writeId: 2,
    time: '방금 전',
    mine: true,
    title:
      '30대 청년전세대출 1.2금리 이용 간.ㅇ 공시가 하락 추세에 전세가도 많이 낮아졌는데 이김에 독립 vs 그래도 전세는 뭐가 됐던 위험하다. 월세만 알아보거나 독립 무조건 미루기.',
    question1: '미루지말고 지금독립',
    question2: '미룰때까지 미루기',
    clickCnt: 11,
    myClick: 0,
  },
  {
    writeId: 3,
    time: '방금 전',
    mine: false,
    title:
      '30대 청년전세대출 1.2금리 이용 간.ㅇ 공시가 하락 추세에 전세가도 많이 낮아졌는데 이김에 독립 vs 그래도 전세는 뭐가 됐던 위험하다. 월세만 알아보거나 독립 무조건 미루기.',
    question1: '정착금 300',
    question2: '정착금 500',
    clickCnt: 11,
    myClick: -1,
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Spacing size={12} />
      <Heading>자린고비 채팅방</Heading>
      <Spacing size={32} />

      {HomeData.map((home: Vote) => {
        return <VoteBox key={home.writeId} {...home} />;
      })}

      <BottomSheet>
        <Input
          onClick={async () => {
            router.push(Route.WRITING());
          }}
          type="primary"
          placeholder="저 오늘 치킨 시켜먹어도 될까요?"
          css={{ width: '100%', height: '48px', background: `${colors.grey400}` }}
        />
      </BottomSheet>
    </>
  );
}
