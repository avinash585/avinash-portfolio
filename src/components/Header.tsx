import { Command, Download } from 'lucide-react';
import { navItems } from '../data/portfolio';
import { resumeHref } from '../utils/assets';
import { scrollToSection } from '../utils/navigation';

interface HeaderProps {
  onOpenCommand: () => void;
}

export const Header = ({ onOpenCommand }: HeaderProps) => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-command-bg/72 backdrop-blur-xl">
    <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
      <button
        onClick={() => scrollToSection('home')}
        className="group flex items-center gap-3 rounded-md"
        aria-label="Go to home"
      >
        <span className="grid h-9 w-9 place-items-center rounded-md border border-command-primary/40 bg-command-primary/10 font-mono text-sm font-bold text-command-primary shadow-glow transition group-hover:bg-command-primary group-hover:text-command-bg">
          AA
        </span>
        <span className="flex flex-col items-start leading-none">
          <span className="text-sm font-semibold text-white">Avinash A</span>
          <span className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-command-primary">
            Portfolio
          </span>
        </span>
      </button>
      <div className="hidden items-center gap-1 lg:flex">
        {navItems.slice(1, 8).map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenCommand}
          className="inline-flex h-10 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-200 transition hover:border-command-primary/50 hover:text-white"
        >
          <Command className="h-4 w-4" />
          <span className="hidden sm:inline">Ctrl K</span>
        </button>
        <a
          href={resumeHref}
          download
          className="inline-flex h-10 items-center gap-2 rounded-md bg-command-primary px-3 text-sm font-semibold text-command-bg transition hover:bg-white"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </div>
    </nav>
  </header>
);
