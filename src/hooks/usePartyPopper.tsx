import { Lottie } from '@toss/lottie';
import { useOverlay } from '@toss/use-overlay';

export default function usePartyPopper() {
  const overlay = useOverlay();

  const play = async () => {
    return new Promise<null>(resolve =>
      overlay.open(({ isOpen, close }) => {
        return (
          <>
            {isOpen ? (
              <Lottie
                src="https://static.toss.im/lotties-common/confetti-full-hero.json"
                onComplete={() => {
                  resolve(null);
                  close();
                }}
                css={{
                  position: 'fixed',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 200,
                  pointerEvents: 'none',
                }}
                alt=""
              />
            ) : null}
          </>
        );
      }),
    );
  };

  return { play };
}
