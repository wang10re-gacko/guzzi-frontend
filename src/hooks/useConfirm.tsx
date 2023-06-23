import { useOverlay } from '@toss/use-overlay';
import Confirm from 'components/Confirm';
import { ReactNode } from 'react';

interface ConfirmProps {
  title: ReactNode;
  description?: ReactNode;
}

export default function useConfirm() {
  const overlay = useOverlay();

  const openConfirm = ({ title, description }: ConfirmProps) =>
    new Promise<boolean>(resolve =>
      overlay.open(({ isOpen, close }) => (
        <Confirm
          title={title}
          description={description}
          isOpen={isOpen}
          onConfirm={() => {
            resolve(true);
            close();
          }}
          onCancel={() => {
            resolve(false);
            close();
          }}
        />
      )),
    );

  return { openConfirm };
}
