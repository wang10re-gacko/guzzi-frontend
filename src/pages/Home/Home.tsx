import { Spacing } from '@toss/emotion-utils';
import { HTMLAttributes, useState } from 'react';
import styled from '@emotion/styled';
import { Route } from 'constants/Route';
import { useRouter } from 'next/router';
import { colors } from 'constants/colors';

import BottomSheet from 'components/BottomSheet';
import Heading from 'components/Heading';
import Button from 'components/Button';
import HomeBox from './components/HomeBox';
import Input from 'components/Input';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  writeId: number;
  time: string;
  contents: string;
  mine: boolean;
  btn1: string;
  btn2: string;
  clickCnt: number;
}

export default function Home() {
  const router = useRouter();

  const [HomeData, setHomeData] = useState([
    {
      writeId: 1,
      time: '방금 전',
      mine: false,
      contents: '워킹홀리데이 가는데 300을 가서 정착금으로 쓸까 합니다. 정착금 500이 나을까요?',
      btn1: '정착금 300',
      btn2: '정착금 500',
      clickCnt: 2,
    },
    {
      writeId: 2,
      time: '방금 전',
      mine: true,
      contents:
        '30대 청년전세대출 1.2금리 이용 간.ㅇ 공시가 하락 추세에 전세가도 많이 낮아졌는데 이김에 독립 vs 그래도 전세는 뭐가 됐던 위험하다. 월세만 알아보거나 독립 무조건 미루기.',
      btn1: '미루지말고 지금독립',
      btn2: '미룰때까지 미루기',
      clickCnt: 11,
    },
    {
      writeId: 3,
      time: '방금 전',
      mine: false,
      contents:
        '30대 청년전세대출 1.2금리 이용 간.ㅇ 공시가 하락 추세에 전세가도 많이 낮아졌는데 이김에 독립 vs 그래도 전세는 뭐가 됐던 위험하다. 월세만 알아보거나 독립 무조건 미루기.',
      btn1: '정착금 300',
      btn2: '정착금 500',
      clickCnt: 11,
    },
  ]);

  return (
    <>
      <Spacing size={20} />
      <Heading>자린고비 채팅방</Heading>
      <Spacing size={32} />

      {HomeData.map((data: Props) => {
        return <HomeBox key={data.writeId} {...data} />;
      })}

      <BottomSheet>
        <Button
          onClick={() => {
            router.push(Route.WRITING());
          }}
          css={{ width: '100%', height: '48px', backgroundColor: colors.grey400 }}
        >
          저 오늘 치킨 시켜먹어도 될까요?
        </Button>
      </BottomSheet>
    </>
  );
}
