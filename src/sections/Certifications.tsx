import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { certifications } from '../data/portfolio';

export const Certifications = () => (
  <Section id="certifications" eyebrow="Credential Layer" title="Verified Learning Signals">
    <div className="grid gap-5 md:grid-cols-3">
      {certifications.map((cert) => (
        <GlassCard key={cert.title} className="min-h-56">
          <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white/8 text-command-primary">
            <cert.icon className="h-7 w-7" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">{cert.issuer}</p>
          <h3 className="mt-3 text-xl font-semibold leading-7 text-white">{cert.title}</h3>
        </GlassCard>
      ))}
    </div>
  </Section>
);
