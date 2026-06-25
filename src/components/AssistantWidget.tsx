import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { assistantKnowledge } from '../data/portfolio';

interface Message {
  from: 'user' | 'assistant';
  text: string;
}

const fallback =
  'I can answer about Avinash A\'s skills, projects, certifications, achievements, education, and ServiceNow journey.';

const answerQuestion = (question: string) => {
  const normalized = question.toLowerCase();
  const match = assistantKnowledge.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword)),
  );
  return match?.answer ?? fallback;
};

export const AssistantWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { from: 'assistant', text: 'Hi, I am Avinash\'s portfolio assistant. Ask me about projects, skills, certifications, or achievements.' },
  ]);

  const send = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((current) => [
      ...current,
      { from: 'user', text: trimmed },
      { from: 'assistant', text: answerQuestion(trimmed) },
    ]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="mb-4 w-[min(calc(100vw-2.5rem),24rem)] overflow-hidden rounded-lg border border-white/10 bg-slate-950/95 shadow-glow backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Bot className="h-5 w-5 text-command-primary" />
                AI Portfolio Assistant
              </div>
              <button onClick={() => setOpen(false)} className="rounded-md p-1 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Close assistant">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-80 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div key={`${message.from}-${index}`} className={`rounded-md px-3 py-2 text-sm leading-6 ${message.from === 'assistant' ? 'bg-white/8 text-slate-200' : 'ml-8 bg-command-primary text-command-bg'}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={send} className="flex gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Avinash..."
                className="min-w-0 flex-1 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-command-primary/50"
              />
              <button className="grid h-10 w-10 place-items-center rounded-md bg-command-primary text-command-bg" aria-label="Send message">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        onClick={() => setOpen((value) => !value)}
        className="grid h-14 w-14 place-items-center rounded-full border border-command-primary/40 bg-command-primary text-command-bg shadow-glow transition hover:bg-white"
        aria-label="Open portfolio assistant"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  );
};
