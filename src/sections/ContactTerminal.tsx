import { Check, Copy, Terminal } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { contactLinks } from '../data/portfolio';

export const ContactTerminal = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(value);
    window.setTimeout(() => setCopied(null), 1200);
  };

  return (
    <Section id="contact" eyebrow="Contact Terminal" title="Open A Channel">
      <GlassCard interactive={false} className="mx-auto max-w-4xl p-0">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
          <Terminal className="h-5 w-5 text-command-primary" />
          <span className="font-mono text-sm text-slate-300">visitor@avinash:~$ connect</span>
        </div>
        <div className="space-y-3 p-5 font-mono text-sm">
          {contactLinks.map((link) => (
            <div key={link.label} className="flex flex-col gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
              <a href={link.href} className="text-slate-200 transition hover:text-command-primary">
                <span className="text-command-secondary">{link.label.toLowerCase()}</span>: {link.value}
              </a>
              <button
                onClick={() => copy(link.value)}
                className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-white/10 px-3 text-xs text-slate-200 transition hover:border-command-primary/60"
              >
                {copied === link.value ? <Check className="h-4 w-4 text-command-primary" /> : <Copy className="h-4 w-4" />}
                {copied === link.value ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      </GlassCard>
    </Section>
  );
};
