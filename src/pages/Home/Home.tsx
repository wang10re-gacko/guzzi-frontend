import { Spacing } from '@toss/emotion-utils';
import BottomSheet from 'components/BottomSheet';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Txt from 'components/Txt';
import useToaster from 'hooks/useToaster';
import useConfirm from 'hooks/useConfirm';

export default function Home() {
  const { successToast, errorToast } = useToaster();
  const { openConfirm } = useConfirm();

  return (
    <>
      <Heading>거지방</Heading>
      <BottomSheet>
        <Txt size="big">안녕</Txt>
        <Spacing size={24} />
        <Button
          onClick={async () => {
            const isConfirmed = await openConfirm({
              title: '진짜 인정합니까?',
              description: '인정하시는게 좋을걸요',
            });

            if (isConfirmed) {
              successToast('인정하셨습니다');
            } else {
              errorToast('인정하지 않으셨습니다');
            }
          }}
        >
          인정합니까?
        </Button>
        <Spacing size={12} />
        <Button onClick={() => successToast('잘가요~')}>잘가</Button>
      </BottomSheet>
    </>
  );
}
