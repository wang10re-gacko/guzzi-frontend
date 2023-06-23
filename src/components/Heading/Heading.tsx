import { Stack, margin } from '@toss/emotion-utils';
import Txt from 'components/Txt';
import { ReactNode } from 'react';

export default function Heading({ children, rightAddon }: { children: ReactNode; rightAddon?: ReactNode }) {
  return (
    <Stack.Horizontal gutter={12} align="center" css={{ width: '100%' }}>
      <Txt size="extra-big" as="h1" css={margin.y24}>
        {children}
      </Txt>
      {rightAddon != null ? <div>{rightAddon}</div> : null}
    </Stack.Horizontal>
  );
}
