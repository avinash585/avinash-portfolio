import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { navItems } from '../data/portfolio';
import { scrollToSection } from '../utils/navigation';
import type { SectionId } from '../types';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export const CommandPalette = ({ open, onClose }: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const results = useMemo(
    () => navItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const select = (id: SectionId) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] bg-command-bg/70 px-4 pt-24 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="mx-auto max-w-xl overflow-hidden rounded-lg border border-white/10 bg-slate-950/90 shadow-violet"
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="h-5 w-5 text-command-primary" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Jump to a portfolio section"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => select(item.id)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm text-slate-200 transition hover:bg-white/8 hover:text-white"
                >
                  <span>{item.label}</span>
                  {item.shortcut ? <kbd className="rounded border border-white/10 px-2 py-1 font-mono text-xs">{item.shortcut}</kbd> : null}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
