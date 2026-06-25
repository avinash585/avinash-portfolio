import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  interactive?: boolean;
}

export const GlassCard = ({ className = '', interactive = true, children, ...props }: GlassCardProps) => (
  <motion.div
    whileHover={interactive ? { y: -6, rotateX: 2, rotateY: -2 } : undefined}
    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    className={[
      'group relative overflow-hidden rounded-lg border border-white/10 bg-command-panel p-5 shadow-glow backdrop-blur-xl',
      'before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(0,229,255,0.12),transparent_32%,rgba(123,97,255,0.12))] before:opacity-0 before:transition-opacity before:duration-300',
      interactive ? 'hover:border-command-primary/40 hover:before:opacity-100' : '',
      className,
    ].join(' ')}
    {...props}
  >
    <div className="relative z-10">{children}</div>
  </motion.div>
);
