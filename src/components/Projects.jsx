import React from 'react';
import { motion } from 'framer-motion';
import ProjectImg1 from '../assets/Project.jpg'
import ProjectImg2 from '../assets/Project2.jpg'
import ProjectImg3 from '../assets/Project3.jpg'
import ProjectImg4 from '../assets/Project4.jpg'
import ProjectImg5 from '../assets/Project5.jpg'
import ProjectImg6 from '../assets/Project6.jpg'

const projectsRow1 = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    mainImage: ProjectImg1,
  },
  {
    id: 2,
    title: 'SaaS Platform',
    mainImage: ProjectImg2,
  },
  {
    id: 3,
    title: 'Digital Agency',
    mainImage: ProjectImg3,
  }
];

const projectsRow2 = [
  {
    id: 4,
    title: 'E-commerce App',
    mainImage: ProjectImg4,
  },
  {
    id: 5,
    title: 'Health Tracker',
    mainImage: ProjectImg5,
  },
  {
    id: 6,
    title: 'Web3 Platform',
    mainImage: ProjectImg6,
  }
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  return (
    <div className="flex w-[200vw] overflow-hidden">
      <motion.div
        className="flex gap-6 md:gap-10 px-3 md:px-5 will-change-transform"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {/* Render 2 sets of items instead of 3 to reduce DOM nodes, sufficient for scrolling */}
        {[...items, ...items].map((project, idx) => (
          <div
            key={`${project.id}-${idx}`}
            className="relative w-[300px] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] rounded-3xl md:rounded-[3rem] overflow-hidden shrink-0 border border-white/5 shadow-xl transform-gpu"
          >
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[#030303] relative overflow-hidden min-h-screen flex flex-col justify-center transform-gpu">

      {/* Background Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Selected Works</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[0.9] tracking-tighter"
        >
          Visual <span className="text-white/20 italic font-serif font-light">Gallery.</span>
        </motion.h2>
      </div>

      {/* Diagonal Marquee Wrapper */}
      <div className="relative z-10 w-[120vw] left-1/2 -translate-x-1/2 -rotate-3 scale-105 flex flex-col gap-6 md:gap-10 transform-gpu pointer-events-none select-none">
        <MarqueeRow items={projectsRow1} direction="left" speed={40} />
        <MarqueeRow items={projectsRow2} direction="right" speed={45} />
      </div>

    </section>
  );
};

export default Projects;
