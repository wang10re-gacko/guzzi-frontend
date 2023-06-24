import { HTMLAttributes } from 'react';
import { Spacing } from '@toss/emotion-utils';
import { Route } from 'constants/Route';
import { useRouter } from 'next/router';
import BottomSheet from 'components/BottomSheet';
import Button from 'components/Button';
import Heading from 'components/Heading';
import HomeBox from './components/HomeBox';

const HomeData = [
  {
    writeId: 1,
    time: '방금 전',
    mine: false,
    title: '워킹홀리데이 가는데 300을 가서 정착금으로 쓸까 합니다. 정착금 500이 나을까요?',
    btn1: '정착금 300',
    btn2: '정착금 500',
    clickCnt: 2,
  },
  {
    writeId: 2,
    time: '방금 전',
    mine: true,
    title:
      '30대 청년전세대출 1.2금리 이용 간.ㅇ 공시가 하락 추세에 전세가도 많이 낮아졌는데 이김에 독립 vs 그래도 전세는 뭐가 됐던 위험하다. 월세만 알아보거나 독립 무조건 미루기.',
    btn1: '미루지말고 지금독립',
    btn2: '미룰때까지 미루기',
    clickCnt: 11,
  },
  {
    writeId: 3,
    time: '방금 전',
    mine: false,
    title:
      '30대 청년전세대출 1.2금리 이용 간.ㅇ 공시가 하락 추세에 전세가도 많이 낮아졌는데 이김에 독립 vs 그래도 전세는 뭐가 됐던 위험하다. 월세만 알아보거나 독립 무조건 미루기.',
    btn1: '정착금 300',
    btn2: '정착금 500',
    clickCnt: 11,
  },
];

interface Props extends HTMLAttributes<HTMLSpanElement> {
  writeId: number;
  time: string;
  title: string;
  mine: boolean;
  btn1: string;
  btn2: string;
  clickCnt: number;
}

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Spacing size={12} />
      <Heading>자린고비 채팅방</Heading>
      <Spacing size={32} />

      {HomeData.map((home: Props) => {
        return <HomeBox key={home.writeId} {...home} />;
      })}

      <BottomSheet>
        <Button
          type="primary"
          onClick={async () => {
            router.push(Route.WRITING());
          }}
        >
          컨펌 테스트
        </Button>
      </BottomSheet>
    </>
  );
}
