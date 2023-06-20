import { ReactNode } from 'react';

function Grid({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div css={{ padding: '0 16px' }} className={className}>
      {children}
    </div>
  );
}

export default Grid;
