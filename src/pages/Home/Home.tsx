import { Spacing } from '@toss/emotion-utils';
import { Route } from 'constants/Route';
import { colors } from 'constants/colors';
import { useRouter } from 'next/router';
import BottomSheet from 'components/BottomSheet';
import Input from 'components/Input';
import Heading from 'components/Heading';
import VoteItem from './components/VoteBox';
import { useState } from 'react';
import { useSuspendedQuery } from '@toss/react-query';
import { getVoteList } from 'remotes/getVoteList';
import SSRSuspense from 'pages/App/components/SSRSuspense';

export default function HomePage() {
  return (
    <SSRSuspense fallback={null}>
      <SuspendedHomePage />
    </SSRSuspense>
  );
}

function SuspendedHomePage() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const {
    data: { voteList },
  } = useSuspendedQuery(['getVoteList', page], () => getVoteList({ page }));

  return (
    <>
      <Spacing size={12} />
      <Heading>자린고비 채팅방</Heading>
      <Spacing size={32} />
      {/* {HomeData.map((home: Vote) => {
        return <VoteBox key={home.writeId} {...home} />;
      })} */}
      {voteList.map(vote => (
        <VoteItem key={vote.VOTE_ID} vote={vote} />
      ))}
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
