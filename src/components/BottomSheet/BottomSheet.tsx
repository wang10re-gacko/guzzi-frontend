import { ComponentProps, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { Flex, Spacing } from '@toss/emotion-utils';
import { colors } from 'constants/colors';
import { Portal } from '@chakra-ui/react';
import { useResizeObserver } from '@toss/react';

const BOTTOM_SHEET_ANTI_INTERSECTING_SPARE_SPACE = 12;

interface Props extends ComponentProps<typeof Flex> {
  children?: ReactNode;
  takeSpace?: boolean;
}

export default function BottomSheet({ children, takeSpace = true, ...props }: Props) {
  const [bottomSheetHeight, setBottomSheetHeight] = useState(0);

  const ref = useResizeObserver<HTMLDivElement>(entry => {
    if (!takeSpace) {
      return;
    }

    const { height, y } = entry.contentRect;
    const bottomSheetBoundingRectHeight = height + 2 * y;

    setBottomSheetHeight(bottomSheetBoundingRectHeight + BOTTOM_SHEET_ANTI_INTERSECTING_SPARE_SPACE);
  });

  return (
    <>
      <Portal>
        <Container ref={ref} {...props}>
          {children}
        </Container>
      </Portal>
      {takeSpace ? <Spacing size={bottomSheetHeight} /> : null}
    </>
  );
}

const Container = styled(Flex)`
  position: fixed;
  bottom: 0;
  flex-direction: column;
  width: 100%;
  max-width: 820px;
  padding: 24px 16px;
  border-radius: 16px 16px 0px 0px;
  background-color: ${colors.grey500};
  z-index: 100;
`;
