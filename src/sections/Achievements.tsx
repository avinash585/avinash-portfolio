import { motion } from 'framer-motion';
import { LockKeyholeOpen, Trophy } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { achievements } from '../data/portfolio';

export const Achievements = () => (
  <Section id="achievements" eyebrow="Achievement Vault" title="Unlocked Competitive Wins">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {achievements.map((achievement, index) => (
        <GlassCard key={achievement.title}>
          <motion.div
            initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 220, damping: 16 }}
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-command-primary/30 bg-command-primary/10 text-command-primary"
          >
            {index === 0 ? <LockKeyholeOpen className="h-7 w-7" /> : <Trophy className="h-7 w-7" />}
          </motion.div>
          <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{achievement.subtitle}</p>
        </GlassCard>
      ))}
    </div>
  </Section>
);
