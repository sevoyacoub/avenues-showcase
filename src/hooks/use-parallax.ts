import { useEffect, useRef } from 'react';

export function useParallax() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const layers = Array.from(node.querySelectorAll<HTMLElement>('[data-depth]'));
    let frame = 0;
    let current = window.scrollY;
    let target = current;
    const render = () => {
      current += (target - current) * 0.12;
      const distance = Math.min(current, node.offsetHeight);
      for (const layer of layers) {
        layer.style.transform = `translate3d(0,${distance * Number(layer.dataset['depth'])}px,0)`;
      }
      frame = Math.abs(target - current) > 0.1 ? requestAnimationFrame(render) : 0;
    };
    const scroll = () => {
      if (media.matches) return;
      target = window.scrollY;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const preference = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      for (const layer of layers) layer.style.transform = '';
      if (!media.matches) scroll();
    };
    window.addEventListener('scroll', scroll, { passive: true });
    media.addEventListener('change', preference);
    scroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scroll);
      media.removeEventListener('change', preference);
    };
  }, []);
  return root;
}