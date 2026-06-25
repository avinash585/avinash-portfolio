import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import type { SectionId } from '../types';

interface SectionProps extends PropsWithChildren {
  id: SectionId;
  eyebrow: string;
  title: string;
  description?: string;
}

export const Section = ({ id, eyebrow, title, description, children }: SectionProps) => (
  <section id={id} className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 max-w-3xl"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-command-primary">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
        ) : null}
      </motion.div>
      {children}
    </div>
  </section>
);
