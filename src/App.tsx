import { useEffect, useState } from 'react';
import { AssistantWidget } from './components/AssistantWidget';
import { CommandPalette } from './components/CommandPalette';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { ScrollProgress } from './components/ScrollProgress';
import { navItems } from './data/portfolio';
import { About } from './sections/About';
import { Achievements } from './sections/Achievements';
import { Certifications } from './sections/Certifications';
import { ContactTerminal } from './sections/ContactTerminal';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { ServiceNowJourney } from './sections/ServiceNowJourney';
import { Skills } from './sections/Skills';
import { scrollToSection } from './utils/navigation';
import type { SectionId } from './types';

const shortcutMap: Record<string, SectionId> = {
  p: 'projects',
  s: 'skills',
  a: 'achievements',
  c: 'contact',
};

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest('input, textarea, [contenteditable="true"]'));
};

function App() {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen((open) => !open);
        return;
      }

      if (event.key === 'Escape') {
        setCommandOpen(false);
        return;
      }

      if (isTypingTarget(event.target)) return;
      const target = shortcutMap[event.key.toLowerCase()];
      if (target) scrollToSection(target);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-command-bg text-white selection:bg-command-primary selection:text-command-bg">
      <ScrollProgress />
      <CustomCursor />
      <Header onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <ServiceNowJourney />
        <ContactTerminal />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>Avinash A - Developer Command Center</p>
          <div className="flex flex-wrap justify-center gap-3">
            {navItems.slice(2, 6).map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="hover:text-command-primary">
                {item.shortcut ? `${item.shortcut} -> ` : ''}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
      <AssistantWidget />
    </div>
  );
}

export default App;
