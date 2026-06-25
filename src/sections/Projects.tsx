import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, Plus } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { projects } from '../data/portfolio';

export const Projects = () => {
  const [open, setOpen] = useState<string | null>(projects[0].title);

  return (
    <Section id="projects" eyebrow="Projects Lab" title="Premium Build Showcase" description="A compact lab of AI and full-stack systems with recruiter-friendly technical signal.">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <GlassCard key={project.title} className="flex min-h-[25rem] flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.summary}</p>
              </div>
              <button
                onClick={() => setOpen(open === project.title ? null : project.title)}
                aria-expanded={open === project.title}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 text-command-primary transition hover:border-command-primary/60"
              >
                <Plus className={`h-5 w-5 transition ${open === project.title ? 'rotate-45' : ''}`} />
              </button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded border border-command-primary/25 bg-command-primary/10 px-3 py-1 font-mono text-xs text-command-primary">
                  {tech}
                </span>
              ))}
            </div>
            <AnimatePresence initial={false}>
              {open === project.title ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-7 space-y-3 text-slate-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-command-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>
            <div className="mt-auto flex gap-3 pt-8">
              <a href={project.github} className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-white/10 text-sm font-semibold text-white transition hover:border-command-primary/50">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={project.demo} className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-command-secondary text-sm font-semibold text-white transition hover:bg-command-primary hover:text-command-bg">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
