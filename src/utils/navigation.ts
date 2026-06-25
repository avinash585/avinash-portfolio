import type { SectionId } from '../types';

export const scrollToSection = (id: SectionId) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
