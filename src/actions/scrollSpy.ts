import type { NavItem } from '../utils/type';

export type ScrollSpyOptions = {
  sections: NavItem[];
};

const getVisibleHeight = (element: HTMLElement): number => {
  const rect = element.getBoundingClientRect();
  return Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
};

export const scrollSpy = (node: HTMLElement, { sections }: ScrollSpyOptions) => {
  let activeSection = '';

  const handleScroll = () => {
    let maxVisibleHeight = 0;
    let mostVisibleSection: HTMLElement | null = null;

    const sectionsDom: HTMLElement[] = sections.map(
      (section) => document.getElementById(section.id) as HTMLElement,
    );

    for (const section of sectionsDom) {
      const visibleHeight = getVisibleHeight(section);

      if (visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        mostVisibleSection = section;
      }
    }

    if (mostVisibleSection && activeSection !== mostVisibleSection.id) {
      activeSection = mostVisibleSection.id;

      sections.forEach((section) => {
        const link = node.querySelector(`a[href="#${section.id}"]`);
        if (link) {
          link.classList.toggle('active', section.id === activeSection);
        }
      });
    }
  };

  // Listen to scroll events
  window.addEventListener('scroll', handleScroll);

  return {
    destroy() {
      window.removeEventListener('scroll', handleScroll);
    },
  };
};
