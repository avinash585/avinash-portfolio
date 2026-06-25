import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';
import { heroRoles } from '../data/portfolio';
import { resumeHref } from '../utils/assets';
import { scrollToSection } from '../utils/navigation';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const full = heroRoles[roleIndex];
    if (display.length < full.length) {
      const timer = window.setTimeout(() => setDisplay(full.slice(0, display.length + 1)), 68);
      return () => window.clearTimeout(timer);
    }
    const pause = window.setTimeout(() => {
      setDisplay('');
      setRoleIndex((current) => (current + 1) % heroRoles.length);
    }, 1450);
    return () => window.clearTimeout(pause);
  }, [display, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-scanline bg-[size:44px_44px] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.14),transparent_34%),linear-gradient(135deg,rgba(123,97,255,0.16),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-command-bg" />
      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-command-primary/30 bg-command-primary/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.22em] text-command-primary">
              <Rocket className="h-4 w-4" />
              Avinash A Portfolio
            </div>
            <h1 className="max-w-4xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              A Showcase of My
              Technical Journey,
              Projects, and Aspirations.
            </h1>
            <div className="mt-7 h-12 font-mono text-2xl text-command-primary sm:text-3xl">
              {display}
              <span className="ml-1 inline-block h-7 w-2 translate-y-1 animate-pulse bg-command-primary" />
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollToSection('projects')} className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-command-primary px-5 font-semibold text-command-bg transition hover:bg-white">
                View Projects <ArrowDown className="h-4 w-4" />
              </button>
              <a href={resumeHref} download className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 font-semibold text-white transition hover:border-command-primary/50">
                Download Resume <Download className="h-4 w-4" />
              </a>
              <button onClick={() => scrollToSection('contact')} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/10 px-5 font-semibold text-white transition hover:border-command-secondary/60 hover:bg-command-secondary/10">
                Contact Me <Mail className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-lg border border-white/10 bg-slate-950/72 p-5 shadow-violet backdrop-blur-xl">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <pre className="overflow-hidden font-mono text-sm leading-7 text-slate-300">
                <code>{`const avinash = {
  role: "Software Engineer",
  focus: ["Full Stack", "ServiceNow", "Automation"],
  college: "RMD Engineering College",
  cgpa: 8.04,
  mission: "Build portfolio projects that solve real problems",
};

buildPortfolio(avinash);`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
