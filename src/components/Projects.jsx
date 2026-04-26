import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    description: 'A comprehensive financial dashboard allowing users to track expenses, manage investments, and analyze market trends in real-time with stunning data visualizations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Dashboard', 'Fintech', 'Data Viz']
  },
  {
    id: 2,
    title: 'E-commerce App',
    category: 'Mobile App',
    description: 'A premium mobile shopping experience featuring an intuitive checkout flow, AR product previews, and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tags: ['Mobile', 'eCommerce', 'UX Research']
  },
  {
    id: 3,
    title: 'SaaS Platform',
    category: 'Web Design',
    description: 'A complete overhaul of a B2B SaaS platform, focusing on streamlining complex workflows and creating a cohesive design system.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=2070&auto=format&fit=crop',
    tags: ['SaaS', 'Design System', 'B2B']
  },
  {
    id: 4,
    title: 'Health Tracker',
    category: 'Product Design',
    description: 'A holistic wellness application that syncs with wearables to provide actionable insights for physical and mental health.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    tags: ['Healthtech', 'Wearables', 'UI Design']
  }
];

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  
  // Create a slight parallax effect for the image inside the card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  // Calculate top offset for sticky stacking effect
  const stickyTop = `calc(10vh + ${index * 30}px)`;

  return (
    <div 
      ref={cardRef}
      className="sticky w-full h-[80vh] md:h-[70vh] flex items-center justify-center rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl origin-top"
      style={{ 
        top: stickyTop,
        backgroundColor: '#0A0A0A',
        zIndex: index + 1
      }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-black opacity-80" />
      
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
        
        {/* Left Info Section */}
        <div className="w-full md:w-[45%] h-full p-8 md:p-16 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">
                {project.category}
              </span>
              <span className="text-white/20 font-black text-4xl md:text-5xl">
                0{index + 1}
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              {project.title}
            </h3>
            
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a href="#" className="mt-8 md:mt-0 group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs w-max hover:bg-primary transition-colors">
            View Case Study 
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-black group-hover:text-primary transition-colors">
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
            </span>
          </a>
        </div>

        {/* Right Image Section with Parallax */}
        <div className="w-full md:w-[55%] h-full relative overflow-hidden hidden md:block">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 w-full h-[130%]"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Inner shadow for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent w-24" />
        </div>
        
        {/* Mobile Image (No parallax to save performance) */}
        <div className="w-full h-1/2 md:hidden relative overflow-hidden mt-auto">
           <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent h-24" />
        </div>

      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[#030303] relative">
      
      {/* Background Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
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
              Featured <span className="text-white/20 italic font-serif font-light">Projects.</span>
            </motion.h2>
          </div>
        </div>

        {/* Sticky Stack Container */}
        <div className="relative w-full pb-[10vh]">
          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                total={projects.length} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
