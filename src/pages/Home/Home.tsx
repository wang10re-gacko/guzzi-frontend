import { Button } from '@chakra-ui/react';
import { Spacing } from '@toss/emotion-utils';
import BottomSheet from 'components/BottomSheet/BottomSheet';
import Heading from 'components/Heading';
import Txt from 'components/Txt';

export default function Home() {
  return (
    <>
      <Heading>거지방</Heading>
      <BottomSheet>
        <Txt size="big">안녕</Txt>
        <Spacing size={24} />
        <Button>잘가</Button>
      </BottomSheet>
    </>
  );
}
