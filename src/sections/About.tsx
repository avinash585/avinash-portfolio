import { CalendarDays, GraduationCap, TrendingUp } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { profile } from '../data/portfolio';

export const About = () => (
  <Section id="about" eyebrow="Mission Brief" title="Engineering Useful, Scalable Systems" description={profile.summary}>
    <div className="grid gap-4 md:grid-cols-3">
      {[
        { label: 'CGPA', value: profile.cgpa, icon: TrendingUp },
        { label: 'Institution', value: profile.college, icon: GraduationCap },
        { label: 'Expected Graduation', value: profile.graduation, icon: CalendarDays },
      ].map((item) => (
        <GlassCard key={item.label}>
          <item.icon className="mb-5 h-7 w-7 text-command-primary" />
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
          <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
        </GlassCard>
      ))}
    </div>
  </Section>
);
