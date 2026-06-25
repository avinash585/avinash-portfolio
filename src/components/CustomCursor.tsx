import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 500, damping: 38 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 38 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest('a, button, [role="button"], input')));
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-7 w-7 rounded-full border border-command-primary/70 mix-blend-screen md:block"
      style={{ x: smoothX, y: smoothY }}
      animate={{ scale: active ? 1.8 : 1, backgroundColor: active ? 'rgba(0,229,255,0.14)' : 'rgba(0,0,0,0)' }}
    />
  );
};
