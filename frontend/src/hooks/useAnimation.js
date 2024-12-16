import { useEffect } from 'react';
import { useAnimation as useFramerAnimation } from 'framer-motion';

export const useAnimation = (inView, variants) => {
  const controls = useFramerAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return controls;
};