import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const testimonials = [
  {
    id: 1,
    name: 'Tunde Balogun',
    role: 'CEO, Lagos Tech Hub',
    content:
      "Abdullahi Abdulhakeem's eye for detail is unmatched. He completely rebranded our platform, making it the most intuitive fintech app in the Nigerian market today. A true professional!",
    avatar: avatar1,
    rating: 5.0,
  },
  {
    id: 2,
    name: 'Fatima Yusuf',
    role: 'Founder, Abuja Creative Studio',
    content:
      "Working with Abdullahi Abdulhakeem was a breeze. He took our complex ideas and turned them into a clean, minimalist design that our clients absolutely love. Highly recommended!",
    avatar: avatar2,
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Chidi Okafor',
    role: 'Product Manager, FinTech Solutions',
    content:
      "Abdullahi Abdulhakeem's ability to understand user needs and translate them into beautiful UI is incredible. He delivered well ahead of schedule and the results speak for themselves.",
    avatar: avatar3,
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Bisi Adeyemi',
    role: 'Head of Design, Kuda Bank',
    content:
      "Abdullahi Abdulhakeem is a rare talent. He doesn't just design; he solves problems. Our user engagement increased by 40% after implementing his design recommendations.",
    avatar: avatar2,
    rating: 5.0,
  },
];

const SLIDE_DURATION = 4000;

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] } },
  exit: (dir) => ({
    x: dir > 0 ? '-60%' : '60%',
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
  }),
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const total = testimonials.length;

  const go = useCallback(
    (next) => {
      setDirection(next > current ? 1 : -1);
      setCurrent((next + total) % total);
    },
    [current, total]
  );

  const prev = () => go(current - 1);
  const next = useCallback(() => go(current + 1), [current, go]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [current, paused, next]);

  const item = testimonials[current];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 bg-white dark:bg-[#030303] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Background watermark */}
      <div
        aria-hidden="true"
        className="absolute top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] z-0"
      >
        <span className="text-[12rem] font-black tracking-tighter uppercase leading-none whitespace-nowrap">
          CLIENT TESTIMONIALS
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 relative px-6 py-1"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Testimonials that <br />
            <span className="text-primary">Speak to My Results</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.article
                key={item.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 md:p-12 relative"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-primary rounded-r-full shadow-[0_0_20px_#A3E635]" />

                {/* Quote icon */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-primary">
                  <Quote size={20} fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#A3E635" className="text-primary" />
                  ))}
                  <span className="text-gray-600 dark:text-white/60 text-xs font-bold ml-2">
                    {item.rating.toFixed(1)}
                  </span>
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 dark:text-white/70 leading-relaxed text-lg mb-8 italic">
                  "{item.content}"
                </blockquote>

                {/* Author */}
                <footer className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <cite className="not-italic font-bold text-gray-900 dark:text-white block">
                      {item.name}
                    </cite>
                    <span className="text-gray-500 dark:text-white/40 text-sm">{item.role}</span>
                  </div>
                </footer>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111111] flex items-center justify-center text-gray-700 dark:text-white/60 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-primary'
                      : 'w-2 h-2 bg-gray-300 dark:bg-white/20 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111111] flex items-center justify-center text-gray-700 dark:text-white/60 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Progress bar */}
          {!paused && (
            <div className="mt-6 h-px bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden max-w-xs mx-auto">
              <motion.div
                key={current}
                className="h-full bg-primary rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
