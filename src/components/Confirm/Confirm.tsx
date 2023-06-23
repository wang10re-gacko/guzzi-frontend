import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
} from '@chakra-ui/react';
import { margin } from '@toss/emotion-utils';
import { colors } from 'constants/colors';
import React, { ReactNode, useRef } from 'react';

type Props = {
  title?: ReactNode;
  description?: ReactNode;
  confirmButtonText?: string;
  onConfirm: () => void;
  cancelButtonText?: string;
  onCancel: () => void;
  isOpen: boolean;
};

// NOTE: useConfirm을 사용하기 위해 만들어진 컴포넌트입니다. useConfirm을 사용하세요.
export default function Confirm({
  title,
  description,
  confirmButtonText = '확인',
  cancelButtonText = '취소',
  isOpen,
  onConfirm,
  onCancel,
}: Props) {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={() => {}}
      isCentered={true}
      closeOnEsc={true}
      portalProps={{}}
    >
      <AlertDialogContent backgroundColor={colors.grey400} color={colors.white} css={margin.x16}>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {title}
        </AlertDialogHeader>
        <AlertDialogBody>{description}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} bgColor={colors.grey100} onClick={onCancel}>
            {cancelButtonText}
          </Button>
          <Button backgroundColor={colors.orange} color={colors.white} ml={3} onClick={onConfirm}>
            {confirmButtonText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
