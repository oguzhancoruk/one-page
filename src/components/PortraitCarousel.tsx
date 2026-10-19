import React, { useEffect, useRef, useState } from 'react';
import './PortraitCarousel.css';

export interface PortraitImage {
  id: string;
  src: string;
  alt: string;
  position: string;
  fit?: 'cover' | 'contain';
  type?: 'image' | 'video';
}

const CarouselVideo: React.FC<{ media: PortraitImage; active: boolean; reduceMotion: boolean; onEnded: () => void }> = ({ media, active, reduceMotion, onEnded }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (!active) {
      video.pause();
    } else if (!reduceMotion) {
      video.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
    }
    return () => video.pause();
  }, [active, reduceMotion]);
  return <>
    <video ref={ref} src={media.src} controls={active} muted playsInline preload={active ? 'metadata' : 'none'}
      tabIndex={active ? 0 : -1} aria-label={media.alt}
      style={{ objectFit: media.fit || 'cover', objectPosition: media.position }}
      onEnded={onEnded} onError={() => setFailed(true)} />
    {failed && active && <p className="portrait-carousel__video-error" role="status">Video oynatılamıyor. MP4 (H.264) veya WebM biçimini kullanın.</p>}
  </>;
};

const PortraitCarousel: React.FC<{ images: PortraitImage[] }> = ({ images: portraits }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(query.matches);
    updatePreference();
    query.addEventListener('change', updatePreference);
    return () => query.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (portraits[(activeIndex % portraits.length)]?.type === 'video' || portraits.length < 2 || isHovered || hasFocus || reducedMotion) return;

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveIndex((index) => (index + 1) % portraits.length);
      }
    }, 5000);
    return () => window.clearInterval(timer);
  }, [activeIndex, isHovered, hasFocus, reducedMotion, portraits]);

  useEffect(() => { setActiveIndex(0); }, [portraits]);

  const visibleIndex = portraits.length ? activeIndex % portraits.length : 0;

  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + portraits.length) % portraits.length);
  };

  if (!portraits.length) return null;

  return (
    <section
      className="portrait-carousel"
      aria-label="Aleyna Didem Aydın medya galerisi"
      aria-roledescription="medya galerisi"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasFocus(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.target instanceof HTMLVideoElement) return;
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          move(event.key === 'ArrowRight' ? 1 : -1);
        }
      }}
    >
      <div
        className="portrait-carousel__stack"
        onTouchStart={(event) => {
          if (event.target instanceof HTMLVideoElement) { touchStart.current = null; return; }
          touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const deltaX = event.changedTouches[0].clientX - start.x;
          const deltaY = event.changedTouches[0].clientY - start.y;
          if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
            move(deltaX < 0 ? 1 : -1);
          }
        }}
      >
        {portraits.map((portrait, index) => {
          const offset = (index - visibleIndex + portraits.length) % portraits.length;
          const placement = offset === 0 ? 'front'
            : offset === 1 ? 'right'
            : offset === portraits.length - 1 ? 'left'
            : 'hidden';
          return (
            <div
              key={portrait.id}
              className={`portrait-carousel__card portrait-carousel__card--${placement}${portrait.fit === 'contain' && portrait.type !== 'video' ? ' portrait-carousel__card--contain' : ''}${portrait.type === 'video' ? ' portrait-carousel__card--video' : ''}`}
              style={portrait.fit === 'contain' && portrait.type !== 'video' ? { backgroundImage: `url(${portrait.src})` } : undefined}
              aria-hidden={index !== visibleIndex}
            >
              {portrait.type === 'video' ? <CarouselVideo media={portrait} active={index === visibleIndex} reduceMotion={reducedMotion}
                onEnded={() => { if (!reducedMotion && !isHovered && !hasFocus && portraits.length > 1) move(1); }} /> : <img
                src={portrait.src}
                alt={portrait.alt}
                style={{ objectPosition: portrait.position, objectFit: portrait.fit }}
                width={400}
                height={500}
                decoding="async"
                draggable={false}
              />}
            </div>
          );
        })}
      </div>

      {portraits.length > 1 && <div className="portrait-carousel__controls">
        <button type="button" className="portrait-carousel__arrow" aria-label="Önceki medya" onClick={() => move(-1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
        </button>
        <div className="portrait-carousel__dots" aria-label="Medya seçimi">
          {portraits.map((portrait, index) => (
            <button
              key={portrait.id}
              type="button"
              className="portrait-carousel__dot"
              aria-label={`${index + 1}. medyayı göster`}
              aria-current={index === visibleIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button type="button" className="portrait-carousel__arrow" aria-label="Sonraki medya" onClick={() => move(1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
        </button>
      </div>}
    </section>
  );
};

export default PortraitCarousel;
