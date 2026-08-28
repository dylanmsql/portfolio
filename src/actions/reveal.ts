export const reveal = (node: HTMLElement) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('revealed');
        observer.unobserve(node);
      }
    },
    { threshold: 0.15 },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
};
