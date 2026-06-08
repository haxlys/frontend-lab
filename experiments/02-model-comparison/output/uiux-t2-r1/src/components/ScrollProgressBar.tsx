import { useEffect, useState } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function ScrollProgressBar() {
  const progress = useScrollProgress();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(progress > 0.01);
  }, [progress]);

  return (
    <div
      aria-hidden="true"
      className={[
        'fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-neon-violet via-neon-blue to-neon-green',
        'transition-opacity duration-500',
        visible ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
