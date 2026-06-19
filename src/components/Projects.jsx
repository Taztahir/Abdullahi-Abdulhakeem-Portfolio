import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import ProjectImg1 from '../assets/Project.jpg';
import ProjectImg2 from '../assets/Project2.jpg';
import ProjectImg3 from '../assets/Project3.jpg';
import ProjectImg4 from '../assets/Project4.jpg';
import ProjectImg5 from '../assets/Project5.jpg';
// import ProjectImg6 from '../assets/Project6.jpg';
import ProjectImg7 from '../assets/Portfolio1.png';
import ProjectImg8 from '../assets/Portfolio2.png';
import ProjectImg9 from '../assets/Portfolio3.jpeg';
import ProjectImg10 from '../assets/Portfolio4.png';
import ProjectImg11 from '../assets/Portfolio5.png';

/* ── All gallery images ──────────────────────────────────────────── */
const galleryImages = [
  { id: 1, src: ProjectImg7, alt: 'Ceddr Infrastructure' },
  { id: 2, src: ProjectImg8, alt: 'Lucem Maritime' },
  { id: 3, src: ProjectImg9, alt: 'Adave Studios' },
  { id: 4, src: ProjectImg10, alt: 'Tech on Demand' },
  { id: 5, src: ProjectImg1, alt: 'Project Design 1' },
  { id: 6, src: ProjectImg2, alt: 'Project Design 2' },
  { id: 7, src: ProjectImg3, alt: 'Project Design 3' },
  { id: 8, src: ProjectImg4, alt: 'Project Design 4' },
  { id: 9, src: ProjectImg5, alt: 'Project Design 5' },
  // { id: 10, src: ProjectImg6, alt: 'Project Design 6' },
  { id: 11, src: ProjectImg11, alt: 'Portfolio 5' },
];

/* Marquee rows use first 6 visual images */
const marqueeItems = galleryImages.slice(4);

/* ── Marquee row ─────────────────────────────────────────────────── */
const MarqueeRow = ({ items, direction = 'left', speed = 50 }) => (
  <div className="flex w-full overflow-hidden py-10">
    <motion.div
      className="flex gap-6 md:gap-8 will-change-transform"
      animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
      transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
    >
      {[...items, ...items, ...items].map((item, idx) => (
        <div
          key={`${item.id}-${idx}`}
          className="relative w-[350px] md:w-[800px] aspect-[14/9] max-md:aspect-[8/10] rounded-[1rem] md:rounded-[4rem] overflow-hidden shrink-0 border border-gray-100 dark:border-white/5 shadow-2xl"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

/* ── Lightbox ────────────────────────────────────────────────────── */
const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  /* keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, onClose]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        {/* Image container — stop propagation so clicking image doesn't close */}
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative max-w-5xl w-[90vw] max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />

          {/* Counter */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs font-semibold tracking-widest">
            {current + 1} / {images.length}
          </span>
        </motion.div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white flex items-center justify-center transition-all duration-300"
        >
          <X size={18} />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white flex items-center justify-center transition-all duration-300"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white flex items-center justify-center transition-all duration-300"
        >
          <ChevronRight size={22} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

/* ── Main section ────────────────────────────────────────────────── */
const Projects = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32 bg-white dark:bg-[#030303] relative overflow-hidden transition-colors duration-500"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" aria-hidden="true" />

      <div className="container mx-auto px-6 mb-24">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dashed border-primary/40 bg-primary/5 text-primary mb-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider">Portfolio Gallery</span>
            </motion.div>

            <motion.h2
              id="projects-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Selected <span className="text-primary">Works &amp; Projects</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-white/40 max-w-sm font-medium text-lg leading-relaxed"
          >
            A collection of digital products I've crafted for startups and enterprises in Nigeria and beyond.
          </motion.p>
        </div>

        {/* ── Gallery grid ── */}
        <ul
          role="list"
          aria-label="Portfolio images"
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {galleryImages.map((img, idx) => (
            <motion.li
              key={img.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => openLightbox(idx)}
                aria-label={`View ${img.alt}`}
                className="group relative w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#111111] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle zoom hint on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-500">
                  <div className="opacity-0 group-hover:opacity-100 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black transition-all duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* ── Scrolling Marquee ──
      <div className="border-t border-gray-100 dark:border-white/5 pt-10">
        <div className="container mx-auto px-6 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-4">
            Visual <span className="text-primary italic">Exploration.</span>
            <div className="h-[1px] flex-grow bg-gray-100 dark:bg-white/10" aria-hidden="true" />
          </h3>
        </div>
        <MarqueeRow items={marqueeItems} direction="left" speed={60} />
      </div> */}

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          startIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
};

export default Projects;
