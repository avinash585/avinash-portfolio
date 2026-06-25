import { BriefcaseBusiness } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { experiences } from '../data/portfolio';

export const Experience = () => (
  <Section id="experience" eyebrow="Experience Timeline" title="Applied Engineering Practice">
    <div className="relative ml-3 border-l border-command-primary/30 pl-7">
      {experiences.map((item) => (
        <GlassCard key={`${item.role}-${item.company}`} className="mb-6">
          <span className="absolute -left-[2.55rem] top-6 grid h-9 w-9 place-items-center rounded-full border border-command-primary/50 bg-command-bg text-command-primary">
            <BriefcaseBusiness className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-command-primary">{item.company}</p>
            </div>
            <p className="font-mono text-sm text-slate-400">{item.period}</p>
          </div>
          <ul className="mt-5 space-y-3 text-slate-300">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-command-secondary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      ))}
    </div>
  </Section>
);
