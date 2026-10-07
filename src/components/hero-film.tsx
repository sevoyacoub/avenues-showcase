import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import film from '@/assets/angela-loop.mp4.asset.json';
import webm from '@/assets/angela-loop.webm.asset.json';
import poster from '@/assets/hero-poster.jpg';

function videoSource(element: HTMLVideoElement) {
  return element.canPlayType('video/webm; codecs="vp9"') ? webm.url : film.url;
}

export function HeroFilm() {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const element = video.current;
    if (!element) return;
    const update = () => {
      if (media.matches) {
        element.pause();
        setPaused(true);
      } else {
        if (!element.getAttribute('src')) element.src = videoSource(element);
        void element.play().then(() => setPaused(false)).catch(() => setPaused(true));
      }
    };
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const toggle = () => {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      if (!element.getAttribute('src')) element.src = videoSource(element);
      void element.play().then(() => setPaused(false)).catch(() => setPaused(true));
    } else {
      element.pause();
      setPaused(true);
    }
  };
  return <>
    <div className="hero-film" data-depth="0.24">
      <video ref={video} poster={poster} autoPlay muted loop playsInline preload="none" aria-hidden="true" />
    </div>
    <Button variant="film" size="icon" onClick={toggle} aria-label={paused ? 'Play background video' : 'Pause background video'} title={paused ? 'Play background video' : 'Pause background video'} className="film-control">
      {paused ? <Play /> : <Pause />}
    </Button>
  </>;
}