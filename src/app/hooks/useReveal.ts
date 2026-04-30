import { useEffect } from 'react';

export function useReveal(selector = '.bw-reveal') {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }
      },
      { threshold: 0.14 }
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      for (const element of elements) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [selector]);
}
