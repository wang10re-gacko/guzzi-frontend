import { Spacing } from '@toss/emotion-utils';
import BottomSheet from 'components/BottomSheet';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Txt from 'components/Txt';
import useToaster from 'hooks/useToaster';

export default function Home() {
  const { successToast } = useToaster();
  return (
    <>
      <Heading>거지방</Heading>
      <BottomSheet>
        <Txt size="big">안녕</Txt>
        <Spacing size={24} />
        <Button onClick={() => successToast('잘가요~')}>잘가</Button>
      </BottomSheet>
    </>
  );
}
