import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { skills } from '../data/portfolio';

export const Skills = () => (
  <Section id="skills" eyebrow="Skills Matrix" title="Interactive Technical Stack" description="Hover each capability node to reveal where it fits in Avinash's engineering toolkit.">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((skill, index) => (
        <GlassCard
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.035, duration: 0.45 }}
          className="min-h-36"
        >
          <div className="flex items-center justify-between">
            <Cpu className="h-5 w-5 text-command-primary" />
            <span className="rounded border border-white/10 px-2 py-1 font-mono text-xs text-slate-400">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">{skill.name}</h3>
          <motion.p className="mt-3 text-sm leading-6 text-slate-300 opacity-90 lg:opacity-0 lg:transition lg:group-hover:opacity-100">
            {skill.description}
          </motion.p>
        </GlassCard>
      ))}
    </div>
  </Section>
);
