import React, { useState, useEffect, useRef, useCallback, useReducer } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Fingerprint,
  PenTool,
  Package,
  Megaphone,
  Monitor,
  Smartphone,
  Printer,
  Share2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    title: 'Brand Identity',
    description:
      'Crafting cohesive visual identities — from logo systems and color palettes to typography and brand guidelines that speak to your audience.',
    icon: <Fingerprint size={28} />,
  },
  {
    title: 'Logo Design',
    description:
      'Designing distinctive, memorable logos that capture the essence of your brand and work flawlessly across every medium.',
    icon: <PenTool size={28} />,
  },
  {
    title: 'Packaging Design',
    description:
      'Creating eye-catching packaging that stands out on shelves, communicates your brand story, and elevates the unboxing experience.',
    icon: <Package size={28} />,
  },
  {
    title: 'Flyer Design',
    description:
      'Producing high-impact flyers and promotional materials that grab attention and drive your audience to take action.',
    icon: <Megaphone size={28} />,
  },
  {
    title: 'UI & Web Design',
    description:
      'Designing intuitive, pixel-perfect interfaces and websites that delight users and achieve your business goals.',
    icon: <Monitor size={28} />,
  },
  {
    title: 'Application Design',
    description:
      'Building seamless mobile and desktop app experiences through user research, wireframing, and polished UI design.',
    icon: <Smartphone size={28} />,
  },
  {
    title: 'Print Design',
    description:
      'Developing professional print materials — brochures, business cards, posters, and more — with precision and creative flair.',
    icon: <Printer size={28} />,
  },
  {
    title: 'Social Media Design',
    description:
      'Creating scroll-stopping social media graphics, templates, and content systems that keep your brand consistent and engaging.',
    icon: <Share2 size={28} />,
  },
];

/* ── helpers ── */
function getVisibleCount() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

const AUTOPLAY_DELAY = 4000;

const Services = () => {
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [isPaused, setIsPaused] = useState(false);
  const [dragDirection, setDragDirection] = useState(0);
  const timerRef = useRef(null);
  const trackRef = useRef(null);

  const total = services.length;
  const maxIndex = total - visibleCount;

  /* responsive visible count */
  useEffect(() => {
    const onResize = () => {
      const next = getVisibleCount();
      setVisibleCount(next);
      setActive((prev) => Math.min(prev, total - next));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [total]);

  /* autoplay */
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);
  }, [maxIndex]);

  useEffect(() => {
    if (!isPaused) startTimer();
    return () => clearInterval(timerRef.current);
  }, [isPaused, startTimer]);

  /* nav helpers */
  const goTo = (idx) => {
    setActive(Math.max(0, Math.min(idx, maxIndex)));
    startTimer();
  };
  const prev = () => { setDragDirection(-1); goTo(active - 1); };
  const next = () => { setDragDirection(1);  goTo(active + 1); };

  /* drag / swipe */
  const dragStart = useRef(null);
  const onDragStart = (e) => {
    dragStart.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const onDragEnd = (e) => {
    if (dragStart.current === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = dragStart.current - endX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    dragStart.current = null;
  };

  /* translate percentage */
  const pct = active * (100 / visibleCount);

  /* motion variants */
  const slideVariants = {
    hidden: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    visible: { x: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.45, ease: 'easeOut' } },
    exit:   (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0, transition: { duration: prefersReduced ? 0 : 0.3 } }),
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      aria-roledescription="carousel"
      className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6">

        {/* ── Section Header ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 relative inline-block px-6 py-1"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">
              My Specialization
            </span>
          </motion.div>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <span className="text-primary">Services</span> I Provide
          </motion.h2>
        </div>

        {/* ── Carousel Wrapper ── */}
        <div className="relative">

          {/* Track */}
          <div
            ref={trackRef}
            className="overflow-hidden"
            onMouseDown={onDragStart}
            onMouseUp={onDragEnd}
            onTouchStart={onDragStart}
            onTouchEnd={onDragEnd}
            aria-live="polite"
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${pct}%)`,
                transition: prefersReduced ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'transform',
              }}
            >
              {services.map((service, index) => (
                <article
                  key={service.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${total}: ${service.title}`}
                  aria-hidden={index < active || index >= active + visibleCount}
                  className="relative p-8 rounded-2xl bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-primary/30 transition-all duration-500 group overflow-hidden flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 8 / visibleCount}px)`, marginRight: index < total - 1 ? '8px' : '0' }}
                >
                  {/* Left Accent Line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-primary rounded-r-full shadow-[0_0_15px_#A3E635] group-hover:h-24 transition-all duration-500" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-[#1A1A1A] flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-lg border border-black/5 dark:border-none">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm font-medium">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* ── Prev Arrow ── */}
          <button
            onClick={prev}
            disabled={active === 0}
            aria-label="Previous service"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-lg hover:bg-primary hover:text-black hover:border-primary disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
            style={{ transition: prefersReduced ? 'none' : undefined }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* ── Next Arrow ── */}
          <button
            onClick={next}
            disabled={active >= maxIndex}
            aria-label="Next service"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-lg hover:bg-primary hover:text-black hover:border-primary disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
            style={{ transition: prefersReduced ? 'none' : undefined }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* ── Dot Indicators ── */}
        <div
          role="tablist"
          aria-label="Service slides"
          className="flex items-center justify-center gap-2 mt-10"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary transition-all duration-300"
              style={{
                width: active === i ? '2rem' : '0.5rem',
                background: active === i ? 'var(--color-primary, #A3E635)' : undefined,
                transition: prefersReduced ? 'none' : 'all 0.3s ease',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
