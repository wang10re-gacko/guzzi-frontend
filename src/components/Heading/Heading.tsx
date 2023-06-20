import { margin } from '@toss/emotion-utils';
import Txt from 'components/Txt';
import { ReactNode } from 'react';

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <Txt size="extra-big" as="h1" css={margin.y24}>
      {children}
    </Txt>
  );
}
