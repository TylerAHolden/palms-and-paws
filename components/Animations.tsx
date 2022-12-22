import { useEffect, useRef, useState } from 'react';

import type { LottiePlayer } from 'lottie-web';

type Props = {
  path: string;
  className?: string;
};

export const Animation: React.FC<Props> = ({ path, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path,
      });

      return () => animation.destroy();
    }
  }, [lottie, path]);

  return <div className={className} ref={ref} />;
};
