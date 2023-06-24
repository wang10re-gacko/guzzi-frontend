import { Spacing } from '@toss/emotion-utils';
import BottomSheet from 'components/BottomSheet';
import Button from 'components/Button';
import Heading from 'components/Heading';
import useToaster from 'hooks/useToaster';
import useConfirm from 'hooks/useConfirm';
import Input from 'components/Input';

export default function Example() {
  const { successToast, errorToast } = useToaster();
  const { openConfirm } = useConfirm();

  return (
    <>
      <Spacing size={12} />
      <img src="https://static.toss.im/3d-emojis/u1F4B8-apng.png" alt="" draggable={false} width="80px" />
      <Heading>나, 돈 써도 돼요? 되겠냐</Heading>

      <Input placeholder="질문을 입력해주세요" />

      <Spacing size={40} />
      <Button onClick={() => successToast('잘가요~')}>토스트 테스트</Button>
      <Spacing size={20} />
      <Button onClick={() => successToast('잘가요~')} isLoading={true}>
        로딩 UI
      </Button>

      <BottomSheet>
        <Button
          type="primary"
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
          컨펌 테스트
        </Button>
        <Spacing size={12} />
        <Button onClick={() => successToast('잘가요~')}>토스트 테스트</Button>
      </BottomSheet>
    </>
  );
}
